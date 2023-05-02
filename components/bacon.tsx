import React, { useEffect, useRef } from 'react'
import baconImg from '../assets/bacon.png' // Import your bacon image
import styles from '../styles/BaconFloating.module.css'
import Image from 'next/image'
import { createPortal } from 'react-dom'

interface BaconFloatingProps {
  count: number
}

const BaconFloating: React.FC<BaconFloatingProps> = ({ count }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const bacons: HTMLElement[] = []
    const container = containerRef.current

    const createBacon = (x: number, y: number) => {
      const bacon = document.createElement('img')
      bacon.src = baconImg.src
      bacon.alt = 'Bacon'
      bacon.width = 80
      bacon.height = 60
      bacon.className = styles.bacon
      bacon.style.zIndex = `${Math.floor(Math.random() * 1000)}`
      bacon.style.animationDuration = `${5 + Math.random() * 10}s`
      bacon.style.left = `${x}px`
      bacon.style.top = `${y}px`

      container.appendChild(bacon)
      return bacon
    }

    const onClick = (event: MouseEvent) => {
      event.stopPropagation()
      const x = event.clientX
      const y = event.clientY

      const bacon = createBacon(x, y)
      bacons.push(bacon)
    }

    const initBacon = () => {
      for (let i = 0; i < count; i++) {
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight

        const bacon = createBacon(x, y)
        bacons.push(bacon)
      }
    }

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      bacons.forEach((bacon) => {
        const rect = bacon.getBoundingClientRect()
        const dx = (clientX - rect.left) * 1.5
        const dy = (clientY - rect.top) * 1.5
        bacon.style.transform = `translate(${dx}px, ${dy}px)`
      })
    }

    initBacon()
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('click', onClick)
    }
  }, [count])

  return <div ref={containerRef} className={styles.floatingBacons}></div>
}

export default BaconFloating
