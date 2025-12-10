import { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { products } from "@/components/ProductShowcase";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { ArrowLeft, Leaf, Star, Box } from "lucide-react";
import { useTranslation } from "react-i18next";
import NotFound from "@/pages/not-found";
import { H3Format } from "@/components/ui/H3Format";
import { H5Format } from "@/components/ui/H5Format";
import { TagFormat } from "@/components/ui/TagFormat";
import { H2BodyFormat } from "@/components/ui/H2BodyFormat";
import { H3BodyFormat } from "@/components/ui/H3BodyFormat";
import { H4BodyFormat } from "@/components/ui/H4BodyFormat";
import { H6Format } from "@/components/ui/H6Format";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function ProductPage() {
  const [match, params] = useRoute("/product/:id");
  const { t } = useTranslation();

  if (!match) return <NotFound />;

  const product = products.find(p => p.id === params.id);

  if (!product) return <NotFound />;

  const productImages = product.gallery || [product.image];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navbar />

      <main className="pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <a
            href="/#products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 text-base font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> {t('productPage.backToProducts')}
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left Column - Product Name + Image */}
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Product Name - Above Photo */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <H3Format className="text-foreground leading-tight">
                  {t(`products.${product.id}.name`)}
                </H3Format>
                {product.bestSeller && (
                  <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm md:text-base font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    {t('products.bestSeller')}
                  </div>
                )}
              </div>



              <Carousel setApi={setApi} className="w-full rounded-2xl overflow-hidden bg-secondary/20">
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
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${current === index ? "bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="mt-6">
                <H4BodyFormat className="font-medium uppercase tracking-wider mb-1">
                  {t('productPage.price')}
                </H4BodyFormat>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-sans font-bold text-primary">
                    {product.price}
                  </span>
                  <H3BodyFormat as="span">
                    {t('productPage.unit')}
                  </H3BodyFormat>
                </div>
              </div>

              <div className="mt-6 bg-primary/10 rounded-2xl p-5">
                <H6Format as="h6" className="mb-2 flex items-center gap-2">
                  <Box className="w-4 h-4 text-primary" />
                  {t('productPage.storage')}
                </H6Format>
                <H4BodyFormat>
                  {t('productPage.storageInstruction')}
                </H4BodyFormat>
              </div>
            </div>

            {/* Content Section - Right Side */}
            <div className="space-y-6">
              <div>
                <H3BodyFormat className="text-primary font-bold tracking-wider uppercase mb-3 block">
                  {t(`products.${product.id}.tagline`)}
                </H3BodyFormat>
                <H3BodyFormat className="leading-relaxed">
                  {t(`products.${product.id}.description`)}
                </H3BodyFormat>
              </div>



              <div className="flex flex-col gap-5">
                <div className="bg-secondary/30 rounded-2xl p-5 w-full">
                  <H6Format as="h6" className="mb-4 flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-600" />
                    {t('products.ingredients')}
                  </H6Format>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ing) => (
                      <TagFormat key={ing} className="text-sm md:text-base">
                        {t(`products.ingredientNames.${ing}`)}
                      </TagFormat>
                    ))}
                  </div>
                </div>

                {/* Nutrition Section - Full Width */}
                <div className="border border-border rounded-2xl p-5 w-full">
                  <H5Format as="h3" className="mb-4">{t('productPage.nutritionFacts')}</H5Format>

                  {/* Serving Size */}
                  <div className="flex justify-between items-center border-b border-border pb-3 mb-3">
                    <span className="text-sm md:text-base font-bold text-foreground">{t('productPage.servingSize')}</span>
                    <span className="text-sm md:text-base text-foreground">{t('productPage.servingSizeValue')}</span>
                  </div>

                  {/* Nutrients List */}
                  <div className="space-y-2">
                    {/* Calories */}
                    <div className="flex justify-between items-center py-1 border-b border-border/50">
                      <span className="text-sm md:text-base font-black text-foreground">{t('productPage.calories')}</span>
                      <span className="text-sm md:text-base font-black text-foreground">{product.nutrition.kcal} kcal</span>
                    </div>

                    {/* Total Carbohydrates */}
                    <div className="flex justify-between items-center py-1">
                      <span className="text-sm md:text-base font-medium text-foreground">{t('productPage.totalCarbs')}</span>
                      <span className="text-sm md:text-base font-bold text-foreground">{product.nutrition.carbs}</span>
                    </div>

                    {/* Fiber - nested under Carbs */}
                    <div className="flex justify-between items-center py-1 pl-4 border-l-2 border-muted">
                      <span className="text-sm md:text-base text-muted-foreground">{t('productPage.fiber')}</span>
                      <span className="text-sm md:text-base font-medium text-foreground">{product.nutrition.fiber}</span>
                    </div>

                    {/* Sugar - nested under Carbs */}
                    <div className="flex justify-between items-center py-1 pl-4 border-l-2 border-muted border-b border-border/50">
                      <span className="text-sm md:text-base text-muted-foreground">{t('productPage.sugar')}</span>
                      <span className="text-sm md:text-base font-medium text-foreground">{product.nutrition.sugar}</span>
                    </div>

                    {/* Protein */}
                    <div className="flex justify-between items-center py-1 border-b border-border/50">
                      <span className="text-sm md:text-base font-medium text-foreground">{t('productPage.protein')}</span>
                      <span className="text-sm md:text-base font-bold text-foreground">{product.nutrition.protein}</span>
                    </div>

                    {/* Fat */}
                    <div className="flex justify-between items-center py-1 border-b border-border/50">
                      <span className="text-sm md:text-base font-medium text-foreground">{t('productPage.fat')}</span>
                      <span className="text-sm md:text-base font-bold text-foreground">{product.nutrition.fat}</span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mt-4">{t('productPage.sugarNote')}</p>
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
