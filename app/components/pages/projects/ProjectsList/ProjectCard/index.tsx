import Image from "next/image";
export const ProjectCard = () => {
  return (
    <div className="rounded-lg h-[435px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-red-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          src="/images/thumb-fsw.png"
          width={380}
          height={200}
          unoptimized
          alt="Thumbail do Projeto FSW Trips"
          className="w-full h-full object-cover group-hover:scale-110 duration-700 transition-all "
        />
      </div>
      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-red-500 transition-all">
          FSW Trips
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          Site de reservas de viagens com autenticação do Google e forma de
          pagamento Stripe.
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          Next.Js, TypeScript, React, TailwindCSS, Prisma, PostgreSQL, Google
          Auth,
        </span>
      </div>
    </div>
  );
};
