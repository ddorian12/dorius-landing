import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { finalize, takeUntil, filter } from 'rxjs/operators';
import { SellerEarlyAccessService } from '../seller-early-access.service';
import { RouterLink, Router, NavigationStart } from '@angular/router';

type ProductScope = 'Digital' | 'Physical' | 'Both';
type Readiness = 'now' | 'later';
type Fulfillment = 'own' | 'pod' | 'reseller' | 'dropshipping';

interface FormShape {
  email: FormControl<string>;
  brandName: FormControl<string>;
  productScope: FormControl<ProductScope>;
  productTypes: FormControl<string>;
  website: FormControl<string>;
  legalStatus: FormControl<string>;
  acceptTerms: FormControl<boolean>;
  company: FormControl<string>; // honeypot

  contactName: FormControl<string>;
  city: FormControl<string>;
  country: FormControl<string>;
  currentChannels: FormControl<string[]>;
  readiness: FormControl<Readiness>;

  instagram: FormControl<string>;
  tiktok: FormControl<string>;
  estOrdersPerMonth: FormControl<string>;
  fulfillment: FormControl<Fulfillment | ''>;
  hasIPRights: FormControl<boolean>;
  referral: FormControl<string>;
  marketingOptIn: FormControl<boolean>;
}

@Component({
  selector: 'app-seller-early-access',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './seller-early-access.component.html',
  styleUrls: ['./seller-early-access.component.scss']
})
export class SellerEarlyAccessComponent implements OnDestroy {
  @Output() submittedChange = new EventEmitter<boolean>();

  showTerms = false;
  showFees = false;

  submitting = false;
  submitted = false;
  errorMsg = '';

  private destroy$ = new Subject<void>();

