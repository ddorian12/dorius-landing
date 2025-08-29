import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerEarlyAccessComponent } from './seller-early-access/seller-early-access.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SellerEarlyAccessComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroSection') heroSection!: ElementRef<HTMLElement>;
  @ViewChild('formSection') formSection!: ElementRef<HTMLElement>;

  formVisible = false;

  hideStickyBar = false;
  private formInView = false;
  private formSubmitted = false;

  private ioHero?: IntersectionObserver;
  private ioForm?: IntersectionObserver;

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.observeHero();

    // ✅ deschidere directă #inscrieri
    if (window.location.hash === '#inscrieri') {
      setTimeout(() => {
        this.formVisible = true;
        this.cdr.detectChanges();
        this.observeForm();
        this.formSection?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    }
  }

  ngOnDestroy(): void {
    this.ioHero?.disconnect();
    this.ioForm?.disconnect();
  }

  // -------- scroll + hash
  scrollToForm() {
    if (!this.formVisible) {
      this.formVisible = true;
      setTimeout(() => {
        this.cdr.detectChanges();
        this.observeForm();
        this.formSection?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.pushInscrieriHash();
      }, 0);
    } else {
      this.formSection?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.pushInscrieriHash();
    }
  }

  private pushInscrieriHash() {
    const url = new URL(window.location.href);
    url.hash = 'inscrieri';
    history.pushState(null, '', url.toString());
  }
  private clearHashReplace() {
    const url = new URL(window.location.href);
    url.hash = '';
    history.replaceState(null, '', url.toString());
  }

  // -------- IntersectionObservers
  private observeHero() {
    if (!this.heroSection) return;

    this.ioHero = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        this.ngZone.run(() => {
          if (e.isIntersecting && e.intersectionRatio >= 0.6) {
            this.clearHashReplace();
            // când suntem înapoi pe hero și n-am trimis, sticky poate reapărea
            this.formInView = false;
            this.updateSticky();
          }
        });
      },
      { threshold: [0, 0.6, 1] }
    );
    this.ioHero.observe(this.heroSection.nativeElement);
  }

  private observeForm() {
    if (!this.formSection || this.ioForm) return;

    this.ioForm = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        this.ngZone.run(() => {
          this.formInView = !!e.isIntersecting && e.intersectionRatio >= 0.2;
          if (this.formInView) {
            const url = new URL(window.location.href);
            if (url.hash !== '#inscrieri') {
              url.hash = 'inscrieri';
              history.replaceState(null, '', url.toString());
            }
          }
          this.updateSticky();
        });
      },
      { threshold: [0, 0.2, 0.6, 1] }
    );
    this.ioForm.observe(this.formSection.nativeElement);
  }

  // 👇 primește evenimentul de submit din copil
  onFormSubmitted(val: boolean) {
    this.formSubmitted = !!val;
    this.updateSticky();
  }

  private updateSticky() {
    // ascunde dacă formularul e în viewport SAU după submit (ecran „Mulțumim!”)
    this.hideStickyBar = this.formInView || this.formSubmitted;
    this.cdr.markForCheck();
  }
}
