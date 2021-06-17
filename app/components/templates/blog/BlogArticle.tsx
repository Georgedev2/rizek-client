import { useState } from 'react'
import styles from './blog-article.module.scss'
import SociaMediaIcon from '../../elements/social-media-icons/SociaMediaIcon'
import Header from '../../modules/Contact-us-header/ContactUsHeader'
import NavBar from '../../modules/nav-bar/NavBar'
import SubscribeResponsive from '../../modules/subscribe/subscribe-responsive/SubscribeResponsive'
import BlogCard from '../../elements/cards/blog-card/BlogCard'
import Footer from '../../modules/footer/Footer'


function blog_article() {
  const medialDetails = [
    {
      id: 1,
      link: '#1',
      linkImage: 'images/icons/social_icons/dark-linkedin_svg.svg',
      imageName: 'dark_linkedin',
    },
    {
      id: 2,
      link: '#1',
      linkImage: 'images/icons/social_icons/dark-twitter_svg.png',
      imageName: 'dark_twitter',
    },
    {
      id: 3,
      link: '#1',
      linkImage: 'images/icons/social_icons/dark-instagram_svg.svg',
      imageName: 'dark_instagram',
    },
  ]

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
  ])

  return (
    <div>
      <Header />
      <NavBar />
      <main className={styles.main}>
        <section className={styles.title_box}>
          <span className={styles.article_title}>How To Cope With The Pandemic</span>
        </section>
        <section className={styles.writer}>
          <div>
            <div className={styles.writer_img_box}>
              <img src="/images/blog-assets/blogger.png" alt="" />
            </div>

            <div className={styles.writer_detail}>
              <span>Layan Barghoty</span>
              <span>January 22,2021</span>
            </div>
          </div>
          <div className={styles.social_icons}>
            {medialDetails.map((itm, idx) => (
              <div key={idx} className={styles.social_icon}>
                <SociaMediaIcon link={itm.link} linkImage={itm.linkImage} />
              </div>
            ))}
          </div>
        </section>
        <section>
          <SubscribeResponsive />
        </section>
        <section className={styles.posts}>
          {blogPosts.map((el, idx) => (
            <BlogCard itm={el} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default blog_article
