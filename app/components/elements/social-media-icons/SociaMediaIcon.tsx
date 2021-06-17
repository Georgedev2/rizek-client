import { useState } from 'react'

interface SociaMediaIconsProp {
  link: string
  linkImage: string
  imageName?: string
}
const SociaMediaIcon = ({ link, linkImage, imageName }: SociaMediaIconsProp) => {
  const imgDimention = {
    width: '35px',
    height: '35px',
    marginRight: ' 10px',
    cursor:'pointer'

  }

  return (
    <div>
      <div>
        <a href={link}>
          <img src={linkImage} alt={imageName} style={imgDimention} />
        </a>
      </div>
    </div>
  )
}

export default SociaMediaIcon
