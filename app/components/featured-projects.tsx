import Link from 'next/link'

const featuredProjects = [
  {
    title: "Clinic and Pharmacy Management System App",
    description: "Management System App is a CodeIgniter 4-based clinic and pharmacy management web application designed to streamline operations for clinics and pharmacies. Key features include patient management, appointment scheduling, medical records, prescription management, inventory control, billing, and reporting. The system also supports user roles (admin, staff, pharmacist) and integrates with a MySQL database for secure data storage.",
    tech: ["Codeigniter 4", "Bootstrap", "MySQL"],
    link: "https://medikidz.co.id",
    year: "2025"
  },
  {
    title: "Medikidz Profile App",
    description: "Medikidz Profile App is a CodeIgniter 4-based clinic profile website application used to display information, services, news, and the Medikidz Banjarbaru clinic profile. The app supports content management, a gallery, a medical team, announcements, and MariaDB/MySQL database integration.",
    tech: ["Codeigniter 4", "Bootstrap", "MySQL"],
    link: "https://medikidz.co.id",
    year: "2025"
  },
  {
    title: "Ecomel Sasirangan Ecommerce App", 
    description: "Ecomel Ecommerce App is a CodeIgniter 4-based e-commerce web application developed for the online sale of Sasirangan products. This project features product management, categories, stock, discounts, and product photos, order management, payment, and shipping. It also features a user authentication and authorization system (admins, users, partners, etc.), an admin and user dashboard, and content management (posts, pages, announcements, landing views).",
    tech: ["Codeigniter 4", "Bootstrap", "MySQL"],
    link: "https://ecomelsasirangan.com",
    year: "2025"
  },
  {
    title: "Ecomel Sasirangan Inventory App", 
    description: "Ecomel Inventory App is a CodeIgniter 4-based inventory management web application developed for the online sale of Sasirangan products. This project includes several key features, such as the management of tools, materials, suppliers, purchases, expenses, and users. It also supports user authentication and authorization, along with database migration and seeding to simplify setup. The system is built with a modular and scalable structure, making it easier to maintain and extend in the future.",
    tech: ["Codeigniter 4", "Bootstrap", "MySQL"],
    link: "https://ecomelsasirangan.com",
    year: "2025"
  },
]

export function FeaturedProjects() {
  return (
    <div className="space-y-4">
      {featuredProjects.map((project) => (
        <Link
          key={project.title}
          className="flex flex-col space-y-1 mb-4 group"
          href={project.link}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              {project.year}
            </p>
            <div className="flex-1">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                {project.description}
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
        View all projects →
      </Link>
    </div>
  )
}