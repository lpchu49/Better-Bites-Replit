import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { H2Format } from "@/components/ui/H2Format";
import { H2BodyFormat } from "@/components/ui/H2BodyFormat";

export function Mission() {
  const { t } = useTranslation();

  const benefits = [
    t("mission.benefits.noAddedSugars"),
    t("mission.benefits.glutenFree"),
    t("mission.benefits.vegan"),
    t("mission.benefits.preservativeFree"),
  ];

  return (
    <section
      id="mission"
      className="py-24 bg-muted/30 relative overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <H2Format className="mb-8">{t("mission.title")}</H2Format>
            <div className="prose prose-xl text-muted-foreground">
              <H2BodyFormat className="mb-6">
                {t("mission.paragraph1")}
              </H2BodyFormat>
              <H2BodyFormat className="mb-6">
                {t("mission.paragraph2")}
              </H2BodyFormat>
              <H2BodyFormat>{t("mission.paragraph3")}</H2BodyFormat>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <H2BodyFormat
                    as="span"
                    className="font-medium text-foreground"
                  >
                    {benefit}
                  </H2BodyFormat>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden bg-stone-200"
          >
            <div className="absolute inset-0 bg-stone-900 p-6 md:p-12 flex flex-col justify-between">
              <div className="text-white/20 text-6xl md:text-7xl lg:text-9xl font-serif font-black leading-none select-none">
                REAL
                <br />
                FOOD
              </div>
              <div className="space-y-6">
                <div className="h-px w-24 bg-primary" />
                <blockquote className="text-2xl md:text-3xl text-white font-serif italic">
                  {t("mission.quote")}
                </blockquote>
                <cite className="text-white/60 not-italic block">
                  {t("mission.quoteAuthor")}
                </cite>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
