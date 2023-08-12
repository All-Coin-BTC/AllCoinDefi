import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {

    const [displayHamburger, setDisplayHamburger] = React.useState(false);
    console.log(displayHamburger)
  return (
    <>
      <div className="mobile-navbar py-4 px-4 flex items-center justify-between">
        <div className="left-mobile-items flex items-center gap-2">
            <img className = "w-16" src = "Logo 8.png" />
            <p>ALLCOIN</p>
        </div>
        <div className="right-mobile-items">
            {!displayHamburger && <img className='w-16' src = "more.png" onClick={() => setDisplayHamburger(!displayHamburger)} /> }
            {displayHamburger && <img className='w-16' src = "close.png" onClick={() => setDisplayHamburger(!displayHamburger)} /> }
        </div>
      </div>
      <div className={` ${displayHamburger ? "hamburger-active" : "hamburger-inactive"} py-4 px-4`}>
        <div className="trade-instruments-menu-title text-gray-400 text-sm">Trade Instruments</div>
            <div className="trade-instruments-links grid grid-cols-2 grid-rows-2 gap-4 place-items-center rounded-xl p-6 mt-2 mb-4 bg-gray-100">
                <p className='text-black text-center'>Assets</p>
                <p className='text-black text-center'>Insurance</p>
                <p className='text-black text-center'>Product Basket</p>
                <p className='text-black text-center'>Operations</p>
            </div>
        <div className="markets-menu-title text-gray-400 text-sm">Markets</div>
            <div className="markets-links grid grid-cols-2 grid-rows-2 gap-4 place-items-center rounded-xl p-6 mt-2 mb-4 bg-gray-100">
                <p className='text-black text-center'>Assets</p>
                <p className='text-black text-center'>Insurance</p>
                <p className='text-black text-center'>Product Basket</p>
                <p className='text-black text-center'>Operations</p>
            </div>
        <div className="docs-menu-title text-gray-400 text-sm ">Docs</div>
            <div className="docs-links grid grid-cols-2 grid-rows-2 gap-8 place-items-center rounded-xl p-8 mt-2 mb-4 bg-gray-100">
                <p className='text-black text-center'>Whitepaper</p>
                <p className='text-black text-center'>Medium</p>
                <p className='text-black text-center'>Roadmap</p>
            </div>
      </div>
    </>
  )
}
