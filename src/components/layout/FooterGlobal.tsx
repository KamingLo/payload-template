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
  { label: 'Tentang Kami', url: '#about' },
  { label: 'Kontak', url: '#contact' },
]

export default function FooterGlobal({
  copyright = '© 2026 Template Web. Hak Cipta Dilindungi Undang-Undang.',
  links = defaultLinks,
}: FooterGlobalProps) {
  return (
    <footer className="footer-global" id="contact">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">LOGO TEMPLATE</span>
            <p className="footer-brand-desc">
              Sebuah kerangka halaman (page builder template) modern dengan desain flat, minimalis, dan borderless yang sepenuhnya dikonfigurasi melalui Payload CMS.
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
            <a href="#social1" className="social-link" aria-label="Social Link 1">Medsos 1</a>
            <a href="#social2" className="social-link" aria-label="Social Link 2">Medsos 2</a>
            <a href="#social3" className="social-link" aria-label="Social Link 3">Medsos 3</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
