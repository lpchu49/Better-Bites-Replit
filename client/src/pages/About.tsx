import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { motion } from "framer-motion";
import { Heart, Leaf, Users, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navbar />

      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              {t('about.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t('about.subtitle')}
            </p>
          </motion.div>
        </section>

        {/* Origin Story */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary/20 rounded-3xl p-8 md:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
                {t('about.originTitle')}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t('about.originP1')}</p>
                <p>{t('about.originP2')}</p>
                <p>{t('about.originP3')}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary/10 rounded-3xl p-8"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                {t('about.missionTitle')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.missionText')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary/30 rounded-3xl p-8"
            >
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                {t('about.visionTitle')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.visionText')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why We're Here */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                {t('about.whyTitle')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('about.whySubtitle')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-7 h-7 text-green-600" />
                </div>
                <h4 className="font-bold text-foreground mb-2">
                  {t('about.realIngredients')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('about.realIngredientsDesc')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-amber-600" />
                </div>
                <h4 className="font-bold text-foreground mb-2">
                  {t('about.madeWithLove')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('about.madeWithLoveDesc')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
                <h4 className="font-bold text-foreground mb-2">
                  {t('about.communityFirst')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t('about.communityFirstDesc')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Contact />
    </div>
  );
}
