import GeometricBackground from "@/components/GeometricBackground";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SpecialOffer from "@/components/SpecialOffer";
import About from "@/components/About";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="relative">
      {/* Geometric Background - Fixed across all sections */}
      <GeometricBackground />

      {/* Page Sections */}
      <div className="relative z-10">
        <Hero />
        <Services />
        <SpecialOffer />
        <About />
        <CTA />
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-900 text-white py-8 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-lg font-semibold mb-2">Ömer DUMAN - Matematik Öğretmeni</p>
          <p className="text-sm opacity-70">
            Sınavlara Ömer Hoca ile Hep Bir Adım Önde
          </p>
          <p className="text-xs mt-4 opacity-50">
            © 2026 - Tüm hakları saklıdır
          </p>
        </div>
      </footer>
    </main>
  );
}
