import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Microfrontend Shell</h1>
      <p>This is a React shell application that loads multiple microfrontends.</p>
      
      <div style={{ marginTop: '30px' }}>
        <h2>Available Microfrontends:</h2>
        <ul>
          <li>
            <strong>Vue Microfrontend</strong> - A Vue 3 application running on port 3001
          </li>
          <li>
            <strong>Angular Microfrontend</strong> - An Angular 21 application running on port 3002
          </li>
        </ul>
      </div>

      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        backgroundColor: '#f0f0f0',
        borderRadius: '8px'
      }}>
        <h3>Getting Started:</h3>
        <ol>
          <li>Ensure all microfrontends are running</li>
          <li>Navigate to Vue or Angular using the menu above</li>
          <li>Each microfrontend will load independently</li>
        </ol>
      </div>
    </div>
  );
};

export default Home;