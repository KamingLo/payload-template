import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import NavbarLiquid, { NavLink } from '@/components/NavbarLiquid'
import FooterGlobal, { FooterLink } from '@/components/FooterGlobal'
import RenderBlocks from '@/components/RenderBlocks'
import { redirect, notFound } from 'next/navigation'
import '../styles.css'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function CMSPage(props: PageProps) {
  const { slug } = await props.params

  // Redirect to home if slug is home or main
  if (slug === 'home' || slug === 'main') {
    redirect('/')
  }

  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // 1. Fetch Page
  const pageRes = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: slug },
    },
    limit: 1,
  })

  const pageData = pageRes.docs[0]
  if (!pageData) {
    notFound()
  }

  // 2. Fetch Navbar
  const navbarRes = await payload.find({
    collection: 'navbar-liquid',
    limit: 1,
  })
  const navbarData = navbarRes.docs[0]

  // 3. Fetch Footer
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
        <RenderBlocks layout={pageData.layout} />
      </main>

      {/* Footer Component */}
      <FooterGlobal {...footerProps} />
    </div>
  )
}
