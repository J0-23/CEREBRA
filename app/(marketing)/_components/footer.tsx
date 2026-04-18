import { Button } from "@/components/ui/button";

import { Logo } from "./logo";

export const Footer = () => {
  return (
    <div className="flex items-center w-full px-6 py-4 border-t bg-background/50 dark:bg-background/30 z-50">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-4 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};
