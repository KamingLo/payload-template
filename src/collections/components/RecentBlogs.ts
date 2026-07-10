import type { Block } from 'payload'

export const RecentBlogsBlock: Block = {
  slug: 'recentBlogs',
  labels: {
    singular: 'Recent Blogs Grid',
    plural: 'Recent Blogs Grid',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Kabar & Artikel Terbaru',
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'Temukan pemikiran terbaru, kabar rilis, dan tips bermanfaat kami di bawah ini.',
    },
    {
      name: 'limit',
      type: 'number',
      label: 'Jumlah Artikel Maksimal',
      defaultValue: 3,
      min: 1,
    },
  ],
}
