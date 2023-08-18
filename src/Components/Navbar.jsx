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
          <Link to="/" onClick={() => toggleHamburgerOnClick()}>
            <img className="w-16" src="Logo 8.png" />
          </Link>
          <Link to="/" onClick={() => toggleHamburgerOnClick()}>
            <p>ALLCOIN</p>
          </Link>
        </div>
        <div className="right-mobile-items">
          {!displayHamburger && (
            <img
              className="w-8"
              src="more.png"
              onClick={() => toggleHamburgerOnClick()}
            />
          )}
          {displayHamburger && (
            <img
              className="w-8"
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
          Instruments
        </div>
        <div
          className={`${
            displayTradeInstruments
              ? "trade-instruments-links-active"
              : "trade-instruments-links-inactive"
          } links-container text-white gap-3 flex flex-col`}
        >
          <Link to="/warehousing" onClick={() => toggleHamburgerOnClick()}>
            <p className=" text-center text-sm mt-4">Warehousing</p>
          </Link>
          <Link to="/logistics" onClick={() => toggleHamburgerOnClick()}>
            <p className=" text-center text-sm">Logistics</p>
          </Link>
        </div>

        <div
          className="markets-menu-title text-center text-3xl text-white mt-8 cursor-pointer"
          onClick={() => setDisplayMarkets(!displayMarkets)}
        >
          Liquidity Pools
        </div>
        <div
          className={`${
            displayMarkets ? "markets-links-active" : "markets-links-inactive"
          } links-container text-white gap-3 flex flex-col`}
        >
          <Link
            className="mt-4"
            to="/working-capital-pools"
            onClick={() => toggleHamburgerOnClick()}
          >
            <p className=" text-center text-sm">Working Capital Pools</p>
          </Link>
          <Link to="/insurance-pools" onClick={() => toggleHamburgerOnClick()}>
            <p className=" text-center text-sm ">Insurance Pools</p>
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
