'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export interface NavLink {
  label: string
  url: string
  isActive?: boolean | null
}

export interface NavbarLiquidProps {
  brandName?: string
  logoUrl?: string
  links?: NavLink[]
}

const defaultLinks: NavLink[] = [
  { label: 'Beranda', url: '#home', isActive: true },
  { label: 'Produk Kami', url: '#categories', isActive: false },
  { label: 'Tentang Kami', url: '#about', isActive: false },
  { label: 'Hubungi Kami', url: '#contact', isActive: false },
]

export default function NavbarLiquid({
  brandName = 'Arang & Brisket',
  logoUrl,
  links = defaultLinks,
}: NavbarLiquidProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar-liquid">
      <div className="navbar-container">
        <a href="#home" className="navbar-brand">
          {logoUrl ? (
            <Image src={logoUrl} alt={brandName} width={40} height={40} className="navbar-logo" />
          ) : (
            <span className="navbar-logo-text">{brandName}</span>
          )}
        </a>

        {/* Hamburger Icon */}
        <button 
          className={`navbar-toggle ${isOpen ? 'is-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation Links */}
        <div className={`navbar-menu ${isOpen ? 'is-open' : ''}`}>
          <ul className="navbar-links">
            {links.map((link, idx) => (
              <li key={idx} className="navbar-item">
                <a
                  href={link.url}
                  className={`navbar-link ${link.isActive ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
