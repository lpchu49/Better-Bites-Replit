import { useRoute, Link } from "wouter";
import { products } from "@/components/ProductShowcase";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { ArrowLeft, Leaf } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function ProductPage() {
  const [match, params] = useRoute("/product/:id");
  
  if (!match) return <NotFound />;

  const product = products.find(p => p.id === params.id);
  
  if (!product) return <NotFound />;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <Link href="/#products">
            <a className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-medium">
              <ArrowLeft className="w-4 h-4" /> Back to Products
            </a>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image Section */}
            <div className={`aspect-square rounded-[2.5rem] overflow-hidden relative ${product.color}`}>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div>
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">{product.tagline}</span>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">{product.name}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="bg-secondary/30 rounded-2xl p-8">
                <h3 className="font-serif font-bold text-2xl mb-6 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  Ingredients
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.ingredients.map((ing) => (
                    <span key={ing} className="px-4 py-2 bg-background rounded-full text-foreground font-medium border border-border shadow-sm">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border border-border rounded-2xl p-8">
                <h3 className="font-serif font-bold text-2xl mb-6">Nutrition Facts</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="space-y-1">
                    <span className="text-muted-foreground text-sm block">Energy</span>
                    <span className="text-xl font-bold text-foreground">{product.nutrition.kcal} kcal</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-muted-foreground text-sm block">Protein</span>
                    <span className="text-xl font-bold text-foreground">{product.nutrition.protein}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-muted-foreground text-sm block">Fiber</span>
                    <span className="text-xl font-bold text-foreground">{product.nutrition.fiber}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-muted-foreground text-sm block">Fat</span>
                    <span className="text-xl font-bold text-foreground">{product.nutrition.fat}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-muted-foreground text-sm block">Carbs</span>
                    <span className="text-xl font-bold text-foreground">{product.nutrition.carbs}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-muted-foreground text-sm block">Sugar*</span>
                    <span className="text-xl font-bold text-foreground">{product.nutrition.sugar}</span>
                    <span className="text-[10px] text-muted-foreground block leading-tight mt-1">*Natural sugar from dates</span>
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 transform hover:-translate-y-0.5">
                Order {product.name} Box
              </button>
            </div>
          </div>
        </div>
      </main>

      <Contact />
    </div>
  );
}
