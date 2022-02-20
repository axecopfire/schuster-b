import React from "react"

export type BlogImageType = {
  src: string
  description: string
  album: string
}

const BlogImage: React.FC<BlogImageType> = ({album='',src='', description=''}) => {
  const decoratedSrc = `https://schuster-videos.s3.amazonaws.com/${album}/${src}`
  return (
    <div className="text-center">
      <img className="m-0" src={decoratedSrc} style={{ display: 'inline-block'}}/>
      <p style={{margin: 0}}  >{description}</p>
    </div>
  )
}

export default BlogImage
