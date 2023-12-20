import { motion } from "framer-motion";
import { fadeIn } from "../../../Varaints";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8  lg:flex-row lg:items-center lg:gap-x-20">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              style={{ filter: "drop-shadow(10px 10px 20px black)" }}
              className="m-auto w-[300px] lg:w-[350px]"
              src="https://res.cloudinary.com/dzmn27ifb/image/upload/v1702512009/me-removebg-preview_xn6mmn.png"
              alt=""
            />
          </motion.div>

          <motion.div
            className="flex-1"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="h2 text-blue-400">About me</h2>
            <h3 className="h3 mb-4">
              I am a Freelance Front-end Developer with over 1 year of
              experience
            </h3>
            <p className="mb-6">
              I am passionate about creating <span>beautiful</span>,
              <span> customizable</span> and
              <span> responsive</span> user experiences. I enjoy taking on
              challenges and seeking to make them have a positive impact on
              people's lives.
            </p>
            <p>Right now, I'm open to new opportunities.</p>
            <div className="w-auto text-center mt-8 lg:text-justify">
              <a
                href="./David Gatto - Resume.pdf.pdf"
                target="blank"
                className="btn btn-lg py-4"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
