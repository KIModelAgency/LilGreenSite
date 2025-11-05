import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@assets/career/Colorful_healthy_food_bowl_hero_fffad8fd.png';

export function Hero() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ scale: shouldReduceMotion ? 1 : 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-accent font-medium text-lg mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              data-testid="text-hero-aloha"
            >
              {t.hero.aloha}
            </motion.p>
            
            <motion.h1
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              data-testid="text-hero-title"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              data-testid="text-hero-subtitle"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link href="/karriere">
                <Button
                  size="lg"
                  className="text-base px-8"
                  data-testid="button-hero-karriere"
                >
                  Karriere entdecken
                </Button>
              </Link>
              <Link href="/locations">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                  data-testid="button-hero-locations"
                >
                  {t.hero.ctaLocations}
                </Button>
              </Link>
              <a
                href="https://www.instagram.com/lil_green_kitchen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                  data-testid="button-hero-instagram"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  {t.hero.ctaInstagram}
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.2,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.5,
        }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}
