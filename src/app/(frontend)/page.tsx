import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import NavbarLiquid, { NavLink } from '@/components/layout/NavbarLiquid'
import FooterGlobal, { FooterLink } from '@/components/layout/FooterGlobal'
import RenderBlocks from '@/components/RenderBlocks'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  // 1. Fetch Navbar
  const navbarRes = await payload.find({
    collection: 'navbar-liquid',
    limit: 1,
  })
  const navbarData = navbarRes.docs[0]

  // 2. Fetch Page with slug 'home' or 'main'
  const pageRes = await payload.find({
    collection: 'pages',
    where: {
      or: [
        { slug: { equals: 'home' } },
        { slug: { equals: 'main' } },
      ],
    },
    limit: 1,
  })
  const pageData = pageRes.docs[0]

  // 4. Fetch Footer
  const footerRes = await payload.find({
    collection: 'footer-global',
    limit: 1,
  })
  const footerData = footerRes.docs[0]

  // Map Helper for Media fields
  const getImageUrl = (imageField: any): string | undefined => {
    if (!imageField) return undefined
    if (typeof imageField === 'object' && imageField.url) {
      return imageField.url
    }
    return undefined
  }

  // Parse Navbar props
  const navbarProps = navbarData
    ? {
        brandName: navbarData.brandName,
        logoUrl: getImageUrl(navbarData.logo),
        links: navbarData.links?.map((l) => ({
          label: l.label,
          url: l.url,
          isActive: l.isActive,
        })) as NavLink[],
      }
    : {}

  // Parse Footer props
  const footerProps = footerData
    ? {
        copyright: footerData.copyright,
        links: footerData.links?.map((l) => ({
          label: l.label,
          url: l.url,
        })) as FooterLink[],
      }
    : {}

  return (
    <div className="landing-page">
      {/* 1. Navbar Component */}
      <NavbarLiquid {...navbarProps} />

      {/* Main Content Wrapper */}
      <main className="landing-main">
        {/* Dynamic Block Layout */}
        <RenderBlocks layout={pageData?.layout} />

        {/* Admin Quick Link Badge */}
        <div className="admin-quick-bar">
          <div className="admin-quick-card">
            <div className="status-indicator-pulse"></div>
            <p className="admin-status-text">
              {user ? `Halo, ${user.email}!` : 'Konten sedang menggunakan fallback data default.'}
            </p>
            <a
              className="admin-link-button"
              href={payloadConfig.routes.admin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user ? 'Buka Admin Panel' : 'Masuk ke Admin Panel'}
            </a>
          </div>
        </div>
      </main>

      {/* Footer Component */}
      <FooterGlobal {...footerProps} />
    </div>
  )
}
