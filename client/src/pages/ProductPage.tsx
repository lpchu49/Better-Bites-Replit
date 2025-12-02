import { useRoute, Link } from "wouter";
import { products } from "@/components/ProductShowcase";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { ArrowLeft, Leaf } from "lucide-react";
import NotFound from "@/pages/not-found";
import { OrderModal } from "@/components/OrderModal";

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

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Image Section - Smaller (4 columns) */}
            <div className="md:col-span-4">
              <div className={`aspect-square rounded-[2rem] overflow-hidden relative ${product.color} shadow-inner`}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content Section - Wider (8 columns) */}
            <div className="md:col-span-8 space-y-8">
              <div>
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">{product.tagline}</span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">{product.name}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  {product.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Ingredients Column */}
                <div className="bg-secondary/30 rounded-2xl p-6 h-full">
                  <h3 className="font-serif font-bold text-xl mb-4 flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-600" />
                    Ingredients
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ing) => (
                      <span key={ing} className="px-3 py-1.5 bg-background rounded-full text-sm text-foreground font-medium border border-border shadow-sm">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Nutrition Column */}
                <div className="border border-border rounded-2xl p-6 h-full">
                  <h3 className="font-serif font-bold text-xl mb-4">Nutrition Facts</h3>
                  <div className="grid grid-cols-3 gap-x-4 gap-y-4">
                    <div className="space-y-0.5">
                      <span className="text-muted-foreground text-xs block uppercase tracking-wide">Energy</span>
                      <span className="text-lg font-bold text-foreground">{product.nutrition.kcal} kcal</span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-muted-foreground text-xs block uppercase tracking-wide">Protein</span>
                      <span className="text-lg font-bold text-foreground">{product.nutrition.protein}</span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-muted-foreground text-xs block uppercase tracking-wide">Fiber</span>
                      <span className="text-lg font-bold text-foreground">{product.nutrition.fiber}</span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-muted-foreground text-xs block uppercase tracking-wide">Fat</span>
                      <span className="text-lg font-bold text-foreground">{product.nutrition.fat}</span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-muted-foreground text-xs block uppercase tracking-wide">Carbs</span>
                      <span className="text-lg font-bold text-foreground">{product.nutrition.carbs}</span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-muted-foreground text-xs block uppercase tracking-wide">Sugar*</span>
                      <span className="text-lg font-bold text-foreground">{product.nutrition.sugar}</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-4 text-right">*Natural sugar from dates</p>
                </div>
              </div>

              <OrderModal defaultProduct={product.id}>
                <button className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 transform hover:-translate-y-0.5 cursor-pointer">
                  Order {product.name} Box
                </button>
              </OrderModal>
            </div>
          </div>
        </div>
      </main>

      <Contact />
    </div>
  );
}
