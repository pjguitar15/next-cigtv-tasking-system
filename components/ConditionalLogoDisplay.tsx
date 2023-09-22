import React from 'react'
import Image from 'next/image'
import pclc from '../assets/pclc-logo.png'
import cheonbo from '../assets/cheonbo-logo.png'
import upf from '../assets/upf-logo.png'

interface ConditionalLogoDisplayProps {
  organization?: string
}

const ConditionalLogoDisplay = ({
  organization,
}: ConditionalLogoDisplayProps) => {
  return (
    <>
      {organization?.toLowerCase() === 'pclc' && (
        <div className='w-14 absolute right-7 top-4 bg-white rounded-full p-2'>
          <Image src={pclc} alt='' width={400} height={400} />
        </div>
      )}

      {organization?.toLowerCase() === 'cheonbo' && (
        <div className='w-14 absolute right-7 top-4 bg-white rounded-full p-2'>
          <Image src={cheonbo} alt='' width={400} height={400} />
        </div>
      )}

      {organization?.toLowerCase() === 'upf' && (
        <div className='w-14 absolute right-7 top-4 bg-white rounded-full p-2'>
          <Image src={upf} alt='' width={400} height={400} />
        </div>
      )}
    </>
  )
}

export default ConditionalLogoDisplay
