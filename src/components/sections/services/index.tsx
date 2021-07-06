import "../section.scss";
import developApp from "../../assets/undraw_develop_app_re_bi4i.svg";
import developerActivity from "../../assets/undraw_developer_activity_bv83.svg";
import openSource from "../../assets/undraw_open_source_1qxw.svg";

const Services = () => {
  return (
    <div id="services" className="container">
      <div className="row justify-content-center mt-5">
        <h2 className="text-center mt-5 mb-5 text-white fw-bold">Services</h2>
        <div className="col-md-3">
          <div className="card text-center mt-1">
            <div className="card-body">
              <img src={developerActivity} />
              <h2 className="card-title">Web applications</h2>
              <p className="card-text">
                Web application development with React and Angular, the best way
                to take your web applications to the next level, scalable and
                easy to maintain.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center mt-1">
            <div className="card-body">
              <img src={developApp} />
              <h2 className="card-title">App development</h2>
              <p className="card-text">
                I develop applications with React Native, which when developing
                the application gives me the confidence to always keep your app
                updated and optimized.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center mt-1">
            <div className="card-body">
              <img src={openSource} />
              <h2 className="card-title">Open Source</h2>
              <p className="card-text">
                Sharing my knowledge in development with the world, to help and
                improve myself personally.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center text-white mt-5">"What you imagine, we develop"</h2>
    </div>
  );
};

export default Services;
