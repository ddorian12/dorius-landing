import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyLayoutComponent } from '../policy-layout/policy-layout.component';

@Component({
  selector: 'app-fees-page',
  standalone: true,
  imports: [CommonModule, PolicyLayoutComponent],
  template: `
  <app-policy-layout title="Comisioane – Dorius.ro" updatedAt="03.09.2025">
    <p>Dorius taxează transparent, simplu. În Etapa 1 (lansare) ținem comisioanele cât mai jos, ca să-ți fie ușor să pornești.</p>

    <h2>Promo Etapa 1 (Early Access)</h2>
    <ul>
      <li><strong>0% comision Dorius</strong> pentru primele 30 de zile de la aprobarea contului de Seller (plătești doar comisionul de procesare Stripe, la cost).</li>
      <li>Se aplică tuturor vânzărilor (digital &amp; fizic) efectuate în perioada de promo.</li>
      <li>Promoția nu se aplică retroactiv. Dorius poate modifica/închide promoția pentru conturile noi; conturile deja aprobate își păstrează cele 30 de zile.</li>
    </ul>

    <p><em>După promo, intră în vigoare comisioanele standard:</em></p>

    <h2>1) Comisioane standard Dorius (după promo)</h2>
    <div class="table-wrap">
      <table class="fees">
        <thead><tr><th>Tip produs</th><th>Comision Dorius</th></tr></thead>
        <tbody>
          <tr>
            <td>Produse digitale (e-book, template, fișiere media/licențe)</td>
            <td><strong>10%</strong> din valoarea produselor (fără livrare)</td>
          </tr>
          <tr>
            <td>Produse fizice (printuri, merch etc.)</td>
            <td><strong>8%</strong> din valoarea produselor (fără livrare)</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <p class="note">Notă: Comisionul Dorius se calculează la prețul produselor, fără costul de livrare. TVA se aplică conform legislației.</p>

    <h2>2) Procesare plăți (Stripe)</h2>
    <ul>
      <li>Taxă procesare: la costul Stripe (reținută de Stripe, nu de Dorius).</li>
      <li>Orientativ: ~2,5% + 1 RON / tranzacție (poate varia după tipul cardului &amp; țară).</li>
      <li>Refund: taxa Stripe este, de regulă, nerambursabilă.</li>
      <li>Chargeback/Dispută: taxa Stripe de dispută (ex. ~€15) se impută vânzătorului dacă litigiul se pierde.</li>
    </ul>
    <p>Te rugăm să verifici politica de preț Stripe pentru valorile exacte aplicabile contului tău.</p>

    <h2>3) Payout-uri &amp; decontare</h2>
    <ul>
      <li>Frecvență payout: săptămânal (implicit) prin Stripe Connect.</li>
      <li>Prag minim payout: 50 RON (sau echivalent) în sold disponibil.</li>
      <li>Taxă payout Dorius: 0 RON (pot exista comisioane bancare/Stripe).</li>
      <li>Rezerve de risc: putem aplica rezerve temporare (sumă blocată) pentru prevenirea fraudei/chargeback, în cazuri justificate.</li>
    </ul>

    <h2>4) Refund &amp; anulări</h2>
    <ul>
      <li>Refund integral: returnăm comisionul Dorius aferent vânzării; taxa Stripe rămâne, de regulă, nerambursabilă.</li>
      <li>Refund parțial: returnăm pro-rata comisionul Dorius aferent sumei refundate; Stripe conform politicii sale.</li>
      <li>Anulare înainte de captură: 0 cost Dorius (Stripe poate avea particularități).</li>
    </ul>

    <h2>5) Chargeback / Dispute</h2>
    <ul>
      <li>Taxă dispută Stripe: se aplică suma Stripe (ex. ~€15). Dacă pierzi disputa, taxa + suma tranzacției sunt imputate vânzătorului.</li>
      <li>Asistență Dorius: oferim ghidaj privind dovezile (livrare, conversații, licențe); decizia finală aparține emitentului cardului/Stripe.</li>
    </ul>

    <h2>6) Servicii opționale (facultative)</h2>
    <div class="table-wrap">
      <table class="fees">
        <thead><tr><th>Serviciu</th><th>Taxă</th></tr></thead>
        <tbody>
          <tr><td>Promovare „Featured” în listări</td><td>de la 29 RON/săpt. / produs</td></tr>
          <tr><td>Badge „Recomandat” (rotire pe categorii)</td><td>de la 49 RON/săpt.</td></tr>
          <tr><td>Audit listare (revizuire titlu, imagini, descriere, preț)</td><td>0 RON în Etapa 1 (apoi 99 RON/listare)</td></tr>
        </tbody>
      </table>
    </div>
    <p>Serviciile opționale sunt la latitudinea ta; nu influențează comisioanele standard.</p>

    <h2>7) Exemple de calcul</h2>
    <h3>Exemplul A – Produs digital</h3>
    <p>Preț produs: 100 RON</p>
    <p>După promo:<br>
    – Comision Dorius (10%): 10,00 RON<br>
    – Stripe (estimativ 2,5% + 1 RON): 3,50 RON<br>
    <strong>Încasare netă vânzător: ~ 86,50 RON</strong></p>

    <h3>Exemplul B – Produs fizic</h3>
    <p>Preț produs: 150 RON + livrare 20 RON</p>
    <p>După promo:<br>
    – Comision Dorius 8% aplicat la 150 RON: 12,00 RON<br>
    – Stripe (estimativ, pe 170 RON total): 5,25 RON<br>
    <strong>Net (fără a scădea costurile tale de livrare): ~ 152,75 RON</strong></p>
    <p>(Comisionul Dorius nu se aplică la livrare; Stripe calculează la totalul tranzacției.)</p>
    <p><em>În Promo (primele 30 zile):</em> Comisionul Dorius este 0% (în exemplele de mai sus rămâne doar costul Stripe).</p>

    <h2>8) Întrebări frecvente</h2>
    <ul>
      <li>Există taxă de listare? Nu. Poți lista gratuit produse în Etapa 1.</li>
      <li>Factura cine o emite? Vânzătorul. Putem emite facturi în numele și pe seama vânzătorilor (self-billing) pe baza unui acord activat în cont.</li>
      <li>Ce se întâmplă dacă se face refund? Returnăm comisionul Dorius; comisionul Stripe rămâne, de regulă, nerambursabil.</li>
      <li>Pot avea rezervă de risc? Doar în cazuri justificate (spike de refund/chargeback, risc fraudă), conform Termenilor.</li>
    </ul>

    <h2>9) Modificări &amp; transparență</h2>
    <p>Putem actualiza aceste comisioane; versiunea la zi va fi publicată aici. Modificările semnificative vor fi comunicate rezonabil în prealabil.</p>

    <p>Întrebări? <a href="mailto:contact@dorius.ro">contact&#64;dorius.ro</a> – te ajutăm rapid.</p>
  </app-policy-layout>
  `
})
export class FeesPageComponent {}
