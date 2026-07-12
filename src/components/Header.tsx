'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="container">
        <div>
          <Link className="header__logo" href="/">
            <Image
              src="/jb-foundation-header.png"
              alt="JB Foundation, Animal Rescue, Aizawl, Mizoram"
              width={200}
              height={60}
              priority
            />
          </Link>
        </div>
        <b id="toggle" onClick={toggleMenu}>
          <span></span>
        </b>
        <div>
          <ul className="main-menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="shelter">
              <Link href="/animal-shelter">Animal Shelter</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
