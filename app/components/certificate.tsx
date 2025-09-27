"use client";

import React from "react";

type Certificate = {
    id: number;
    title: string;
    issuer: string;
    date: string;
    image: string;
    description?: string;
};

const certificates: Certificate[] = [
    {
        id: 1,
        title: "Junior  Mobile Developer Certification",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
        date: "Agustus 2025",
        image: "images/junior_mobile_developer.jpg",
        description: "Certified as a Junior Mobile Developer by BNSP, demonstrating proficiency in mobile application development using React Native and Flutter.",
    },
    {
        id: 2,
        title: "Junior Web Developer Certification",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
        date: "Agustus 2021",
        image: "images/junior_web_developer.jpg",
        description: "Certified as a Junior Web Developer by BNSP, demonstrating proficiency in web development using HTML, CSS, and JavaScript.",
    },
    // Add more certificates as needed
];

const CertificateSlider: React.FC = () => {
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
            <h2 className="text-2xl font-bold mb-4 text-center">Certificates as a Developer</h2>
            <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center">
                <img
                    src={certificates[current].image}
                    alt={certificates[current].title}
                    className="w-32 h-32 object-cover rounded-md mb-4 border"
                    onClick={openModal}
                />
                <h3 className="text-lg font-semibold">{certificates[current].title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{certificates[current].issuer} &middot; {certificates[current].date}</p>
                {certificates[current].description && (
                    <p className="mt-2 text-gray-700 dark:text-gray-300 text-center">{certificates[current].description}</p>
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
                            alt={certificates[current].title}
                            className="w-64 h-64 object-cover rounded-md mb-4 border"
                        />
                        <h3 className="text-lg font-semibold">{certificates[current].title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{certificates[current].issuer} &middot; {certificates[current].date}</p>
                        {certificates[current].description && (
                            <p className="mt-2 text-gray-700 dark:text-gray-300 text-center">{certificates[current].description}</p>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default CertificateSlider;