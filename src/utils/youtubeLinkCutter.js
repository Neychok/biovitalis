import React from "react"

function youtubeLinkCutter({ link }) {
  if (link.substring(0, 17) === "https://youtu.be/") {
    return link.substring(17)
  } else if (link.substring(0, 24) === "https://www.youtube.com/") {
    return link.substring(24)
  }
}
export default youtubeLinkCutter
