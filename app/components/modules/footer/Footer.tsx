import List from '../../elements/list/List'
import styles from './footer.module.scss'
import SociaMediaIcons from '../../elements/social-media-icons/SociaMediaIcon'
import PlayStoreIcon from '../play-store-icons/PlayStoreIcon'
import Grid from '@material-ui/core/Grid'

function Footer() {
  const rizek = ['About Us', 'Privacy Policy', 'Terms of Use', 'Blogs', 'Rizek heroes']
  const services = [
    'Contact Us',
    'Health Measures',
    'Help center',
    'Partner With Us',
    'Find a Service',
  ]
  const forUsers = ['Login', 'Register', 'My Account', 'My Booking', 'Insurance']

  const mobileApp = [
    {
      link: '#4',
      logo: '/images/rizek-home-images/google-store-icon-transparent-bg.png',
      label: 'googlePlay_Store_Logo',
    },
    {
      link: '#4',
      logo: '/images/rizek-home-images/app-store-transparent-bg.png',
      label: 'applePlay_Store_Logo',
    },
  ]

  const medialDetails = [
    {
      id: 1,
      link: '#1',
      linkImage: '/images/rizek-home-images/social-media-icons/facebook.png',
      imageName: 'facebookIcon',
    },
    {
      id: 2,
      link: '#1',
      linkImage: '/images/rizek-home-images/social-media-icons/instagram.png',
      imageName: 'instagramIcon',
    },
    {
      id: 3,
      link: '#1',
      linkImage: '/images/rizek-home-images/social-media-icons/linkdin.png',
      imageName: 'linkdinIcon',
    },
    {
      id: 4,
      link: '#1',
      linkImage: '/images/rizek-home-images/social-media-icons/twitter.png',
      imageName: 'twitterIcon',
    },
  ]

  return (
    <footer className={styles.footerWrapper}>
      <div>
        <div className={styles.footerFirstChild}>
          <Grid container justify="space-between">
            <div className={styles.rizek_logo_mobile}></div>

            <Grid item xs={6} sm={4} md={3} lg={2}>
              <section className={styles.section1}>
                <div className={styles.rizek_logo_desktop}></div>
                <div className={styles.contact_detail}>
                  <div>+(971) 800-7493-548</div>
                  <div>
                    <a href="http://"> info@rizek.com</a>
                  </div>

                  <div className={styles.address}>
                    <span>24th Floor, Al Sila Tower</span>
                    <br />
                    <span> Abu Dhabi Market Square</span>
                  </div>
                </div>
              </section>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <List title="Rizek" list={rizek} />
            </Grid>

            <Grid item xs={6} sm={4} md={3} lg={2}>
              <List title="Services" list={services} />
            </Grid>

            <Grid item xs={6} sm={4} md={3} lg={2}>
              <List title="forUsers" list={forUsers} />
            </Grid>

            <Grid item xs={6} sm={4} md={3} lg={2}>
              <section className={styles.getRezikMobile}>
                <div>Mobile app </div>
                {mobileApp.map((itm, idx) => (
                  <div className={styles.PlayStoreIcon} key={idx}>
                    <PlayStoreIcon logo={itm.logo} alt={itm.label} link={itm.link} />
                  </div>
                ))}
              </section>
            </Grid>
          </Grid>
        </div>

        <div className={styles.footerLastChild}>
          <div>
            <Grid container justify="space-between">
              <Grid item xs={12} lg={2}>
                <div className={styles.social_icons}>
                  {medialDetails.map((itm, idx) => (
                    <div key={idx} className={styles.social_icon}>
                      <SociaMediaIcons link={itm.link} linkImage={itm.linkImage} />
                    </div>
                  ))}
                </div>
              </Grid>

              <Grid item xs={12} lg={2}>
                <div className={styles.ToTop}>Back to top</div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
