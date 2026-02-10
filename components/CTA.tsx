'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
    return (
        <section id="iletisim" className="relative section-padding bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 left-20 w-32 h-32 border-4 border-white rounded-full animate-float" />
                    <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-white transform rotate-45 animate-float-slow" />
                    <div className="absolute top-1/2 left-1/3 text-9xl opacity-5">∑</div>
                    <div className="absolute top-1/4 right-1/4 text-9xl opacity-5">π</div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    {/* Header */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-poppins)' }}>
                        Başarı Yolculuğunuz Başlasın!
                    </h2>

                    <p className="text-xl md:text-2xl mb-12 opacity-90">
                        Matematik başarısı için ilk adımı atın.
                        <br />
                        Hedeflerinize ulaşmak için hemen iletişime geçin.
                    </p>

                    {/* Contact Info Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                        >
                            <div className="text-4xl mb-3">
                                <svg className="w-12 h-12 mx-auto text-green-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                            <p className="text-sm opacity-80">Hızlı iletişim için</p>
                            <a
                                href="https://wa.me/905056917893"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 text-green-400 hover:text-green-300 font-semibold"
                            >
                                Mesaj Gönder →
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                        >
                            <div className="text-4xl mb-3">📞</div>
                            <h3 className="font-bold text-lg mb-2">Telefon</h3>
                            <p className="text-sm opacity-80">Detaylı bilgi için</p>
                            <a
                                href="tel:+905056917893"
                                className="inline-block mt-4 text-blue-400 hover:text-blue-300 font-semibold"
                            >
                                0 505 691 78 93
                            </a>
                        </motion.div>
                    </div>

                    {/* Main CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 shadow-2xl"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            🎉 Özel Kampanya Hala Devam Ediyor!
                        </h3>
                        <p className="text-lg mb-6 opacity-95">
                            1500₺ yerine sadece <span className="text-3xl font-bold">1000₺</span>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/905XXXXXXXXX?text=Merhaba, matematik özel ders hakkında bilgi almak istiyorum."
                                className="bg-white text-orange-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                💬 WhatsApp ile İletişim
                            </a>
                            <a
                                href="tel:+905XXXXXXXXX"
                                className="bg-blue-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-950 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                📞 Hemen Ara
                            </a>
                        </div>
                        <p className="mt-4 text-sm opacity-75">
                            * Sınırlı kontenjan - En kısa sürede dolacaktır
                        </p>
                    </motion.div>

                    {/* Footer Note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 text-sm opacity-70"
                    >
                        Matematik başarısı bir adım uzağınızda. Ömer Hoca ile farkı yaşayın!
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
