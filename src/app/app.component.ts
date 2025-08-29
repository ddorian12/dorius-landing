import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerEarlyAccessComponent } from './seller-early-access/seller-early-access.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SellerEarlyAccessComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  // private countdownInterval: any; // ⬅️ countdown dezactivat

  @ViewChild('heroSection') heroSection!: ElementRef<HTMLElement>;
  @ViewChild('formSection') formSection!: ElementRef<HTMLElement>;

  formVisible = false;
  arrowVisible = true;

  private ioHero?: IntersectionObserver;
  private ioForm?: IntersectionObserver;

  ngAfterViewInit(): void {
    // this.startCountdown(); // ⬅️ countdown dezactivat
    this.observeHero();

    if (window.location.hash === '#inscrieri') {
      this.formVisible = true;
      setTimeout(() => {
        this.observeForm();
        this.formSection?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    }
  }

  ngOnDestroy(): void {
    // if (this.countdownInterval) clearInterval(this.countdownInterval); // ⬅️ countdown dezactivat
    this.ioHero?.disconnect();
    this.ioForm?.disconnect();
  }

  /* Countdown păstrat comentat pentru viitor
  // -------- countdown
  startCountdown(){
    const launchDate = new Date('2025-08-31T00:00:00').getTime();
    this.countdownInterval = setInterval(() => {
      const now = Date.now();
      const distance = launchDate - now;

      const days = Math.floor(distance / (1000*60*60*24));
      const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
      const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
      const seconds = Math.floor((distance % (1000*60)) / 1000);
      this.update('days', days); this.update('hours', hours);
      this.update('minutes', minutes); this.update('seconds', seconds);

      if (distance < 0) {
        clearInterval(this.countdownInterval);
        ['days','hours','minutes','seconds'].forEach(i=>this.update(i,0));
      }
    }, 1000);
  }
  private update(id:string, value:number){
    const el = document.getElementById(id); if (el) el.textContent = value.toString().padStart(2,'0');
  }
  */

  // -------- scroll comportament + hash
  scrollToForm(){
    if (!this.formVisible) {
      this.formVisible = true;
      setTimeout(() => {
        this.observeForm();
        this.formSection?.nativeElement.scrollIntoView({behavior:'smooth', block:'start'});
        this.pushInscrieriHash();
      }, 0);
    } else {
      this.formSection?.nativeElement.scrollIntoView({behavior:'smooth', block:'start'});
      this.pushInscrieriHash();
    }
  }

  private pushInscrieriHash(){
    const url = new URL(window.location.href);
    url.hash = 'inscrieri';
    history.pushState(null, '', url.toString());
  }
  private clearHashReplace(){
    const url = new URL(window.location.href);
    url.hash = '';
    history.replaceState(null, '', url.toString());
  }

  // -------- IntersectionObservers
  private observeHero(){
    if (!this.heroSection) return;
    this.ioHero = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting && e.intersectionRatio >= 0.6) {
          this.arrowVisible = true;
          this.clearHashReplace();
        } else {
          this.arrowVisible = false;
        }
      },
      { threshold: [0, 0.6, 1] }
    );
    this.ioHero.observe(this.heroSection.nativeElement);
  }

  private observeForm(){
    if (!this.formSection) return;
    if (this.ioForm) return;
    this.ioForm = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting && e.intersectionRatio >= 0.6) {
          const url = new URL(window.location.href);
          if (url.hash !== '#inscrieri') {
            url.hash = 'inscrieri';
            history.replaceState(null, '', url.toString());
          }
        }
      },
      { threshold: [0, 0.6, 1] }
    );
    this.ioForm.observe(this.formSection.nativeElement);
  }
}
