'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50 overflow-hidden">
            <div className="max-w-7xl mx-auto section-padding relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-block mb-4 px-4 py-2 bg-orange-100 rounded-full"
                        >
                            <span className="text-orange-600 font-semibold text-sm md:text-base">
                                ✨ Başarıya Giden Yolda Yanınızdayım
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                            <span className="gradient-text">Sınavlara</span>
                            <br />
                            <span className="text-blue-900">Ömer Hoca ile</span>
                            <br />
                            <span className="text-orange-500">Hep Bir Adım Önde</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
                        >
                            TYT, AYT, Geometri ve tüm matematik konularında
                            <span className="font-bold text-blue-800"> uzman eğitim</span>.
                            <br />
                            Ortaokuldan üniversite sınavlarına kadar
                            <span className="font-bold text-orange-600"> her seviyede</span> eğitim!
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                        >
                            <a href="#iletisim" className="btn-primary text-center">
                                📞 Hemen İletişime Geç
                            </a>
                            <a href="#hizmetler" className="btn-secondary text-center">
                                📚 Eğitim Programları
                            </a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="mt-12 grid grid-cols-3 gap-6"
                        >
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-orange-500">25+</div>
                                <div className="text-sm text-gray-600 mt-1">Yıl Deneyim</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-blue-800">500+</div>
                                <div className="text-sm text-gray-600 mt-1">Başarılı Öğrenci</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-green-600">%95</div>
                                <div className="text-sm text-gray-600 mt-1">Başarı Oranı</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Teacher Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10">
                            {/* Decorative elements behind the image */}
                            <div className="absolute -top-6 -left-6 w-72 h-72 bg-orange-400 rounded-3xl opacity-20 animate-pulse-glow" />
                            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-blue-600 rounded-3xl opacity-20 animate-pulse-glow" style={{ animationDelay: '1s' }} />

                            {/* Main Image Container */}
                            <div className="relative bg-white rounded-3xl shadow-2xl p-4 transform hover:scale-105 transition-transform duration-300">
                                <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                                    <Image
                                        src="/omer-hoca.png"
                                        alt="Ömer Duman - Matematik Öğretmeni"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                {/* Name Badge */}
                                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full shadow-lg">
                                    <div className="text-center">
                                        <div className="font-bold text-lg">Ömer DUMAN</div>
                                        <div className="text-sm opacity-90">Matematik Öğretmeni</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
