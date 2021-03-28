import Link from 'next/link'

export default function fancyLink( {destination, a11yText, label, extraClasses, span} ) {
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