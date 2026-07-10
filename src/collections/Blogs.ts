import type { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'category', 'publishedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Judul Artikel Template',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      defaultValue: 'Ini adalah kutipan singkat atau ringkasan dari artikel blog yang memberikan gambaran umum tentang isi tulisan.',
    },
    {
      name: 'featuredImage',
      type: 'relationship',
      relationTo: 'media',
      required: true,
      label: 'Gambar Utama',
    },
    {
      name: 'gallery',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
      label: 'Galeri Foto Tambahan',
      admin: {
        description: 'Pilih beberapa foto tambahan untuk ditampilkan di bagian galeri artikel.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Konten Artikel',
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      label: 'Tanggal Rilis',
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: 'category',
      type: 'text',
      label: 'Kategori',
      defaultValue: 'Teknologi',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      label: 'Penulis',
    },
  ],
}
