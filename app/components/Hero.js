'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Hero() {
  const heroRef = useRef(null)
  const imageRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonsRef = useRef(null)
  const statsRef = useRef(null)

  useGSAP(() => {
    if (!heroRef.current) return

    // Image animation
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      })
    }

    // Text animations - staggered
    if (subtitleRef.current && titleRef.current) {
      gsap.to([subtitleRef.current, titleRef.current], {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.2,
      })
    }

    if (descriptionRef.current) {
      gsap.to(descriptionRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.6,
        ease: 'power3.out',
      })
    }

    if (buttonsRef.current && buttonsRef.current.children.length > 0) {
      const buttons = Array.from(buttonsRef.current.children)
      buttons.forEach((child, index) => {
        gsap.set(child, { y: 30 })
        gsap.to(child, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.5 + (index * 0.1),
          ease: 'power3.out',
        })
      })
    }

    if (statsRef.current && statsRef.current.children.length > 0) {
      Array.from(statsRef.current.children).forEach((child, index) => {
        gsap.set(child, { opacity: 0, scale: 0.8 })
        gsap.to(child, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: 1 + (index * 0.1),
          ease: 'back.out(1.7)',
        })
      })
    }
  }, { scope: heroRef })

  return (
    <section ref={heroRef} id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden w-full">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="section-container relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image - Left Side */}
            <div ref={imageRef} className="flex justify-center lg:justify-start order-2 lg:order-1" style={{ opacity: 0, transform: 'translateX(-100px)' }}>
              <div className="relative w-full max-w-md">
                {/* Decorative background element */}
                <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-primary-500/30 to-accent-blue/30 rounded-2xl -z-10 blur-xl"></div>
                
                {/* Image container with shadow */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary-500/30">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src="/profile.jpg"
                      alt="Tania - SQA Engineer"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  
                  {/* Decorative overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-500/40 via-transparent to-transparent pointer-events-none"></div>
                </div>
                
                {/* Accent decoration */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-400 rounded-full opacity-30 blur-2xl animate-pulse"></div>
              </div>
            </div>
            
            {/* Text Content - Right Side */}
            <div className="text-center lg:text-left order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <p ref={subtitleRef} className="text-lg md:text-xl text-primary-400 font-semibold uppercase tracking-wide" style={{ opacity: 0, transform: 'translateY(50px)' }}>
                  Software Quality Assurance Engineer
                </p>
                <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight" style={{ opacity: 0, transform: 'translateY(50px)' }}>
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-primary-400 to-accent-pink bg-clip-text text-transparent">Tania</span>
                </h1>
              </div>
              
              <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-accent-pink mx-auto lg:mx-0 rounded-full"></div>
              
              <p ref={descriptionRef} className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0" style={{ opacity: 0, transform: 'translateY(30px)' }}>
                Passionate about ensuring software quality through comprehensive testing,
                automation, and continuous improvement. I specialize in creating robust
                test frameworks and delivering bug-free applications.
              </p>
              
              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a
                  href="#projects"
                  className="btn-primary inline-block text-center opacity-0"
                  
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="btn-secondary inline-block text-center opacity-0"
                  
                >
                  Get In Touch
                </a>
              </div>
              
              {/* Stats or highlights */}
              <div ref={statsRef} className="grid grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left p-4 rounded-xl bg-dark-300/50 backdrop-blur-sm border border-primary-500/20">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">5+</div>
                  <div className="text-sm text-gray-400 mt-1">Years Experience</div>
                </div>
                <div className="text-center lg:text-left p-4 rounded-xl bg-dark-300/50 backdrop-blur-sm border border-primary-500/20">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">100+</div>
                  <div className="text-sm text-gray-400 mt-1">Projects</div>
                </div>
                <div className="text-center lg:text-left p-4 rounded-xl bg-dark-300/50 backdrop-blur-sm border border-primary-500/20">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">50+</div>
                  <div className="text-sm text-gray-400 mt-1">Test Suites</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

