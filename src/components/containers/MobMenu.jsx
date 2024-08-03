import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { ROUTES } from "@/utils/data";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

export function MobMenu({ pathname }) {
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <Drawer open={isOpen}>
      <DrawerTrigger
        asChild
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="md:hidden"
      >
        <Button variant="outline">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className={"list-none space-y-6"}>
            {ROUTES.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className={cn(
                      "hover:text-primary",
                      pathname === item.path && "text-primary"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </DrawerHeader>

          <DrawerFooter className={"pb-10"}>
            <Button variant="outline" className="md:hidden mx-auto">
              Get in Touch
            </Button>
          </DrawerFooter>
          <DrawerClose
            onClick={() => setIsOpen(false)}
            className="text-center w-full pb-6 text-accent-foreground"
          >
            Close Menu
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
