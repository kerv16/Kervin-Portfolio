import styles from './ProjectsStyles.module.css';
import activities from '../../assets/activities.jpg'
import calculator from '../../assets/calculator.jfif';
import carDealer from '../../assets/cardealer.png'
import ProjectCard from '../../common/ProjectCard';
import foodHub from '../../assets/foodhub.jpg'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={foodHub}
          link="https://kerv16.github.io/"
          h3="Recipe App"
          p="Final Project using Reactjs"
        />
        <ProjectCard
          src={activities}
          link="https://github.com/kerv16/TBI-activities_OJT"
          h3="Activities Platform for TBI"
          p="During Internship using Laravel"
        />
        <ProjectCard
          src={calculator}
          link="https://github.com/kerv16/Simple-Calculator"
          h3="Simple Calculator"
          p="HTML, CSS, JS"
        />
        <ProjectCard
          src={carDealer}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Car Dealer"
          p="Using Php, HTML, CSS, JS"
        />
      </div>
    </section>
  );
}

export default Projects;
