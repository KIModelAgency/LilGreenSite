import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Datenschutz() {
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
            data-testid="text-datenschutz-title"
          >
            {t.datenschutz.title}
          </motion.h1>

          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8 text-foreground">
              <p className="text-muted-foreground leading-relaxed">{t.datenschutz.intro}</p>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-3">{t.datenschutz.collection}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.datenschutz.collectionText}</p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-3">{t.datenschutz.purpose}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.datenschutz.purposeText}</p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-3">{t.datenschutz.retention}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.datenschutz.retentionText}</p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-3">{t.datenschutz.rights}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.datenschutz.rightsText}</p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-3">{t.datenschutz.contact}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.datenschutz.contactText}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
