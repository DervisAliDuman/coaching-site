'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'TYT Matematik',
        icon: '📐',
        description: 'Temel Yeterlilik Testi matematik bölümünde hedef puan için eksiksiz hazırlık',
        topics: ['Temel Matematik', 'Geometri', 'Problem Çözme', 'Hız Teknikleri'],
        color: 'from-orange-400 to-orange-600'
    },
    {
        title: 'AYT Matematik',
        icon: '∫',
        description: 'Alan Yeterlilik Testi için ileri düzey matematik ve analiz eğitimi',
        topics: ['Limit', 'Türev', 'İntegral', 'Fonksiyonlar'],
        color: 'from-blue-500 to-blue-700'
    },
    {
        title: 'Geometri',
        icon: '△',
        description: 'Düzlem ve analitik geometri konularında derinlemesine eğitim',
        topics: ['Düzlem Geometri', 'Analitik Geometri', 'Trigonometri', 'Açılar'],
        color: 'from-green-500 to-green-700'
    },
    {
        title: 'Ortaokul Matematik',
        icon: '🎓',
        description: 'Ortaokul müfredatı matematik konularında güçlü bir temel oluşturma',
        topics: ['4 İşlem', 'Kesirler', 'Cebirsel İfadeler', 'Denklemler'],
        color: 'from-purple-500 to-purple-700'
    },
    {
        title: 'LGS Matematik',
        icon: '🎯',
        description: 'Liselere Giriş Sınavı için kapsamlı hazırlık programı',
        topics: ['Sayılar', 'Cebir', 'Geometri', 'Problemler'],
        color: 'from-pink-500 to-pink-700'
    },
    {
        title: 'Özel Program',
        icon: '⭐',
        description: 'İhtiyaçlarınıza özel tasarlanmış bireysel eğitim programı',
        topics: ['Kişisel Plan', 'Esneklik', 'Hedef Odaklı', 'Birebir Takip'],
        color: 'from-amber-500 to-amber-700'
    }
];

export default function Services() {
    return (
        <section id="hizmetler" className="relative section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
                        <span className="gradient-text">Eğitim Programlarımız</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Her seviyede matematik eğitimi için kapsamlı ve etkili programlar
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card group"
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold mb-3 text-gray-800" style={{ fontFamily: 'var(--font-poppins)' }}>
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Topics */}
                            <div className="flex flex-wrap gap-2">
                                {service.topics.map((topic) => (
                                    <span
                                        key={topic}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-lg text-gray-700 mb-6">
                        Sınava hazırlıkta <span className="font-bold text-orange-600">fark yaratan deneyim</span>
                    </p>
                    <a href="#kampanya" className="btn-primary inline-block">
                        🎉 Özel Kampanyayı Gör
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
