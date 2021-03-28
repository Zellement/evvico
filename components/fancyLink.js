import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

export default function fancyLink( {destination, a11yText, label, extraClasses, span} ) {
  const router = useRouter()

  if (router.pathname === destination ){
    extraClasses = `${extraClasses} text-blue-200`
  }

  return (
    <Link href={destination}>
      <a aria-label={a11yText} className={`${extraClasses}`}>
        {span ? <span className='block text-sm text-blue-100 lg:text-blue'>{ span }</span> : null }
        {label}
      </a>
    </Link>
  )
}

//