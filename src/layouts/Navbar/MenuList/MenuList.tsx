import { useTranslation } from 'react-i18next'
import styles from './MenuList.module.scss'

const NAV_ITEMS = [
  { key: 'rooms', href: '#rooms' },
  { key: 'rewards', href: '#rewards' },
  { key: 'offers', href: '#offers' },
  { key: 'dining', href: '#dining' },
  { key: 'entertainment', href: '#entertainment' },
  { key: 'meetings', href: '#meetings' }
]

export const MenuList = () => {
  const { t } = useTranslation()

  return (
    <ul className={styles.menu}>
      {NAV_ITEMS.map(({ key, href }) => (
        <li key={key} className={styles.menu__item}>
          <a href={href} className={styles.menu__link}>
            {t(`navigation.${key}`)}
          </a>
        </li>
      ))}
    </ul>
  )
} 