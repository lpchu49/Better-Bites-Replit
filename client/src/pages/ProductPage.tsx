import { useRoute, Link } from "wouter";
import { products } from "@/components/ProductShowcase";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { ArrowLeft, Leaf, ArrowRight } from "lucide-react";
import NotFound from "@/pages/not-found";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProductPage() {
  const [match, params] = useRoute("/product/:id");
  
  if (!match) return <NotFound />;

  const product = products.find(p => p.id === params.id);
  
  if (!product) return <NotFound />;

  // Duplicate image to simulate gallery for now
  const productImages = [product.image, product.image, product.image];

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
            {/* Image Section - Larger (50% width) */}
            <div className="relative">
              <Carousel className="w-full rounded-[2rem] overflow-hidden bg-secondary/20">
                <CarouselContent>
                  {productImages.map((img, index) => (
                    <CarouselItem key={index}>
                       <div className={`aspect-square relative ${product.color} overflow-hidden`}>
                         <img 
                           src={img} 
                           alt={`${product.name} view ${index + 1}`}
                           className="w-full h-full object-cover"
                         />
                       </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* Navigation Controls */}
                <CarouselPrevious className="left-4 bg-white/80 hover:bg-white border-none shadow-sm" />
                <CarouselNext className="right-4 bg-white/80 hover:bg-white border-none shadow-sm" />
              </Carousel>
              
              {/* Dots indicator simulation (visual only for now since we need state for active dot) */}
              <div className="flex justify-center gap-2 mt-6">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
              </div>
            </div>

            {/* Content Section - Right Side */}
            <div className="space-y-10">
              <div>
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">{product.tagline}</span>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">{product.name}</h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                  {product.description}
                </p>
              </div>

              <div className="flex flex-col gap-10">
                {/* Ingredients Section - Full Width */}
                <div className="bg-secondary/30 rounded-3xl p-8 w-full">
                  <h3 className="font-serif font-bold text-2xl mb-6 flex items-center gap-3">
                    <Leaf className="w-5 h-5 text-green-600" />
                    Ingredients
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {product.ingredients.map((ing) => (
                      <span key={ing} className="px-4 py-2 bg-background rounded-full text-base text-foreground font-medium border border-border shadow-sm">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Nutrition Section - Full Width */}
                <div className="border border-border rounded-3xl p-8 w-full">
                  <h3 className="font-serif font-bold text-2xl mb-6">Nutrition Facts</h3>
                  <div className="grid grid-cols-3 gap-x-8 gap-y-8">
                    <div className="space-y-1">
                      <span className="text-muted-foreground text-sm block uppercase tracking-wide">Energy</span>
                      <span className="text-2xl font-bold text-foreground">{product.nutrition.kcal} kcal</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-muted-foreground text-sm block uppercase tracking-wide">Protein</span>
                      <span className="text-2xl font-bold text-foreground">{product.nutrition.protein}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-muted-foreground text-sm block uppercase tracking-wide">Fiber</span>
                      <span className="text-2xl font-bold text-foreground">{product.nutrition.fiber}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-muted-foreground text-sm block uppercase tracking-wide">Fat</span>
                      <span className="text-2xl font-bold text-foreground">{product.nutrition.fat}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-muted-foreground text-sm block uppercase tracking-wide">Carbs</span>
                      <span className="text-2xl font-bold text-foreground">{product.nutrition.carbs}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-muted-foreground text-sm block uppercase tracking-wide">Sugar*</span>
                      <span className="text-2xl font-bold text-foreground">{product.nutrition.sugar}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-6 text-right">*Natural sugar from dates</p>
                </div>
              </div>

              {/* Order button removed as requested */}
            </div>
          </div>
        </div>
      </main>

      <Contact />
    </div>
  );
}
