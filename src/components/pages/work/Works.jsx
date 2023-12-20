import { FaBootstrap, FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa6";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Varaints";

const Works = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-16 py-24">
          <motion.div
            className="flex-1 flex flex-col justify-between mb-10 lg:mb-0"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-blue-400">
                My Latest <br />
                Works
              </h2>
              <p className="max-w-sm ">
                I present to you some of my most notable projects, where I have
                had the opportunity to demonstrate and perfect my skills.
                Explore these creations that reflect my passion and skill!
              </p>
              <a href="https://github.com/DavidGatto" target="blank">
                <button className="btn btn-sm mb-8">View all projects</button>
              </a>
            </div>
            {/* image */}
            <a href="https://eccomerce-nft.vercel.app" target="blank">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  className="lg:h-[260px] w-full group-hover:scale-150 transition-all duration-500"
                  src="https://res.cloudinary.com/dzmn27ifb/image/upload/v1703079458/Opera_Instant%C3%A1nea_2023-12-20_030416_eccomerce-nft.vercel.app_jc7pdq.png"
                  alt="ecommerce-nft"
                />
                <div className="flex gap-4 text-[30px] absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <FaReact style={{ color: "#1BA1CC" }} />
                  <IoLogoJavascript style={{ color: "#F7E025" }} />
                  <IoLogoFirebase style={{ color: "#F5820D" }} />
                  <SiTailwindcss style={{ color: "#06B6D4" }} />
                </div>
                <div className="flex gap-4 text-[30px] absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-gradient">Ecommerce-NFT</span>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div
            className="flex-1 flex flex-col gap-y-10 lg:gap-y-0 justify-between"
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <a
              href="https://davidgatto.github.io/cart-shop-vectorex/pages/index.html"
              target="blank"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  className="lg:h-[260px] w-full group-hover:scale-150 transition-all duration-500"
                  src="https://res.cloudinary.com/dzmn27ifb/image/upload/v1703079468/Opera_Instant%C3%A1nea_2023-12-20_030621_davidgatto.github.io_obxktq.png"
                  alt="ecommerce-nft"
                />
                <div className="flex gap-4 text-[30px] absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <FaHtml5 style={{ color: "#FF5C29" }} />
                  <FaCss3Alt style={{ color: "#1C76B8" }} />
                  <IoLogoJavascript style={{ color: "#F7E025" }} />
                  <FaBootstrap style={{ color: "#7D57B5" }} />
                </div>
                <div className="flex gap-4 text-[30px] absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-gradient">
                    Ecommerce-clothes
                  </span>
                </div>
              </div>
            </a>

            <a href="https://davidgatto.github.io/calculator/" target="blank">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  className="lg:h-[260px] w-full] w-full group-hover:scale-150 transition-all duration-500"
                  src="https://res.cloudinary.com/dzmn27ifb/image/upload/v1703079520/project-2_wlzuic.png"
                  alt="ecommerce-nft"
                />
                <div className="flex gap-4 text-[30px] absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <FaHtml5 style={{ color: "#FF5C29" }} />
                  <FaCss3Alt style={{ color: "#1C76B8" }} />
                  <IoLogoJavascript style={{ color: "#F7E025" }} />
                </div>
                <div className="flex gap-4 text-[30px] absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-gradient">Calculator</span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Works;
