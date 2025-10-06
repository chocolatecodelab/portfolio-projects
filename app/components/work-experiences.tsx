'use client'

import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

const workExperiences = [
  {
    title: "PT. Netgen Inovasi Digital - Web and Mobile Developer",
    descriptionKey: "workExperiences.netgenDescription",
    tech: ["Codeigniter 4", "Bootstrap", "MySQL", "Vue.js", "Flutter"],
    project: [
      "Ecomel Sasirangan Ecommerce App",
      "Ecomel Sasirangan Inventory App",
      "Clinic and Pharmacy Management App",
      "Medikidz Profile App",
      "etc.",
    ],
    link: "https://netgen.id",
    year: "2025",
  },
  {
    title: "PT. Kalimantan Prima Persada - Mobile Developer (internship)",
    descriptionKey: "workExperiences.kppDescription",
    tech: ["React Native", ".Net Core", "SQL Server"],
    project: ["Poins Mobile App", "Water Bender Mobile App"],
    link: "https://www.kppmining.com/",
    year: "2024",
  },
  {
    title: "PT. Inspirasi Mandiri Nusantara - Wordpress Developer (internship)",
    descriptionKey: "workExperiences.inspirasimandiriDescription",
    project: ["Pintara Web App"],
    tech: ["Wordpress", "PHP", "JavaScript"],
    link: "https://pintara.id/",
    year: "2022",
  },
  {
    title: "PT. Bias Edukasi Indonesia - Web Developer (internship)",
    descriptionKey: "workExperiences.biasDescription",
    project: ["Bias Education Web App"],
    tech: ["Laravel", "Bootstrap", "MySQL"],
    link: "https://bias-education.com/",
    year: "2021",
  },
];

export function WorkExperiences() {
  const { t } = useLanguage()
  return (
    <div className="space-y-4">
      {workExperiences.map((item) => (
        <Link
          key={item.title}
          className="flex flex-col space-y-1 mb-4 group"
          href={item.link}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              {item.year}
            </p>
            <div className="flex-1">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                {t(item.descriptionKey)}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {t('workExperiences.projects')}
                </p>
                {item.project &&
                  item.project.map((proj) => (
                    <div
                      key={proj}
                      className="flex px-2 py-1 text-xs bg-purple-100 dark:bg-purple-800 text-neutral-700 dark:text-neutral-300 rounded"
                    >
                      {proj}
                    </div>
                  ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {t('workExperiences.techStack')}
                </p>
                {item.tech.map((tech) => (
                  <div
                    key={tech}
                    className="flex px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
