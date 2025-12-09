import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { motion } from "framer-motion";
import { Heart, Leaf, Users, Sparkles, HandHeart, Award } from "lucide-react";
import messyDateBallsImg from "@assets/date_balls_images/messy-date-balls-assorted.png";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { H1Format } from "@/components/ui/H1Format";
import { H1BodyFormat } from "@/components/ui/H1BodyFormat";
import { H2Format } from "@/components/ui/H2Format";
import { H2BodyFormat } from "@/components/ui/H2BodyFormat";
import { H3BodyFormat } from "@/components/ui/H3BodyFormat";
import { H3Format } from "@/components/ui/H3Format";
import { H4BodyFormat } from "@/components/ui/H4BodyFormat";
import { H5Format } from "@/components/ui/H5Format";

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
            <H2Format as="h2" className="mb-6">
              {t('about.title')}
            </H2Format>
            <H2BodyFormat className="leading-relaxed">
              {t('about.subtitle')}
            </H2BodyFormat>
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
              className="relative bg-secondary/20 rounded-3xl overflow-hidden"
            >
              {/* Background Image */}
              <div
                className="absolute inset-y-0 right-0 w-[70%] z-0"
                style={{
                  backgroundImage: `url(${messyDateBallsImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: '80% 30%',
                  maskImage: 'linear-gradient(to right, transparent, black 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 100%)'
                }}
              />

              {/* Content */}
              <div className="relative z-10 p-8 md:p-12 max-w-lg">
                <H3Format className="mb-6">
                  {t('about.originTitle')}
                </H3Format>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <H3BodyFormat>
                    {t('about.originP1')}
                  </H3BodyFormat>
                  <H3BodyFormat>
                    {t('about.originP2')}
                  </H3BodyFormat>
                  <H3BodyFormat>
                    {t('about.originP3_prefix')}
                    <span className="text-foreground">{t('about.originP3_text')}</span>
                  </H3BodyFormat>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What We Stand For */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <H3Format className="mb-4">
                {t('about.whatWeStandForTitle')}
              </H3Format>
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
                <H5Format className="mb-2">
                  {t('about.natural')}
                </H5Format>
                <H3BodyFormat>
                  {t('about.naturalDesc')}
                </H3BodyFormat>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="w-7 h-7 text-amber-600" />
                </div>
                <H5Format className="mb-2">
                  {t('about.handcrafted')}
                </H5Format>
                <H3BodyFormat>
                  {t('about.handcraftedDesc')}
                </H3BodyFormat>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-blue-600" />
                </div>
                <H5Format className="mb-2">
                  {t('about.quality')}
                </H5Format>
                <H3BodyFormat>
                  {t('about.qualityDesc')}
                </H3BodyFormat>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="container mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-primary/10 rounded-3xl p-8 md:p-12 text-center"
          >

            <H3Format as="h3" className="mb-6">
              {t('about.missionTitle')}
            </H3Format>
            <H3BodyFormat className="leading-relaxed max-w-2xl mx-auto">
              {t('about.missionText')}
            </H3BodyFormat>
          </motion.div>
        </section>

        {/* CTA Banner */}
        <section className="container mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-orange-700 text-primary-foreground rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 relative z-10">
              {t('about.ctaTitle')}
            </h3>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto relative z-10">
              {t('about.ctaText')}
            </p>
            <Link href="/#products">
              <div className="text-base md:text-lg inline-block bg-background text-primary font-bold py-4 px-8 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 cursor-pointer shadow-lg relative z-10">
                {t('about.ctaButton')}
              </div>
            </Link>
          </motion.div>
        </section>
      </main>

      <Contact />
    </div>
  );
}
