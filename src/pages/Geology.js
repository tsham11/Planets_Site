import { useOutletContext } from "react-router-dom";
import { Planets } from "../data/planet";
import Source from "../images/icon-source.svg";

function Geology() {
  const [planet] = useOutletContext();
  return (
    <>
      <div className="imgg">
        <img src={Planets[planet].ovImg} alt="planetPhoto" />

        <img src={Planets[planet].geoImg} alt="planetPhoto" id="geoS" />
      </div>
      <div className="text">
        <h1>{Planets[planet].name}</h1>
        <p>{Planets[planet].textGeo}</p>
        <h5>
          Source :
          <a href="https://www.wikipedia.org">
            Wikipedia
            <img src={Source} alt="src" />
          </a>
        </h5>
      </div>
    </>
  );
}

export default Geology;
