import { useTranslation } from 'react-i18next'
import { useState, useRef, useEffect } from 'react'
import classNames from 'classnames'
import styles from './LanguageSwitcher.module.scss'

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'عربي' }
]

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode)
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = langCode
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currentLanguage = LANGUAGES.find(lang => lang.code === i18n.language) || LANGUAGES[0]

  return (
    <div className={styles.switcher} ref={dropdownRef}>
      <button
        className={styles.switcher__button}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={t('common:language.select')}
      >
        {currentLanguage.label}
      </button>

      <div 
        className={classNames(styles.switcher__dropdown, {
          [styles['switcher__dropdown--open']]: isOpen
        })}
        role="listbox"
        aria-label={t('common:language.select')}
      >
        {LANGUAGES.map(({ code }) => (
          <button
            key={code}
            className={classNames(styles.switcher__option, {
              [styles['switcher__option--active']]: code === i18n.language
            })}
            onClick={() => handleLanguageChange(code)}
            role="option"
            aria-selected={code === i18n.language}
          >
            {t(`common:language.${code}`)}
          </button>
        ))}
      </div>
    </div>
  )
} 