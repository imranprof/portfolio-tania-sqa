import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsap(animationFn, dependencies = []) {
  const contextRef = useRef(null)
  const elementRef = useRef(null)

  useEffect(() => {
    if (elementRef.current) {
      contextRef.current = gsap.context(() => {
        animationFn(elementRef.current)
      }, elementRef.current)
    }

    return () => {
      if (contextRef.current) {
        contextRef.current.revert()
      }
    }
  }, dependencies)

  return elementRef
}

export function useGsapScrollTrigger(animationFn, dependencies = []) {
  const contextRef = useRef(null)
  const elementRef = useRef(null)

  useEffect(() => {
    if (elementRef.current) {
      contextRef.current = gsap.context(() => {
        animationFn(elementRef.current, gsap, ScrollTrigger)
      }, elementRef.current)
    }

    return () => {
      if (contextRef.current) {
        contextRef.current.revert()
      }
    }
  }, dependencies)

  return elementRef
}

