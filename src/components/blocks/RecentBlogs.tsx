import React from 'react'
import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@/payload.config'

export interface RecentBlogsProps {
  title?: string | null
  subtitle?: string | null
  limit?: number | null
}

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

export default async function RecentBlogs({
  title = 'Kabar & Artikel Terbaru',
  subtitle = 'Temukan artikel terbaru, tips, dan kabar rilis kami.',
  limit = 3,
}: RecentBlogsProps) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  
  const blogsRes = await payload.find({
    collection: 'blogs',
    sort: '-publishedAt',
    limit: limit || 3,
  })
  
  const blogs = blogsRes.docs

  return (
    <section className="recent-blogs-section" id="blog">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        <div className="section-line"></div>
      </div>

      <div className="blogs-grid">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog, idx) => {
            const featuredImg = getImageUrl(blog.featuredImage) || 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
            return (
              <a href={`/blog/${blog.slug}`} key={idx} className="blog-card">
                <div className="blog-image-container">
                  <Image
                    src={featuredImg}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="blog-img"
                  />
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <span className="blog-category">{blog.category}</span>
                    <span className="blog-meta-divider">•</span>
                    <span className="blog-date">{formatDate(blog.publishedAt)}</span>
                  </div>
                  <h3 className="blog-card-title">{blog.title}</h3>
                  <p className="blog-card-excerpt">{blog.excerpt}</p>
                  <span className="blog-card-link">
                    Baca Selengkapnya
                    <svg className="cta-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </a>
            )
          })
        ) : (
          <p className="no-blogs-text">Belum ada artikel blog yang diterbitkan.</p>
        )}
      </div>
    </section>
  )
}
