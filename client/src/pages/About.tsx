import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { motion } from "framer-motion";
import { Heart, Leaf, Users, Sparkles } from "lucide-react";

export default function About() {
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
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A passion for wholesome snacks made with real & simple ingredients
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
                Crafted with Purpose
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Better Bites started in a small kitchen with a simple
                  frustration: why are most "healthy" snacks filled with
                  ingredients we can't pronounce?
                </p>
                <p>
                  We were tired of reading labels packed with artificial
                  sweeteners, preservatives, and mystery additives. We craved
                  something real — a snack that was as honest as it was
                  delicious.
                </p>
                <p>
                  So we started experimenting. Dates became our natural
                  sweetener. Almonds, cashews, and walnuts added crunch and
                  nutrition. Coconut, cacao, and matcha brought flavor and
                  variety. No cooking required — just pure, raw ingredients
                  blended together with care.
                </p>
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
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To create clean, wholesome, and real snacks that make you feel
                good. We're here to prove that healthy eating doesn't mean
                sacrificing taste — and that transparency in ingredients should
                be the norm, not the exception.
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
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where everyone has access to snacks that fuel their day
                without compromise. We envision a future where reading
                ingredient labels brings joy, not confusion — and where
                "healthy" simply means "real."
              </p>
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
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                What We Stand For
              </h2>
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
                  Real Ingredients
                </h4>
                <p className="text-sm text-muted-foreground">
                  If you can't recognize it, we don't use it. Simple as that.
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
                  Handmade With Love
                </h4>
                <p className="text-sm text-muted-foreground">
                  Made in small batches with attention to every detail.
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
                  Community First
                </h4>
                <p className="text-sm text-muted-foreground">
                  We're building more than a brand — we're building a movement.
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
