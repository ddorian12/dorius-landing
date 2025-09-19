import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import { AppComponent } from './app/app.component';
import { TermsPageComponent } from './app/terms-page/terms-page.component';
import { PrivacyPageComponent } from './app/privacy-page/privacy-page.component';
import { FeesPageComponent } from './app/fees-page/fees-page.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

const routes: Routes = [
  { path: '', loadComponent: () => import('./app/landing/landing.component').then(m => m.LandingComponent) },
  { path: 'termeni', component: TermsPageComponent, data: { title: 'Termeni și condiții' } },
  { path: 'confidentialitate', component: PrivacyPageComponent, data: { title: 'Politica de confidențialitate' } },
  { path: 'comisioane', component: FeesPageComponent, data: { title: 'Comisioane Dorius' } },
  { path: '**', redirectTo: '' },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      })
    ),
    provideHttpClient(withFetch()),
  ],
});
