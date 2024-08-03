import { MotionButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { transition, variants } from "@/utils/framer_variants";
import {
  TabsContent,
  TabsList,
  TabsTrigger,
  MotionTabs,
} from "@/components/ui/tabs";
import { MotionDiv, MotionImage } from "@/utils/motionTags";

export default function Resume() {
  return (
    <>
      <div
        className={cn(
          "max-w-4xl mx-auto 2xl:pt-60 pt-32 px-3 pb-4 min-h-screen"
        )}
      >
        <div className="flex md:flex-row flex-col md:gap-0 gap-7 items-center justify-between w-full">
          <div className="flex sm:flex-row flex-col gap-x-7 sm:gap-y-0 gap-y-4 items-center">
            <MotionImage
              initial="initial"
              animate="animate"
              variants={variants.scale}
              transition={transition.scale}
              src="/profile.png"
              width={155}
              height={155}
              className="md:w-36 w-28"
              alt="avatar"
            ></MotionImage>
            <MotionDiv
              initial="initial"
              animate="animate"
              variants={variants.moveDown}
              transition={transition.moveDown}
              className="sm:text-left text-center"
            >
              <h3 className="mb-2">
                Carlos <span>Nicholas.</span>
              </h3>
              <h5>California, US</h5>
            </MotionDiv>
          </div>
          <MotionButton
            initial="initial"
            animate="animate"
            variants={variants.moveDown}
            transition={transition.moveDown}
            variant="outline"
            size="lg"
          >
            Senior UI/UX Designer
          </MotionButton>
        </div>
        <MotionTabs
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
          defaultValue="about"
          className="leading-7 mt-10"
        >
          <TabsList>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <h6>Who I&apos;m </h6>
            <p className="text-accent-foreground mt-2">
              Jack Ashford is a dedicated UI/UX Designer known for his
              unwavering commitment to creating captivating digital experiences.
              With a blend of creativity and technical prowess, he navigates the
              intersection of design and functionality, ensuring every detail
              contributes to an intuitive user journey. With a diverse skill set
              and a passion for innovation, Jack continuously pushes the
              boundaries of design, seeking to redefine the way users interact
              with technology.
            </p>
            <p className="text-accent-foreground mt-2">
              Jack Ashford is a dedicated UI/UX Designer known for his
              unwavering commitment to creating captivating digital experiences.
              With a blend of creativity and technical prowess, he navigates the
              intersection of design and functionality.
            </p>
          </TabsContent>
          <TabsContent value="skills">
            <h6>What I can do</h6>
            <p className="text-accent-foreground mt-2">
              Jack Ashford is a dedicated UI/UX Designer known for his
              unwavering commitment to creating captivating digital experiences.
              With a blend of creativity and technical prowess, he navigates the
              intersection of design and functionality, ensuring every detail
              contributes to an intuitive user journey. With a diverse skill set
              and a passion for innovation, Jack continuously pushes the
              boundaries of design, seeking to redefine the way users interact
              with technology.
            </p>
          </TabsContent>
          <TabsContent value="experience">
            <h6>My Work</h6>
            <p className="text-accent-foreground mt-2">
              Jack Ashford is a dedicated UI/UX Designer known for his
              unwavering commitment to creating captivating digital experiences.
              With a blend of creativity and technical prowess, he navigates the
              intersection of design and functionality, ensuring every detail
              contributes to an intuitive user journey. With a diverse skill set
              and a passion for innovation, Jack continuously pushes the
              boundaries of design, seeking to redefine the way users interact
              with technology.
            </p>
          </TabsContent>
        </MotionTabs>
      </div>
    </>
  );
}
