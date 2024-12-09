import Head from "next/head";
import { Inter } from "next/font/google";
import Image from "next/image";
import memoji from "../public/laptopMemoji.png";
import memoji2 from "../public/next.png";
import ChristmasQuiz from "../public/ChristmasQuiz.png";
import { AiOutlineMenu } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import EmailForm from "@/components/emailForm";
import WavingHand from "@/components/wavingHand";
import projects from "@/components/projects";

const poppins = Inter({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [wavingHandBool, setWavingHandBool] = useState(false);
  const [cursor, setCursor] = useState(true);
  const [scale, setScale] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setScale(window.innerWidth <= 768 ? 1 : 2);
    setOffset(0);
  }, []);
  return (
    <>
      <Head>
        <title>Daniel Young</title>
        <meta
          name="description"
          content="Daniel Young a 16 year old react developer based in the czech republic"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/laptopMemoji.ico" />
      </Head>
      <main className={poppins.className}>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
          className="h-[10vh] flex flex-row text-2xl"
        >
          <h2 className="my-auto ml-5 mr-auto">
            <a href="">Daniel Young</a>
          </h2>

          <motion.ul
            className={
              displayMenu
                ? "mt-[7.5vh] absolute right-3 md:static md:flex md:my-auto md:pr-5 md:flex-row md:gap-3"
                : "mt-[7.5vh] absolute right-3 md:static md:flex md:my-auto md:pr-5 md:flex-row md:gap-3 flex-col hidden"
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1.5 }}
          >
            <motion.li
              whileHover={{ scale: 1.1, color: "black", background: "white" }}
              className="rounded-md p-1"
            >
              <a href="#about">About me</a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, color: "black", background: "white" }}
              className="rounded-md p-1"
            >
              <a href="#projects">Projects</a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, color: "black", background: "white" }}
              className="rounded-md p-1"
            >
              <a href="#contact">Contact</a>
            </motion.li>
          </motion.ul>
          <AiOutlineMenu
            className="my-auto inline md:hidden mr-5"
            onClick={() => setDisplayMenu(!displayMenu)}
          />
        </motion.nav>
        <header className="flex flex-col md:flex-row items-center justify-center h-[90vh]">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3, duration: 1.2 }}
          >
            <Image
              src={memoji}
              width={125}
              height={125}
              alt="memoji"
              className="mb-[10vh] md:mr-5"
            />
          </motion.div>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.65 }}
          >
            <div className="flex text-5xl md:text-6xl pb-[10vh]">
              <motion.span
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.5, duration: 1.2 }}
                className="flex flex-row"
              >
                <span
                  className={
                    cursor ? "inline text-center" : "hidden text-center"
                  }
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Hi I'm Daniel")
                        .pauseFor(100)
                        .callFunction(() => {
                          setCursor(!cursor);
                          setWavingHandBool(!wavingHandBool);
                        })
                        .start();
                    }}
                  />
                </span>
                <p className={cursor ? "hidden" : "inline"}>Hi I'm Daniel</p>
                {wavingHandBool ? <WavingHand /> : ""}
              </motion.span>
            </div>
          </motion.div>
        </header>
        <section id="about" className="md:h-screen">
          <h1 className="text-center text-6xl p-7">About me</h1>
          <div className="flex flex-col md:flex-row max-w-6xl m-auto">
            <motion.div
              initial={{ x: -300 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
              <Image
                src={memoji2}
                width={500}
                height={500}
                alt="memoji"
                className="mb-5 md:mb-0 mx-auto md:mx-0"
              />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="my-auto"
            >
              <p className="text-xl md:text-3xl text-center px-5 md:max-w-xl m-auto mb-10 md:mb-auto">
                I'm into coding and love building web apps, especially using
                React and Next.js. I enjoy experimenting with new ideas,
                learning cool tools, and creating projects that push my skills
                further.
              </p>
            </motion.span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-4xl text-center">My skills</h1>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="flex flex-row flex-wrap justify-center p-7 m-auto mt-7 gap-2 text-xl md:text-2xl"
            >
              <li>HTML & CSS</li>
              <li>JS</li>
              <li>TS</li>
              <li>Tailwind</li>
              <li>React</li>
              <li>React Native</li>
              <li>Next JS</li>
              <li>Python</li>
              <li>git</li>
            </motion.ul>
          </div>
        </section>
        <section id="projects" className="mt-10 md:mt-0">
          <h1 className="text-center text-6xl p-7">Projects</h1>
          <div className="flex flex-col md-flex-row">{projects()}</div>
        </section>
        <section id="contact" className="mb-20 mt-10  ">
          <h1 className="text-center text-6xl p-2">Contact</h1>
          <EmailForm></EmailForm>
          <ul className="flex flex-row flex-wrap justify-around items-center">
            <li className="text-5xl md:text-7xl basis-1/4">
              <a href="https://www.linkedin.com/in/daniel-young-a7a244240/">
                <FaLinkedin className="m-auto" />
              </a>
            </li>
            <li className="text-5xl md:text-7xl basis-1/4">
              <a href="https://github.com/jejkukany">
                <FaGithub className="m-auto" />
              </a>
            </li>
            <li className="text-5xl md:text-7xl basis-1/4">
              <a href="https://discord.com/users/589782535005929486">
                <FaDiscord className="m-auto" />
              </a>
            </li>
            <li className="text-5xl md:text-7xl basis-1/4">
              <a href="https://twitter.com/jejkukany">
                <FaTwitter className="m-auto" />
              </a>
            </li>
          </ul>
        </section>
        <footer className="text-center">
          <hr />
          <p className="p-2">Made by Daniel Young</p>
        </footer>
      </main>
    </>
  );
}
