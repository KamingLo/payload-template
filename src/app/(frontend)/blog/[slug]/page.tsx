import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import NavbarLiquid, { NavLink } from '@/components/layout/NavbarLiquid'
import FooterGlobal, { FooterLink } from '@/components/layout/FooterGlobal'
import RichText from '@/components/blocks/RichText'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import '../../styles.css'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

// Map Helper for Media fields
const getImageUrl = (imageField: any): string | undefined => {
  if (!imageField) return undefined
  if (typeof imageField === 'object' && imageField.url) {
    return imageField.url
  }
  return undefined
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function BlogPage(props: PageProps) {
  const { slug } = await props.params

  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // 1. Fetch Blog Post by slug
  const blogRes = await payload.find({
    collection: 'blogs',
    where: {
      slug: { equals: slug },
    },
    limit: 1,
  })

  const blog = blogRes.docs[0]
  if (!blog) {
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

  // Extract author email or fallback
  const authorName = blog.author && typeof blog.author === 'object' && 'email' in blog.author 
    ? blog.author.email 
    : 'Penulis'

  // Extract gallery images
  const galleryImages = blog.gallery?.map((img: any) => getImageUrl(img)).filter(Boolean) as string[]

  return (
    <div className="landing-page">
      {/* Navbar Component */}
      <NavbarLiquid {...navbarProps} />

      {/* Main Blog Post Content */}
      <main className="landing-main blog-post-page">
        {/* Back Link */}
        <a href="/blog" className="blog-back-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Kembali ke Daftar Blog
        </a>

        <article className="blog-article">
          {/* Header */}
          <header className="blog-post-header">
            <div className="blog-post-meta">
              <span className="blog-post-category">{blog.category}</span>
              <span className="blog-post-meta-divider">•</span>
              <span className="blog-post-date">{formatDate(blog.publishedAt)}</span>
            </div>
            <h1 className="blog-post-title">{blog.title}</h1>
            <p className="blog-post-excerpt">{blog.excerpt}</p>
            <div className="blog-post-author">
              <span>Oleh</span> <strong>{authorName}</strong>
            </div>
          </header>

          {/* Featured Image */}
          {getImageUrl(blog.featuredImage) && (
            <div className="blog-post-featured-image">
              <img src={getImageUrl(blog.featuredImage)} alt={blog.title} />
            </div>
          )}

          {/* Body Content */}
          <div className="blog-post-content">
            <RichText content={blog.content} />
          </div>

          {/* Image Gallery */}
          {galleryImages && galleryImages.length > 0 && (
            <div className="blog-post-gallery-section">
              <h3 className="gallery-title">Galeri Foto</h3>
              <div className="blog-post-gallery-grid">
                {galleryImages.map((url, index) => (
                  <div key={index} className="gallery-image-wrapper">
                    <img src={url} alt={`Foto Galeri ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      {/* Footer Component */}
      <FooterGlobal {...footerProps} />
    </div>
  )
}
