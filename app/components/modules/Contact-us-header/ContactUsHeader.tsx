import Head from 'next/head'
import { useState } from 'react'
import DropDown from '../../elements/drop-down/DropDown'
import styles from './contactUs-header.module.scss'

function ContactUsHeader() {
  const [regions, setRegions] = useState(['UAE', 'Saudi Arabia', 'USA'])

  return (
    <div>
      <Head>
        <title>Rizek</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <div>
          <span></span>
          <span>Speak with a Customer Support</span>
        </div>
        <span>|</span>

        <div>
          <DropDown defaultOption="Sharjah" regions={regions} />
        </div>
      </div>
    </div>
  )
}

export default ContactUsHeader
