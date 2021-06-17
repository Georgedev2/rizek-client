import React from 'react'
import LineHeading from '../../elements/line-heading/LineHeading'
import styles from './pre-footer.module.scss'
import PlayStoreIcon from '../play-store-icons/PlayStoreIcon'

function PreFooter() {
  const mobileApp = [
    {
      link: '#4',
      logo: '/images/rizek-home-images/apple-store-black-bg.png',
      label: 'applePlay_Store_Logo',
    },
    {
      link: '#4',
      logo: '/images/rizek-home-images/google-store-icon-black-bg.png',
      label: 'googlePlay_Store_Logo',
    },
  ]
  return (
    <div className={styles.pre_footer}>
      <div>
        <div className={styles.pre_footer_firstChild}>
          <LineHeading
            label="Download Rizek App"
            lineStyle={styles.lineColor}
            textStyle={styles.textstyle}
          />
          <div className={`${styles.rizek_discount}`}>
            Get 30% off your first App booking
          </div>
          <div>
            <div className={styles.get_rizek_app}>
              Download Rizek app - enjoy 30% off on your first booking. Hurry up and enjoy all the
              benefits
            </div>
            <div className={styles.PlayStoreIcons}>
              {mobileApp.map((itm, idx) => (
                <div key={idx}>
                  <PlayStoreIcon link={itm.link} logo={itm.logo} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.pre_footer_lastChild}>
          <div className={styles.phone}>
            <img src="/images/rizek-home-images/rizek-phone.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreFooter
