import { SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HeadingText from "@/shared/HeadingText";
import Classes from "@/shared/Classes";

const ourClassesData = [
  {
    img: image1,
    name: "Weight training classes",
    desc: "demo description",
  },
  {
    img: image2,
    name: "Fittness training classes",
    desc: "demo description",  },
  {
    img: image3,
    name: "Adventure  classes",
    desc: "demo description",  },
  {
    img: image4,
    name: "Yoga training classes",
    desc: "demo description",  },
  {
    img: image5,
    name: "Ab core classes",
    desc: "demo description",  },
  {
    img: image6,
    name: "Cardio training classes",
    desc: "demo description", 
  }
];

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="md:w-3/5">
            <HeadingText>OUR CLASSES</HeadingText>
            <p className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              delectus nesciunt est beatae deserunt, ea facilis porro,
              repudiandae cum fugiat debitis recusandae eum amet, quis impedit
              sequi in consectetur optio. Non nesciunt est blanditiis cum
              placeat assumenda! Veniam iusto autem illum neque accusantium et?
              Vero perferendis quis harum doloribus id?
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {ourClassesData.map((data, index) => (
              <Classes  key={index} img={data.img} name={data.name} desc={data.desc}/>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
