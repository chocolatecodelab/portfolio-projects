'use client'

import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'

const featuredProjects = [
  {
    titleKey: "featuredProjects.clinicManagement.title",
    descriptionKey: "featuredProjects.clinicManagement.description",
    tech: ["Codeigniter 4", "Bootstrap", "MySQL"],
    link: "https://medikidz.co.id",
    year: "2025"
  },
  {
    titleKey: "featuredProjects.medikidz.title",
    descriptionKey: "featuredProjects.medikidz.description",
    tech: ["Codeigniter 4", "Bootstrap", "MySQL"],
    link: "https://medikidz.co.id",
    year: "2025"
  },
  {
    titleKey: "featuredProjects.ecomelEcommerce.title",
    descriptionKey: "featuredProjects.ecomelEcommerce.description",
    tech: ["Codeigniter 4", "Bootstrap", "MySQL"],
    link: "https://ecomelsasirangan.com",
    year: "2025"
  },
  {
    titleKey: "featuredProjects.ecomelInventory.title",
    descriptionKey: "featuredProjects.ecomelInventory.description",
    tech: ["Codeigniter 4", "Bootstrap", "MySQL"],
    link: "https://ecomelsasirangan.com",
    year: "2025"
  },
]

export function FeaturedProjects() {
  const { t } = useLanguage()
  
  return (
    <div className="space-y-4">
      {featuredProjects.map((project) => (
        <Link
          key={project.titleKey}
          className="flex flex-col space-y-1 mb-4 group"
          href={project.link}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              {project.year}
            </p>
            <div className="flex-1">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {t(project.titleKey)}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                {t(project.descriptionKey)}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
      
      <Link 
        href="/projects"
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mt-4"
      >
        {t('featuredProjects.viewAllProjects')}
      </Link>
    </div>
  )
}