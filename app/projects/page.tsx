'use client'

import ImageSlider from "app/components/image-slider";
import { useLanguage } from "../contexts/LanguageContext";

const projects = [
  {
    title: "Clinic and Pharmacy Management System App",
    description:
      "Management System App is a CodeIgniter 4-based clinic and pharmacy management web application designed to streamline operations for clinics and pharmacies. Key features include patient management, appointment scheduling, medical records, prescription management, inventory control, billing, and reporting. The system also supports user roles (admin, staff, pharmacist) and integrates with a MySQL database for secure data storage.",
    image: "images/medikidz-2.png",
    tech: ["CodeIgniter 4", "Bootstrap", "MySQL"],
    liveUrl: "https://medikidz.co.id",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Medikidz Profile App",
    description:
      "Medikidz Profile App is a CodeIgniter 4-based clinic profile website application used to display information, services, news, and the Medikidz Banjarbaru clinic profile. The app supports content management, a gallery, a medical team, announcements, and MariaDB/MySQL database integration.",
    image: "images/medikidz-1.png",
    tech: ["CodeIgniter 4", "Bootstrap", "MySQL"],
    liveUrl: "https://medikidz.co.id",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Ecomel Sasirangan Ecommerce App",
    description:
      "Ecomel Ecommerce App is a CodeIgniter 4-based e-commerce web application developed for the online sale of Sasirangan products. This project features product management, categories, stock, discounts, and product photos, order management, payment, and shipping. It also features a user authentication and authorization system (admins, users, partners, etc.), an admin and user dashboard, and content management (posts, pages, announcements, landing views).",
    image: "images/ecomel-1.png",
    tech: ["CodeIgniter 4", "Bootstrap", "MySQL"],
    liveUrl: "https://ecomelsasirangan.com",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Ecomel Sasirangan Inventory App",
    description:
      "Ecomel Inventory App is a CodeIgniter 4-based inventory management web application developed for the online sale of Sasirangan products. This project includes several key features, such as the management of tools, materials, suppliers, purchases, expenses, and users. It also supports user authentication and authorization, along with database migration and seeding to simplify setup. The system is built with a modular and scalable structure, making it easier to maintain and extend in the future.",
    image: "images/ecomel-3.png",
    tech: ["CodeIgniter 4", "Bootstrap", "MySQL"],
    liveUrl: "https://ecomelsasirangan.com",
    githubUrl: "#",
    featured: false,
  },
  {
    title:
      "Suka Makmur Apps: Suka Makmur Palm Oil Producer Cooperative Management Application",
    description:
      "Sukamakmur App is a CodeIgniter 4-based web application designed to assist the management of agricultural cooperatives, specifically the Sukamakmur farmer group. The app provides key features for managing production activities, finances, budgets, farmer data, and reports.",
    image: "images/sukamakmur-1.png",
    tech: ["CodeIgniter 4", "MySQL"],
    liveUrl: "https://sukamakmur.com/",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "LOKANA: Lokasi Orang Hilang Nasional",
    description:
      "LOKANA focuses on a national concept and provides a wide reach to help search for missing people throughout Indonesia. This application functions as a national information source to assist with searches.",
    image: "images/lokana.png",
    tech: ["Flask", "Google Cloud", "Kotlin"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

const mobileAppsProjects = [
  {
    title:
      "Water Bender App: a React Native-based mobile application for real-time and historical water depth monitoring",
    description:
      "The Water Bender App is a React Native-based mobile application for real-time and historical water depth monitoring. It displays water sensor data, water depth graphs, and provides user login and registration features. It was developed for monitoring needs in mining or industrial environments that require water level monitoring.",
    image: ["images/water-bender-2.jpg", "images/water-bender-1.jpg", "images/water-bender-3.jpg", "images/water-bender-4.jpg"],
    tech: ["React Native", ".Net", "DBMS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "POINS: Port Integrated System",
    description:
      "POINS is a Port Integrated System designed to streamline port operations and improve efficiency. It provides real-time monitoring of port activities, including vessel traffic, cargo handling, and resource allocation.",
    image: ["images/screenshot_poins.jpg"],
    tech: ["React Native", ".Net", "DBMS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Payoo App: a Point of Sales (POS) web and mobile application",
    description:
      "Payoo is a Point of Sales (POS) application specifically designed to help Small and Medium Enterprises (SMEs) in Indonesia manage stock, product transactions, and product handling efficiently.",
    image: ["images/payoo-1.jpg", "images/payoo.jpg"],
    tech: ["Vue.js", "Flutter", "MySQL", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title:
      "APEHIPO: A Mobile-Based Marketing Media Application as an Innovative Solution to Expand Sales of Hydroponic Garden Products in Indonesia",
    description:
      "APEHIPO: Mobile-Based Marketing Media Application as an Innovative Solution To Expand Sales of Hydroponic Garden Products in Indonesia. this app has a Hidrocommerce feature that functions to accommodate hydroponic farmers to sell their products online to consumers and to other farmers.",
    image: [
      "images/apehipo-1.jpg",
      "images/apehipo-2.jpg",
    ],
    tech: ["CodeIgniter 4", "Flutter", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title:
      "Sobat Sunnah: A Mobile-Based Sunnah Reminder Game with Mission and Challenge Systems as an Innovative Solution to Bring the Sunnahs of the Prophet Muhammad to Life",
    description:
      "Sobat Sunnah is a mobile-based game application designed to remind users of the Sunnahs of the Prophet Muhammad. It incorporates mission and challenge systems to engage users in learning and practicing these Sunnahs in their daily lives.",
    image: ["images/sobatsunnah-1.jpg", "images/sobatsunnah.jpg"],
    tech: ["Flutter"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

const wordpressProjects = [
  {
    title:
      "Peternakan ULM Website Profile: A WordPress-based website for the Faculty of Agriculture at Lambung Mangkurat University",
    description:
      "The Peternakan ULM Website is a WordPress-based website developed for the Faculty of Agriculture at Lambung Mangkurat University. It serves as an online platform to provide information about the faculty, its programs, and research activities.",
    image: "images/peternakan.png",
    tech: ["WordPress"],
    liveUrl: "https://peternakan.ulm.ac.id",
    githubUrl: "#",
    featured: false,
  },
  {
    title:
      "PPKN ULM Website Profile: A WordPress-based website for the Faculty of Teacher Training and Education at Lambung Mangkurat University",
    description:
      "The PPKN ULM Website is a WordPress-based website developed for the Faculty of Teacher Training and Education at Lambung Mangkurat University. It serves as an online platform to provide information about the faculty, its programs, and research activities.",
    image: "images/ppknulm.png",
    tech: ["WordPress"],
    liveUrl: "https://ppkn.fkip.ulm.ac.id",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Sustainesia Website Profile: A WordPress-based website for a sustainability-focused organization",
    description:
      "Sustainesia is a WordPress-based website developed for a sustainability-focused organization. It serves as an online platform to promote sustainable practices, share resources, and engage with the community.",
    image: "images/sustainesia.png",
    tech: ["WordPress"],
    liveUrl: "https://sustainesia.com",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Go Ahead Indonesia Website Profile: A WordPress-based website for sustainability and green innovation with a focus on empowering youth and women",
    description:
      "Go Ahead Indonesia is an institution engaged in the field of sustainability and green innovation with a focus on empowering youth and women. The website serves as a platform to showcase their initiatives, programs, and impact in the community.",
    image: "images/goahead.png",
    tech: ["WordPress"],
    liveUrl: "https://goaheadindonesia.com",
    githubUrl: "#",
    featured: false,
  },
];

export default function ProjectsPage() {
  const { t } = useLanguage()
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          {t('projects.title')}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            {t('projects.titleHighlight')}
          </span>
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          {t('projects.description')}
        </p>
      </section>

      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-8">
          {t('projects.featuredProjects')}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 padding-5"
            >
                <div className="from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 flex flex-col items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain h-full w-full border-radius-lg mb-4"
                />
                <span className="mt-2 px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-xs font-medium">
                  Note: Detailed feature screenshots are not displayed due to confidentiality and sensitive information.
                </span>
                </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                  >
                    <span>{t('projects.liveDemo')}</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors font-medium"
                  >
                    <span>{t('projects.github')}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-8">
          {t('projects.otherProjects')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className=" from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 flex flex-col items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain h-full w-full border-radius-lg mb-4"
                />
                <span className="mt-2 px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-xs font-medium">
                  Note: Detailed feature screenshots are not displayed due to confidentiality and sensitive information.
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold tracking-tight mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded text-xs font-medium">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="text-purple-600 dark:text-purple-400 hover:underline text-sm font-medium"
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-neutral-600 dark:text-neutral-400 hover:underline text-sm font-medium"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Apps Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-8">
          Mobile Apps Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobileAppsProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col items-center"
            >
              <div className="flex flex-col items-center justify-center w-full py-6 bg-neutral-50 dark:bg-neutral-800">
                <ImageSlider images={project.image} />
              </div>
              <div className="p-6 w-full">
                <span className="mt-2 px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-[12px] font-normal">
                  Note: Detailed feature screenshots are not displayed due to confidentiality and sensitive information.
                </span>
                <h3 className="text-lg font-bold tracking-tight mt-2 mb-2 group-hover:text-purple-600 transition-colors text-start">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm text-start">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 justify-start">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 justify-start">
                  <a
                    href={project.liveUrl}
                    className="text-purple-600 dark:text-purple-400 hover:underline text-sm font-medium"
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-neutral-600 dark:text-neutral-400 hover:underline text-sm font-medium"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wordpress Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-8">
          Wordpress Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wordpressProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className=" from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain h-full w-full border-radius-lg mb-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold tracking-tight mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded text-xs font-medium">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="text-purple-600 dark:text-purple-400 hover:underline text-sm font-medium"
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-neutral-600 dark:text-neutral-400 hover:underline text-sm font-medium"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight mb-4">
          {t('projects.wantToCollaborate')}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
          {t('projects.collaborateDescription')}
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
        >
          {t('projects.getInTouch')}
        </a>
      </section>
    </div>
  );
}
