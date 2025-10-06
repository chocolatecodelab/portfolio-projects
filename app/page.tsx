'use client'

import { FeaturedProjects } from "app/components/featured-projects";
import { ProfilePhoto } from "app/components/profile-photo";
import { WorkExperiences } from "./components/work-experiences";
import { useLanguage } from "./contexts/LanguageContext";

export default function Page() {
  const { t } = useLanguage()
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium">
                {t('home.greeting')}
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  {t('home.title')}
                </span>
                <br />
                <span className="text-neutral-900 dark:text-neutral-100">
                  {t('home.subtitle')}
                </span>
              </h1>
            </div>

            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
              {t('home.description')}
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="/contact"
                className="px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-full font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
              >
                {t('home.getInTouch')}
              </a>
              <a
                href="/projects"
                className="px-6 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-full font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                {t('home.browseProjects')}
              </a>
            </div>
          </div>

          {/* Right Content - Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <ProfilePhoto />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">
          {t('home.featuredProjects')}
        </h2>
        <FeaturedProjects />
      </section>

    {/* Work Experiences Section */}
      <section className="pb-20">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">
          {t('home.workExperiences')}
        </h2>
        <WorkExperiences />
      </section>  
    </div>
  );
}
