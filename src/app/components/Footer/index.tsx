import { SiGamejolt } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="h-14 w-full flex items-center justify-center bg-gray-800">
      <span className="flex items-center gap-1.5 text-sm font-mono text-gray-400">
        Feito por <strong className="font-medium"> Marcos Paulo</strong>
        <SiGamejolt />
      </span>
    </footer>
  );
};

export default Footer;
