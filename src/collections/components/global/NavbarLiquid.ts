import type { CollectionConfig } from 'payload'

export const NavbarLiquid: CollectionConfig = {
  slug: 'navbar-liquid',
  admin: {
    useAsTitle: 'brandName',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'brandName',
      type: 'text',
      required: true,
      defaultValue: 'Arang & Brisket',
    },
    {
      name: 'logo',
      type: 'relationship',
      relationTo: 'media',
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
        {
          name: 'isActive',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
  ],
}
