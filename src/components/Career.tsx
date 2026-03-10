import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Java Intern</h4>
                <h5>Cognizant, Hyderabad</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Developed full-stack applications using Java, Spring, Hibernate,
              HTML, CSS, and JavaScript. Built scalable modules and REST APIs,
              applying Spring & Hibernate for robust backend development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer — Backend</h4>
                <h5>Cognizant, Bengaluru</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Migrated legacy Scala services to Java Spring Boot, improving
              response time by 40%. Executed Blackduck & Fortify security scans,
              improving compliance by 30%. Developed REST APIs and SQL
              procedures with a focus on clean architecture.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer — Full Stack</h4>
                <h5>Cognizant, Bengaluru</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Delivering client-facing UI enhancements in Vue.js while resolving
              security vulnerabilities and optimizing backend logging. Managing
              QA stability across 7+ applications and supporting deployment
              cycles with cross-functional teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
