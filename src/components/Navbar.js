import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const {title} = data.site.siteMetadata
  
  return (
    <nav className="navbar navbar-dark navbar-expand-lg">
      <div className="container-fluid">
        <h1>{title}</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="links collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="link"><Link to="/">Home</Link></div>
            
            <div className="link"><Link to="/characters">Characters</Link></div>
            <div className="link"><Link to="/locations">Locations</Link></div>
            <div className="link"><Link to="/about">About</Link></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
