import { motion } from "framer-motion";
import Image from "next/image";
import { HiGlobeAlt } from "react-icons/hi";

const projects = () => {
  const projectsArrName = ["Christmas quiz", "Portfolio"];
  const projectsArrImage = ["/ChristmasQuiz.png", "/Portfolio.jpeg"];
  const projectsArrDescription = [
    "A Quiz about the typical Czech Christmas. Firebase is used as the authentication and DB service. React for frontend. Vite For quick build times. TailwindCSS for looks. Login: user@gmail.com user1234",
    "This portfolio you are currently looking at. Made with React, Next.js, TailwindCSS.",
  ];
  const projectArrLink = ["https://christmas-quiz-ten.vercel.app/"];
  return projectsArrName.map((element, id) => (
    <motion.div
      className="flex flex-col md:flex-row p-10 text-center md:text-left max-h-[500px]"
      key={id}
      initial={{ x: -300 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="overflow-hidden rounded-md basis-1/2">
        <Image
          src={projectsArrImage[id]}
          width={500}
          height={500}
          alt="Project Image"
          className="px-2 m-auto mb-3 bg-cover md:px-5 md:mb-0"
        />
      </div>
      <div className="my-auto basis-1/2 ">
        <p className="text-3xl text-center">
          <b>{element}</b>
        </p>
        <p className="text-xl text-center">
          <i>{projectsArrDescription[id]}</i>
        </p>
        <a href={projectArrLink[id]} className="text-5xl text-black">
          <span className="flex m-auto bg-white rounded-md w-[100px] mt-3 py-1">
            <HiGlobeAlt size={48} className="m-auto" />
          </span>
        </a>
      </div>
    </motion.div>
  ));
};
export default projects;
