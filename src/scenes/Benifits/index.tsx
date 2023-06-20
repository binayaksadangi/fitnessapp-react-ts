import HeadingText from "@/shared/HeadingText";
import { SelectedPage, BenifitType } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenifitCard from "@/shared/BenifitCard";
import ActionButton from "@/shared/ActionButton";
import BenifitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
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
  hidden: {},
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
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <HeadingText>MORE THAN JUST A GYM</HeadingText>
          <p className="my-5 text-sm ">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* Benifits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5, once: true }}
          variants={container}
          className="mt-5 items-center justify-between gap-8 md:flex"
        >
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

        {/* graphic and specification*/}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* graphic */}
          <img  className="mx-auto" src={BenifitsPageGraphic} alt="benifit page graphic" />
          {/* description */}
          <div>
            {/* title */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <HeadingText>
                    MILLIONS OF HAPPY CUSTOMERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HeadingText>
                </motion.div>
              </div>
            </div>

            {/* desc */}
            <div>
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                expedita est, ipsam saepe corporis mollitia voluptas porro,
                animi dignissimos debitis optio ducimus delectus incidunt neque
                at, voluptates labore fugiat officia blanditiis ullam similique
                error sit magni. Laboriosam vero, iusto illum, iste quisquam ad
                non, in dolor earum ducimus praesentium officia.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
                ducimus facere reprehenderit nemo culpa quas tempora
                perspiciatis quia ab officia placeat commodi praesentium sed
                modi error rem assumenda, voluptatibus officiis dicta ad magni
                impedit vero consequatur! Magni, inventore. Veniam, deserunt?
              </p>
            </div>

            {/* button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benifits;
