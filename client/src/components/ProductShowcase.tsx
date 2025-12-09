import { motion } from "framer-motion";
import { Leaf, Star } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import classicImg1 from "@assets/date_balls_images/classic-date-balls-1.png";
import classicImg2 from "@assets/date_balls_images/classic-date-balls-2.png";
import classicImg3 from "@assets/date_balls_images/classic-date-balls-3.png";
import luxImg1 from "@assets/date_balls_images/lux-date-balls-1.png";
import luxImg2 from "@assets/date_balls_images/lux-date-balls-2.png";
import zestyImg1 from "@assets/date_balls_images/zesty-date-balls-1.png";
import zestyImg2 from "@assets/date_balls_images/zesty-date-balls-2.png";
import zestyImg3 from "@assets/date_balls_images/zesty-date-balls-3.png";
import zestyPackageImg from "@assets/packaging/zesty-package-vnese.png";
import zenImg1 from "@assets/date_balls_images/zen-date-balls-1.png";
import zenImg2 from "@assets/date_balls_images/zen-date-balls-2.png";
import classicPackageVnese from "@assets/packaging/classic-package-vnese.png";
import classicPackageEng from "@assets/packaging/classic-package-eng.png";
import luxPackageVnese from "@assets/packaging/lux-package-vnese.png";
import zenPackageVnese from "@assets/packaging/zen-package-vnese.png";
import { H2Format } from "@/components/ui/H2Format";
import { H4Format } from "@/components/ui/H4Format";
import { H5Format } from "@/components/ui/H5Format";
import { H6Format } from "@/components/ui/H6Format";
import { TagFormat } from "@/components/ui/TagFormat";
import { H2BodyFormat } from "@/components/ui/H2BodyFormat";
import { H3BodyFormat } from "@/components/ui/H3BodyFormat";
import { H4BodyFormat } from "@/components/ui/H4BodyFormat";
import { CardText } from "@/components/ui/CardText";

export const products = [
  {
    id: "classic",
    image: classicImg1,
    ingredients: ["dates", "almonds", "desiccatedCoconut"],
    nutrition: {
      kcal: 49,
      protein: "1.4g",
      fiber: "1.1g",
      fat: "3.6g",
      carbs: "3.9g",
      sugar: "2.6g",
    },
    price: "10.000₫",
    color: "bg-[#F5F5F0]",
    gallery: [classicImg1, classicImg2, classicImg3, classicPackageVnese, classicPackageEng],
  },
  {
    id: "lux",
    image: luxImg1,
    ingredients: ["dates", "almonds", "walnuts", "cocoa", "darkChocolate"],
    nutrition: {
      kcal: 49,
      protein: "1.3g",
      fiber: "1.1g",
      fat: "3.7g",
      carbs: "3.9g",
      sugar: "2.3g",
    },
    price: "13.000₫",
    color: "bg-[#F0EAE5]",
    gallery: [luxImg1, luxImg2, luxPackageVnese],
  },
  {
    id: "zen",
    image: zenImg1,
    ingredients: ["dates", "cashews", "pistachios", "matcha", "desiccatedCoconut"],
    nutrition: {
      kcal: 48,
      protein: "1.3g",
      fiber: "0.8g",
      fat: "3.2g",
      carbs: "4.3g",
      sugar: "2.5g",
    },
    price: "13.000₫",
    color: "bg-[#EEF2E8]",
    gallery: [zenImg1, zenImg2, zenPackageVnese],
  },
  {
    id: "zesty",
    image: zestyImg1,
    ingredients: ["dates", "cashews", "lemon", "raisins", "desiccatedCoconut"],
    nutrition: {
      kcal: 46,
      protein: "1.2g",
      fiber: "0.7g",
      fat: "3.0g",
      carbs: "4.3g",
      sugar: "2.8g",
    },
    price: "15.000₫",
    color: "bg-[#FFFBEB]",
    bestSeller: true,
    gallery: [zestyImg1, zestyImg2, zestyImg3, zestyPackageImg],
  },
];

export function ProductShowcase() {
  const { t } = useTranslation();

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <H2Format className="mb-6">
            {t('products.title')}
          </H2Format>
          <H2BodyFormat className="max-w-2xl mx-auto mb-16">
            {t('products.subtitle')}
          </H2BodyFormat>
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
                  {/* Nutrition Badge */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-sm text-xs md:text-sm font-medium text-foreground">
                    {product.nutrition.kcal} {t('products.kcalPerBall')}
                  </div>

                  {/* Best Seller Badge */}
                  {product.bestSeller && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg text-sm md:text-base font-bold flex items-center gap-2 z-10">
                      <Star className="w-4 h-4 fill-current" />
                      Best Seller
                    </div>
                  )}
                </div>

                <div className="space-y-4 flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <H4Format as="h3" className="group-hover:text-primary transition-colors">
                        {t(`products.${product.id}.name`)}
                      </H4Format>
                      <H4BodyFormat className="text-primary font-bold uppercase tracking-wider">
                        {t(`products.${product.id}.tagline`)}
                      </H4BodyFormat>
                    </div>
                  </div>

                  <H4BodyFormat>
                    {t(`products.${product.id}.shortDescription`)}
                  </H4BodyFormat>

                  <div className="pt-4 border-t border-border">
                    <H6Format className="mb-3 flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-green-600" />
                      {t('products.ingredients')}
                    </H6Format>
                    <div className="flex flex-wrap gap-2">
                      {product.ingredients.map((ing) => (
                        <TagFormat key={ing} className="text-xs md:text-sm">
                          {t(`products.ingredientNames.${ing}`)}
                        </TagFormat>
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
