import "../section.scss";

const Presentacion = () => {
  return (
    <div className="container" id="presentacion">
      <div className="row  justify-content-center">
        <div className="col-md-5 text-center text-sm-start mt-5 animate__animated animate__fadeIn">
          <h1 className="titulo-presentacion mt-5">Hi, I'm Angel De La Cruz</h1>
          <p className="text-white  ">
            I am a professional in the development of web and mobile
            applications, I have more than 5 years of experience in the field.
          </p>
          <div className="social-network">
            <ul>
              <li>
                <a href="">
                  <img src="/assets/images/instagram.svg" alt="" />
                </a>
              </li>
              <li>
                <a className="ms-1" href="">
                  <img src="/assets/images/twitter.svg" alt="" />
                </a>
              </li>
              <li>
                <a className="ms-1" href="">
                  <img src="/assets/images/github.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <button className="btn btn-success">See portafolio</button>
        </div>
        <div className="col-md-5  d-none   d-sm-block  text-center animate__animated animate__fadeIn">
          <img className="avatar mt-3" src="/assets/images/avatar.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Presentacion;
