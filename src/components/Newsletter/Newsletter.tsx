import { useTranslation } from 'react-i18next'
import styles from './Newsletter.module.scss'
import { Button } from '@/components/Button/Button'

export const Newsletter = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.newsletter}>
      <div className={styles.newsletter__container}>
        <div className={styles.newsletter__content}>
          <h2 className={styles.newsletter__title}>{t('newsletter.title')}</h2>
          <div className={styles.newsletter__text}>
            <p className={styles.newsletter__description}>
              {t('newsletter.description')}
            </p>
            <div className={styles.newsletter__form}>
              <input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className={styles.newsletter__input}
              />

              <Button variant="outline" className={styles.newsletter__button}>
                {t('newsletter.button')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
