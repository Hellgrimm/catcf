import React from 'react';
import Navbar from './Navbar';
import '../styles/global.css'
import { graphql, useStaticQuery } from 'gatsby'

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)
  
  const { copyright } = data.site.siteMetadata
  return (
    <div className="site">
      <Navbar />
      <div className="site-content">
        <div className="layout">
        { children }
        </div>
      </div>
      <footer>
        <p>{ copyright }</p>
      </footer>
    </div>
  );
}
