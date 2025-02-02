import Typewriter from "@/components/Typewriter";

const AutoType = () => {
  const words = [
    { text: "Vite", className: "text-[#a95eff]" },
    { text: " + " },
    { text: "React", className: "text-[#61dafb]" },
    { text: " + " },
    { text: "Tailwindcss", className: "text-[#0ea5e9]" },
    { text: " + " },
    { text: "Framer Motion", className: "text-[#ff57c8]" },
  ];
  return (
    <div className="text-center">
      <header className="flex min-h-screen flex-col items-center justify-center gap-2 bg-[#282c34] pb-8 text-white">
        <Typewriter words={words} />
      </header>
    </div>
  );
};

export default AutoType;
