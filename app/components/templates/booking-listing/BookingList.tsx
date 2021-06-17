import { useState } from 'react'
import styles from './booking-list.module.scss'

import ContactUsHeader from '../../modules/Contact-us-header/ContactUsHeader'
import Banner from '../../modules/header/Header'
import Footer from '../../modules/footer/Footer'
import NavBar from '../../modules/nav-bar/NavBar'

function BookingList() {
  const [activeBookings, setActiveBooking] = useState([
    {
      id: 1,
      segmentName: 'Clearning',
      bookingID: 17100,
      bookingState: 'Booking Confirmed',
      bookingDate: '14 January 2020',
      bookingTime: '10:00 AM',
      bookingMedia: '/images/rizek-home-images/service-images/clearning-img.png',
      bookingDetail: ['House Keeping Bundle', '1 Bedroom Apartment'],
    },
    {
      id: 2,
      segmentName: 'Beauty and wellness',
      bookingID: 17100,
      bookingState: 'Hero Assigned',
      bookingDate: '14 January 2020',
      bookingTime: '10:00 AM',
      bookingMedia: '/images/rizek-home-images/service-images/clearning-img.png',
      bookingDetail: ['House Keeping Bundle', '1 Bedroom Apartment'],
    },
    {
      id: 3,
      segmentName: 'Automotive',
      bookingID: 17100,
      bookingState: 'Service in progress',
      bookingDate: '14 January 2020',
      bookingTime: '10:00 AM',
      bookingMedia: '/images/rizek-home-images/service-images/clearning-img.png',
      bookingDetail: ['House Keeping Bundle', '1 Bedroom Apartment'],
    },
    {
      id: 3,
      segmentName: 'Automotive',
      bookingID: 17100,
      bookingState: 'Booking Confirmed',
      bookingDate: '14 January 2020',
      bookingTime: '10:00 AM',
      bookingMedia: '/images/rizek-home-images/service-images/clearning-img.png',
      bookingDetail: ['House Keeping Bundle', '1 Bedroom Apartment'],
    },
    {
      id: 4,
      segmentName: 'Healthcare',
      bookingID: 17100,
      bookingState: 'Service Paused',
      bookingDate: '14 January 2020',
      bookingTime: '10:00 AM',
      bookingMedia: '/images/rizek-home-images/service-images/clearning-img.png',
      bookingDetail: ['House Keeping Bundle', '1 Bedroom Apartment'],
    },
  ])

  const getBookingState = (bookingState: string) => {
    if (bookingState === 'Booking Confirmed') {
      return styles.confirmed
    } else if (bookingState === 'Hero Assigned') {
      return styles.assigned
    } else if (bookingState === 'Service in progress') {
      return styles.progress
    } else if (bookingState === 'Service Paused') {
      return styles.paused
    } else {
      return ''
    }
  }

  return (
    <div className={styles.booking_listing}>
      <ContactUsHeader />

      <div className={styles.navbar_wrapper}>
        <NavBar />
      </div>

      <Banner
        bannerImage="/images/booking-assets/clearning-lady-png.png"
        headings={[
          'My Bookings',
          'Sit relax and trust our cleaning heroes',
          ' Get real time updates with Rizek App',
        ]}
      />

      <main className={styles.main_block}>
        <div className={styles.bookings}>
          {activeBookings.map((booking) => (
            <div className={styles.booking}>
              <div className={styles.booking_medial}>
                <img src={booking.bookingMedia} alt="" />
              </div>

              <section className={styles.booking_body}>
                
                <section className={styles.section_1}>
                  <div className={styles.service_name}>{booking.segmentName}</div>
                  <div className={styles.booking_id}>
                    <span> Booking ID: {booking.bookingID}</span>
                    <img src="/images/booking-assets/open.svg" alt="" />
                  </div>
                </section>

                <ul className={styles.section_2}>
                  {booking.bookingDetail.map((itm, idx) => (
                    <li key={idx}>{itm}</li>
                  ))}
                </ul>

                <section className={styles.section_3}>
                  <div className={styles.booking_time}>
                    <span>{booking.bookingDate}</span>
                    <div className={styles.time}>
                      <span>&#x25CF;</span> <span>{booking.bookingTime}</span>
                    </div>
                  </div>
                  <div
                    className={`${styles.booking_state} ${getBookingState(booking.bookingState)}`}
                  >
                    <span> {booking.bookingState}</span>
                  </div>
                </section>
              </section>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default BookingList
