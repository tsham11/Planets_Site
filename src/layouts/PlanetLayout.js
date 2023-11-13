import { useEffect } from "react";
import { NavLink, Outlet, useParams, useNavigate } from "react-router-dom";
import { Planets } from "../data/planet";

export default function PlanetLayout() {
  const { planet } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${planet}/overview`);
  }, [navigate, planet]);

  return (
    <>
      <div className="grid">
        <Outlet context={[planet]} />
        <div className="links">
          <button className={planet}>
            <NavLink to="overview">
              <span>01</span> Overview
            </NavLink>
          </button>
          <button className={planet}>
            <NavLink to="intstr">
              <span>02</span>
              <span id="int">Internal</span> Structure
            </NavLink>
          </button>
          <button className={planet}>
            <NavLink to="geology">
              <span>03</span> Geology
            </NavLink>
          </button>
        </div>
      </div>

      <div className="info">
        <div className="details">
          <h3>Rotation time</h3>
          <h2>{Planets[planet].rotTime}</h2>
        </div>
        <div className="details">
          <h3>Revolution time</h3>
          <h2>{Planets[planet].revTime}</h2>
        </div>
        <div className="details">
          <h3>Radius</h3>
          <h2>{Planets[planet].radius}</h2>
        </div>
        <div className="details">
          <h3>Average temp.</h3>
          <h2>{Planets[planet].avgTemp}</h2>
        </div>
      </div>
    </>
  );
}
