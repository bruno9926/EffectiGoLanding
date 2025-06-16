import { useState } from "react";
import Button from "../Button/Button.jsx";

const sections = [
  { name: "INICIO", href: "#inicio" },
  { name: "QUIENES SOMOS", href: "#quienes-somos" },
  { name: "TESTIMONIOS", href: "#testimonios" },
  { name: "CONTACTANOS", href: "#contactanos" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center fixed top-0 left-0 right-0 z-40 bg-white p-4 shadow-sm">
      <a href="/">
        <img src="/images/logo.webp" alt="effectigo-logo" className="h-8" />
      </a>

      <div className="hidden lg:flex gap-0.5">
        {sections.map((section) => (
          <a
            key={section.name}
            href={section.href}
            className="text-gray-600 px-4 py-2 font-medium"
          >
            {section.name}
          </a>
        ))}
      </div>

      <div className="hidden lg:flex gap-5 items-center">
        <span>¿Eres cliente?</span>
        <Button>Iniciar Sesión</Button>
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-gray-400 lg:hidden cursor-pointer"
        aria-label="Abrir menú"
      >
        <MenuIcon />
      </button>

      {/* Menú Mobile */}
      <MenuMobile isOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </nav>
  );
}

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 6l16 0" />
    <path d="M4 12l16 0" />
    <path d="M4 18l16 0" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </svg>
);

const MenuMobile = ({ isOpen, setMenuOpen }) => {
  return (
    <div
      className={`lg:hidden fixed p-5 top-0 left-0 w-screen h-screen bg-white border border-gray-200 z-50 transition-all duration-400 ease-in-out
        ${
          isOpen
            ? "translate-x-0 pointer-events-auto"
            : "translate-x-full pointer-events-none"
        }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="text-gray-400 cursor-pointer w-full flex justify-end mb-4"
      >
        <CloseIcon />
      </button>
      <div className="flex flex-col gap-0.5">
        {sections.map((section) => (
          <a
            key={section.name}
            href={section.href}
            className="text-gray-600 py-2 font-medium"
            onClick={() => setMenuOpen(false)} // Close menu on click
            aria-label={`Ir a ${section.name}`}
          >
            {section.name}
          </a>
        ))}
      </div>
      <div className="lg:hidden flex flex-col gap-2 pt-10 md:w-[60%]">
        <span>¿Eres cliente?</span>
        <Button>Iniciar Sesión</Button>
      </div>
    </div>
  );
};
