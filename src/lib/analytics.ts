declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Sends a GA4 event via gtag.js if it's loaded.
 * Safe to call anywhere (no-ops silently if gtag isn't available yet).
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

export const trackWhatsAppClick = (location: string) =>
  trackEvent('click_whatsapp', { method: 'whatsapp', link_location: location })

export const trackCallClick = (location: string) =>
  trackEvent('click_call', { method: 'phone', link_location: location })
