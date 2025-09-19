import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-policy-layout',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
  <section class="policy-wrap">
    <header class="policy-head">
      <div class="policy-kicker">Dorius • Politici & Documente</div>
      <h1>{{ title }}</h1>

      <div class="meta">
        <span class="meta-left" *ngIf="updatedAt">Ultima actualizare: {{ updatedAt }}</span>
        <button type="button" class="print-btn" (click)="window.print()">Printează / Salvează PDF</button>
      </div>
    </header>

    <nav *ngIf="toc?.length" class="toc" aria-label="Cuprins">
      <a *ngFor="let i of toc" [href]="'#' + i.anchor">{{ i.label }}</a>
    </nav>

    <article class="policy-card dorius-card">
      <ng-content></ng-content>
    </article>

    <footer class="policy-foot">
      <a routerLink="/" class="home-link">← Înapoi la pagina principală</a>
    </footer>
  </section>
  `,
  styles: [`
    /* ===== Layout pe gradient ===== */
    .policy-wrap{
      max-width: 980px;
      margin: 48px auto 56px;
      padding: 0 16px;
      color: var(--d-text);
    }
    .policy-head{ text-align:center; color:#fff; margin-bottom:14px; }
    .policy-kicker{
      font-size:12px; letter-spacing:.12em; text-transform:uppercase;
      color:#e9d8fd; opacity:.95; margin-bottom:8px;
    }
    .policy-head h1{
      font-size: clamp(28px, 4vw, 42px);
      line-height: 1.15; margin: 0 0 6px; letter-spacing:-.01em;
      text-shadow: 0 2px 18px rgba(0,0,0,.15);
    }

    /* ===== Meta row: updatedAt stânga, Print dreapta ===== */
    .meta{
      display:flex; align-items:center; gap:16px;
      justify-content:flex-start;
      max-width: 980px; margin: 0 auto;
    }
    .meta-left{ color:#e9d8fd; font-size:14px; }
    .print-btn{
      margin-left:auto;
      border:1px solid rgba(255,255,255,.25);
      background: rgba(255,255,255,.14);
      color:#fff; padding:8px 12px; border-radius:10px; cursor:pointer;
      backdrop-filter: blur(6px);
      transition: transform .06s, box-shadow .2s, border-color .2s, background .2s;
    }
    .print-btn:hover{ box-shadow:0 10px 28px rgba(0,0,0,.25); background: rgba(255,255,255,.22); }
    .print-btn:active{ transform: translateY(1px); }

    /* ===== TOC chips ===== */
    .toc{
      display:flex; flex-wrap:wrap; gap:8px; margin:14px 0 18px; justify-content:center;
    }
    .toc a{
      display:inline-flex; align-items:center; gap:.5rem;
      padding:.5rem .8rem; border-radius:999px;
      border:1px solid rgba(124,58,237,.25);
      background: rgba(124,58,237,.10);
      color:#fff; text-decoration:none; font-size:14px; font-weight:600;
      transition: transform .08s ease, background .2s ease, border-color .2s ease;
    }
    .toc a:hover{ background: rgba(124,58,237,.18); border-color: rgba(124,58,237,.35); }
    .toc a:active{ transform: translateY(1px); }

    /* ===== Card conținut ===== */
    .policy-card{
      padding: clamp(18px, 3vw, 28px);
      color:#2d3748;
      border-radius:16px;
      border:1px solid rgba(124,58,237,.08);
      box-shadow: 0 12px 40px rgba(0,0,0,.12);
      background:#fff;
    }
    .policy-card p, .policy-card li{ line-height:1.75; font-size:16px; }
    .policy-card h2{
      margin-top:28px; font-size:22px; line-height:1.3; color:#4c1d95;
      position:relative; scroll-margin-top:96px;
    }
    .policy-card h3{
      margin-top:18px; font-size:18px; line-height:1.35; color:#4c1d95;
      scroll-margin-top:96px;
    }
    .policy-card a{
      color: var(--d-primary); text-decoration:none; border-bottom:1px dashed transparent;
      transition: color .2s, border-color .2s;
    }
    .policy-card a:hover{ color: var(--d-primary-ink); border-color: currentColor; }
    .policy-card ul{ padding-left:1.2rem; margin:.5rem 0 1rem; }
    .policy-card ol{ padding-left:1.3rem; margin:.5rem 0 1rem; }

    /* hint # pe titluri */
    .policy-card h2[id]::after, .policy-card h3[id]::after{
      content:'#'; opacity:0; margin-left:.4rem; color:#7c3aed; font-weight:700;
      transition: opacity .2s;
    }
    .policy-card h2:hover::after, .policy-card h3:hover::after{ opacity:.9; }

    /* Notă & callouts */
    .note{ color:#6b7280; font-size:14px; margin-top:4px; }
    .callout{ padding:12px 14px; border-radius:12px; border:1px solid #e8ddff; background:#faf7ff; margin:12px 0; }
    .callout.warn{ border-color:#ffcc00; background:rgba(255,204,0,.08); }
    .callout.success{ border-color:#35c28d; background:rgba(53,194,141,.08); }

    /* Footer */
    .policy-foot{ margin-top:24px; text-align:center; }
    .home-link{
      display:inline-block; text-decoration:none; color:#fff;
      background: rgba(255,255,255,.14); border:1px solid rgba(255,255,255,.22);
      padding:.5rem .8rem; border-radius:999px;
      transition: background .2s, border-color .2s, transform .08s;
    }
    .home-link:hover{ background: rgba(255,255,255,.22); border-color: rgba(255,255,255,.32); }
    .home-link:active{ transform: translateY(1px); }

    /* A11y focus */
    a:focus-visible, button:focus-visible{
      outline:3px solid #99b0ff; outline-offset:2px; border-radius:6px;
    }

    /* ===== Responsive (telefon) ===== */
    @media (max-width: 640px){
      .policy-card{ padding:16px; border-radius:12px; }
      .meta{ gap:10px; }
      .meta-left{ font-size:13px; }
      .print-btn{ padding:8px 10px; font-size:14px; }
    }

    /* Print simplificat */
    @media print{
      .policy-head, .home-link, .toc{ display:none !important; }
      .policy-wrap{ max-width:100%; margin:0; color:#000; }
      .policy-card{ border:none; box-shadow:none; padding:0; }
    }
  `]
})
export class PolicyLayoutComponent {
  @Input() title = '';
  @Input() updatedAt = '';
  @Input() subtitle?: string;
  @Input() toc?: { label: string; anchor: string }[];
  window: any = window;
}
