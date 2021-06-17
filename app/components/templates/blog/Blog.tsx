import { useState } from 'react'
import styles from './blog.module.scss'

import Header from '../../modules/header/Header'
import NavBar from '../../../components/modules/nav-bar/NavBar'
import Footer from '../../../components/modules/footer/Footer'

import SearchBar from '../../elements/search-bar/SearchBar'
import SubscribeResponsive from '../../modules/subscribe/subscribe-responsive/SubscribeResponsive'
import BlogCard from '../../elements/cards/blog-card/BlogCard'
import Subscribe from '../../modules/subscribe/subscrib-mobile/SubscribeMobile'

/*============== UI COMPONENT FROM MATERIAL-UL============== */
import Button from '@material-ui/core/Button'

function Blog() {
  const [blogPosts, setBlogPost] = useState([
    {
      id: 1,
      CardMedia: '/images/rizek-home-images/why-rizek/img-2.png',
      CardTitle: 'The Wonders of Coconut Oil for Face',
      cardContent:
        'Helping to keep each other safe during COVID-19. We’re actively monitoring the coronavirus (COVID-19) situation and are continually working',
      postedOn: 'January 22,2021',
    },
    {
      id: 2,
      CardMedia: '/images/rizek-home-images/why-rizek/img-2.png',
      CardTitle: 'The Wonders of Coconut Oil for Face',
      cardContent:
        'Helping to keep each other safe during COVID-19. We’re actively monitoring the coronavirus (COVID-19) situation and are continually working',
      postedOn: 'January 22,2021',
    },
    {
      id: 3,
      CardMedia: '/images/rizek-home-images/why-rizek/img-2.png',
      CardTitle: 'The Wonders of Coconut Oil for Face',
      cardContent:
        'Helping to keep each other safe during COVID-19. We’re actively monitoring the coronavirus (COVID-19) situation and are continually working',
      postedOn: 'January 22,2021',
    },
    {
      id: 4,
      CardMedia: '/images/rizek-home-images/why-rizek/img-2.png',
      CardTitle: 'Trusted verified professionals',
      cardContent:
        'Helping to keep each other safe during COVID-19. We’re actively monitoring the coronavirus (COVID-19) situation and are continually working',
      postedOn: 'January 22,2021',
    },
    {
      id: 5,
      CardMedia: '/images/rizek-home-images/why-rizek/img-2.png',
      CardTitle: `Convenience and transparency`,
      cardContent:
        'Helping to keep each other safe during COVID-19. We’re actively monitoring the coronavirus (COVID-19) situation and are continually working',
      postedOn: 'January 22,2021',
    },
    {
      id: 6,
      CardMedia: '/images/rizek-home-images/why-rizek/img-2.png',
      CardTitle: 'Convenience and transparency',
      cardContent:
        'Helping to keep each other safe during COVID-19. We’re actively monitoring the coronavirus (COVID-19) situation and are continually working',
      postedOn: 'January 22,2021',
    },
    {
      id: 7,
      CardMedia: '/images/rizek-home-images/why-rizek/img-2.png',
      CardTitle: 'The Wonders of Coconut Oil for Face',
      cardContent:
        'Helping to keep each other safe during COVID-19. We’re actively monitoring the coronavirus (COVID-19) situation and are continually working',
      postedOn: 'January 22,2021',
    },
    {
      id: 8,
      CardMedia: '/images/rizek-home-images/why-rizek/img-2.png',
      CardTitle: 'Trusted verified professionals',
      cardContent:
        'Helping to keep each other safe during COVID-19. We’re actively monitoring the coronavirus (COVID-19) situation and are continually working',
      postedOn: 'January 22,2021',
    },
    {
      id: 9,
      CardMedia: '/images/rizek-home-images/why-rizek/img-2.png',
      CardTitle: `Convenience and transparency`,
      cardContent:
        'Helping to keep each other safe during COVID-19. We’re actively monitoring the coronavirus (COVID-19) situation and are continually working',
      postedOn: 'January 22,2021',
    },
    {
      id: 10,
      CardMedia: '/images/rizek-home-images/why-rizek/img-2.png',
      CardTitle: 'Convenience and transparency',
      cardContent:
        'Helping to keep each other safe during COVID-19. We’re actively monitoring the coronavirus (COVID-19) situation and are continually working',
      postedOn: 'January 22,2021',
    },
    {
      id: 11,
      CardMedia: '/images/rizek-home-images/why-rizek/img-2.png',
      CardTitle: `Convenience and transparency`,
      cardContent:
        'Helping to keep each other safe during COVID-19. We’re actively monitoring the coronavirus (COVID-19) situation and are continually working',
      postedOn: 'January 22,2021',
    },
    {
      id: 12,
      CardMedia: '/images/rizek-home-images/why-rizek/img-2.png',
      CardTitle: 'Convenience and transparency',
      cardContent:
        'Helping to keep each other safe during COVID-19. We’re actively monitoring the coronavirus (COVID-19) situation and are continually working',
      postedOn: 'January 22,2021',
    },
  ])

  return (
    <div className={styles.blog}>
      <section>
        {/*  <Header /> */}

        <div className={styles.nav_bar_wrapper}>
          <NavBar />
        </div>
      </section>

      <section>
        <div className={styles.blogBanner}>
          <div>
            <div className={styles.workplace_safty}>
              <div>
                <a href="" className={styles.rizek_news}>
                  Rizek News
                </a>
                <a href="" className={styles.beauty}>
                  Beauty
                </a>
              </div>

              <div className={styles.text}>Your Guide To Your Workplace Safely</div>
              <span className={styles.date}>January 22,2021</span>
            </div>
          </div>
        </div>
      </section>

      <main className={styles.main_block}>
        <SearchBar placeholder="Search Blog..." className={styles.blog_search} />
        <div className={styles.Subscribe_wrapper}>
          <Subscribe />
        </div>

        <div className={styles.cards}>
          {blogPosts.map((itm) => (
            <BlogCard itm={itm} key={itm.id} />
          ))}
        </div>

        <div>
          <SubscribeResponsive />
        </div>
      </main>

      <div className={styles.more}>
        <Button variant="contained">More</Button>
      </div>
      <Footer />
    </div>
  )
}
export default Blog
