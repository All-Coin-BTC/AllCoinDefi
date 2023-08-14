import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [displayHamburger, setDisplayHamburger] = React.useState(false);
  const [displayTradeInstruments, setDisplayTradeInstruments] =
    React.useState(false);
  const [displayMarkets, setDisplayMarkets] = React.useState(false);
  const [displayDocs, setDisplayDocs] = React.useState(false);
  function toggleHamburgerOnClick() {
    setDisplayTradeInstruments(false);
    setDisplayMarkets(false);
    setDisplayDocs(false);
    setDisplayHamburger(!displayHamburger);
  }
  return (
    <>
      <div className="mobile-navbar py-4 px-4 flex items-center justify-between">
        <div className="left-mobile-items flex items-center gap-2">
          <Link to="/">
            <img className="w-16" src="Logo 8.png" />
          </Link>
          <Link to="/">
            <p>ALLCOIN</p>
          </Link>
        </div>
        <div className="right-mobile-items">
          {!displayHamburger && (
            <img
              className="w-16"
              src="more.png"
              onClick={() => toggleHamburgerOnClick()}
            />
          )}
          {displayHamburger && (
            <img
              className="w-16"
              src="close.png"
              onClick={() => toggleHamburgerOnClick()}
            />
          )}
        </div>
      </div>
      <div
        className={` ${
          displayHamburger ? "hamburger-active" : "hamburger-inactive"
        } py-4 px-4 flex flex-col justify-start items-center mt-8`}
      >
        <div
          className="trade-instruments-menu-title  text-center text-3xl text-white cursor-pointer"
          onClick={() => setDisplayTradeInstruments(!displayTradeInstruments)}
        >
          Trade Instruments
        </div>
        <div
          className={`${
            displayTradeInstruments
              ? "trade-instruments-links-active"
              : "trade-instruments-links-inactive"
          } links-container text-white gap-3 flex flex-col`}
        >
          <Link to="/assets" onClick={() => toggleHamburgerOnClick()}>
            <p className=" text-center text-sm mt-4">Assets</p>
          </Link>
          <Link to="/insurance" onClick={() => toggleHamburgerOnClick()}>
            <p className=" text-center text-sm">Insurance</p>
          </Link>
          <Link to="/product-basket" onClick={() => toggleHamburgerOnClick()}>
            <p className=" text-center text-sm">Product Basket</p>
          </Link>
          <Link to="operations" onClick={() => toggleHamburgerOnClick()}>
            <p className=" text-center text-sm">Operations</p>
          </Link>
        </div>

        <div
          className="markets-menu-title text-center text-3xl text-white mt-8 cursor-pointer"
          onClick={() => setDisplayMarkets(!displayMarkets)}
        >
          Markets
        </div>
        <div
          className={`${
            displayMarkets ? "markets-links-active" : "markets-links-inactive"
          } links-container text-white gap-3 flex flex-col`}
        >
          <Link
            to="/markets-fixed-assets"
            onClick={() => toggleHamburgerOnClick()}
          >
            <p className=" text-center text-sm mt-4">Fixed Assets</p>
          </Link>
          <Link
            to="/markets-insurance-pools"
            onClick={() => toggleHamburgerOnClick()}
          >
            <p className=" text-center text-sm">Insurance Pools</p>
          </Link>
          <Link
            to="/markets-stable-coins"
            onClick={() => toggleHamburgerOnClick()}
          >
            <p className=" text-center text-sm">Stable Coin Pools</p>
          </Link>
          <Link to="/markets-allcoin" onClick={() => toggleHamburgerOnClick()}>
            <p className=" text-center text-sm ">AllCoin Pools</p>
          </Link>
        </div>

        <div
          className="docs-menu-title text-center text-3xl text-white mt-8 cursor-pointer "
          onClick={() => setDisplayDocs(!displayDocs)}
        >
          Docs
        </div>
        <div
          className={`${
            displayDocs ? "docs-links-active" : "docs-links-inactive"
          } links-container text-white gap-3 flex flex-col`}
        >
          <Link to="/" onClick={() => toggleHamburgerOnClick()}>
            <p className=" text-center text-sm mt-4">Whitepaper</p>
          </Link>
          <Link to="/" onClick={() => toggleHamburgerOnClick()}>
            <p className=" text-center text-sm">Medium</p>
          </Link>
          <Link to="/" onClick={() => toggleHamburgerOnClick()}>
            <p className=" text-center text-sm">Roadmap</p>
          </Link>
        </div>
      </div>
    </>
  );
}
