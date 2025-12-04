import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Leaf, HandHeart, Sprout } from "lucide-react";
import heroBg from "@assets/generated_images/rustic_table_with_date_ball_ingredients_and_negative_space.png";

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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium tracking-wide uppercase">
              <Leaf className="w-4 h-4" />
              {t('hero.badge')}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium tracking-wide uppercase">
              <HandHeart className="w-4 h-4" />
              {t('hero.badgeHandmade')}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium tracking-wide uppercase">
              <Sprout className="w-4 h-4" />
              {t('hero.badgeVegan')}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-[1.1]">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 transform hover:-translate-y-0.5"
            >
              {t('hero.exploreFlavors')}
            </a>
            <a
              href="/about"
              className="px-8 py-4 bg-white/50 text-foreground border border-border rounded-full font-medium text-lg hover:bg-white/80 transition-all"
            >
              {t('hero.ourStory')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
