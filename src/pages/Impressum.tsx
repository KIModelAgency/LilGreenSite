import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Impressum() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-8"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            data-testid="text-impressum-title"
          >
            {t.impressum.title}
          </motion.h1>

          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8 text-foreground">
              <div>
                <h2 className="text-2xl font-serif font-semibold mb-3">{t.impressum.company}</h2>
                <p className="text-muted-foreground">{t.impressum.address}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">{t.impressum.contact}</h3>
                <p className="text-muted-foreground">{t.impressum.email}</p>
                <p className="text-muted-foreground">{t.impressum.phone}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">{t.impressum.represented}</h3>
                <p className="text-muted-foreground">{t.impressum.management}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">{t.impressum.register}</h3>
                <p className="text-muted-foreground">{t.impressum.registerEntry}</p>
                <p className="text-muted-foreground">{t.impressum.court}</p>
                <p className="text-muted-foreground">{t.impressum.registerNumber}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">{t.impressum.vat}</h3>
                <p className="text-muted-foreground">{t.impressum.vatNumber}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
