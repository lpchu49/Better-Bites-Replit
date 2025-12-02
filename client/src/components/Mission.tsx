import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Mission() {
  const benefits = [
    "No Added Sugars",
    "Gluten Free",
    "Vegan",
    "Preservative Free",
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
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-foreground">
              Food that fuels your soul.
            </h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-6">
                Our mission is simple: to create snacks that are as honest as
                they are delicious. We believe that nature provides everything
                we need to feel energized and vibrant, without unpronouncable
                ingredients and hidden syrups. That's why our energy balls are
                made from just a handful of raw, whole, recognizable
                ingredients.
              </p>
              <p>
                Every bite is our promise of quality, sustainability, and pure,
                simple flavor.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-[2rem] overflow-hidden bg-stone-200"
          >
            <div className="absolute inset-0 bg-stone-900 p-12 flex flex-col justify-between">
              <div className="text-white/20 text-9xl font-serif font-black leading-none select-none">
                REAL
                <br />
                FOOD
              </div>
              <div className="space-y-6">
                <div className="h-px w-24 bg-primary" />
                <blockquote className="text-2xl md:text-3xl text-white font-serif italic">
                  "We don't just sell snacks; we advocate for a return to real,
                  whole food."
                </blockquote>
                <cite className="text-white/60 not-italic block">
                  — The Better Bites Team
                </cite>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
