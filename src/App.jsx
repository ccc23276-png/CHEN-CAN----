import React, { useEffect } from 'react'
import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import Profile from './components/Profile'
import SelectedWork from './components/SelectedWork'
import Capabilities from './components/Capabilities'
import Contact from './components/Contact'

export default function App() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const onClick = (event) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const link = event.target.closest?.('a[href^="#"]')
      if (!link) return
      const hash = link.getAttribute('href')
      if (!hash || hash === '#') return
      const target = document.getElementById(hash.slice(1))
      if (!target) return
      event.preventDefault()
      target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
      window.history.replaceState(null, '', hash)
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'))
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="site">
      <div className="grain" aria-hidden="true" />
      <SiteHeader />
      <main>
        <Hero />
        <Profile />
        <Capabilities />
        <SelectedWork />
        <Contact />
      </main>
    </div>
  )
}
