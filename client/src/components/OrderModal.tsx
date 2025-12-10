import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import zaloLogo from "@assets/logos/zalo-logo.png";
import { H3Format } from "./ui/H3Format";
import { H3BodyFormat } from "./ui/H3BodyFormat";

interface OrderModalProps {
  children: React.ReactNode;
  defaultProduct?: string;
}

export function OrderModal({ children }: OrderModalProps) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden bg-background/80 backdrop-blur-xl border-white/20 shadow-2xl rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/20 pointer-events-none" />

        <div className="relative p-10 flex flex-col items-center text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6 max-w-md mx-auto"
          >
            <H3Format className="text-3xl font-bold text-foreground">
              {t('order.readyToOrder')}
            </H3Format>

            <H3BodyFormat className="text-lg text-muted-foreground leading-relaxed">
              <Trans
                i18nKey="order.zaloInstruction"
                components={{
                  logo: (
                    <img
                      src={zaloLogo}
                      alt="Zalo"
                      className="inline-block w-8 h-8 object-contain mx-1 -mt-1 drop-shadow-sm align-middle"
                    />
                  ),
                }}
              />
            </H3BodyFormat>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-primary/25 transition-all transform hover:-translate-y-0.5"
              onClick={() => setOpen(false)}
            >
              {t('nav.close')}
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
