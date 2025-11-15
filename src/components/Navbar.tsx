import { useState } from 'react';
import NavButton from '../assets/icons/nav-menu.svg';
import Store from '../assets/icons/storefront.svg';
import User from '../assets/icons/user.svg';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full top-0 left-0 z-50 px-6 md:px-16 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2 text-white font-bold text-xl">
        <img src={Store} alt="nft logo" className="w-7" />
        NFT Marketplace
      </div>

      <ul className="hidden md:flex items-center gap-10 text-white font-semibold">
        <li>
          <a href="#">Marketplace</a>
        </li>
        <li>
          <a href="#">Rankings</a>
        </li>
        <li>
          <a href="#">Connect a wallet</a>
        </li>
        <li>
          <button className="hidden md:flex items-center gap-2 bg-[#A259FF] text-white py-2 px-6 rounded-xl font-semibold">
            <img src={User} alt="user" />
            Sign Up
          </button>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
        <img src={NavButton} alt="Navigation menu" />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black/90 py-6 flex flex-col items-center gap-6 md:hidden">
          <a className="text-white text-lg font-semibold" href="#">
            Marketplace
          </a>
          <a className="text-white text-lg font-semibold" href="#">
            Rankings
          </a>
          <a className="text-white text-lg font-semibold" href="#">
            Connect a wallet
          </a>

          <button className="flex items-center gap-2 bg-[#A259FF] text-white py-2 px-6 rounded-xl font-semibold">
            <img src={User} alt="user" />
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}
