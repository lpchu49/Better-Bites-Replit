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
      
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link href="/#products">
            <a className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 text-sm font-medium">
              <ArrowLeft className="w-3 h-3" /> Back to Products
            </a>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left Column - Product Name + Image */}
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Product Name - Above Photo */}
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4 leading-tight">{product.name}</h1>
              
              <Carousel className="w-full rounded-2xl overflow-hidden bg-secondary/20">
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
                <CarouselPrevious className="left-2 bg-white/80 hover:bg-white border-none shadow-sm h-7 w-7" />
                <CarouselNext className="right-2 bg-white/80 hover:bg-white border-none shadow-sm h-7 w-7" />
              </Carousel>
              
              {/* Dots indicator */}
              <div className="flex justify-center gap-1.5 mt-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30"></div>
              </div>
            </div>

            {/* Content Section - Right Side */}
            <div className="space-y-6">
              <div>
                <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">{product.tagline}</span>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {/* Ingredients Section - Full Width */}
                <div className="bg-secondary/30 rounded-2xl p-5 w-full">
                  <h3 className="font-serif font-bold text-lg mb-4 flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-600" />
                    Ingredients
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ing) => (
                      <span key={ing} className="px-3 py-1 bg-background rounded-full text-sm text-foreground font-medium border border-border shadow-sm">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Nutrition Section - Full Width */}
                <div className="border border-border rounded-2xl p-5 w-full">
                  <h3 className="font-serif font-bold text-lg mb-4">Nutrition Facts</h3>
                  
                  {/* Serving Size */}
                  <div className="flex justify-between items-center border-b border-border pb-3 mb-3">
                    <span className="text-sm font-bold text-foreground">Serving Size</span>
                    <span className="text-sm text-foreground">1 ball (10g)</span>
                  </div>
                  
                  {/* Nutrients List */}
                  <div className="space-y-2">
                    {/* Calories */}
                    <div className="flex justify-between items-center py-1 border-b border-border/50">
                      <span className="text-base font-black text-foreground">Calories</span>
                      <span className="text-base font-black text-foreground">{product.nutrition.kcal} kcal</span>
                    </div>
                    
                    {/* Total Carbohydrates */}
                    <div className="flex justify-between items-center py-1">
                      <span className="text-sm font-medium text-foreground">Total Carbohydrates</span>
                      <span className="text-sm font-bold text-foreground">{product.nutrition.carbs}</span>
                    </div>
                    
                    {/* Fiber - nested under Carbs */}
                    <div className="flex justify-between items-center py-1 pl-4 border-l-2 border-muted">
                      <span className="text-sm text-muted-foreground">Fiber</span>
                      <span className="text-sm font-medium text-foreground">{product.nutrition.fiber}</span>
                    </div>
                    
                    {/* Sugar - nested under Carbs */}
                    <div className="flex justify-between items-center py-1 pl-4 border-l-2 border-muted border-b border-border/50">
                      <span className="text-sm text-muted-foreground">Sugar*</span>
                      <span className="text-sm font-medium text-foreground">{product.nutrition.sugar}</span>
                    </div>
                    
                    {/* Protein */}
                    <div className="flex justify-between items-center py-1 border-b border-border/50">
                      <span className="text-sm font-medium text-foreground">Protein</span>
                      <span className="text-sm font-bold text-foreground">{product.nutrition.protein}</span>
                    </div>
                    
                    {/* Fat */}
                    <div className="flex justify-between items-center py-1 border-b border-border/50">
                      <span className="text-sm font-medium text-foreground">Fat</span>
                      <span className="text-sm font-bold text-foreground">{product.nutrition.fat}</span>
                    </div>
                  </div>
                  
                  <p className="text-[10px] text-muted-foreground mt-4">*Natural sugar from dates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Contact />
    </div>
  );
}
