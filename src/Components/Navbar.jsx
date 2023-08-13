import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [displayHamburger, setDisplayHamburger] = React.useState(false);
  const [displayTradeInstruments, setDisplayTradeInstruments] =
    React.useState(false);
  const [displayMarkets, setDisplayMarkets] = React.useState(false);
  const [displayDocs, setDisplayDocs] = React.useState(false);
  function closeHamburgerOnClick() {
    setDisplayTradeInstruments(false);
    setDisplayMarkets(false);
    setDisplayDocs(false);
    setDisplayHamburger(!displayHamburger);
  }
  return (
    <>
      <div className="mobile-navbar py-4 px-4 flex items-center justify-between">
        <div className="left-mobile-items flex items-center gap-2">
          <img className="w-16" src="Logo 8.png" />
          <p>ALLCOIN</p>
        </div>
        <div className="right-mobile-items">
          {!displayHamburger && (
            <img
              className="w-16"
              src="more.png"
              onClick={() => setDisplayHamburger(!displayHamburger)}
            />
          )}
          {displayHamburger && (
            <img
              className="w-16"
              src="close.png"
              onClick={() => setDisplayHamburger(!displayHamburger)}
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
          className="trade-instruments-menu-title  text-center text-3xl text-white"
          onClick={() => setDisplayTradeInstruments(!displayTradeInstruments)}
        >
          Trade Instruments
        </div>
        <div
          className={`${
            displayTradeInstruments
              ? "trade-instruments-links-active"
              : "trade-instruments-links-inactive"
          } links-container text-white`}
        >
          <Link to="/assets" onClick={() => closeHamburgerOnClick()}>
            <p className=" text-center">Assets</p>
          </Link>
          <Link to="/insurance" onClick={() => closeHamburgerOnClick()}>
            <p className=" text-center">Insurance</p>
          </Link>
          <Link to="/product-basket" onClick={() => closeHamburgerOnClick()}>
            <p className=" text-center">Product Basket</p>
          </Link>
          <Link to="operations" onClick={() => closeHamburgerOnClick()}>
            <p className=" text-center ">Operations</p>
          </Link>
        </div>

        <div
          className="markets-menu-title text-center text-3xl text-white mt-8"
          onClick={() => setDisplayMarkets(!displayMarkets)}
        >
          Markets
        </div>
        <div
          className={`${
            displayMarkets ? "markets-links-active" : "markets-links-inactive"
          } links-container text-white`}
        >
          <Link to="/assets" onClick={() => closeHamburgerOnClick()}>
            <p className=" text-center">Fixed Assets</p>
          </Link>
          <Link to="/insurance" onClick={() => closeHamburgerOnClick()}>
            <p className=" text-center">Insurance Pools</p>
          </Link>
          <Link to="/product-basket" onClick={() => closeHamburgerOnClick()}>
            <p className=" text-center">Stable Coin Pools</p>
          </Link>
          <Link to="operations" onClick={() => closeHamburgerOnClick()}>
            <p className=" text-center ">AllCoin Pools</p>
          </Link>
        </div>

        <div
          className="docs-menu-title text-center text-3xl text-white mt-8 "
          onClick={() => setDisplayDocs(!displayDocs)}
        >
          Docs
        </div>
        <div
          className={`${
            displayDocs ? "docs-links-active" : "docs-links-inactive"
          } links-container text-white`}
        >
          <Link to="/assets" onClick={() => closeHamburgerOnClick()}>
            <p className=" text-center">Assets</p>
          </Link>
          <Link to="/insurance" onClick={() => closeHamburgerOnClick()}>
            <p className=" text-center">Insurance</p>
          </Link>
          <Link to="/product-basket" onClick={() => closeHamburgerOnClick()}>
            <p className=" text-center">Product Basket</p>
          </Link>
          <Link to="operations" onClick={() => closeHamburgerOnClick()}>
            <p className=" text-center ">Operations</p>
          </Link>
        </div>
      </div>
    </>
  );
}
