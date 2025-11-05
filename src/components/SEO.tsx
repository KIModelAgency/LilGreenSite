import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import locationsData from '@/data/locations.json';
import menuData from '@/data/menu.json';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

export function SEO({ title, description, image, type = 'website' }: SEOProps) {
  const { lang } = useLanguage();
  
  const defaultTitle = 'Lil Green Kitchen - Plant Based Kitchen, Inspired by Nature';
  const defaultDescription = lang === 'en'
    ? 'Fresh bowls, salads & smoothies in Starnberg and Berg. Plant based kitchen, inspired by nature. Seasonal, regional, delicious. #MAKEYOUHEALTHY'
    : 'Fresh Bowls, Salate & Smoothies in Starnberg und Berg. Plant Based Kitchen, Inspired by Nature. Saisonal, regional, lecker. #MAKEYOUHEALTHY';
  
  const siteUrl = 'https://lilgreenkitchen.de';
  const ogImage = image || `${siteUrl}/og-image.jpg`;

  const pageTitle = title ? `${title} | Lil Green Kitchen` : defaultTitle;
  const pageDescription = description || defaultDescription;

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lil Green Kitchen',
    legalName: 'Brain Food Innovations GmbH',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: pageDescription,
    email: 'info@lilgreen.de',
    sameAs: ['https://www.instagram.com/lil_green_kitchen'],
  };

  // Restaurant Schemas for each location
  const restaurantSchemas = locationsData.map((location: any) => ({
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: `Lil Green Kitchen ${location.city}`,
    image: ogImage,
    description: pageDescription,
    servesCuisine: ['Plant-Based', 'Vegan', 'Healthy'],
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address,
      addressLocality: location.city,
      postalCode: location.zip,
      addressCountry: 'DE',
    },
    telephone: location.phone,
    url: siteUrl,
    openingHoursSpecification: location.hours
      .filter((h: any) => h.open !== 'Geschlossen' && h.open !== 'Closed')
      .map((h: any) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: h.dayEn,
        opens: h.open,
        closes: h.close,
      })),
  }));

  // Menu Schema with sample items
  const menuSchema = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    hasMenuSection: menuData.categories.slice(0, 3).map((category: any) => ({
      '@type': 'MenuSection',
      name: category.name,
      hasMenuItem: menuData.items
        .filter((item: any) => item.category === category.id)
        .slice(0, 3)
        .map((item: any) => ({
          '@type': 'MenuItem',
          name: item.name,
          description: item.description,
          offers: {
            '@type': 'Offer',
            price: item.price,
            priceCurrency: 'EUR',
          },
          suitableForDiet: item.labels.includes('vegan')
            ? 'https://schema.org/VeganDiet'
            : undefined,
        })),
    })),
  };

  return (
    <Helmet>
      <html lang={lang} />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content="Lil Green Kitchen" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      {restaurantSchemas.map((schema, index) => (
        <script key={`restaurant-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
      <script type="application/ld+json">{JSON.stringify(menuSchema)}</script>
    </Helmet>
  );
}
