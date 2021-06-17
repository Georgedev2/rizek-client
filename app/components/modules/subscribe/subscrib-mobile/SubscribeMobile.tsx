import styles from  './subscribe-mobile.module.scss'
import TextField from '@material-ui/core/TextField'

function SubscribeMobile() {
    return (
        <div className={styles.subscribe }>
        <div>
          <div className={styles.subscribe_title}>Subscribe to Our Newsletter</div>
          <div className={styles.bdy}>
            Get the latest news regarding our services, offers and more
          </div>
        </div>

        <form>
          <div>
            <TextField label="Email Address" className={styles.textinput} />
            <div className={styles.terms}>
              <span> By clicking “ Subscribe”, you accept our</span>
              <a href="">Terms</a>
            </div>
          </div>
          <div className={styles.subscribe_btn}>Subscribe</div>
        </form>
      </div>
    )
}

export default SubscribeMobile
