import styles from './HeroStyles.module.css';
import heroImg from '../../assets/meeee.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import facebookLight from '../../assets/icons8-facebook.svg';
import facebookDark from '../../assets/facebook-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Tulang_KervinNiño_Resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const facebookIcon = theme === 'light' ? facebookDark : facebookLight;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  // Determine phone number color based on theme
  const phoneNumberColor = theme === 'light' ? '#000000' : '#ffffff';

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Kervin Nino Tulang"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Kervin Niño
          <br />
          Tulang
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a href="https://web.facebook.com/profile.php?id=100008564107348" target="_blank">
            <img src={facebookIcon} alt="Facebook icon" />
          </a>
          <a href="https://github.com/kerv16" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/kervin-ni%C3%B1o-tulang-2597b5297/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <div className={styles.phoneNumber}>
          <a href="tel:+639101544493" style={{ color: phoneNumberColor }}>+63 910-154-4493</a> <br/>
          <a href="tel:+639671323261" style={{ color: phoneNumberColor }}>+63 967-132-3261</a>
        </div>
        <p className={styles.description}>
          A fresh graduate with a Bachelor of Science in Information Technology at Caraga State University with a passion for developing web apps.
        </p>
        <a href={CV} target='_blank'>
          <button className={styles.hover} download>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;