/**
 * AIM COMPUTER ACADEMY — Analytics & Conversion Tracking Utility
 * Safely dispatches conversion events to window.dataLayer / analytics providers if present,
 * and logs formatted debug events in development mode.
 */

export const AnalyticsEvents = {
  WHATSAPP_CLICK: 'whatsapp_click',
  PHONE_CLICK: 'phone_call_click',
  ENQUIRY_MODAL_OPEN: 'enquiry_modal_open',
  ENQUIRY_FORM_SUBMIT: 'enquiry_form_submit',
  SYLLABUS_DOWNLOAD: 'syllabus_download_request',
  INSTAGRAM_CLICK: 'instagram_profile_click',
  COURSE_ENQUIRE_CLICK: 'course_enquire_click',
};

export function trackEvent(eventName, params = {}) {
  const payload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...params,
  };

  // Safe dispatch to Google Tag Manager / GA4 dataLayer
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }

  // Safe dispatch to custom analytics or console in dev
  if (import.meta.env.DEV) {
    console.log(
      `%c[Analytics Event]%c ${eventName}`,
      'background: #5C3D2E; color: #FAF3E8; font-weight: bold; padding: 2px 6px; border-radius: 4px;',
      'color: #3B2418; font-weight: bold;',
      params
    );
  }
}
