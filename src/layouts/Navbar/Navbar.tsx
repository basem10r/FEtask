import { useState } from 'react'
import { MenuList } from './MenuList/MenuList'
import { LanguageSwitcher } from '@/components/LanguageSwitcher/LanguageSwitcher'
import styles from './Navbar.module.scss'
import classNames from 'classnames'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto'
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <img
          src={'./src/assets/images/logo.svg'}
          alt="Wynn Resorts"
          className={styles.navbar__logo}
        />

        <button
          className={styles.navbar__toggle}
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span
            className={classNames(styles.navbar__toggle_line, {
              [styles['navbar__toggle_line--open']]: isOpen,
            })}
          />
        </button>

        <div
          className={classNames(styles.navbar__content, {
            [styles['navbar__content--open']]: isOpen,
          })}
        >
          <MenuList />
          {isOpen && <LanguageSwitcher />}
        </div>
        {!isOpen && <LanguageSwitcher />}
      </div>
    </nav>
  )
}
