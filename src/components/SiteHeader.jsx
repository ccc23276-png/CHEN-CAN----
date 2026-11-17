import React, { useEffect, useState } from 'react'
import { navItems, profile } from '../data/site'

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="shell site-header__inner">
        <a className="brand" href="#top" aria-label="回到顶部">
          <span className="brand__cn">{profile.nameEn}</span>
          <span className="brand__en">PORTFOLIO 2026</span>
        </a>

        <nav className="site-nav" aria-label="主导航">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="site-nav__link">
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          联系我
          <span className="header-cta__dot" aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}
