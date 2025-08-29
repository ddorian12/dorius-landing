import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// seller-early-access.service.ts
export type ProductScope = 'Digital' | 'Physical' | 'Both';
export type Readiness = 'now' | 'later';
export type Fulfillment = 'own' | 'pod' | 'reseller' | 'dropshipping';

export interface SellerEarlyAccessDto {
  email: string;
  brandName: string;
  productScope: ProductScope;
  productTypes?: string;
  website?: string;
  legalStatus?: string;

  contactName: string;
  city: string;
  country: string;
  currentChannels?: string[];
  readiness: Readiness;

  instagram?: string;
  tiktok?: string;
  estOrdersPerMonth?: string;
  fulfillment?: Fulfillment;
  hasIPRights: boolean;
  referral?: string;
  marketingOptIn: boolean;

  acceptTerms: boolean;
}

@Injectable({ providedIn: 'root' })
export class SellerEarlyAccessService {
  private http = inject(HttpClient);
  private baseUrl = '"https://dorius-api-dwcbe4ereed9bpce.northeurope-01.azurewebsites.net/api';

  submitLead(payload: SellerEarlyAccessDto) {
    return this.http.post<void>(`${this.baseUrl}/seller/seller-early-access`, payload, { withCredentials: false });
  }
}

