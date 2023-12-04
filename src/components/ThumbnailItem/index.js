import './index.css'

const ThumbnailItem = props => {
  const {thumbNailImgUrl, getNewImg, isActive} = props
  const {imageUrl, thumbnailUrl, thumbnailAltText} = thumbNailImgUrl
  const changeImg = () => {
    getNewImg(imageUrl)
  }

  const res = isActive ? 'transparentColor' : ''

  return (
    <>
      <li className="listOf">
        <button className="btnSize" type="button">
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className={`smallImg ${res}`}
            onClick={changeImg}
          />
        </button>
      </li>
    </>
  )
}

export default ThumbnailItem