  form: FormGroup<FormShape> = this.fb.group<FormShape>({
    email: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.email, Validators.maxLength(120)] }),
    brandName: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.maxLength(40)] }),
    productScope: this.fb.nonNullable.control<ProductScope>('Digital', { validators: [Validators.required] }),
    productTypes: this.fb.nonNullable.control('', { validators: [Validators.maxLength(120)] }),
    website: this.fb.nonNullable.control('', { validators: [Validators.maxLength(200)] }),
    legalStatus: this.fb.nonNullable.control('', { validators: [Validators.required] }),
    acceptTerms: this.fb.nonNullable.control(false, { validators: [Validators.requiredTrue] }),
    company: this.fb.nonNullable.control(''),

    contactName: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.maxLength(60)] }),
    city:        this.fb.nonNullable.control('', { validators: [Validators.required, Validators.maxLength(60)] }),
    country:     this.fb.nonNullable.control('RO', { validators: [Validators.required] }),
    currentChannels: this.fb.nonNullable.control<string[]>([]),
    readiness:   this.fb.nonNullable.control<Readiness>('now', { validators: [Validators.required] }),

    instagram: this.fb.nonNullable.control('', { validators: [Validators.maxLength(120)] }),
    tiktok: this.fb.nonNullable.control('', { validators: [Validators.maxLength(120)] }),
    estOrdersPerMonth: this.fb.nonNullable.control(''),
    fulfillment: this.fb.nonNullable.control<Fulfillment | ''>(''),
    hasIPRights: this.fb.nonNullable.control(false),
    referral: this.fb.nonNullable.control(''),
    marketingOptIn: this.fb.nonNullable.control(false),
  });

  productScopeOptions = [
    { label: 'Produse digitale', value: 'Digital' as ProductScope },
    { label: 'Produse fizice',  value: 'Physical' as ProductScope },
    { label: 'Digitale și fizice', value: 'Both' as ProductScope }
  ];

  legalStatusOptions = [
    { label: 'PFA / II / IF (persoană fizică autorizată)', value: 'pfa' },
    { label: 'SRL / SA (societate comercială)',           value: 'company' },
    { label: 'ONG / Asociație / Fundație',                 value: 'ngo' },
    { label: 'Nu am încă / Am nevoie de ghidaj',           value: 'none' },
  ];

  countries = [
    { label: 'România', value: 'RO' },
    { label: 'Moldova', value: 'MD' },
    { label: 'Bulgaria', value: 'BG' },
    { label: 'Ungaria', value: 'HU' },
    { label: 'Altă țară UE', value: 'EU' },
    { label: 'Altă țară', value: 'OTHER' },
  ];

  channelsOptions = ['Website', 'Instagram', 'TikTok', 'Etsy', 'eMAG', 'Alt marketplace'];
  estOrdersOptions = ['0–10', '10–50', '50–200', '200+'];

  fulfillmentOptions: {label: string; value: Fulfillment}[] = [
    { label: 'Produc eu', value: 'own' },
    { label: 'Print-on-Demand', value: 'pod' },
    { label: 'Reseller', value: 'reseller' },
    { label: 'Dropshipping', value: 'dropshipping' },
  ];

  referralOptions = ['Instagram', 'TikTok', 'Facebook', 'Google', 'Prieteni/Comunitate', 'Altă sursă'];

  constructor(
    private fb: FormBuilder,
    private service: SellerEarlyAccessService,
    private router: Router
  ) {
    // Safety net: dacă începe o navigare, deblochează body-ul
    this.router.events
      .pipe(
        filter(e => e instanceof NavigationStart),
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.unlockBodyScroll());
  }

  // Getters
  get email() { return this.form.controls.email; }
  get brandName() { return this.form.controls.brandName; }
  get productScope() { return this.form.controls.productScope; }
  get productTypes() { return this.form.controls.productTypes; }
  get website() { return this.form.controls.website; }
  get legalStatus() { return this.form.controls.legalStatus; }
  get acceptTerms() { return this.form.controls.acceptTerms; }
  get contactName() { return this.form.controls.contactName; }
  get city() { return this.form.controls.city; }
  get country() { return this.form.controls.country; }
  get readiness() { return this.form.controls.readiness; }
  get currentChannels() { return this.form.controls.currentChannels; }

  hasChannel(ch: string) { return this.currentChannels.value.includes(ch); }
  toggleChannel(ch: string) {
    const cur = [...this.currentChannels.value];
    const idx = cur.indexOf(ch);
    if (idx >= 0) { cur.splice(idx, 1); } else { cur.push(ch); }
    this.currentChannels.setValue(cur);
  }

  submit() {
    this.errorMsg = '';

    // honeypot
    if (this.form.controls.company.value.trim()) {
      this.submitted = true;
      this.submittedChange.emit(true);
      return;
    }

    if (this.form.invalid || this.submitting) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;

    const payload = {
      email: this.email.value,
      brandName: this.brandName.value,
      productScope: this.productScope.value,
      productTypes: this.productTypes.value || undefined,
      website: this.website.value || undefined,
      legalStatus: this.legalStatus.value || undefined,

      contactName: this.contactName.value,
      city: this.city.value,
      country: this.country.value,
      currentChannels: this.currentChannels.value.length ? this.currentChannels.value : undefined,
      readiness: this.readiness.value,

      instagram: this.form.controls.instagram.value || undefined,
      tiktok: this.form.controls.tiktok.value || undefined,
      estOrdersPerMonth: this.form.controls.estOrdersPerMonth.value || undefined,
      fulfillment: this.form.controls.fulfillment.value || undefined,
      hasIPRights: this.form.controls.hasIPRights.value,
      referral: this.form.controls.referral.value || undefined,
      marketingOptIn: this.form.controls.marketingOptIn.value,

      acceptTerms: this.acceptTerms.value,
    };

    this.service.submitLead(payload)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.submitting = false)
      )
      .subscribe({
        next: () => {
          this.submitted = true;
          this.submittedChange.emit(true);
          setTimeout(() => document.querySelector('.ea-card.success')?.scrollIntoView({ behavior: 'smooth' }), 0);
        },
        error: (err) => {
          this.errorMsg = err?.error?.message || 'A apărut o eroare. Încearcă din nou.';
        }
      });
  }

  /** MODALS */
  openTerms() {
    this.showTerms = true;
    this.lockBodyScroll();
  }
  closeTerms() {
    this.showTerms = false;
    this.unlockBodyScroll();
  }

  openFees() {
    this.showFees = true;
    this.lockBodyScroll();
  }
  
  closeFees() {
    this.showFees = false;
    this.unlockBodyScroll();
  }

  /** Navigare din modal: închide + deblochează, apoi navighează */
  navigateFromModal(url: string, ev: Event) {
    ev.preventDefault();
    this.showTerms = false;
    this.showFees = false;
    this.unlockBodyScroll();
    setTimeout(() => this.router.navigateByUrl(url), 0);
  }

  /** Scroll lock helpers (cu compensare scrollbar) */
  private lockBodyScroll() {
    const body = document.body;
    const docEl = document.documentElement;
    const scrollbar = window.innerWidth - docEl.clientWidth;
    body.style.overflow = 'hidden';
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;
  }
  private unlockBodyScroll() {
    const body = document.body;
    body.style.overflow = '';
    body.style.paddingRight = '';
  }

  ngOnDestroy(): void {
    this.unlockBodyScroll();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
