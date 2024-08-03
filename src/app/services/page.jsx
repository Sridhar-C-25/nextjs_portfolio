import { Button } from "@/components/ui/button";
import { SERVICES } from "@/utils/data";
import Image from "next/image";
import { transition, variants } from "@/utils/framer_variants";
import { MotionDiv } from "@/utils/motionTags";

export default function page() {
  return (
    <div className="container min-h-screen grid place-items-center pb-7 pt-32">
      <div>
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
          className="text-center"
        >
          <h3>
            Services <span>Offered</span>
          </h3>
          <p className="text-accent-foreground mt-5 sm:w-2/3 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto earum
            quae repellendus, sunt doloremque rem illo natus soluta voluptatibus
          </p>
        </MotionDiv>
        <div className="flex flex-wrap justify-center gap-8 mt-11">
          {SERVICES.map((service, i) => (
            <MotionDiv
              initial="initial"
              animate="animate"
              variants={variants.moveRight}
              transition={{
                ...variants.moveRight,
                delay: i * 0.6,
              }}
              key={service.id}
              className="bg-accent p-5 cursor-pointer  overflow-hidden group h-80 rounded-3xl w-64 flex flex-col justify-between"
            >
              <Image
                src={service.icon}
                width={55}
                height={55}
                alt="3d"
                className="group-hover:scale-125 duration-200"
              />
              <div className="translate-y-16 group-hover:translate-y-0 duration-500 ease-out">
                <h3 className="mb-2">
                  <span>{service.name?.split(" ")[0]}</span>{" "}
                  {service.name?.split(" ")[1]}
                </h3>
                <small className="text-accent-foreground">
                  {service.description}
                </small>
                <Button
                  variant="plain"
                  className="block ml-auto mt-7  "
                  size={"sm"}
                >
                  Learn More
                </Button>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
}
