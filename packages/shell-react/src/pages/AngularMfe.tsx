import React, { useState, useEffect } from 'react';
import AngularMfeWrapper from '../components/AngularMfeWrapper';

const AngularMfe: React.FC = () => {
  const [AngularComponent, setAngularComponent] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAngularComponent = async () => {
      try {
        console.log('Attempting to load Angular MFE from:', 'http://localhost:3002/remoteEntry.js');
        
        // Dynamically import the Angular MFE
        const module = await import('mfeAngular/Component');
        console.log('Angular MFE module loaded:', module);
        
        setAngularComponent(() => module.default);
        setLoading(false);
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Failed to load Angular MFE';
        setError(errorMsg);
        setLoading(false);
        console.error('Error loading Angular MFE:', err);
        console.error('Make sure mfe-angular is running on http://localhost:3002');
      }
    };

    loadAngularComponent();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Angular Microfrontend Page</h1>
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <p>⏳ Loading Angular Microfrontend from Module Federation...</p>
          <p style={{ fontSize: '12px', color: '#666' }}>
            Fetching from: http://localhost:3002/remoteEntry.js
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Angular Microfrontend Page</h1>
        <div style={{ padding: '20px', border: '2px solid #f00', borderRadius: '8px', backgroundColor: '#fee' }}>
          <h3>❌ Failed to load Angular Microfrontend</h3>
          <p style={{ color: '#d00' }}>{error}</p>
          
          <details style={{ marginTop: '15px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>
              Troubleshooting Steps
            </summary>
            <ol style={{ marginTop: '10px', lineHeight: '1.8' }}>
              <li>
                <strong>Check if Angular MFE is running:</strong>
                <br />
                <code style={{ background: '#f0f0f0', padding: '2px 6px' }}>
                  cd packages/mfe-angular && pnpm start
                </code>
              </li>
              <li>
                <strong>Verify the remote entry:</strong>
                <br />
                Open <a href="http://localhost:3002/remoteEntry.js" target="_blank" rel="noopener noreferrer">
                  http://localhost:3002/remoteEntry.js
                </a> in your browser
              </li>
              <li>
                <strong>Check Angular dev server:</strong>
                <br />
                Visit <a href="http://localhost:3002" target="_blank" rel="noopener noreferrer">
                  http://localhost:3002
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
      <h1>Angular Microfrontend Page</h1>
      <p>This page loads the Angular 21 microfrontend via Module Federation.</p>
      
      {AngularComponent && <AngularMfeWrapper component={AngularComponent} />}
    </div>
  );
};

export default AngularMfe;