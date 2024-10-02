export const Header = () => {
  return (
    <div className="flex items-center justify-center fixed top-3 w-full z-10 ">
      <nav className=" bg-white/10 backdrop-blur flex gap-1 p-0.5 border border-white/15 rounded-full">
        <a href="#" className="nav-item">
          Inicio
        </a>
        <a href="#" className="nav-item ">
          Proyectos
        </a>
        <a href="#" className="nav-item">
          Sobre Mi
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=595981400359"
          className=" nav-item  bg-white !text-gray-900 hover:bg-white/75 transition duration-300"
        >
          Contacto
        </a>
      </nav>
    </div>
  );
};
