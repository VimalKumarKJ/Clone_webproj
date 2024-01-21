import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <div className="col-md-3 mb-2 mb-md-0">
          <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
            <img 
                src="https://assets-global.website-files.com/64eb36ca8bbb584cfce01dd8/64eb45db19b3764ab9e7a8eb_EventHQ%20full%20primary.svg" 
                alt = "Logo"
                style={{ height: '32px', width: '160px' }}
            />
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2">Features</a></li>
          <li><a href="#" className="nav-link px-2">Blog</a></li>
          <li><a href="#" className="nav-link px-2">About</a></li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">Talk to Us</button>
        </div>
      </header>
    </div>
  );
};

export default Header;