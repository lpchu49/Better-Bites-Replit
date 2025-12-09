import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Leaf, HandHeart, Sprout } from "lucide-react";
import heroBg from "@assets/generated_images/rustic_table_with_date_ball_ingredients_and_negative_space.png";

import { H1Format } from "./ui/H1Format";
import { H2BodyFormat } from "./ui/H2BodyFormat";
import { H1BodyFormat } from "./ui/H1BodyFormat";
import { H3BodyFormat } from "./ui/H3BodyFormat";
import { CardText } from "./ui/CardText";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Wholesome ingredients on a rustic table"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 md:bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl bg-background/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/20 shadow-xl text-center"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium tracking-wide uppercase">
              <Leaf className="w-4 h-4" />
              <CardText as="span">{t('hero.badge')}</CardText>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium tracking-wide uppercase">
              <HandHeart className="w-4 h-4" />
              <CardText as="span">{t('hero.badgeHandmade')}</CardText>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium tracking-wide uppercase">
              <Sprout className="w-4 h-4" />
              <CardText as="span">{t('hero.badgeVegan')}</CardText>
            </span>
          </div>
          <H1Format as="h1" className="mb-6">
            {t('hero.title')}
          </H1Format>
          <H1BodyFormat className="mb-8 leading-relaxed">
            {t('hero.description')}
          </H1BodyFormat>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 transform hover:-translate-y-0.5"
            >
              <H2BodyFormat as="span" className="text-primary-foreground">
                {t('hero.exploreFlavors')}
              </H2BodyFormat>
            </a>
            <a
              href="/about"
              className="px-8 py-4 bg-white/50 text-foreground border border-border rounded-full font-medium hover:bg-white/80 transition-all"
            >
              <H2BodyFormat as="span" className="text-foreground">
                {t('hero.ourStory')}
              </H2BodyFormat>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
