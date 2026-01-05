'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const statsRef = useRef(null)

  useGSAP(() => {
    // Title animation
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })

    // Content animation
    gsap.from(contentRef.current.children, {
      scrollTrigger: {
        trigger: contentRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power3.out',
    })

    // Stats animation
    gsap.from(statsRef.current.children, {
      scrollTrigger: {
        trigger: statsRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'back.out(1.7)',
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="about" className="section-container relative">
      <div className="max-w-4xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-pink mx-auto mb-12 rounded-full"></div>
        
        <div ref={contentRef} className="prose prose-lg max-w-none text-gray-300 space-y-6">
          <p>
            I am a dedicated Software Quality Assurance Engineer with a passion for
            delivering high-quality software products. With expertise in both manual
            and automated testing, I ensure that applications meet the highest standards
            of functionality, performance, and user experience.
          </p>
          <p>
            My approach to QA combines technical skills with a keen eye for detail,
            allowing me to identify potential issues before they impact users. I
            specialize in creating comprehensive test strategies, developing automated
            test frameworks, and collaborating closely with development teams to
            maintain quality throughout the software development lifecycle.
          </p>
          <p>
            When I'm not testing software, I enjoy staying up-to-date with the latest
            testing tools and methodologies, contributing to open-source projects, and
            sharing knowledge with the QA community.
          </p>
        </div>

        <div ref={statsRef} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-dark-300/50 backdrop-blur-sm rounded-xl border border-primary-500/20 hover:border-primary-400/40 transition-all">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent mb-2">5+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-dark-300/50 backdrop-blur-sm rounded-xl border border-primary-500/20 hover:border-primary-400/40 transition-all">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent mb-2">100+</div>
            <div className="text-gray-400">Projects Tested</div>
          </div>
          <div className="text-center p-6 bg-dark-300/50 backdrop-blur-sm rounded-xl border border-primary-500/20 hover:border-primary-400/40 transition-all">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent mb-2">50+</div>
            <div className="text-gray-400">Test Suites Created</div>
          </div>
        </div>
      </div>
    </section>
  )
}

