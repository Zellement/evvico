import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

export default function fancyLink( {destination, a11yText, label, extraClasses, span} ) {
  const router = useRouter()

  if (router.pathname === destination ){
    if (router.pathname === "/make-an-enquiry" ){
      extraClasses = `${extraClasses} bg-gradient-to-t from-blue-800 to-blue-900`
    }
    else {
      extraClasses = `${extraClasses} text-blue-200`
    }
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