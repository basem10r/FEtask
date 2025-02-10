import { useTranslation } from 'react-i18next'
import { Newsletter } from '@/components/Newsletter/Newsletter'
import styles from './Footer.module.scss'

const FOOTER_LINKS = {
  apps: [
    { key: 'shop', href: '#shop' },
    { key: 'giftCards', href: '#giftCards' },
    { key: 'wynnStories', href: '#wynnStories' },
    { key: 'slotsApp', href: '#slotsApp' },
    { key: 'mobileApp', href: '#mobileApp' },
    { key: 'responsibleGaming', href: '#responsibleGaming' },
  ],
  company: [
    { key: 'about', href: '#about' },
    { key: 'careers', href: '#careers' },
    { key: 'investor', href: '#investor' },
    { key: 'privacy', href: '#privacy' },
    { key: 'cookie', href: '#cookie' },
    { key: 'terms', href: '#terms' },
    { key: 'directory', href: '#directory' },
  ],
  locations: [
    { key: 'palace', href: '#palace' },
    { key: 'boston', href: '#boston' },
    { key: 'macau', href: '#macau' },
  ],
  social: [
    { key: 'facebook', href: '#facebook', icon: 'facebook-f.svg' },
    { key: 'android', href: '#android', icon: 'android.svg' },
    { key: 'apple', href: '#apple', icon: 'apple.svg' },
    { key: 'instagram', href: '#instagram', icon: 'instagram.svg' },
    { key: 'x', href: '#x', icon: 'x.svg' },
  ],
}

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <Newsletter />
      <div className={styles.footer__main}>
        <div className={styles.footer__container}>
          <div className={styles.footer__grid}>
            <div className={styles.footer__column}>
              {FOOTER_LINKS.apps.map(({ key, href }) => (
                <a key={key} href={href} className={styles.footer__link}>
                  {t(`footer.links.apps.${key}`)}
                </a>
              ))}
            </div>

            <div className={styles.footer__column}>
              {FOOTER_LINKS.company.map(({ key, href }) => (
                <a key={key} href={href} className={styles.footer__link}>
                  {t(`footer.links.company.${key}`)}
                </a>
              ))}
            </div>

            <div className={styles.footer__column}>
              {FOOTER_LINKS.locations.map(({ key, href }) => (
                <a key={key} href={href} className={styles.footer__link}>
                  {t(`footer.links.locations.${key}`)}
                </a>
              ))}
            </div>

            <div className={styles.footer__column}>
              <div className={styles.footer__address_container}>
                <address className={styles.footer__address}>
                  <span className={styles.footer__address_title}>
                    {t('footer.address.title')}
                  </span>
                  <span className={styles.footer__address_street}>
                    {t('footer.address.street')}
                  </span>
                  <span className={styles.footer__address_phone}>
                    {t('footer.address.phone')}
                  </span>
                </address>
                <div className={styles.footer__social}>
                  <p className={styles.footer__social_title}>
                    {t('footer.social.title')}
                  </p>
                  <div className={styles.footer__social_links}>
                    {FOOTER_LINKS.social.map(({ key, href, icon }) => (
                      <a
                        key={key}
                        href={href}
                        className={styles.footer__social_link}
                        aria-label={t(`footer.social.${key}`)}
                      >
                        <img
                          src={`./src/assets/icons/social/${icon}`}
                          alt={key}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.footer__bottom}>
            <a href="#doNotSell" className={styles.footer__privacy}>
              {t('footer.privacy.doNotSell')}
            </a>
            <p className={styles.footer__copyright}>
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
