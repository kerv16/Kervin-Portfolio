import styles from "./CertificatesStyles.module.css";
import Diploma from "../../assets/diploma.jpg";
import Ojt from "../../assets/ojt.jpg";
import Participation from "../../assets/participation.jpg";
import htmlCert from "../../assets/html.jpg";
import pyCert from "../../assets/py_cert.jpg";
import scicom from "../../assets/scicom.png";
import dlc from "../../assets/dlc.jpg";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import CertificateCard from "../../common/CertificateCard";

function Certificates() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Certificates</h1>
      <div className={styles.projectsContainer}>
        <CertificateCard
          src={Ojt}
          h3=""
          p=""
        />
        <CertificateCard
          src={dlc}
          h3=""
          p=""
        />
        <CertificateCard
          src={Participation}
          h3=""
          p=""
        />
        <CertificateCard
          src={htmlCert}
          h3=""
          p=""
        />
        <CertificateCard
          src={pyCert}
          h3=""
          p=""
        />
      </div>
    </section>
  );
}

export default Certificates;
