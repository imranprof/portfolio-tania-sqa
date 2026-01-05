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

    // Cards animation
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
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="skills" className="section-container bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl font-bold text-center text-gray-900 mb-4">
          Skills & Expertise
        </h2>
        <div className="w-24 h-1 bg-primary-600 mx-auto mb-12"></div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-primary-600 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
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

