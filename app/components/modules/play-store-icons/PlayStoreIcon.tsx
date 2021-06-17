import styles from './play-store-icon.module.scss'

interface RizekMobileProps {
  variant?: string
  logo: string
  alt?: string
  link: string
}

//This component takes an array of objects. Each of objects has two properties link, logo and label which are both string.
// The component also takes a variant prop
function PlayStoreIcon({ logo, alt, variant, link }: RizekMobileProps) {
  return (
    <div className={`${variant} ${styles.hover_style}`}>
      <a href={link}>
        <img src={logo} alt={alt} className={styles.logo} />
      </a>
    </div>
  )
}
export default PlayStoreIcon

