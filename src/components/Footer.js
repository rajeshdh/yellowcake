import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow me in Instagram{' '}
      <a href="https://instagram.com/paharihacker/">@paharihacker</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://rajeshdhiman.in/">Rajesh Dhiman</a>.
        </span>
      </div>
    </footer>
  </div>
)
