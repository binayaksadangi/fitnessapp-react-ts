import HeadingText from "@/shared/HeadingText";
import { SelectedPage, BenifitType } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenifitCard from "@/shared/BenifitCard";
const benifits: Array<BenifitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the art facilities",
    description:
      "We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of diverse classes",
    description:
      "Clases for all levels and abilities. From yoga to boxing, we have it all. Our classes are led by world class trainers who will help you achieve your goals.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert personal trainers",
    description:
      "Access to the best personal trainers in the world, right at your fingertips. Our trainers will push you to your limits and help you achieve your fitness goals.",
  },
];
const container = {
  hidden: { opacity: 0 },
  visible: {
    transition: { staggerChildern: 0.2 },
  },
};
type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const Benifits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benifits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benifits)}
      >
        {/* Header */}
        <div className="md:my-5 md:w-3/5">
          <HeadingText>MORE THAN JUST A GYM</HeadingText>
          <p className="my-5 text-sm ">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </div>
        {/* Benifits */}
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.5,once:true}}
        variants={container}
        className="mt-5 items-center justify-between gap-8 md:flex">
          {benifits.map((benifit) => (
            <BenifitCard
              key={benifit.title}
              icon={benifit.icon}
              title={benifit.title}
              description={benifit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benifits;
