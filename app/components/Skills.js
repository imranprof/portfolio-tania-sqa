'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef(null)

  const skillCategories = [
    {
      category: 'Test Automation',
      skills: ['Selenium', 'Cypress', 'Playwright', 'Appium', 'TestNG', 'JUnit']
    },
    {
      category: 'API Testing',
      skills: ['REST Assured', 'Postman', 'SoapUI', 'JMeter', 'Newman']
    },
    {
      category: 'Programming Languages',
      skills: ['Java', 'JavaScript', 'Python', 'TypeScript', 'C#']
    },
    {
      category: 'Testing Tools',
      skills: ['Jira', 'TestRail', 'Bugzilla', 'Zephyr', 'Confluence']
    },
    {
      category: 'CI/CD',
      skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes']
    },
    {
      category: 'Performance Testing',
      skills: ['JMeter', 'Gatling', 'LoadRunner', 'K6']
    }
  ]

  useGSAP(() => {
    if (!sectionRef.current) return

    // Title animation
    if (titleRef.current) {
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
        immediateRender: false,
      })
    }

    // Cards animation - animate on scroll
    if (cardsRef.current && cardsRef.current.children.length > 0) {
      gsap.from(cardsRef.current.children, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        immediateRender: false,
      })
    }
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="skills" className="section-container relative w-full">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Skills & Expertise
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-pink mx-auto mb-12 rounded-full"></div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-dark-300/50 backdrop-blur-sm p-6 rounded-xl border border-primary-500/20 hover:border-primary-400/40 hover:bg-dark-300/70 transition-all shadow-lg"
            >
              <h3 className="text-xl font-semibold text-primary-400 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium border border-primary-500/30 hover:bg-primary-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

