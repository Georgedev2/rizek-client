import React, { useState } from 'react'
import styles from './header-banner.module.scss'

interface HeaderBanner {
  label?: string
}

function HeaderBanner({ label }: HeaderBanner) {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.findAService}>{label}</div>
    </div>
  )
}

export default HeaderBanner
