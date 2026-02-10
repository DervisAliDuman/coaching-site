'use client';

import React from 'react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: '🎓',
        title: 'Deneyimli Eğitim',
        description: '25+ yıllık öğretmenlik tecrübesi'
    },
    {
        icon: '🎯',
        title: 'Hedef Odaklı',
        description: 'Her öğrenciye özel program ve takip'
    },
    {
        icon: '📈',
        title: 'Kanıtlanmış Başarı',
        description: '500+ öğrenci hedefe ulaştı'
    },
    {
        icon: '💡',
        title: 'Etkili Yöntemler',
        description: 'Modern ve anlaşılır anlatım teknikleri'
    }
];

const slogans = [
    "Matematik Başarısının Formülü: Ömer Hoca",
    "Başarı Tesadüf Değil, Doğru Rehberlik İle Gelir",
    "Her Öğrenci Özeldir, Eğitim Planınız da Öyle Olsun",
    "Hedeflerinize Matematik Yolculuğu Başlasın"
];

function SloganRotator() {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slogans.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <p className="text-lg md:text-xl font-semibold text-gray-800 italic transition-all duration-500">
            "{slogans[index]}"
        </p>
    );
}

export default function About() {
    return (
        <section className="relative section-padding bg-gradient-to-br from-blue-50 via-white to-green-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-poppins)' }}>
                        <span className="text-blue-900">Neden </span>
                        <span className="gradient-text">Ömer Hoca?</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Matematik sadece rakamlar ve formüllerden ibaret değildir.
                        Doğru rehberlik ile her öğrenci başarıya ulaşabilir.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Approach Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
                >
                    <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text" style={{ fontFamily: 'var(--font-poppins)' }}>
                        Eğitim Yaklaşımım
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h4 className="text-2xl font-bold text-blue-800 mb-4">📚 Kapsamlı Müfredat</h4>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">✓</span>
                                    <span>TYT ve AYT matematik konularının tamamı</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">✓</span>
                                    <span>Geometri ve analitik geometri uzmanlığı</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">✓</span>
                                    <span>Ortaokul ve LGS matematik programı</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">✓</span>
                                    <span>Konu eksiklerinin tespiti ve giderilmesi</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-2xl font-bold text-green-600 mb-4">🎯 Bireysel Yaklaşım</h4>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span>Her öğrenciye özel eğitim planı</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span>Haftalık ilerleme takibi ve raporlama</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span>Sınav stratejileri ve zaman yönetimi</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span>Motivasyon ve hedef belirleme desteği</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Rotating Slogans */}
                    <div className="bg-gradient-to-r from-orange-100 to-blue-100 rounded-2xl p-6 text-center">
                        <SloganRotator />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
