import React from 'react'
import styles from './line-heading.module.scss'

interface LineHeadingProp {
  label: string
  lineStyle?: string
  textStyle?: string
  className?:string
}
function LineHeading({ label, lineStyle, textStyle, className }: LineHeadingProp) {
  return (
    <div className={styles.title}>
      <span className={` ${lineStyle}  ${styles.line} `}></span>
      <span className={`${textStyle} ${styles.label} `}>{label} </span>
    </div>
  )
}

export default LineHeading
