import { sendContactForm } from "@/lib/api";
import { motion } from "framer-motion";
import { useState } from "react";

export default function emailForm() {
  const initValues = { name: "", email: "", subject: "", message: "" };

  const initState = { values: initValues };

  const [formValues, setFormValues] = useState(initState);

  const { values } = formValues;

  const handleChange = ({ target }: any) =>
    setFormValues((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  async function handleSubmit(e: any) {
    e.preventDefault();
    setFormValues(initState);
    await sendContactForm(values);
  }
  return (
    <motion.form
      initial={{ x: -300 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      method="post"
      onSubmit={handleSubmit}
      className="flex flex-col justify-center max-w-xs md:max-w-lg mx-auto text-l mb-36"
    >
      <label htmlFor="name" className="mt-2">
        Name:
      </label>
      <input
        type="text"
        className="text-black rounded-md border-2 border-black dark:border-white"
        id="first"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      <label htmlFor="email" className="mt-2">
        Your Email:
      </label>
      <input
        type="email"
        className="text-black rounded-md border-2 border-black dark:border-white"
        id="first"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <label htmlFor="email" className="mt-2">
        Subject:
      </label>
      <input
        type="text"
        className="text-black rounded-md border-2 border-black dark:border-white"
        id="first"
        name="subject"
        value={values.subject}
        onChange={handleChange}
      />
      <label htmlFor="last" className="mt-2">
        Message:
      </label>
      <textarea
        className="text-black rounded-md border-2 border-black dark:border-white"
        id="last"
        name="message"
        value={values.message}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="px-7 py-2 mx-auto mt-5 w-fit text-black bg-white rounded-lg border-2 border-black dark:border-white"
      >
        Submit
      </button>
    </motion.form>
  );
}
