import { MotionButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SOCIAL_ICONS } from "@/utils/data";
import { DownloadIcon } from "lucide-react";
import { Luckiest_Guy } from "next/font/google";
import { transition, variants } from "@/utils/framer_variants";
import { MotionDiv, MotionImage } from "@/utils/motionTags";

const luck = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });

export default function page() {
  return (
    <div
      className={cn(
        "h-dvh flex overflow-hidden md:flex-row flex-col items-center justify-between  2xl:container w-full pt-5"
      )}
    >
      <div className="flex flex-col  h-full justify-center space-y-6 md:items-end items-center relative max-w-xl md:ml-auto  flex-1">
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.rise}
          transition={transition.rise}
          className="absolute flex items-center  gap-x-4 -rotate-90 md:-left-8 -left-28 md:top-auto top-96 text-accent-foreground"
        >
          <MotionDiv
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.1 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: "reverse",
            }}
            className="border-4 size-14 rounded-full grid place-items-center"
          >
            <div className="size-3 rounded-full bg-accent-foreground"></div>
          </MotionDiv>
          <h4 className="text-2xl">Designer</h4>
        </MotionDiv>
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveRight}
          transition={transition.moveRight}
          className={cn("md:text-right text-center", luck.className)}
        >
          <h1>
            Carlos <br /> <span>Nicholas.</span>
          </h1>
        </MotionDiv>
        <br />
        <MotionButton
          whileHover={{ scale: 0.95 }}
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
        >
          <DownloadIcon className="mr-2"></DownloadIcon>
          Download CV
        </MotionButton>

        <div className="flex items-center gap-x-3 md:absolute bottom-6 left-2">
          {SOCIAL_ICONS.map((item, i) => {
            return (
              <MotionImage
                whileHover={{ scale: 1.1 }}
                initial="initial"
                animate="animate"
                variants={variants.moveUp}
                transition={{
                  ...transition.moveUp,
                  delay: 0.3 * i,
                }}
                key={item.id}
                src={item.icon}
                alt={item.name}
                height={25}
                width={25}
                className="object-cover  cursor-pointer max-h-full"
              />
            );
          })}
        </div>
      </div>
      <div className="flex md:max-w-[50%] max-w-lg items-end md:h-[95%]  self-end  ">
        <MotionImage
          src={"/hero.png"}
          alt="hero"
          height={720}
          width={720}
          initial="initial"
          animate="animate"
          variants={variants.moveLeft}
          transition={{
            ...transition.moveLeft,
            delay: 1.5,
          }}
          className="object-cover  max-h-full"
        />
      </div>
    </div>
  );
}
