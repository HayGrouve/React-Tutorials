import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ index, rgb, weight }) => {
  const [isAlert, setIsAlert] = useState(false)
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAlert(false)
    }, 1500)
    return () => {
      clearTimeout(timeout)
    }
  }, [isAlert])
  return <article
    className={`color ${index > 10 && 'color-light'}`}
    style={{ backgroundColor: `rgb(${bcg})` }}
    onClick={() => {
      setIsAlert(true)
      navigator.clipboard.writeText(hex)
    }}
  >
    <p className="percent-value">{weight}%</p>
    <p className="color-value">{hex}</p>
    {isAlert && <p className={`alert ${index > 10 && 'color-light'}`}>copied to clipboard!</p>}
  </article>
}

export default SingleColor
