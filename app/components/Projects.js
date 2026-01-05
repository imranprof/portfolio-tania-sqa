'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import projectsData from '../../data/projects.json'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [filter, setFilter] = useState('All')

  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const filtersRef = useRef(null)
  const projectsGridRef = useRef(null)

  useEffect(() => {
    setProjects(projectsData)
  }, [])

  const categories = ['All', ...new Set(projectsData.map(project => project.category))]

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

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

    // Filters animation
    if (filtersRef.current && filtersRef.current.children.length > 0) {
      gsap.from(filtersRef.current.children, {
        scrollTrigger: {
          trigger: filtersRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        immediateRender: false,
      })
    }
  }, { scope: sectionRef })

  useGSAP(() => {
    if (!sectionRef.current || !projectsGridRef.current) return

    // Projects grid animation - animate when filter or projects change
    if (projects.length > 0 && projectsGridRef.current.children.length > 0) {
      const projectCards = Array.from(projectsGridRef.current.children)
      
      // Kill any existing animations on these elements
      gsap.killTweensOf(projectCards)
      
      // Animate from hidden to visible
      gsap.fromTo(projectCards, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
        }
      )
    }
  }, { scope: sectionRef, dependencies: [filter, projects] })

  return (
    <section ref={sectionRef} id="projects" className="section-container relative w-full">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          My Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-pink mx-auto mb-12 rounded-full"></div>

        {/* Filter Buttons */}
        <div ref={filtersRef} className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium ${
                filter === category
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/50'
                  : 'bg-dark-300/50 text-gray-300 hover:bg-dark-300/70 border border-primary-500/20 hover:border-primary-400/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={projectsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-dark-300/50 backdrop-blur-sm border border-primary-500/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:border-primary-400/40 group"
            >
              <div className="h-48 bg-gradient-to-br from-primary-500/20 via-accent-blue/20 to-accent-pink/20 flex items-center justify-center relative overflow-hidden">
                <div className="text-6xl opacity-50 group-hover:scale-110 transition-transform duration-300">📋</div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-500/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs font-semibold border border-primary-500/30">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-dark-400/50 text-gray-300 rounded text-xs border border-primary-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 font-medium text-sm transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 font-medium text-sm transition-colors"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

