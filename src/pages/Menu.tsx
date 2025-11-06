import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import menuData from '@/data/menu.json';
import type { MenuItem } from '@/shared/schema';
import smoothieImage from '@/assets/menu/Fresh_green_smoothie_product_shot_8d9f0291.png';
import saladImage from '@/assets/menu/Fresh_garden_salad_bowl_79601ace.png';
import bakeryImage from '@/assets/menu/Healthy_artisan_bakery_selection_917dc92d.png';
import bowlImage from '@/assets/menu/Colorful_healthy_food_bowl_hero_fffad8fd.png';

const items = menuData.items as MenuItem[];
const specials = menuData.specials;
const categories = menuData.categories;

const categoryImages: Record<string, string> = {
  smoothies: smoothieImage,
  salads: saladImage,
  bakery: bakeryImage,
  bowls: bowlImage,
  coffee: smoothieImage,
};

export default function Menu() {
  const { t, lang } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: t.menu.filterAll },
    { id: 'vegan', label: t.menu.filterVegan },
    { id: 'glutenfrei', label: t.menu.filterGlutenfrei },
    { id: 'no-refined-sugar', label: t.menu.filterNoSugar },
  ];

  const filteredItems = items.filter((item) => {
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
    const filterMatch = activeFilter === 'all' || item.labels.includes(activeFilter as any);
    return categoryMatch && filterMatch;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="font-serif text-5xl sm:text-6xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            data-testid="text-menu-title"
          >
            {t.menu.title}
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.menu.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Weekly Specials */}
      {specials.length > 0 && (
        <section className="py-12 bg-accent/10 border-y border-accent/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6 text-center" data-testid="text-menu-specials">
              {t.menu.specials}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specials.map((special) => (
                <Card key={special.id} className="border-2 border-accent hover-elevate transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <CardTitle className="text-xl font-serif flex-1">
                        {lang === 'en' ? special.nameEn : special.name}
                      </CardTitle>
                      <span className="text-2xl font-bold text-primary flex-shrink-0">
                        €{special.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {lang === 'en' ? special.descriptionEn : special.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {special.labels.map((label) => (
                        <Badge key={label} variant="secondary" className="bg-accent/20 text-accent-foreground">
                          {label === 'vegan'
                            ? t.menu.filterVegan
                            : label === 'glutenfrei'
                            ? t.menu.filterGlutenfrei
                            : t.menu.filterNoSugar}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Menu */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="mb-8">
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent p-0">
                <TabsTrigger
                  value="all"
                  data-testid="tab-category-all"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-6"
                >
                  {t.menu.filterAll}
                </TabsTrigger>
                {categories.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    data-testid={`tab-category-${cat.id}`}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-6"
                  >
                    {lang === 'en' ? cat.nameEn : cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-accent text-accent-foreground shadow-sm'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
                whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
                data-testid={`filter-${filter.id}`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout={!shouldReduceMotion}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                layout={!shouldReduceMotion}
              >
                <Card className="h-full overflow-hidden hover-elevate transition-all duration-300">
                  {/* Image */}
                  <div className="aspect-video w-full overflow-hidden bg-muted">
                    <img
                      src={categoryImages[item.category] || bowlImage}
                      alt={lang === 'en' ? item.nameEn : item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <CardTitle className="text-xl font-serif flex-1" data-testid={`text-item-${item.id}`}>
                        {lang === 'en' ? item.nameEn : item.name}
                      </CardTitle>
                      <span className="text-2xl font-bold text-primary flex-shrink-0">
                        €{item.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {lang === 'en' ? item.descriptionEn : item.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {item.labels.map((label) => (
                        <Badge key={label} variant="secondary" className="text-xs">
                          {label === 'vegan'
                            ? t.menu.filterVegan
                            : label === 'glutenfrei'
                            ? t.menu.filterGlutenfrei
                            : t.menu.filterNoSugar}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Keine Artikel gefunden. Versuche einen anderen Filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
