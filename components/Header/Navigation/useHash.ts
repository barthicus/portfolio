'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

export const useHash = () => {
  const params = useParams()
  const [hash, setHash] = useState('')

  useEffect(() => {
    const currentHash = window.location.hash.replace('#', '')
    setHash(currentHash)
  }, [params])

  return hash
}
