import type { CollectionConfig } from 'payload'

export const FooterGlobal: CollectionConfig = {
  slug: 'footer-global',
  admin: {
    useAsTitle: 'copyright',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'copyright',
      type: 'text',
      required: true,
      defaultValue: '© 2026 Arang Premium & Brisket. All rights reserved.',
    },
    {
      name: 'links',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
