const ImageCard = ({url,title}) => {
  return (
    <div className="image-container">
        <img className="image-view" src={url} alt={title} />
    </div>
  )
}
export default ImageCard