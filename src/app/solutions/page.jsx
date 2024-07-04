import styles from './solution.module.scss'
import Card from '@/components/cards/Card';
import { config as websiteInformation } from '@/config'

const Projects = () => {
    const filteredSolutions = websiteInformation.content.solutions.filter(project => project.visibleHome && !project.isHidden);

    return (
        <section className={styles.container}>
            <h2 id='solution' className={styles["container-headers"]} >Our <span>Solutions</span></h2>

            <div className={styles["container-cards"]}>
            {filteredSolutions.map(project => (
                <Card
                key={project.title}
                icon={project.icon}
                title={project.title}
                description={project.description}
                actionText={project.actionText}
                cssClassName="solution"
                />
            ))}
            </div>
        </section>
    )
  }
  
export default Projects