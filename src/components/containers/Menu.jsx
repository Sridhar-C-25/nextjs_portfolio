"use client";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, MotionButton } from "../ui/button";
import { MobMenu } from "./MobMenu";
import { motion } from "framer-motion";
import { transition, variants } from "@/utils/framer_variants";

export default function Menu() {
  const pathname = usePathname();
  const MotionImage = motion(Image);
  return (
    <header
      className={cn(
        "fixed z-50 left-0 right-0",
        pathname !== "/" && "bg-background border-b border-border/25"
      )}
    >
      <nav className="container py-4 flex justify-between items-center">
        <Link href={"/"}>
          <MotionImage
            initial="initial"
            animate="animate"
            variants={variants.scale}
            transition={transition.scale}
            src={"/logo.png"}
            className="w-auto"
            width={60}
            height={45}
            alt="logo"
          ></MotionImage>
        </Link>
        <ul className=" items-center md:flex hidden  text-[17px] gap-6 font-medium">
          {ROUTES.map((item, i) => {
            return (
              <motion.li
                initial="initial"
                animate="animate"
                variants={variants.moveDown}
                transition={{
                  ...transition.moveDown,
                  delay: 0.3 * i,
                }}
                key={item.id}
              >
                <Link
                  href={item.path}
                  className={cn(
                    "hover:text-primary",
                    pathname === item.path && "text-primary"
                  )}
                >
                  {item.name}
                </Link>
              </motion.li>
            );
          })}
        </ul>
        <MotionButton
          initial="initial"
          animate="animate"
          variants={variants.moveLeft}
          transition={transition.moveLeft}
          variant="outline"
          className="md:inline-block hidden"
        >
          Get in Touch
        </MotionButton>{" "}
        <MobMenu pathname={pathname} />
      </nav>
    </header>
  );
}
