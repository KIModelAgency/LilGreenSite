import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, TrendingUp, Users, Handshake } from "lucide-react";
import saladImage from "@assets/generated_images/Fresh_garden_salad_bowl_79601ace.png";
import teamImage from "@/assets/career/StarnbergSonne.jpeg";
import growthImage from "@/assets/career/Kitchen.jpeg";
import kitchenImage from "@/assets/career/Kitchen3.jpeg";
import mooswandImage from "@/assets/career/mooswand.png";

export default function Karriere() {
  const shouldReduceMotion = useReducedMotion();

  const blocks = [
    {
      icon: Briefcase,
      title: "Unser Konzept: Gesund. Nachhaltig. Skalierbar.",
      text: (
        <>
          Unsere Restaurants kombinieren klare Prozesse, effiziente Abläufe und ein
          leistungsorientiertes Angebot. Die Standorte in Starnberg und Berg zeigen
          täglich, wie stark die Nachfrage ist – von Sportlern über Familien bis hin
          zu allen, die bewusst essen möchten.
          <br />
          <br />
          Die nächsten Standorte sind bereits in Planung. Dafür suchen wir
          Persönlichkeiten, die Verantwortung übernehmen wollen, an das Konzept
          glauben und Lust haben, unternehmerisch mitzuwirken.
        </>
      ),
    },
    {
      icon: TrendingUp,
      title: "Das Lil-Green-Unternehmermodell",
      text: (
        <>
          Wir bieten ein Modell, das weit über einen normalen Job hinausgeht:
          <br />
          <br />
          <ul className="list-disc list-inside space-y-1">
            <li>Verantwortung übernehmen</li>
            <li>Standort mit aufbauen</li>
            <li>Operativ mitgestalten</li>
            <li>Am Gewinn beteiligt sein</li>
          </ul>
          <br />
          Wer Teil von Lil Green Kitchen bleiben und sich langfristig einbringen
          möchte, kann Anteile an einem oder mehreren Restaurants erhalten – und so
          direkt vom gemeinsamen Erfolg profitieren.
          <br />
          <br />
          Voraussetzung: Bevor eine Beteiligung möglich ist, arbeitest du mindestens
          12 Monate im Lil Green Kitchen. So stellen wir sicher, dass Werte,
          Arbeitsweise und Verantwortungsverständnis übereinstimmen – und dass du das
          Konzept von innen heraus kennst.
        </>
      ),
    },
    {
      icon: Users,
      title: "Für wen ist das Modell geeignet?",
      text: (
        <>
          Für Menschen, die:
          <br />
          <br />
          <ul className="list-disc list-inside space-y-1">
            <li>mehr wollen als einen normalen Job</li>
            <li>Verantwortungsbewusstsein und Gastgebermentalität besitzen</li>
            <li>Prozesse effizient umsetzen und verbessern können</li>
            <li>nachhaltige Ernährung schätzen</li>
            <li>
              bereit sind, gemeinsam etwas aufzubauen statt nur mitzuschwimmen
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: Handshake,
      title: "Unser Versprechen",
      text: (
        <>
          Wir geben dir:
          <br />
          <br />
          <ul className="list-disc list-inside space-y-1">
            <li>ein funktionierendes, erprobtes Konzept</li>
            <li>hochwertige Produkte und klare Prozesse</li>
            <li>Unterstützung beim Aufbau neuer Standorte</li>
            <li>ein Beteiligungsmodell, das Leistung wirklich belohnt</li>
          </ul>
          <br />
          Gemeinsam wollen wir eine Marke entwickeln, die für gesunde Ernährung,
          Nachhaltigkeit und unternehmerisches Wachstum steht.
        </>
      ),
    },
  ];

  // Nur für die Bilder der Blöcke – Texte bleiben unangetastet
  const getBlockImage = (index: number) => {
    switch (index) {
      case 0:
        return teamImage;
      case 1:
        return growthImage;
      case 2:
        return kitchenImage;
      case 3:
        return mooswandImage; // z.B. nochmal Starnberg, kannst du auch anders wählen
      default:
        return saladImage;
    }
  };

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
          >
            Werde Teil von Lil Green Kitchen – und wachse unternehmerisch mit uns
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Lil Green Kitchen steht für frische, gesunde und nachhaltige Ernährung – schnell,
            unkompliziert und voller Geschmack. Mit zwei erfolgreichen Standorten in Starnberg
            und Berg haben wir gezeigt, dass moderne Bowl-Konzepte auch außerhalb der großen
            Städte funktionieren.
            <br />
            <br />
            Jetzt gehen wir den nächsten Schritt: Wir expandieren – und suchen Menschen, die
            unternehmerisch mit uns wachsen wollen.
          </motion.p>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={saladImage}
              alt="Lil Green Kitchen – frische, grüne Küche"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content Blocks */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {blocks.map((block, index) => (
              <motion.div
                key={block.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                {/* Textseite */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <block.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                      {block.title}
                    </h2>
                  </div>
                  <div className="text-lg text-muted-foreground leading-relaxed">
                    {block.text}
                  </div>
                </div>

                {/* Bildseite */}
                <div
                  className={
                    index % 2 === 1
                      ? "lg:col-start-1 lg:row-start-1 flex justify-center"
                      : "flex justify-center"
                  }
                >
                  <div className="rounded-2xl bg-muted overflow-hidden shadow-md flex justify-center">
                    <img
                      src={getBlockImage(index)}
                      alt={block.title}
                      className="max-h-[480px] w-auto object-cover rounded-2xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
              Interesse? Dann lass uns sprechen.
            </h2>
            <p className="text-xl opacity-90 mb-6">
              Wenn du dir vorstellen kannst, ein Lil-Green-Restaurant als Teilhaber:in zu
              führen – oder mehr über unser Unternehmermodell erfahren möchtest – melde dich
              bei uns. Direkt. Persönlich. Unverbindlich.
            </p>
            <a
              href="mailto:info@lilgreen.de"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 transition-colors"
            >
              Jetzt Kontakt aufnehmen
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
