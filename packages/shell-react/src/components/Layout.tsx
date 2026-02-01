import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <nav style={{ 
        backgroundColor: '#333', 
        padding: '1rem',
        marginBottom: '20px'
      }}>
        <ul style={{ 
          listStyle: 'none', 
          display: 'flex', 
          gap: '20px',
          margin: 0,
          padding: 0
        }}>
          <li>
            <Link 
              to="/" 
              style={{ 
                color: 'white', 
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: 'bold'
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/vue" 
              style={{ 
                color: 'white', 
                textDecoration: 'none',
                fontSize: '18px'
              }}
            >
              Vue Microfrontend
            </Link>
          </li>
          <li>
            <Link 
              to="/angular" 
              style={{ 
                color: 'white', 
                textDecoration: 'none',
                fontSize: '18px'
              }}
            >
              Angular Microfrontend
            </Link>
          </li>
        </ul>
      </nav>
      
      <main style={{ padding: '0 20px' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;