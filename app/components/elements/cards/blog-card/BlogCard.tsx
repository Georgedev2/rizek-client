import React from 'react'
import styles from './blog-card.module.scss'

interface BlogInterface {
  itm: {
    id: number
    CardMedia: string
    CardTitle: string
    cardContent: string
    postedOn: string
  }
}
function BlogCard({ itm }: BlogInterface) {
  return (
    <div className={styles.card} key={itm.id}>
      <div className={styles.CardMedia}>
        <img src={itm.CardMedia} alt="" />
      </div>
      <div>{itm.CardTitle}</div>
      <div>{itm.postedOn}</div>
      <div>{itm.cardContent}</div>
      <div>
        <a href="" className={styles.rizek_news}>
          Rizek News
        </a>
        <a href="" className={styles.beauty}>
          Beauty
        </a>
      </div>
    </div>
  )
}

export default BlogCard
