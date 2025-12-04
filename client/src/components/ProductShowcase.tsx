import { motion } from "framer-motion";
import { Leaf, Star } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import classicImg from "@assets/date_balls_images/classic-date-balls-3.png";
import luxImg from "@assets/date_balls_images/lux-date-balls-2.png";
import zestyImg from "@assets/date_balls_images/zesty-date-balls-3.png";
import zenImg from "@assets/date_balls_images/zen-date-balls-2.png";

export const products = [
  {
    id: "classic",
    image: classicImg,
    ingredients: ["dates", "almonds", "desiccatedCoconut"],
    nutrition: {
      kcal: 49,
      protein: "1.4g",
      fiber: "1.1g",
      fat: "3.6g",
      carbs: "3.9g",
      sugar: "2.6g",
    },
    color: "bg-[#F5F5F0]",
  },
  {
    id: "lux",
    image: luxImg,
    ingredients: ["dates", "almonds", "walnuts", "darkChocolate", "cocoa"],
    nutrition: {
      kcal: 49,
      protein: "1.3g",
      fiber: "1.1g",
      fat: "3.7g",
      carbs: "3.9g",
      sugar: "2.3g",
    },
    color: "bg-[#F0EAE5]",
  },
  {
    id: "zen",
    image: zenImg,
    ingredients: ["dates", "cashews", "pistachios", "desiccatedCoconut", "matcha"],
    nutrition: {
      kcal: 48,
      protein: "1.3g",
      fiber: "0.8g",
      fat: "3.2g",
      carbs: "4.3g",
      sugar: "2.5g",
    },
    color: "bg-[#EEF2E8]",
  },
  {
    id: "zesty",
    image: zestyImg,
    ingredients: ["dates", "cashews", "lemon", "raisins", "desiccatedCoconut"],
    nutrition: {
      kcal: 46,
      protein: "1.2g",
      fiber: "0.7g",
      fat: "3.0g",
      carbs: "4.3g",
      sugar: "2.8g",
    },
    color: "bg-[#FFFBEB]",
    bestSeller: true,
  },
];

export function ProductShowcase() {
  const { t } = useTranslation();

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            {t('products.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group cursor-pointer h-full flex flex-col"
              >
                <div
                  className={`aspect-square rounded-3xl overflow-hidden mb-8 relative ${product.color}`}
                >
                  <motion.img
                    src={product.image}
                    alt={t(`products.${product.id}.name`)}
                    className="w-full h-full object-cover mix-blend-overlay opacity-90 md:mix-blend-normal md:opacity-100 transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Nutrition Badge */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-sm text-xs font-medium text-foreground">
                    {product.nutrition.kcal} {t('products.kcalPerBall')}
                  </div>

                  {/* Best Seller Badge */}
                  {product.bestSeller && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg text-sm font-bold flex items-center gap-2 z-10">
                      <Star className="w-4 h-4 fill-current" />
                      Best Seller
                    </div>
                  )}
                </div>

                <div className="space-y-4 flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                        {t(`products.${product.id}.name`)}
                      </h3>
                      <p className="text-primary font-medium text-base uppercase tracking-wide">
                        {t(`products.${product.id}.tagline`)}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {t(`products.${product.id}.shortDescription`)}
                  </p>

                  <div className="pt-4 border-t border-border">
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-green-600" />
                      {t('products.ingredients')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.ingredients.map((ing) => (
                        <span
                          key={ing}
                          className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                        >
                          {t(`products.ingredientNames.${ing}`)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
