'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SpecialOffer() {
    return (
        <section id="kampanya" className="relative section-padding bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full animate-pulse-glow" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-white"
                >
                    {/* Urgency Badge */}
                    <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        className="inline-block mb-6"
                    >
                        <div className="bg-white text-orange-600 px-6 py-3 rounded-full font-bold text-lg shadow-xl">
                            ⚡ KAÇIRILMAYACAK FIRSAT ⚡
                        </div>
                    </motion.div>

                    {/* Main Offer */}
                    <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-poppins)' }}>
                        Özel Kampanya!
                    </h2>

                    <p className="text-xl md:text-2xl mb-8 opacity-95">
                        Şimdi kayıt olun, başarıya giden yolda avantajlı fiyatlarla ilerleyin!
                    </p>

                    {/* Price Comparison */}
                    <div className="flex items-center justify-center gap-8 mb-8 flex-wrap">
                        {/* Old Price */}
                        <div className="relative">
                            <div className="text-6xl md:text-8xl font-bold opacity-60 line-through">
                                1500₺
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-full h-1 bg-red-500 transform -rotate-12" />
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="text-5xl">→</div>

                        {/* New Price */}
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        >
                            <div className="text-7xl md:text-9xl font-bold text-white drop-shadow-2xl">
                                1000₺
                            </div>
                            <div className="text-xl md:text-2xl mt-2 font-semibold">
                                / Aylık
                            </div>
                        </motion.div>
                    </div>

                    {/* Savings */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 mb-8 inline-block"
                    >
                        <div className="text-3xl md:text-4xl font-bold mb-2">
                            500₺ Tasarruf!
                        </div>
                        <div className="text-lg opacity-90">
                            Kısa süreliğine geçerli bu fırsatı kaçırmayın
                        </div>
                    </motion.div>

                    {/* Benefits */}
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        {[
                            { icon: '✅', text: 'Haftada 2 Saat Ders' },
                            { icon: '📚', text: 'Kaynak Materyal Desteği' },
                            { icon: '📊', text: 'Düzenli İlerleme Takibi' },
                        ].map((benefit, index) => (
                            <motion.div
                                key={benefit.text}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="bg-white/20 backdrop-blur-lg rounded-xl p-4"
                            >
                                <div className="text-3xl mb-2">{benefit.icon}</div>
                                <div className="font-semibold">{benefit.text}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <a
                            href="#iletisim"
                            className="inline-block bg-white text-orange-600 font-bold text-xl px-12 py-5 rounded-xl shadow-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        >
                            🚀 Hemen Başla
                        </a>
                        <p className="mt-4 text-sm opacity-80">
                            * Kampanya sınırlı sayıda öğrenci için geçerlidir
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
