import { useEffect } from 'react';

export function usePerformanceMonitoring() {
  useEffect(() => {
    // Core Web Vitals monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const nav = entry as PerformanceNavigationTiming;
          console.log('🚀 Page Load Time:', nav.loadEventEnd - nav.loadEventStart, 'ms');
          console.log('🎯 DOMContentLoaded:', nav.domContentLoadedEventEnd - nav.domContentLoadedEventStart, 'ms');
        }
        
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('🖼️ LCP (Largest Contentful Paint):', entry.startTime, 'ms');
        }
        
        if (entry.entryType === 'first-input') {
          console.log('⚡ FID (First Input Delay):', (entry as any).processingStart - entry.startTime, 'ms');
        }
        
        if (entry.entryType === 'layout-shift') {
          console.log('📐 CLS (Cumulative Layout Shift):', (entry as any).value);
        }
      }
    });

    // Observe different entry types
    observer.observe({ entryTypes: ['navigation', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

    return () => observer.disconnect();
  }, []);
}