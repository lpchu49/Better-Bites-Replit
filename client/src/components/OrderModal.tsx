import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import type { InsertOrder } from "@shared/schema";

interface OrderModalProps {
  children: React.ReactNode;
  defaultProduct?: string;
}

export function OrderModal({ children, defaultProduct }: OrderModalProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState(
    defaultProduct || "assorted",
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InsertOrder>({
    defaultValues: {
      product: defaultProduct || "assorted",
    },
  });

  const orderMutation = useMutation({
    mutationFn: async (data: InsertOrder) => {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to submit order");
      }

      return response.json();
    },
    onSuccess: () => {
      setOpen(false);
      reset();
      toast({
        title: t('order.successTitle'),
        description: t('order.successDescription'),
      });
    },
    onError: (error: Error) => {
      toast({
        title: t('order.errorTitle'),
        description: error.message || t('order.errorDescription'),
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertOrder) => {
    orderMutation.mutate({
      ...data,
      product: selectedProduct,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif font-bold text-foreground">
            {t('order.title')}
          </DialogTitle>
          <DialogDescription>
            {t('order.description')}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">{t('order.name')}</Label>
                <Input
                  id="name"
                  placeholder={t('order.namePlaceholder')}
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-xs text-destructive">
                    {t('order.nameRequired')}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{t('order.phone')}</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={t('order.phonePlaceholder')}
                  {...register("phone")}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t('order.email')}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t('order.emailPlaceholder')}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-xs text-destructive">
                  {t('order.emailRequired')}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t('order.yourOrder')}</Label>
              <Textarea
                id="message"
                placeholder={t('order.orderPlaceholder')}
                {...register("message")}
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              {t('order.cancel')}
            </Button>
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={orderMutation.isPending}
            >
              {orderMutation.isPending ? t('order.sending') : t('order.sendRequest')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
