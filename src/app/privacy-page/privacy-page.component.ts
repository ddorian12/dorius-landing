import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyLayoutComponent } from '../policy-layout/policy-layout.component';

@Component({
  selector: 'app-privacy-page',
  standalone: true,
  imports: [CommonModule, PolicyLayoutComponent],
  template: `
  <app-policy-layout title="Politica de Confidențialitate – Dorius.ro" updatedAt="03.09.2025">
    <p><strong>Operator de date (GDPR):</strong> MKCODE SRL, Str. G-ral Ion Rășcanu nr. 48, Vaslui, J37/299/2024, CUI 49939528</p>
    <p><strong>Contact GDPR:</strong> <a href="mailto:contact@dorius.ro">contact&#64;dorius.ro</a></p>
    <p>Operatorul nu are desemnat un DPO.</p>

    <h2>1) Ce acoperă această politică</h2>
    <p>Explicăm ce date personale colectăm, cum le folosim, cui le divulgăm, cât timp le păstrăm și ce drepturi ai. Se aplică pentru dorius.ro, subdomenii și API-uri, conturi, plăți, mesagerie, suport, newsletter și aplicații conexe.</p>

    <h2>2) Ce date colectăm</h2>
    <ul>
      <li>Date de identificare și contact: nume, e-mail, telefon, adresă livrare/facturare.</li>
      <li>Date de cont și tranzacții: ID cont, parole (hash), istoricul comenzilor, preferințe, roluri/permisiuni.</li>
      <li>Date comerciale pentru Vânzători: nume brand, site, statut legal, canale de vânzare, volum estimat, opțiuni de fulfillment.</li>
      <li>Date de autentificare/sesiune:
        <ul>
          <li>Token de acces (JWT) – în localStorage/sessionStorage (nu este cookie); expiră rapid.</li>
          <li>Refresh token – cookie HttpOnly + Secure + SameSite=Lax, pentru menținerea sesiunii.</li>
        </ul>
      </li>
      <li>Date de plată: rezultate ale tranzacțiilor prin Stripe (nu stocăm datele cardului).</li>
      <li>Date tehnice: IP, tip dispozitiv, browser, setări locale, identificatori tehnici, loguri de securitate.</li>
      <li>Comunicări: mesaje în cont, e-mailuri, recenzii, solicitări suport.</li>
      <li>Consimțăminte și opțiuni: marketing opt-in, acceptarea termenilor/politicilor, consimțământ pentru furnizarea imediată a conținutului digital.</li>
    </ul>
    <p><em>Surse:</em> direct de la tine; din servicii externe alese (ex. Google Sign-In); din procesatorul de plăți (Stripe) și curier (pentru livrări fizice).</p>

    <h2>3) Baza legală (art. 6 GDPR)</h2>
    <ul>
      <li>Executarea contractului: crearea/administrarea contului, procesarea comenzilor, livrarea produselor, asistență post-vânzare.</li>
      <li>Interes legitim: securitate (inclusiv cookie-uri esențiale pentru sesiune), prevenirea fraudei/abuzului, îmbunătățirea serviciilor, comunicări tranzacționale.</li>
      <li>Consimțământ: marketing (newsletter), furnizare imediată de conținut digital cu renunțarea la retragere.</li>
      <li>Obligație legală: facturare, contabilitate, răspuns către autorități.</li>
    </ul>

    <h2>4) Scopurile prelucrării</h2>
    <p>Operarea marketplace-ului și intermedierea între Cumpărători și Vânzători; procesarea plăților prin Stripe și măsuri antifraudă; livrarea produselor digitale și fizice; suport clienți; (dacă activezi) marketing cu consimțământ; analize statistice agregate/de-identificate; respectarea obligațiilor legale.</p>

    <h2>5) Destinatari / roluri</h2>
    <p>Divulgăm date doar când este necesar:</p>
    <ul>
      <li><strong>Operatori independenți (controllers):</strong> Stripe Payments – procesarea plăților; prelucrează datele conform politicilor proprii.</li>
      <li><strong>Persoane împuternicite (processors) de către Dorius:</strong> Furnizori de hosting/IT (ex. cloud), servicii SMTP/e-mail, curieri (pentru livrări fizice), furnizori autentificare (ex. Google) – în limitele necesare.</li>
      <li>Autorități publice, când legea impune.</li>
    </ul>
    <p>Cu împuterniciții avem acorduri de prelucrare. Nu vindem datele tale.</p>

    <h2>6) Transferuri în afara SEE</h2>
    <p>Unii furnizori (ex. Stripe, Google) pot implica transferuri către SUA/alte țări. Ne bazăm pe EU-US Data Privacy Framework (unde e aplicabil), Clauze Contractuale Standard și măsuri suplimentare. Detalii la cerere: <a href="mailto:contact@dorius.ro">contact&#64;dorius.ro</a>.</p>

    <h2>7) Perioade de stocare</h2>
    <ul>
      <li>Cont &amp; istoric comenzi: pe durata utilizării + 3 ani după ultima interacțiune; documente fiscale: 10 ani.</li>
      <li>Leaduri Selleri (early access): până la 24 luni sau până la solicitarea de ștergere.</li>
      <li>Loguri tehnice/securitate: 30–180 zile (în funcție de sistem).</li>
      <li>Marketing: până la revocarea consimțământului.</li>
      <li>Refresh token (cookie esențial): până la ~14 zile, rotit periodic; se invalidează la logout.</li>
    </ul>
    <p>Stocarea poate fi extinsă dacă există obligații legale/interese legitime (ex. prevenirea fraudei, gestionarea litigiilor).</p>

    <h2>8) Securitate</h2>
    <p>Folosim TLS, control acces, logare evenimente, backup-uri, semnare JWT cu chei server-side, cookie-uri HttpOnly + Secure + SameSite, hashing parole și minimizarea datelor. Nu stocăm datele cardului. Nicio măsură nu este perfectă; anunță-ne prompt dacă suspectezi o problemă.</p>

    <h2>9) Drepturile tale (art. 15–22)</h2>
    <p>Acces, rectificare, ștergere, restricționare, portabilitate, opoziție; retragerea consimțământului (ex. marketing) oricând; dreptul de a nu face obiectul unei decizii exclusiv automate cu efecte juridice (nu practicăm astfel de profilare).</p>
    <p><em>Cum le exerciți:</em> <a href="mailto:contact@dorius.ro">contact&#64;dorius.ro</a> (putem solicita informații pentru verificarea identității). Plângeri: ANSPDCP – Bd. G-ral Gheorghe Magheru 28–30, București, dataprotection.ro.</p>

    <h2>10) Minori</h2>
    <p>Serviciile nu sunt destinate persoanelor sub 16 ani. Dacă aflăm că am colectat date de la minori, le ștergem.</p>

    <h2>11) Cookie-uri și tehnologii similare</h2>
    <p>În prezent folosim doar cookie-uri esențiale pentru funcționare și securitate (nu setăm analytics/marketing fără consimțământ):</p>
    <ul>
      <li>Refresh token (esențial) – menține sesiunea: HttpOnly, Secure, SameSite=Lax, expiră ~14 zile.</li>
      <li>Cookie administrativ pentru consolă tehnică (doar pentru personal autorizat), sesiune scurtă, HttpOnly, Secure, SameSite=Lax.</li>
    </ul>
    <p>Tokenul de acces (JWT) este în localStorage/sessionStorage (nu este cookie) și expiră rapid.</p>
    <p>Dacă vom introduce în viitor cookie-uri neesentiale (ex. analytics), vom afișa banner de consimțământ înainte de setare.</p>

    <h2>12) Conținut digital & consimțământ</h2>
    <p>La checkout pentru conținut digital, poți solicita furnizarea imediată și confirmi că pierzi dreptul de retragere după accesare/descărcare (înregistrăm consimțământul ca dovadă).</p>

    <h2>13) Raportări conținut ilegal (DSA)</h2>
    <p>Poți raporta conținut/listări potențial ilegale la <a href="mailto:contact@dorius.ro">contact&#64;dorius.ro</a>. Vom confirma primirea și vom comunica o decizie motivată într-un termen rezonabil. Există mecanism intern de contestație.</p>

    <h2>14) Modificări ale Politicii</h2>
    <p>Actualizăm periodic politica. Versiunea la zi este disponibilă pe site; modificările semnificative vor fi comunicate rezonabil.</p>

    <h2>15) Contact</h2>
    <p>Întrebări sau solicitări GDPR: <a href="mailto:contact@dorius.ro">contact&#64;dorius.ro</a>.</p>
  </app-policy-layout>
  `
})
export class PrivacyPageComponent {}
