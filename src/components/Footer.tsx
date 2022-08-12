import React from 'react'

const Footer = () => {
  return (
    <footer className="shadow-inner text-gray-500 py-8 px-5 font-bold flex justify-between">
        <h4 className="my-auto">
          2022 Fictional Real Estate Company® All rights reserved.
        </h4>
        <div className="flex space-x-2 align-middle">
          <span className="my-auto">Follow us on: </span>
          <img src="https://img.icons8.com/small/32/facebook-new.png" />
          <img src="https://img.icons8.com/small/32/instagram-new.png" />
          <img src="https://img.icons8.com/small/32/twitter.png" />
          <img src="https://img.icons8.com/small/32/linkedin.png" />
        </div>
      </footer>
  )
}

export default Footer;