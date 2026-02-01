import React, { useState, useEffect } from 'react';
import VueMfeWrapper from '../components/VueMfeWrapper';

const VueMfe: React.FC = () => {
  const [VueComponent, setVueComponent] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVueComponent = async () => {
      try {
        console.log('Attempting to load Vue MFE from:', 'http://localhost:3001/assets/remoteEntry.js');
        
        // Dynamically import the Vue MFE
        const module = await import('mfeVue/App');
        console.log('Vue MFE module loaded:', module);
        
        setVueComponent(() => module.default);
        setLoading(false);
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Failed to load Vue MFE';
        setError(errorMsg);
        setLoading(false);
        console.error('Error loading Vue MFE:', err);
        console.error('Make sure mfe-vue is running on http://localhost:3001');
      }
    };

    loadVueComponent();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Vue Microfrontend Page</h1>
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <p>⏳ Loading Vue Microfrontend from Module Federation...</p>
          <p style={{ fontSize: '12px', color: '#666' }}>
            Fetching from: http://localhost:3001/assets/remoteEntry.js
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Vue Microfrontend Page</h1>
        <div style={{ padding: '20px', border: '2px solid #f00', borderRadius: '8px', backgroundColor: '#fee' }}>
          <h3>❌ Failed to load Vue Microfrontend</h3>
          <p style={{ color: '#d00' }}>{error}</p>
          
          <details style={{ marginTop: '15px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>
              Troubleshooting Steps
            </summary>
            <ol style={{ marginTop: '10px', lineHeight: '1.8' }}>
              <li>
                <strong>Check if Vue MFE is running:</strong>
                <br />
                <code style={{ background: '#f0f0f0', padding: '2px 6px' }}>
                  pnpm build:mfe-vue && pnpm preview:mfe-vue
                </code>
              </li>
              <li>
                <strong>Verify the remote entry:</strong>
                <br />
                Open <a href="http://localhost:3001/assets/remoteEntry.js" target="_blank" rel="noopener noreferrer">
                  http://localhost:3001/assets/remoteEntry.js
                </a> in your browser
              </li>
              <li>
                <strong>Check Vue dev server:</strong>
                <br />
                Visit <a href="http://localhost:3001" target="_blank" rel="noopener noreferrer">
                  http://localhost:3001
                </a>
              </li>
              <li>
                <strong>Check console for CORS errors</strong>
              </li>
            </ol>
          </details>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Vue Microfrontend Page</h1>
      <p>This page loads the Vue 3 microfrontend via Module Federation.</p>
      
      {VueComponent && <VueMfeWrapper component={VueComponent} />}
    </div>
  );
};

export default VueMfe;