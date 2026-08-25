import { SITE_CONFIG } from '../config/siteConfig';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export type AnalyticsEventName =
  | 'view_product'
  | 'click_product'
  | 'click_client_purchase'
  | 'click_partner_registration'
  | 'watch_registration_video'
  | 'click_registration'
  | 'country_selected'
  | 'whatsapp_click'
  | 'contact_form_submit';

export function trackEvent(eventName: AnalyticsEventName, params: Record<string, any> = {}) {
  const timestamp = new Date().toISOString();
  const payload = {
    ...params,
    timestamp,
    sponsor: SITE_CONFIG.SPONSOR_CODE,
  };

  if (SITE_CONFIG.ANALYTICS.ENABLE_DEBUG_LOGS) {
    console.log(`[HGW Analytics Event] → ${eventName}:`, payload);
  }

  // Google Analytics 4
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, payload);
    } catch (e) {
      console.warn('GA tracking error', e);
    }
  }

  // Meta Pixel (Facebook)
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      if (eventName === 'view_product') {
        window.fbq('track', 'ViewContent', { content_name: params.product_name, content_category: params.category, value: params.price, currency: 'USD' });
      } else if (eventName === 'click_client_purchase' || eventName === 'click_partner_registration' || eventName === 'click_registration') {
        window.fbq('track', 'Lead', { content_name: params.product_name || 'Registro Socio HGW', value: params.bv || 0, currency: 'USD' });
      } else if (eventName === 'contact_form_submit') {
        window.fbq('track', 'Contact', { inquiry_type: params.inquiry_type });
      } else {
        window.fbq('trackCustom', eventName, payload);
      }
    } catch (e) {
      console.warn('Meta pixel error', e);
    }
  }
}
