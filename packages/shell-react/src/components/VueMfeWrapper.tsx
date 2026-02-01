import React, { useEffect, useRef, useState } from 'react';
import { createApp, App as VueAppInstance } from 'vue';

interface VueMfeWrapperProps {
  component: any;
}

const VueMfeWrapper: React.FC<VueMfeWrapperProps> = ({ component }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<VueAppInstance | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current || !component) return;

    try {
      // Create and mount Vue app
      appRef.current = createApp(component);
      appRef.current.mount(containerRef.current);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to mount Vue component';
      setError(errorMsg);
      console.error('Error mounting Vue MFE:', err);
    }

    // Cleanup
    return () => {
      if (appRef.current) {
        appRef.current.unmount();
        appRef.current = null;
      }
    };
  }, [component]);

  if (error) {
    return (
      <div style={{ padding: '20px', border: '2px solid #f00', borderRadius: '8px' }}>
        <h3>❌ Failed to load Vue Microfrontend</h3>
        <p>{error}</p>
      </div>
    );
  }

  return <div ref={containerRef} />;
};

export default VueMfeWrapper;