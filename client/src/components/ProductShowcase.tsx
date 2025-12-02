import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { Link } from "wouter";
import coconutImg from "@assets/generated_images/classic_date_almond_coconut_ball.png";
import chocolateImg from "@assets/generated_images/lux_chocolate_date_ball.png";
import lemonImg from "@assets/generated_images/zesty_lemon_date_ball.png";
import pistachioImg from "@assets/generated_images/pistachio_coated_date_ball.png";

export const products = [
  {
    id: "classic",
    name: "Classic",
    tagline: "Simply perfect",
    short_description:
      "The ball that started it all. Sweet dates, crunchy almonds, and tropical coconut.",
    description:
      "Our signature date ball that started it all. A harmonious blend of sweet dates, crunchy almonds, and tropical coconut. Pure, simple, and absolutely delicious.",
    image: coconutImg,
    ingredients: ["Dates", "Almonds", "Desiccated Coconut"],
    nutrition: {
      kcal: 120,
      protein: "3g",
      fiber: "2g",
      fat: "6g",
      carbs: "18g",
      sugar: "14g",
    },
    color: "bg-[#F5F5F0]",
  },
  {
    id: "lux",
    name: "Lux",
    tagline: "Decadent Dark Chocolate",
    short_description:
      "A brownie-like experience without the guilt. Rich, dark, and luxurious.",
    description:
      "Indulge your chocolate cravings with Lux. We blend dates, almonds, and walnuts with premium 65% dark chocolate and cocoa powder, then roll it all in a dusting of cocoa. It's rich, fudgy, and completely guilt-free.",
    image: chocolateImg,
    ingredients: [
      "Medjool Dates",
      "Almonds",
      "Walnuts",
      "65% Dark Chocolate",
      "Cocoa Powder",
    ],
    nutrition: {
      kcal: 135,
      protein: "4g",
      fiber: "3g",
      fat: "7g",
      carbs: "16g",
      sugar: "12g",
    },
    color: "bg-[#F0EAE5]",
  },
  {
    id: "zen",
    name: "Zen",
    tagline: "Matcha Pistachio Calm",
    short_description: "Vibrant green tea energy for focused calm and clarity.",
    description:
      "Find your center with Zen. Creamy cashews and pistachios blended with dates and coconut, finished with a vibrant coating of premium matcha green tea powder. Earthy, nutty, and perfectly balanced.",
    image: pistachioImg,
    ingredients: [
      "Medjool Dates",
      "Cashews",
      "Pistachios",
      "Desiccated Coconut",
      "Matcha Powder",
    ],
    nutrition: {
      kcal: 125,
      protein: "5g",
      fiber: "2.5g",
      fat: "6.5g",
      carbs: "15g",
      sugar: "11g",
    },
    color: "bg-[#EEF2E8]",
  },
  {
    id: "zesty",
    name: "Zesty",
    tagline: "Lemon Sunburst",
    short_description:
      "A bright burst of sunshine with fresh lemon and sweet raisins.",
    description:
      "Wake up your tastebuds with Zesty. We mix dates and creamy cashews with fresh lemon juice, lemon zest, and sweet raisins, then roll it in coconut. It tastes like a slice of lemon tart, but wholesome.",
    image: lemonImg,
    ingredients: [
      "Medjool Dates",
      "Cashews",
      "Lemon Juice",
      "Lemon Zest",
      "Raisins",
      "Desiccated Coconut",
    ],
    nutrition: {
      kcal: 118,
      protein: "3g",
      fiber: "2g",
      fat: "5g",
      carbs: "19g",
      sugar: "15g",
    },
    color: "bg-[#FFFBEB]",
  },
];

export function ProductShowcase() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Simple. Real. Delicious.
          </h2>
          <p className="text-muted-foreground text-lg">
            Four distinct flavors, one simple philosophy: real food tastes
            better.
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
                    alt={product.name}
                    className="w-full h-full object-cover mix-blend-overlay opacity-90 md:mix-blend-normal md:opacity-100 transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Nutrition Badge */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-sm text-xs font-medium text-foreground">
                    {product.nutrition.kcal} kcal / ball
                  </div>
                </div>

                <div className="space-y-4 flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-primary font-medium text-sm uppercase tracking-wide">
                        {product.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {product.short_description}
                  </p>

                  <div className="pt-4 border-t border-border">
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-green-600" />
                      Ingredients
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.ingredients.map((ing) => (
                        <span
                          key={ing}
                          className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                        >
                          {ing}
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
