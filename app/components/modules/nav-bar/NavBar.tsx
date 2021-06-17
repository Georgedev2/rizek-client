import DropDownList from '../../elements/drop-down/DropDown'
import Button from '@material-ui/core/Button'
import styles from './nav-bar.module.scss'
import Link from 'next/link'

interface NavBarProp {
  className?: string
}

function NavBar() {
  return (
    <div className={styles.navBar}>
      <div>
        <div className={styles.navBarLogoWrapper}>
          <span className={styles.logobox}>
            <Link href="/">
              <span id={styles.rezik_Logo}></span>
            </Link>
          </span>

          <div className={styles.headerService}>
            <DropDownList
              defaultOption="Service"
              regions={[
                'Service',
                'Cleaning',
                'Health care',
                'Beauty and Wellness',
                'Maintainance',
                'Automotive',
              ]}
            />
          </div>
          <a href="#rry" className={styles.blog}>
            BLOG
          </a>
        </div>
        <Button
          variant="contained"
          disableElevation
          style={{
            backgroundColor: '#09a8dd',
            color: '#fff',
            padding: '0px 15px',
            height: '32px',
          }}
        >
          Login / Sign Up
        </Button>
      </div>
    </div>
  )
}

export default NavBar
