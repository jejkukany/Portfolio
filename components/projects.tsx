import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";


const projects = () => {
  const projectsArrName = ["Christmas Quiz"];
  const projectsArrImage = ["/ChristmasQuiz.png"];
  const projectsArrDescrition = [
    "This is a quiz centered around Christmas. It uses Firebase for authentication and storing questions and answers. The username is user@gmail.com and the password is user1234",
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
      <div className="rounded-md overflow-hidden basis-1/2">
        <Image
          src={projectsArrImage[0]}
          width={500}
          height={500}
          alt="Project Image"
          className="px-2 m-auto md:px-5 bg-cover mb-3 md:mb-0"
        />
      </div>
      <div className="basis-1/2 my-auto ">
        <p className="text-3xl text-center">
          <b>{element}</b>
        </p>
        <p className="text-xl text-center">
          <i>{projectsArrDescrition[id]}</i>
        </p>
        <span className="flex m-auto bg-white rounded-md w-[100px] mt-3 py-1">
          <a href={projectArrLink[id]} className="text-5xl text-black m-auto" ><FaGithub/></a>
        </span>
      </div>
    </motion.div>
  ));
};
export default projects;
