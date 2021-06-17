import styled from 'styled-components'

/* -------------------NOTIFICATION-------------- */
const Notification = styled.section`
  display: flex;
  max-width: 350px;
  background: #e1f4fa;
  padding: 5px 9px;
  border-radius: 8px;
  margin-top: 20px;
`

const Img = styled.img`
  width: 53px;
  height: 53px;
`
const NotificationDetail = styled.div`
  display: flex;
  justify-content: space-between;
`

const NotificationImg = styled.img`
  height: 20px;
  width: 20px;
  margin-top: 5px;
  display: block;
`
const Paragraphy = styled.p`
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  margin: 0;
  color: #7f7a7a;
  line-height: 12px;
`

const H3 = styled.h3`
  margin: 5px 0;
  font-size: 12px;
  font-weight: 700;
`
function InsuranceNotification() {
  return (
    <Notification>
      <Img src="/images/icons/other-icons/certified-icon.svg" />
      <NotificationDetail>
        <div>
          <H3> Insurance Supported</H3>
          <Paragraphy>Your request will be eligible to Rizek Insurance Program</Paragraphy>
        </div>
        <NotificationImg src="/images/icons/other-icons/blue_information_icon.svg" alt="" />
      </NotificationDetail>
    </Notification>
  )
}

export default InsuranceNotification
