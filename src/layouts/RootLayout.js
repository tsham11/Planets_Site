import { useEffect, useRef } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import Menu from '../images/icon-hamburger.svg'
import Arrow from "../images/icon-chevron.svg";

const planets = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
];

export default function RootLayout() {
  const navigate = useNavigate();
  const menuContainerRef = useRef(null);

  useEffect(() => {
    navigate("mercury"); ///Planets_Site/
  }, [navigate]);

  const toggleMenu = () => {
    if (menuContainerRef.current) {
      menuContainerRef.current.classList.toggle("visible");
    }
  };

  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>THE PLANETS</h1>
          <img
            src={Menu}
            alt="menu"
            className="menu"
            onClick={toggleMenu}
          />
          <div className="nav-links" ref={menuContainerRef}>
            {planets.map((planet) => (
              <div className="pl" key={planet} onClick={toggleMenu}>
                <div className="cpl">
                  <div className={`circle ${planet}`}></div>
                  <NavLink to={`${planet}`}>
                    {/* `/Planets_Site/${planet}` */}
                    {planet.toUpperCase()}
                  </NavLink>
                </div>
                <img src={Arrow} alt="arrow" className="arrow" />
              </div>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
