import React from 'react'
import { BasePayload, getPayload } from 'payload'
import config from '@payload-config'
import { Media } from '@/payload-types'
import Image from 'next/image'

export const Icons = async () => {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'settings' })
  const darkModelIcon = settings.darkModeIcon as Media
  const lightModelIcon = settings.lightModeIcon as Media
  return (
    <>
      <Image
        src={darkModelIcon.url || ''}
        alt={darkModelIcon.alt}
        width={darkModelIcon.width || 640}
        height={darkModelIcon.height || 640}
        className={'dark-mode-image'}
      />
      <Image
        src={lightModelIcon.url || ''}
        alt={lightModelIcon.alt}
        width={lightModelIcon.width || 640}
        height={lightModelIcon.height || 640}
        className={'light-mode-image'}
      />
    </>
  )
}
