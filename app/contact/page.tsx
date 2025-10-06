'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          {t('contact.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">{t('contact.titleHighlight')}</span>
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          {t('contact.description')}
        </p>
      </section>
      
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 mb-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-6">{t('contact.letsWorkTogether')}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              {t('contact.workTogetherDescription')}
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">📧</span>
              </div>
              <div>
                <p className="font-medium text-lg">{t('contact.email')}</p>
                <a 
                  href="mailto:hello@lucadcz.dev" 
                  className="text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  nazargunawan.m@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">🌍</span>
              </div>
              <div>
                <p className="font-medium text-lg">{t('contact.location')}</p>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {t('contact.locationValue')}
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">{t('contact.connectWithMe')}</h3>
            <div className="grid grid-cols-2 gap-3">
              <a 
                href="https://github.com/lucadcz" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-neutral-100 dark:bg-neutral-800 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors group"
              >
                <span>{t('contact.github')}</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </a>
              <a 
                href="https://linkedin.com/in/muhammad-nazar-gunawan" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-blue-100 dark:bg-blue-900 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors group"
              >
                <span>{t('contact.linkedin')}</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight mb-4">
          {t('contact.readyToStart')}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
          {t('contact.readyToStartDescription')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:nazargunawan.m@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-medium"
          >
            {t('contact.sendEmail')}
          </a>
          <a 
            href="/about"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-neutral-300 dark:border-neutral-700 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors font-medium"
          >
            {t('contact.learnMoreAboutMe')}
          </a>
        </div>
      </section>
    </div>
  )
}