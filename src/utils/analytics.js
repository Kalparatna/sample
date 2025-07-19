// Google Analytics 4 Integration for Firebase
export const initializeAnalytics = () => {
  // Google Analytics 4 will be automatically configured through Firebase
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (pagePath, pageTitle) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_location: window.location.origin + pagePath,
      page_path: pagePath,
    });
  }
};

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Track demo requests
export const trackDemoRequest = (source = 'unknown') => {
  trackEvent('demo_request', {
    event_category: 'engagement',
    event_label: source,
    value: 1
  });
};

// Track contact form submissions
export const trackContactForm = (formType = 'contact') => {
  trackEvent('form_submit', {
    event_category: 'engagement',
    event_label: formType,
    value: 1
  });
};