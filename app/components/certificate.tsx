"use client";

import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

type Certificate = {
    id: number;
    title: string;
    issuer: string;
    date: string;
    image: string;
    description?: string;
};

const certificates = [
    {
        id: 1,
        titleKey: "certificates.juniorMobileDev",
        issuerKey: "certificates.issuer",
        date: "Aug 2025",
        image: "images/junior_mobile_developer.jpg",
        descriptionKey: "certificates.juniorMobileDevDesc",
    },
    {
        id: 2,
        titleKey: "certificates.juniorWebDev",
        issuerKey: "certificates.issuer",
        date: "Feb 2024",
        image: "images/junior_web_developer.jpg",
        descriptionKey: "certificates.juniorWebDevDesc",
    },
    // Add more certificates as needed
];

const CertificateSlider: React.FC = () => {
    const { t } = useLanguage();
    const [current, setCurrent] = React.useState(0);
    const [showModal, setShowModal] = React.useState(false);

    const closeModal = () => setShowModal(false);
    const openModal = () => setShowModal(true);

    const nextSlide = () => {
        setCurrent((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
    };

    return (
        <section
            aria-label="Certificates and Achievements"
            className="w-full max-w-xl mx-auto py-8"
        >
            <h2 className="text-2xl font-bold mb-4 text-center">{t('certificates.title')}</h2>
            <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center">
                <img
                    src={certificates[current].image}
                    alt={t(certificates[current].titleKey)}
                    className="w-32 h-32 object-cover rounded-md mb-4 border cursor-pointer"
                    onClick={openModal}
                />
                <h3 className="text-lg font-semibold">{t(certificates[current].titleKey)}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t(certificates[current].issuerKey)} &middot; {certificates[current].date}</p>
                {certificates[current].descriptionKey && (
                    <p className="mt-2 text-gray-700 dark:text-gray-300 text-center">{t(certificates[current].descriptionKey)}</p>
                )}
                <div className="flex mt-6 space-x-4">
                    <button
                        aria-label="Previous"
                        onClick={prevSlide}
                        className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                    >
                        &#8592;
                    </button>
                    <button
                        aria-label="Next"
                        onClick={nextSlide}
                        className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                    >
                        &#8594;
                    </button>
                </div>
                <div className="flex mt-4 space-x-2">
                    {certificates.map((_, idx) => (
                        <button
                            key={idx}
                            aria-label={`Go to slide ${idx + 1}`}
                            onClick={() => setCurrent(idx)}
                            className={`w-3 h-3 rounded-full ${
                                idx === current
                                    ? "bg-blue-500"
                                    : "bg-gray-300 dark:bg-gray-700"
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Modal Pop Up */}
            {showModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 relative max-w-md w-full flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-xl"
                            onClick={closeModal}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <img
                            src={certificates[current].image}
                            alt={t(certificates[current].titleKey)}
                            className="w-64 h-64 object-cover rounded-md mb-4 border"
                        />
                        <h3 className="text-lg font-semibold">{t(certificates[current].titleKey)}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t(certificates[current].issuerKey)} &middot; {certificates[current].date}</p>
                        {certificates[current].descriptionKey && (
                            <p className="mt-2 text-gray-700 dark:text-gray-300 text-center">{t(certificates[current].descriptionKey)}</p>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default CertificateSlider;