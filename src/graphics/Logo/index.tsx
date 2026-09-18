import React from 'react'
import { BasePayload, getPayload } from 'payload'
import config from '@payload-config'
import { Media } from '@/payload-types'
import Image from 'next/image'

export const Logos = async () => {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'settings' })
  const darkModelLogo = settings.darkModeLogo as Media
  const lightModelLogo = settings.lightModeLogo as Media
  return (
    <>
      <Image
        src={darkModelLogo.url || ''}
        alt={darkModelLogo.alt}
        width={darkModelLogo.width || 640}
        height={darkModelLogo.height || 640}
        className={'dark-mode-image'}
      />
      <Image
        src={lightModelLogo.url || ''}
        alt={lightModelLogo.alt}
        width={lightModelLogo.width || 640}
        height={lightModelLogo.height || 640}
        className={'light-mode-image'}
      />
    </>
  )
}
