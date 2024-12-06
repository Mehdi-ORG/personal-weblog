import "./Service.css";
import Col from "./Col";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

let array = [
  { id : 1,
    icon: "bi bi-briefcase",
    title: "game",
    info: "(1)Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nisi.",
  },
  { id : 2,
    icon: "bi bi-card-checklist",
    title: "book",
    info: "(2)Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nisi.",
  },
  { id : 3,
    icon: "bi bi-bar-chart",
    title: "R 8 D",
    info: "(3)Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nisi.",
  },
  { id : 4,
    icon: "bi bi-binoculars",
    title: "work",
    info: "(4)Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nisi.",
  },
  { id : 5,
    icon: "bi bi-brightness-high",
    title: "adventure",
    info: "(5)Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nisi.",
  },
  { id : 6,
    icon: "bi bi-calendar4-week",
    title: "money",
    info: "(6)Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nisi.",
  },
];
function Service() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">SERVICES</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
          {array.map( service => <Col key={service.id} {...service}></Col>)}
        </div>
      </div>
    </section>
  );
}
export default Service;
