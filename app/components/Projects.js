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
    // Title animation (only on mount)
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
      })
    }

    // Filters animation (only on mount)
    if (filtersRef.current) {
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
      })
    }
  }, { scope: sectionRef })

  useGSAP(() => {
    // Projects grid animation (re-animate when filter changes)
    if (projectsGridRef.current && projectsGridRef.current.children.length > 0) {
      gsap.from(projectsGridRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
      })
    }
  }, { scope: sectionRef, dependencies: [filter, projects] })

  return (
    <section ref={sectionRef} id="projects" className="section-container bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-4xl font-bold text-center text-gray-900 mb-4">
          My Projects
        </h2>
        <div className="w-24 h-1 bg-primary-600 mx-auto mb-12"></div>

        {/* Filter Buttons */}
        <div ref={filtersRef} className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-6xl text-primary-400">📋</div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
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
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm"
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
            <p className="text-gray-600 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

