"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TeamSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Jhon Rock",
      role: "Founder",
      image: "https://www.leadengine-wp.com/static/wp-content/uploads/sites/37/2018/02/personal1.jpg", // Replace with your image paths
      details: [
        "15+ years in software development",
        "Certified SCRUM Product Owner, Certified Agile Leader",
        "Ph.D. in Computer Sciences",
        "10 years of hands-on full-stack development experience",
        "Led development teams sized from 3 to 30 people",
      ],
    },
    {
      id: 2,
      name: "Ahmad Tolqixojaev",
      role: "Project Manager",
      image: "https://www.columbuspm.org/wp-content/uploads/2015/09/team-member-sample.jpg", // Replace with your image paths
      details: [
        "7+ years managing projects",
        "Expert in Agile methodologies",
        "Strong background in software architecture",
        "Successfully led over 20 projects",
      ],
    },
    {
      id: 3,
      name: "Jhon Rock",
      role: "Founder",
      image: "https://www.leadengine-wp.com/static/wp-content/uploads/sites/37/2018/02/personal1.jpg", // Replace with your image paths
      details: [
        "15+ years in software development",
        "Certified SCRUM Product Owner, Certified Agile Leader",
        "Ph.D. in Computer Sciences",
        "10 years of hands-on full-stack development experience",
        "Led development teams sized from 3 to 30 people",
      ],
    }
  ];

  const toggleCard = (id) => {
    setExpandedCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-6 ">
      <h2 className="text-red-600 text-5xl px-16">Наша команда</h2>
    <div className="flex flex-wrap justify-center gap-6 p-6 ">
      {teamMembers.map((member) => (
        <motion.div
          key={member.id}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className=" text-white rounded-lg shadow-lg overflow-hidden w-80 cursor-pointer"
          onClick={() => toggleCard(member.id)}
        >
          {/* Card Image */}
          <motion.div
            layout
            className={`relative w-full overflow-hidden  transition-all duration-300 ${
              expandedCard === member.id ? "h-56" : "h-96"
            }`}
          >
            <motion.img
              src={member.image}
              alt={member.name}
              className="w-full h-[350px] object-cover rounded-xl"
              layout
            />
          </motion.div>

          {/* Card Content */}
          <div className=" space-y-4">
            <h3 className="text-2xl font-semibold">{member.name}</h3>
            <p className=" text-sm px-8 w-fit uppercase font-semibold text-white border border-red-600 rounded-xl">{member.role}</p>
          </div>

          {/* Dropdown Animation */}
          <AnimatePresence>
            {expandedCard === member.id && (
              <motion.div
                key="dropdown"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="p-4 text-sm text-gray-300"
              >
                <ul className="list-disc pl-5">
                  {member.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default TeamSection;











  
