import { useEffect, useState } from 'react'

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('')

  // update the active section based on scroll position
  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]')

    const windowHeight = window.innerHeight

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: windowHeight > 900 ? 0.5 : 0.1
      }
    )

    sections.forEach(section => {
      observer.observe(section)
    })

    return () => {
      sections.forEach(section => {
        observer.unobserve(section)
      })
    }
  }, [])

  return activeSection
}
