/**
 * @file goo-blob.js
 */
// Adapted from https://codesandbox.io/s/github/pmndrs/react-spring/tree/master/demo/src/sandboxes/goo-blobs?file=/src/index.css

// Import dependencies
import React from 'react'
import useMeasure from 'react-use-measure'
import { useTrail, animated } from '@react-spring/web'

// import styles
import styles from '../styles/Goo.module.scss'

const fast = { tension: 900, friction: 80 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

const GooBlob = () => {
  const [trail, api] = useTrail(3, i => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }))
  const [ref, { left, top }] = useMeasure()

  const handleMouseMove = e => {
    api.start({ xy: [e.clientX - left, e.clientY - top] })
  }

  return (
    <div className={styles.container}>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values={
                "0.05 0   0   0   0 0   1  0   0   0 0   0   0.76  0   0 0   0   0   1   0 "
            }
          />
        </filter>
      </svg>
      <div ref={ref} className={styles.hooksMain} onMouseMove={handleMouseMove}>
        {trail.map((props, index) => (
          <animated.div key={index} style={{ transform: props.xy.to(trans) }} />
        ))}
      </div>
    </div>
  )
}

export default GooBlob;