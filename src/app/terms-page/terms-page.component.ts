import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyLayoutComponent } from '../policy-layout/policy-layout.component';

@Component({
  selector: 'app-terms-page',
  standalone: true,
  imports: [CommonModule, PolicyLayoutComponent],
  template: `
  <app-policy-layout title="Termeni și Condiții – Dorius.ro" updatedAt="03.09.2025">
    <p><strong>Operator platformă:</strong> MKCODE SRL, sediul social: Str. G-ral Ion Rășcanu nr. 48, Vaslui, J37/299/2024, CUI 49939528</p>
    <p><strong>Contact:</strong> <a href="mailto:contact@dorius.ro">contact&#64;dorius.ro</a>, 0790 181 995</p>
    <p><strong>Domeniu:</strong> dorius.ro (și subdomeniile aferente)</p>

    <h2>1. Obiectul documentului</h2>
    <p>Acești Termeni reglementează utilizarea marketplace-ului Dorius („Platforma”), unde comercianți terți („Vânzători/Selleri”) listează și vând produse digitale (ex.: e-book-uri, template-uri, fișiere media/licențe) și produse fizice (ex.: printuri, merch). Dorius intermediază listarea, plata și, după caz, facilități logistice. Dorius nu este vânzătorul produselor Vânzătorilor, exceptând cazurile în care este indicat expres pentru un anumit produs (când Dorius devine parte în contract).</p>

    <h2>2. Definiții</h2>
    <ul>
      <li>Utilizator – orice persoană care vizitează/își creează cont și folosește Platforma.</li>
      <li>Cumpărător – Utilizator care achiziționează produse.</li>
      <li>Vânzător/Seller – comerciant terț care listează/vinde pe Dorius.</li>
      <li>Conținut digital – date livrate în format digital (OUG 141/2021).</li>
      <li>Comandă – intenție fermă de cumpărare, confirmată prin plată.</li>
    </ul>

    <h2>3. Cont & eligibilitate</h2>
    <p>Trebuie să ai 18+ ani (sau capacitate deplină) ori acordul reprezentantului legal. Datele furnizate trebuie să fie reale și actualizate. Ești responsabil pentru activitatea din cont; păstrează confidențialitatea datelor de autentificare. Dorius poate suspenda/închide conturi la încălcări, abuz sau fraudă.</p>

    <h2>4. Rolul Dorius & relația contractuală</h2>
    <p>Dorius acționează ca intermediar între Cumpărători și Vânzători și, pentru plăți, ca agent limitat de încasare al Vânzătorilor („limited collection agent”) prin Stripe Connect. Contractul de vânzare se încheie între Cumpărător și Vânzător. Plata efectuată prin Platformă stinge obligația Cumpărătorului față de Vânzător în limita sumei achitate. Dorius poate percepe comisioane Vânzătorilor (reținute din încasări).</p>

    <h2>5. Listări, prețuri, taxe</h2>
    <p>Vânzătorii sunt exclusiv responsabili pentru: descrieri, prețuri, stocuri, imagini, licențe/drepturi și conformarea legală (protecția consumatorului, drepturi de autor, fiscalitate). Prețurile includ taxele aplicabile (ex.: TVA), dacă nu se precizează altfel în pagină. Costurile de livrare pentru produse fizice sunt comunicate separat înainte de finalizarea comenzii. Codurile de reducere/promoțiile se aplică conform condițiilor afișate. În caz de erori evidente de preț/descriere, comanda poate fi anulată/rectificată cu informare promptă și, după caz, rambursare.</p>
    <p><em>Prețuri reduse (Omnibus)</em>: dacă este afișată o reducere, se va indica prețul de referință conform legislației aplicabile (de regulă, cel mai scăzut preț practicat în ultimele 30 de zile).</p>

    <h2>6. Plăți & facturare</h2>
    <p>Plățile sunt procesate de Stripe. Dorius nu stochează datele cardului. O comandă este încheiată când plata este autorizată/confirmată. În caz de plăți eșuate, suspiciune de fraudă, chargeback sau dispute, Dorius/Vânzător poate suspenda accesul la conținutul digital sau livrarea fizică până la clarificare.</p>
    <p><strong>Facturare:</strong> factura fiscală este emisă de Vânzător. Dorius poate, când este cazul, să emită facturi în numele și pe seama Vânzătorului (self-billing), în baza unui acord separat cu Vânzătorul.</p>

    <h2>7. Livrare & acces</h2>
    <ul>
      <li><strong>Produse digitale:</strong> livrare prin link de descărcare/acces în cont, de regulă imediat după confirmarea plății (sau la termenul indicat).</li>
      <li><strong>Produse fizice:</strong> livrare prin curier la adresa indicată; termenele sunt estimative. Răspunderea pentru transport revine Vânzătorului conform legii; verifică coletul la primire și consemnează eventualele deteriorări în procesul-verbal al curierului. Risc: trece la Cumpărător la predarea efectivă a coletului.</li>
    </ul>

    <h2>8. Retragere (OUG 34/2014) & retururi</h2>
    <h3>8.1. Produse fizice.</h3>
    <p>Drept de retragere 14 zile de la primire, fără motiv, cu excepțiile legale (ex.: produse personalizate, produse sigilate desigilate ce nu pot fi returnate din motive de igienă, bunuri perisabile). Dacă politica Vânzătorului prevede, costul returului poate fi în sarcina ta (ești informat înainte). Rambursarea se face în 14 zile de la informare, dar nu înainte de primirea produselor sau a dovezii de expediere. Modelul de formular se găsește mai jos (secțiunea „Model retragere”) sau la /termeni#retragere.</p>
    <h3>8.2. Conținut digital (OUG 141/2021).</h3>
    <p>Pentru conținut digital furnizat imediat, dreptul de retragere se pierde după ce: (1) soliciți începerea furnizării înainte de expirarea celor 14 zile și (2) confirmi că pierzi dreptul de retragere. Dacă nu îți dai consimțământul, accesul se acordă după 14 zile sau conform politicii Vânzătorului.</p>

    <h2>9. Conformitate & garanții</h2>
    <ul>
      <li><strong>Fizice:</strong> se aplică garanția legală de conformitate (OUG 140/2021): reparare/înlocuire, reducere preț sau rezoluțiune, după caz.</li>
      <li><strong>Digital:</strong> Vânzătorul livrează conținutul conform descrierii, fără erori care împiedică utilizarea. Notifică prompt orice defect.</li>
    </ul>
    <p>Contactează mai întâi Vânzătorul din cont; dacă nu se rezolvă, te ajutăm la <a href="mailto:contact@dorius.ro">contact&#64;dorius.ro</a>.</p>

    <h2>10. Utilizare acceptabilă & conținut interzis</h2>
    <p>Este interzisă listarea/vânzarea/achiziția de produse ilegale sau care încalcă drepturi (ex.: materiale piratate, licențe neautorizate, malware, conținut cu ură/violență, materiale interzise de lege). Este interzis scraping-ul masiv, ingineria inversă, abuzul de API, afectarea securității/funcționării Platformei. Dorius poate înlătura listări, anula comenzi, suspenda conturi și notifica autoritățile.</p>

    <h2>11. Conformitate DSA (trader traceability & raportare conținut)</h2>
    <ol>
      <li>Vânzătorii furnizează și mențin actualizate datele de identificare (denumire, adresă, e-mail, telefon, nr. înregistrare, TVA), afișate cumpărătorilor în paginile relevante.</li>
      <li>Orice persoană poate raporta conținut/listări potențial ilegale la <a href="mailto:contact@dorius.ro">contact&#64;dorius.ro</a>. Vom confirma primirea și vom comunica decizia motivată într-un termen rezonabil (procedură notice &amp; takedown).</li>
      <li>Implementăm un mecanism intern de contestație pentru Vânzători privind moderarea; contestațiile se trimit la aceeași adresă de e-mail și sunt soluționate într-un termen rezonabil.</li>
    </ol>

    <h2>12. Proprietate intelectuală</h2>
    <p>Interfața, mărcile și elementele Dorius aparțin Dorius sau licențiatorilor. Conținutul produselor aparține Vânzătorilor. Cumpărătorii primesc o licență limitată conform descrierii produsului; redistribuirea neautorizată este interzisă.</p>

    <h2>13. Recenzii & conținut generat de utilizatori (UGC)</h2>
    <p>Recenziile trebuie să fie oneste, fără limbaj injurios/defăimare/date personale ale altora sau linkuri periculoase. Poți vedea mențiunea „cumpărător verificat” când avem dovada comenzii; în lipsa verificării, recenzia nu primește eticheta. Acordezi Dorius o licență neexclusivă, gratuită, mondială de a afișa/modera UGC în scopul operării/promovării Platformei. Putem modera/șterge conținutul care încalcă Termenii sau legea.</p>

    <h2>14. Răspundere</h2>
    <p>În măsura maximă permisă de lege, Dorius nu răspunde pentru: (i) pierderi indirecte/consecințe sau profit nerealizat; (ii) conținutul produselor Vânzătorilor; (iii) întârzieri/erori ale terților (curieri, procesatori plăți). Răspunderea totală a Dorius față de un Utilizator este limitată la suma comisioanelor reținute de Dorius din tranzacțiile acelui Utilizator în ultimele 6 luni. Nimic din acești Termeni nu limitează drepturile legale ale consumatorilor.</p>

    <h2>15. Stripe, rezerve & dispute</h2>
    <p>Folosim Stripe Connect; Vânzătorii trebuie să accepte termenii Stripe. Pentru prevenirea fraudei/chargeback, putem aplica rezerve, întârzia sau reține temporar plăți/payout-uri. În caz de chargeback, suma și taxele aferente pot fi reținute/compensate din sumele viitoare datorate Vânzătorului. Vânzătorii au obligația să răspundă prompt la dispute.</p>

    <h2>16. Politici Vânzători (obligații suplimentare)</h2>
    <p>Vânzătorii garantează că dețin drepturile/licențele necesare, respectă legislația (consumator, fiscal, IP) și oferă asistență post-vânzare conform legii. Vânzătorul acceptă că Dorius poate folosi numele/brandul/listările în scopul operării și promovării Platformei (licență neexclusivă, gratuită). Vânzătorul despăgubește Dorius pentru prejudiciile cauzate de încălcările sale (inclusiv pretenții ale terților).</p>

    <h2>17. Parametri de ierarhizare & transparență (P2B)</h2>
    <p>Ordinea afișării produselor poate depinde de: relevanță (titlu/descriere/cuvinte cheie), calitatea imaginilor, preț, disponibilitate, rating/recenzii, performanță istorică (rata de conversie/retur) și promoții active. Nu aplicăm tratament diferențiat Vânzătorilor, cu excepția campaniilor promoționale clar marcate. În caz de suspendare/înlăturare, Vânzătorul primește motivarea și poate contesta la <a href="mailto:contact@dorius.ro">contact&#64;dorius.ro</a>.</p>

    <h2>18. Comisioane, taxe și plăți către Vânzători</h2>
    <ol>
      <li>Dorius percepe Vânzătorilor comisioane și/sau taxe conform paginii „Comisioane” disponibilă la dorius.ro/comisioane, parte integrantă din acești Termeni. Ne rezervăm dreptul de a actualiza valorile, cu notificare prealabilă rezonabilă.</li>
      <li>Payout-uri: prin Stripe Connect, la intervalele comunicate pe pagina de Comisioane, cu posibilitatea aplicării unor rezerve/întârzieri în scop antifraudă/chargeback.</li>
      <li>Refund/chargeback: sumele și taxele aferente pot fi reținute/compensate din sold/payout-uri viitoare.</li>
    </ol>

    <h2>19. Disponibilitate, mentenanță & forță majoră</h2>
    <p>Putem modifica/îmbunătăți Platforma și realiza mentenanță (posibile întreruperi). Nu garantăm disponibilitate neîntreruptă. Nu răspundem pentru neexecutare cauzată de forță majoră (art. 1351 C. civ.) sau caz fortuit.</p>

    <h2>20. Date personale & cookie-uri</h2>
    <p>Prelucrăm datele conform Politicii de Confidențialitate (GDPR). Folosim cookie-uri esențiale pentru funcționare/securitate și, doar cu consimțământ, cookie-uri neesențiale (analitice/marketing). Detalii: Politica de Confidențialitate – secțiunea „Cookie-uri”.</p>

    <h2>21. Comunicări electronice</h2>
    <p>Accepți comunicări electronice (e-mail/notificări în cont) pentru funcționarea serviciului (tranzacționale) și, dacă ai opt-in, pentru marketing (poți revoca oricând).</p>

    <h2>22. Modificări ale Termenilor</h2>
    <p>Putem actualiza Termenii; versiunea la zi este publicată pe site, cu dată. Modificările semnificative vor fi comunicate rezonabil. Continuarea utilizării după intrarea în vigoare înseamnă acceptare.</p>

    <h2>23. Legea aplicabilă & soluționarea litigiilor</h2>
    <p>Se aplică legea română. Încercăm soluționarea pe cale amiabilă; în lipsă, litigiile se soluționează de instanțele competente. Consumatori: poți apela la ANPC/SAL sau la platforma europeană ODR (SOL): <a href="https://ec.europa.eu/consumers/odr" rel="noopener">https://ec.europa.eu/consumers/odr</a>.</p>

    <h2>24. Diverse</h2>
    <p>Cesionare: putem cesiona contractul în cadrul unui transfer de afacere, cu notificare. Nulitate parțială: dacă o clauză devine nulă, restul rămâne valabil. Nerenunțare: lipsa executării imediate a unui drept nu înseamnă renunțare. Întregul acord: Termenii + politicile încrucișate (Confidențialitate, „Cookie-uri”, retur/garanții) formează întregul acord între tine și Dorius.</p>

    <h2>25. Contact</h2>
    <p><a href="mailto:contact@dorius.ro">contact&#64;dorius.ro</a>, 0790 181 995, Str. G-ral Ion Rășcanu nr. 48, Vaslui.</p>

    <h2 id="retragere">Model de formular de retragere</h2>
    <p><strong>Către:</strong> MKCODE SRL, Str. G-ral Ion Rășcanu nr. 48, Vaslui<br>
    <strong>E-mail:</strong> <a href="mailto:contact@dorius.ro">contact&#64;dorius.ro</a><br>
    <strong>Subiect:</strong> Retragere din contract</p>
    <p>Subsemnatul/Subsemnata [nume complet], vă informez prin prezenta cu privire la retragerea mea din contractul referitor la vânzarea următorului/următoarelor produs(e): [descriere produs(e)].</p>
    <p>Comandă nr.: [] / Data comenzii: [] / Data primirii: []</p>
    <p>Nume: ____________<br>Adresă: ____________<br>E-mail: ____________<br>Telefon: ____________<br>IBAN (dacă e cazul): ____________<br>Data: ..<br>Semnătură (dacă e pe hârtie): ____________</p>
  </app-policy-layout>
  `
})
export class TermsPageComponent {}
