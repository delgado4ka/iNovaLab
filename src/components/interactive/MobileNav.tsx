import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { NavItem } from "@/data/site";

interface Props {
  items: NavItem[];
  cta: NavItem;
}

export default function MobileNav({ items, cta }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon-lg"
          aria-label="Открыть меню"
          className="text-band-foreground hover:bg-band-foreground/10 hover:text-band-foreground dark:hover:bg-band-foreground/10"
        >
          <MenuIcon className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[85%] border-band-border bg-band p-6 pt-16 text-band-foreground [&>button[data-slot=sheet-close]]:text-band-foreground"
      >
        <SheetTitle className="sr-only">Меню</SheetTitle>
        <SheetDescription className="sr-only">Разделы сайта</SheetDescription>
        <nav aria-label="Разделы сайта">
          <ul className="flex flex-col">
            {items.map((item) => (
              <li key={item.href}>
                <SheetClose asChild>
                  <a
                    href={item.href}
                    className="block border-b border-band-border py-4 text-lg transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
        <SheetClose asChild>
          <Button asChild size="xl" className="mt-6 h-auto min-h-12 w-full py-3 text-center whitespace-normal">
            <a href={cta.href}>{cta.label}</a>
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
