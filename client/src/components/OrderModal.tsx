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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { products } from "@/components/ProductShowcase";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import type { InsertOrder } from "@shared/schema";

interface OrderModalProps {
  children: React.ReactNode;
  defaultProduct?: string;
}

export function OrderModal({ children, defaultProduct }: OrderModalProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
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
        title: "Order Request Sent!",
        description: "We'll be in touch shortly to confirm your order details.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description:
          error.message || "Failed to submit order. Please try again.",
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
            Place an Order
          </DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you with payment and
            shipping details.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Jane Doe"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-xs text-destructive">
                    Name is required
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  {...register("phone")}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="jane@example.com"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-xs text-destructive">
                  Email is required
                </span>
              )}
            </div>

            {/* <div className="space-y-2">
              <Label htmlFor="product">Interested In</Label>
              <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="assorted">Assorted Box</SelectItem>
                  {products.map(p => (
                    <SelectItem key={p.id} value={p.id}>{p.name} Box</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
 */}
            <div className="space-y-2">
              <Label htmlFor="message">Your Order</Label>
              <Textarea
                id="message"
                placeholder="Quantity, allergies, or shipping address..."
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
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={orderMutation.isPending}
            >
              {orderMutation.isPending ? "Sending..." : "Send Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
