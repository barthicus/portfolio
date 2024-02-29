'use client'

import { useEffect } from 'react'
import { useParams } from 'next/navigation'

export const useHashScroll = () => {
  const params = useParams()

  // navigate to the correct section when the page loads
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')

    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [params])
}
