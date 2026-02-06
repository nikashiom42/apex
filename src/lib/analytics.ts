const GOOGLE_TAG_ID = "AW-17933533033";

type AnalyticsParam = string | number | boolean;
type AnalyticsParams = Record<string, AnalyticsParam | undefined>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const isAnalyticsReady = () => {
  return typeof window !== "undefined" && typeof window.gtag === "function";
};

export const trackPageView = (path: string) => {
  if (!isAnalyticsReady()) {
    return;
  }

  window.gtag!("config", GOOGLE_TAG_ID, {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
};

export const trackEvent = (eventName: string, params: AnalyticsParams = {}) => {
  if (!isAnalyticsReady()) {
    return;
  }

  window.gtag!("event", eventName, {
    send_to: GOOGLE_TAG_ID,
    ...params,
  });
};

export { GOOGLE_TAG_ID };
