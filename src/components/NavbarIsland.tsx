import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";

export default function NavbarIsland({ locale = "en" }: { locale?: "en" | "zh" }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <TooltipProvider delayDuration={0}>
        <Navbar locale={locale} />
      </TooltipProvider>
    </ThemeProvider>
  );
}
