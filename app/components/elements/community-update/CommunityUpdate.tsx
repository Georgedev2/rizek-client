import React from 'react'
import styles from './community-update.module.scss'

interface communityUpdateProps {
  update: {
    news: string
    linkToNews: string
  }
  variant?: string
}

function CommunityUpdate({ update, variant }: communityUpdateProps) {
  return (
    <div className={`${variant} ${styles.communityUpdate}`}>
      <div>
        <div className={styles.news}>
          <span className={styles.updateIcon}></span>
          <span>{update.news}</span>
          <a href={update.linkToNews} className={styles.learnMore}>
            Learn More
          </a>
        </div>

        <span className={styles.closeBtn}>&#x2715;</span>
      </div>
    </div>
  )
}

export default CommunityUpdate
