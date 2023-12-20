import { useState } from "react";
import "./Skills.css";
import SkillsContainer from "./SkillsContainer";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Varaints";

const Skills = () => {
  const [selectedItem, setSelectedItem] = useState(SkillsContainer[0]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className="section py-0 bg-zinc-50 flex-col lg:flex-row" id="skills">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 w-full h-screen "
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        {SkillsContainer.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center cursor-pointer skill-item"
            style={{ backgroundColor: item.color }}
            onClick={() => handleItemClick(item)}
          >
            <div className="skill-content flex flex-col justify-center items-center">
              {item.icon}
              <small className="text-[17px] mt-2 ">{item.text}</small>
            </div>
          </div>
        ))}
      </motion.div>

      {selectedItem && (
        <motion.div
          className="w-full h-full"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className=" bg-slate-900 p-3 h-[180px]">
            <div className="mb-4 flex items-center gap-2">
              <div style={{ color: selectedItem.color }}>
                {selectedItem.icon}
              </div>
              <h3 className="text-white text-2xl">{selectedItem.text}</h3>
            </div>
            <p className="text-white text-sm">{selectedItem.subtitle}</p>
          </div>

          <div className="flex-col px-4">
            <h4 className="text-black font-bold">{selectedItem.title}</h4>
            <p className="text-black text-base">{selectedItem.description}</p>
            <h4 className="text-black font-bold mt-2">{selectedItem.title2}</h4>
            <p className="text-black text-base">{selectedItem.description2}</p>
            <h4 className="text-black font-bold mt-2">{selectedItem.title3}</h4>
            <p className="text-black text-base">{selectedItem.description3}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Skills;
