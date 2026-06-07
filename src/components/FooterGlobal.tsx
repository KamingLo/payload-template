import React from 'react'

export interface FooterLink {
  label: string
  url: string
}

export interface FooterGlobalProps {
  copyright?: string
  links?: FooterLink[]
}

const defaultLinks: FooterLink[] = [
  { label: 'Kebijakan Privasi', url: '#privacy' },
  { label: 'Syarat & Ketentuan', url: '#terms' },
  { label: 'Hubungan Kemitraan', url: '#partnership' },
  { label: 'F.A.Q', url: '#faq' },
]

export default function FooterGlobal({
  copyright = '© 2026 Arang Premium & Brisket. Hak Cipta Dilindungi Undang-Undang.',
  links = defaultLinks,
}: FooterGlobalProps) {
  return (
    <footer className="footer-global" id="contact">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">ARANG & BRISKET</span>
            <p className="footer-brand-desc">
              Penyedia arang kelapa premium bersertifikat ekspor dan kuliner asap brisket autentik yang diasap lambat menggunakan kayu rambutan alami.
            </p>
          </div>
          <div className="footer-nav">
            <ul className="footer-links">
              {links.map((link, idx) => (
                <li key={idx} className="footer-link-item">
                  <a href={link.url} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p className="footer-copy">{copyright}</p>
          <div className="footer-socials">
            <a href="#instagram" className="social-link" aria-label="Instagram">Instagram</a>
            <a href="#whatsapp" className="social-link" aria-label="WhatsApp">WhatsApp</a>
            <a href="#email" className="social-link" aria-label="Email">Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
