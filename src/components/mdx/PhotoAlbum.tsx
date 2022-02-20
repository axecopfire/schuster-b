import React from "react"
import BlogImage, {BlogImageType} from './BlogImage';



const PhotoAlbum: React.FC<{
  photos: Array<BlogImageType>
  albumName: string
}> = ({photos, albumName}) => {
  return (
    <>
      {photos.map((photo, key) => {
        const props = {
          ...photo,
          album: albumName
        }
        return(<BlogImage
        key={key}
        {...props}
        />)})}
    </>
  )
}

export default PhotoAlbum
