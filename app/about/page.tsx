'use client'

import CertificateSlider from "app/components/certificate";
import { ProfilePhoto } from "app/components/profile-photo";
import { useLanguage } from "../contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage()
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="flex justify-center mb-8">
          <ProfilePhoto size="lg" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          {t('about.title')}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            {t('about.titleHighlight')}
          </span>
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          {t('about.description')}
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* My Story */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">{t('about.myStory')}</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p>
              {t('about.storyParagraph1')}
            </p>
            <p>
              {t('about.storyParagraph2')}
            </p>
            <p>
              {t('about.storyParagraph3')}
            </p>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">
            {t('about.technicalSkills')}
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-lg mb-3">{t('about.frontend')}</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Next.js",
                  "React Native",
                  "Flutter",
                  "JavaScript",
                  "TypeScript",
                  "Tailwind CSS",
                  "CSS3",
                  "HTML5",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-3">{t('about.backend')}</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "Codeigniter 4",
                  "Laravel",
                  "Nest.js"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-100 dark:bg-green-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-3">{t('about.toolsOthers')}</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "Figma", "VS Code", "Vercel"].map(
                  (tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Certificate Slider Section */}
      <CertificateSlider />
    </div>
  );
}
