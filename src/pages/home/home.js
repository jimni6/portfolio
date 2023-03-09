import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from './home.module.css';
import me from "../../images/me.png";
import SocialIcons from "../../components/SocialIcons";

const Home = ({ name, tagline }) => {

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section className={styles.home}>
            <div className={styles.textContainer}>
                <motion.h1
                    className={styles.name}
                    ref={ref}
                    initial={{ y: "-10vw", opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: "-10vw", opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {name}
                </motion.h1>
                <motion.p
                    className={styles.description}
                    ref={ref}
                    initial={{ y: "10vw", opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: "10vw", opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {tagline}
                </motion.p>
            <SocialIcons />
            </div>
            <motion.img
                className={styles.meImage}
                ref={ref}
                initial={{ y: "10vw", opacity: 0 }}
                animate={inView ? { y: 0, opacity: 0.4 } : { y: "10vw", opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                src={me}
                alt=""
            />
        </section>
    );
};

export default Home;