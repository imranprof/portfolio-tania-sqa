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
    // Image animation
    gsap.from(imageRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })

    // Text animations - staggered
    gsap.from([subtitleRef.current, titleRef.current], {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.2,
    })

    gsap.from(descriptionRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.6,
      ease: 'power3.out',
    })

    gsap.from(buttonsRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.8,
      ease: 'power3.out',
    })

    gsap.from(statsRef.current.children, {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      delay: 1,
      ease: 'back.out(1.7)',
    })
  }, { scope: heroRef })

  return (
    <section ref={heroRef} id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-16">
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image - Left Side */}
            <div ref={imageRef} className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-full max-w-md">
                {/* Decorative background element */}
                <div className="absolute -top-6 -left-6 w-full h-full bg-primary-200 rounded-2xl -z-10"></div>
                
                {/* Image container with shadow */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent pointer-events-none"></div>
                </div>
                
                {/* Accent decoration */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-400 rounded-full opacity-20 blur-2xl"></div>
              </div>
            </div>
            
            {/* Text Content - Right Side */}
            <div className="text-center lg:text-left order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <p ref={subtitleRef} className="text-lg md:text-xl text-primary-600 font-semibold uppercase tracking-wide">
                  Software Quality Assurance Engineer
                </p>
                <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Hi, I'm{' '}
                  <span className="text-primary-600">Tania</span>
                </h1>
              </div>
              
              <div className="h-1 w-20 bg-primary-600 mx-auto lg:mx-0"></div>
              
              <p ref={descriptionRef} className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Passionate about ensuring software quality through comprehensive testing,
                automation, and continuous improvement. I specialize in creating robust
                test frameworks and delivering bug-free applications.
              </p>
              
              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a
                  href="#projects"
                  className="btn-primary inline-block text-center px-8 py-4 text-lg"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="btn-secondary inline-block text-center px-8 py-4 text-lg"
                >
                  Get In Touch
                </a>
              </div>
              
              {/* Stats or highlights */}
              <div ref={statsRef} className="grid grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-primary-600">5+</div>
                  <div className="text-sm text-gray-600 mt-1">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-primary-600">100+</div>
                  <div className="text-sm text-gray-600 mt-1">Projects</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-primary-600">50+</div>
                  <div className="text-sm text-gray-600 mt-1">Test Suites</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

