import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Varaints";
import "./Banner.css";
const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[100px]"
            >
              DAVID <span>GATTO</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a </span>
              <TypeAnimation
                sequence={["Developer", 2000, "  ", 2000]}
                speed={100}
                wrapper="span"
                repeat={Infinity}
                className=" text-blue-400"
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-2-lg mx-auto lg:mx-0"
            >
              I'm an aspiring Frontend Software Engineer passionate about
              building web applications with great user experiences.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a href="https://walink.co/6958cd" target="blank">
                <button className="btn btn-lg">Contact me</button>
              </a>
              <div className="flex text-[25px] justify-center items-center mx-auto  gap-x-6 max-w-max lg:mx-0">
                <a href="https://github.com/DavidGatto" target="blank">
                  <FaGithub className="hover:scale-150 duration-500" />
                </a>
                <a
                  href="https://www.linkedin.com/in/david-gatto-451aba255/"
                  target="blank"
                >
                  <FaLinkedin className="hover:scale-150 duration-500" />
                </a>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
          >
            <img
              className="img-me hidden lg:flex lg:w-[500px] flex-1"
              src="https://res.cloudinary.com/dzmn27ifb/image/upload/v1701053485/sssdss_yq0pzn.png"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
