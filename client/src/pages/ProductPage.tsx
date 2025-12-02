import { useRoute } from "wouter";
import { products } from "@/components/ProductShowcase";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { ArrowLeft, Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  
  if (!match) return <NotFound />;

  const product = products.find(p => p.id === params.id);
  
  if (!product) return <NotFound />;

  const productImages = [product.image, product.image, product.image];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navbar />
      
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <a 
            href="/#products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="w-3 h-3" /> {t('productPage.backToProducts')}
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left Column - Product Name + Image */}
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Product Name - Above Photo */}
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4 leading-tight">
                {t(`products.${product.id}.name`)}
              </h1>
              
              <Carousel className="w-full rounded-2xl overflow-hidden bg-secondary/20">
                <CarouselContent>
                  {productImages.map((img, index) => (
                    <CarouselItem key={index}>
                       <div className={`aspect-square relative ${product.color} overflow-hidden`}>
                         <img 
                           src={img} 
                           alt={`${t(`products.${product.id}.name`)} view ${index + 1}`}
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
                <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">
                  {t(`products.${product.id}.tagline`)}
                </span>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t(`products.${product.id}.description`)}
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {/* Ingredients Section - Full Width */}
                <div className="bg-secondary/30 rounded-2xl p-5 w-full">
                  <h3 className="font-serif font-bold text-lg mb-4 flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-600" />
                    {t('products.ingredients')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ing) => (
                      <span key={ing} className="px-3 py-1 bg-background rounded-full text-sm text-foreground font-medium border border-border shadow-sm">
                        {t(`products.ingredientNames.${ing}`)}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Nutrition Section - Full Width */}
                <div className="border border-border rounded-2xl p-5 w-full">
                  <h3 className="font-serif font-bold text-lg mb-4">{t('productPage.nutritionFacts')}</h3>
                  
                  {/* Serving Size */}
                  <div className="flex justify-between items-center border-b border-border pb-3 mb-3">
                    <span className="text-sm font-bold text-foreground">{t('productPage.servingSize')}</span>
                    <span className="text-sm text-foreground">{t('productPage.servingSizeValue')}</span>
                  </div>
                  
                  {/* Nutrients List */}
                  <div className="space-y-2">
                    {/* Calories */}
                    <div className="flex justify-between items-center py-1 border-b border-border/50">
                      <span className="text-base font-black text-foreground">{t('productPage.calories')}</span>
                      <span className="text-base font-black text-foreground">{product.nutrition.kcal} kcal</span>
                    </div>
                    
                    {/* Total Carbohydrates */}
                    <div className="flex justify-between items-center py-1">
                      <span className="text-sm font-medium text-foreground">{t('productPage.totalCarbs')}</span>
                      <span className="text-sm font-bold text-foreground">{product.nutrition.carbs}</span>
                    </div>
                    
                    {/* Fiber - nested under Carbs */}
                    <div className="flex justify-between items-center py-1 pl-4 border-l-2 border-muted">
                      <span className="text-sm text-muted-foreground">{t('productPage.fiber')}</span>
                      <span className="text-sm font-medium text-foreground">{product.nutrition.fiber}</span>
                    </div>
                    
                    {/* Sugar - nested under Carbs */}
                    <div className="flex justify-between items-center py-1 pl-4 border-l-2 border-muted border-b border-border/50">
                      <span className="text-sm text-muted-foreground">{t('productPage.sugar')}</span>
                      <span className="text-sm font-medium text-foreground">{product.nutrition.sugar}</span>
                    </div>
                    
                    {/* Protein */}
                    <div className="flex justify-between items-center py-1 border-b border-border/50">
                      <span className="text-sm font-medium text-foreground">{t('productPage.protein')}</span>
                      <span className="text-sm font-bold text-foreground">{product.nutrition.protein}</span>
                    </div>
                    
                    {/* Fat */}
                    <div className="flex justify-between items-center py-1 border-b border-border/50">
                      <span className="text-sm font-medium text-foreground">{t('productPage.fat')}</span>
                      <span className="text-sm font-bold text-foreground">{product.nutrition.fat}</span>
                    </div>
                  </div>
                  
                  <p className="text-[10px] text-muted-foreground mt-4">{t('productPage.sugarNote')}</p>
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
