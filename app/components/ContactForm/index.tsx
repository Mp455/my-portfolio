"use client";

import Button from "../Button";
import SectionTitle from "../SectionTitle";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

type contactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const { handleSubmit, register } = useForm<contactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: contactFormData) => {
    console.log(data);
  };
  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-32 flex items-center justify-center"
    >
      <div className="w-full m-w-[420px] mx-auto">
        <SectionTitle
          subtitle="Contato"
          title="Vamos trabalhar juntos? Entre em contato abaixo"
          className="text-center items-center"
        />

        <form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-white text-white p-4 focus:outline-none focus:ring-2 ring-red-500"
            {...register("name")}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-white text-white p-4 focus:outline-none focus:ring-2 ring-red-500"
            {...register("email")}
          />
          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-[140px] bg-gray-800 rounded-lg placeholder:text-white text-white p-4 focus:outline-none focus:ring-2 ring-red-500"
            maxLength={500}
            {...register("message")}
          />
          <Button className="mt-6 h-max mx-auto shadow-button">
            Enviar mensagem <HiArrowNarrowRight size={16} />
          </Button>
        </form>
      </div>
    </section>
  );
};
export default ContactForm;
