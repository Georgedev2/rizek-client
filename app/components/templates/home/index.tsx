import { useState } from 'react'

import styles from './Home.module.scss'

import Footer from '../../modules/footer/Footer'
import ContactUsHeader from '../../modules/Contact-us-header/ContactUsHeader'
import CommunityUpdate from '../../elements/community-update/CommunityUpdate'

import HeaderBanner from '../../elements/header-banner/HeaderBanner'
import LineHeading from '../../elements/line-heading/LineHeading'
import NavBar from '../../modules/nav-bar/NavBar'
import PreFooter from '../../modules/pre-footer/PreFooter'

/* ---- COMPONENT FROM MATERIAL-UL------- */
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'

import { Grid } from '@material-ui/core'

export default function index() {
  /* ===============SERVICE DATA======================= */
  const services = [
    {
      id: 1,
      cardMedia: '/images/rizek-home-images/service-images/clearning-img.png',
      cardTitle: 'Cleaning',
      cardContent: `Our trained medical professionals will come to your.`,
      cardButton: <Button endIcon={<span>&#x2192;</span>}>Book Now</Button>,
    },
    {
      id: 2,
      cardMedia: '/images/rizek-home-images/service-images/doctor-img.png',
      cardTitle: 'Health Care',
      cardContent: `Our trained medical professionals will come to your.`,
      cardButton: <Button endIcon={<span>&#x2192;</span>}>Book Now</Button>,
    },
    {
      id: 3,
      cardMedia: '/images/rizek-home-images/service-images/beauty-and-wellness-img.png',
      cardTitle: 'Beauty and Wellness',
      cardContent: `Our trained medical professionals will come to your.`,
      cardButton: <Button endIcon={<span>&#x2192;</span>}>Book Now</Button>,
    },
    {
      id: 4,
      cardMedia: '/images/rizek-home-images/service-images/maintainance-img.png',
      cardTitle: 'Maintainance',
      cardContent: `Writing that manually probably wouldn't be fun. It would`,
      cardButton: <Button endIcon={<span>&#x2192;</span>}>Book Now</Button>,
    },
  ]

  const whyRizek = [
    {
      id: 1,
      CardImage: '/images/rizek-home-images/why-rizek/img-2.png',
      CardTitle: 'Trusted verified professionals',
      cardBody: 'Well-defined vetting, verifying and training protocols.',
    },
    {
      id: 2,
      CardImage: '/images/rizek-home-images/why-rizek/img-2.png',
      CardTitle: `Convenience and transparency`,
      cardBody: 'Unfettered access to services with ease and assurance.',
    },
    {
      id: 3,
      CardImage: '/images/rizek-home-images/why-rizek/img-2.png',
      CardTitle: 'Convenience and transparency',
      cardBody: 'Unfettered access to services with ease and assurance.',
    },
  ]

  /* ===============RIZEK STEPS DATA======================= */
  const steps = [
    {
      id: 1,
      cardMedia: '/images/rizek-home-images/steps/step1.png',
      cardTitle: 'Place a request',
      cardContent: `Add the services you need to your cart with extra info.`,
    },
    {
      id: 2,
      cardMedia: '/images/rizek-home-images/steps/step2.png',
      cardTitle: 'Manage request',
      cardContent: `Track the request status and modify it as you please. `,
    },
    {
      id: 3,
      cardMedia: '/images/rizek-home-images/steps/step3.png',
      cardTitle: 'Rate and Review',
      cardContent: `Provide feedback to your Hero, once the service is complete`,
    },
  ]

  return (
    <div className={styles.home}>
      <ContactUsHeader />
      <CommunityUpdate
        update={{
          news: 'A note to our community regarding covid-19',
          linkToNews: '#rre',
        }}
      />
      <NavBar />
      <HeaderBanner
        label="On-demand services 
          at your fingertips"
      />
      <div className={styles.services}>
        {services.map((service, idx) => (
          <div key={idx} className={styles.service}>
            <div>
              <img src={service.cardMedia} alt="" />
            </div>

            <div>{service.cardTitle}</div>
            <div>{service.cardContent}</div>
            <div>{service.cardButton}</div>
          </div>
        ))}
      </div>

      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div>
            <LineHeading label="How it Works" />
            <div className={styles.heading}>Super easy steps</div>
          </div>
          <div className={styles.image1}></div>
        </div>

        {/* ======= RIZEK STEPS CARDS=========== */}
        <Grid container spacing={3}>
          {steps.map((step) => (
            <Grid item key={step.id} xs={12} sm={6} lg={4}>
              <Card elevation={0} className={styles.step}>
                <CardMedia image={step.cardMedia} className={styles.step_img} />

                <div className={styles.stepNo}>0{step.id}</div>
                <div className={styles.stepTitle}>{step.cardTitle}</div>
                <div className={styles.cardContent}>{step.cardContent}</div>
              </Card>
            </Grid>
          ))}
        </Grid>

        <div className={styles.wrapper}>
          <div>
            <LineHeading label="Top discounts" />
            <div className={styles.heading}>Best offers</div>
          </div>
        </div>

        {/* =======RIZEK HEALTH CARE SERVICE BARNER=========== */}
        <div className={styles.health_care_service}>
          <img src="/images/rizek-home-images/health_care.png" alt="" />
        </div>

        <div className={styles.wrapper}>
          <div>
            <LineHeading label="Why Rizek" />
            <div className={styles.heading}>Rizek makes your life easier</div>
          </div>
          <div className={styles.image}></div>
        </div>

        <div className={styles.readMore}>
          <Button endIcon={<span>&#x2192;</span>}>Read more About Us</Button>
        </div>

        <div className={styles.cards}>
          {whyRizek.map((itm, idx) => (
            <div key={idx} className={styles.card}>
              <img src={itm.CardImage} alt="" />
              <div>{itm.CardTitle}</div>
              <div>{itm.cardBody}</div>
            </div>
          ))}
        </div>
      </main>
      <PreFooter />
      <Footer />
    </div>
  )
}
