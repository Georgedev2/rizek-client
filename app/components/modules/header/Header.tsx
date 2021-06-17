import React from 'react'
import Link from 'next/link'
import styles from './header.module.scss'
import { Button } from '@material-ui/core'

interface BannerProps {
  headings: string[]
  navigation?: {
    link: ''
    label: ''
  }[]
  bannerImage: string
}

function Header({ headings, navigation, bannerImage }: BannerProps) {
  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <section>
          <div className={styles.header_links}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/booking">
              <a>My Bookings</a>
            </Link>
          </div>

          <div className={styles.heading1}>{headings[0]}</div>
          <div className={styles.heading2}>{headings[1]}</div>
          <div className={styles.heading3}>
            {headings[2]} {headings[2] && <a href="">Download Now!</a>}
          </div>

          <Button className={styles.btn}> Watch Video</Button>
        </section>

        <section className={styles.header_img}>
          <img src={bannerImage} alt="" />
        </section>
      </div>
    </div>
  )
}

export default Header
