import React from "react"
import { EmptyProps } from "@/definitions"


const Video: React.FC<EmptyProps> = ({src, title}) => {
  return (
    <div className="text-center">
      <h3 style={{ marginTop: 10 }} className="font-yrsa text-xl">
        {title ? title : 'video'}
      </h3>
      <video
        controls
        src={`https://schuster-videos.s3.amazonaws.com/${src}`}
      />
    </div>
  )
}

export default Video
