import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HeadingText from "@/shared/HeadingText";

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inpStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-5`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e: any) => {
    const isValide = await trigger();
    if (!isValide) {
      e.preventDefault();
    }
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      {/* to highlight correct nav item when scroll */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Header */}
        <motion.div
          className="md:w-3/5"
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
            <span className="text-primary-500">JOIN NOW </span> TO GET SHAPE
          </HeadingText>
          <p className="my-5">
            Join with us to get shape and be healthy. We will help you to get
            shape and be healthy.
          </p>
        </motion.div>
        {/* Form and Image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/cbc6b10bf604e46e457a2a5c72521292"
            >
              <input
                type="text"
                className={inpStyles}
                placeholder="Name"
                {...register("name", {
                  required: true,
                  maxLength: 20,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.type === "required" && "Name is required"}
                  {errors.name.type === "maxLength" && "Max length exceeded"}
                </p>
              )}
              <input
                type="text"
                className={inpStyles}
                placeholder="email"
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.type === "required" && "email is required"}
                </p>
              )}
              <textarea
                rows={4}
                cols={50}
                className={inpStyles}
                placeholder="Message"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.type === "required" && "Message is required"}
                  {errors.message.type === "maxLength" && "Max length exceeded"}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div className="relative mt-16 basis-2/5 md:mt-0 "
           initial="hidden"
           whileInView="visible"
           transition={{ delay:0.2,duration: 0.5 }}
           variants={{
             hidden: { opacity: 0, y: 50 },
             visible: { opacity: 1, y: 0 },
           }}
           viewport={{ once: true, amount: 0.5 }}>
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                <img src={ContactUsPageGraphic} alt="contactus-page-img" className="w-full"/>
            </div>
           </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
