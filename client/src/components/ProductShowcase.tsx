import { motion } from "framer-motion";
import { Leaf, Check } from "lucide-react";
import coconutImg from "@assets/generated_images/coconut_date_ball_on_ceramic_plate.png";
import cacaoImg from "@assets/generated_images/cacao_dusted_date_ball.png";
import pistachioImg from "@assets/generated_images/pistachio_coated_date_ball.png";

const products = [
  {
    id: "coconut",
    name: "Coconut Bliss",
    tagline: "Tropical & Creamy",
    description: "Sweet medjool dates blended with creamy cashews and rolled in organic desiccated coconut.",
    image: coconutImg,
    ingredients: ["Medjool Dates", "Cashews", "Coconut", "Vanilla Bean"],
    nutrition: { kcal: 120, protein: "3g", fiber: "2g" },
    color: "bg-[#F5F5F0]"
  },
  {
    id: "cacao",
    name: "Cacao Crave",
    tagline: "Rich & Indulgent",
    description: "A brownie-like experience without the guilt. Raw cacao powder, walnuts, and a pinch of sea salt.",
    image: cacaoImg,
    ingredients: ["Medjool Dates", "Walnuts", "Raw Cacao", "Sea Salt"],
    nutrition: { kcal: 115, protein: "4g", fiber: "3g" },
    color: "bg-[#F0EAE5]"
  },
  {
    id: "pistachio",
    name: "Pistachio Power",
    tagline: "Nutty & Earthy",
    description: "Vibrant pistachios and almonds with a hint of matcha green tea for a gentle energy boost.",
    image: pistachioImg,
    ingredients: ["Medjool Dates", "Almonds", "Pistachios", "Matcha"],
    nutrition: { kcal: 125, protein: "5g", fiber: "2.5g" },
    color: "bg-[#EEF2E8]"
  }
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
            We believe in transparency. That's why our ingredients list is short, sweet, and recognizable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`aspect-square rounded-3xl overflow-hidden mb-8 relative ${product.color}`}>
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

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-foreground">{product.name}</h3>
                    <p className="text-primary font-medium text-sm uppercase tracking-wide">{product.tagline}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-600" />
                    Ingredients
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ing) => (
                      <span key={ing} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
