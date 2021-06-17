import CommunityUpdate from './CommunityUpdate'
import styles from './community-update.module.scss'

export default {
  title: 'CommunityUpdate',
}

const update1 = {
  news: 'A note to our community regarding covid-19',
  linkToNews: '#rre',
}

const update2 = {
  news: 'A note to our community regarding malaria parasite',
  linkToNews: '#rre',
}

//Stories
export const Default = () => <CommunityUpdate update={update1} />
export const Update = () => (
  <CommunityUpdate update={update2} variant={styles.communityUpdateNewBg} />
)
