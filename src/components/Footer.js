import React from 'react'
import InstagramFeed from './InstagramFeed'
import { SocialIcon } from 'react-social-icons';
import './Footer.css'

export default () => (
  <div>

    <div className="taCenter">
    <SocialIcon url="https://twitter.com/paharihacker" label="Twitter" style={{ height: 40, width: 40, margin: '5px'}}/>
    <SocialIcon url="https://stackoverflow.com/users/2165143/rajesh-dhiman" label="Stack Overflow" style={{ height: 40, width: 40, margin: '5px' }}/>
    <SocialIcon url="https://github.com/rajeshdh" label="Github" style={{ height: 40, width: 40, margin: '5px' }}/>
    <SocialIcon url="https://www.facebook.com/rajeshdhimanhimachal" label="Facebook" style={{ height: 40, width: 40, margin: '5px' }}/>
    <SocialIcon url="https://www.linkedin.com/in/rajeshsunnyd" label="LinkedIn" style={{ height: 40, width: 40, margin: '5px' }}/>
    <SocialIcon url="https://instagram.com/paharihacker" label="Instagram" style={{ height: 40, width: 40, margin: '5px' }}/>
    </div>
    <h2 className="taCenter">
Here is my Instagram feed{' '}
      {/* <a href="https://instagram.com/paharihacker/">@paharihacker</a> */}
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
