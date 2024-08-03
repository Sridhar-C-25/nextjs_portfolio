import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";
import { transition, variants } from "@/utils/framer_variants";
import { MotionDiv } from "@/utils/motionTags";

export default function page() {
  return (
    <div className="container grid place-items-center  h-screen 2xl:pt-0 pt-20">
      <div className="absolute left-0 right-0 bottom-0 top-[94px] sm:bg-accent">
        <Image
          src={"/map.png"}
          width={1200}
          height={450}
          alt="map"
          className="w-full h-full object-contain absolute "
        />
      </div>
      <MotionDiv
        className="z-10"
        initial="initial"
        animate="animate"
        transition={transition.moveUp}
        variants={variants.moveUp}
      >
        <div className="text-center">
          <h3>
            <span>Contact</span> with me to sizzle <br /> your{" "}
            <span>project.</span>
          </h3>
          <p className="text-accent-foreground mt-5 w-3/4 mx-auto">
            Great designs, new generation ideas, user-centered projects.
            Let&apos;s work together now!
          </p>
        </div>
        <ContactForm />
      </MotionDiv>
    </div>
  );
}
