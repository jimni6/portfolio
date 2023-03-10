import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, IconBrandTwitter } from '@tabler/icons-react';
import styles from './socialIcons.module.css';

const SocialIcons = () => {
    return (
        <div className={styles.container}>
            <a href="https://github.com/jimni6" target="blank">
                <IconBrandGithub
                    className={styles.icon}
                    size={48}
                    color="#f5ac7c"
                    stroke={1.8}
                />
            </a>
            <a href="https://www.linkedin.com/in/jimmy-ni-a01159239/" target="blank">       
                <IconBrandLinkedin 
                    className={styles.icon}
                    size={48}
                    color="#f5ac7c"
                    stroke={1.8}
                />
            </a>
            <a href="https://www.instagram.com/" target="blank">
                <IconBrandInstagram 
                    className={styles.icon}
                    size={48}
                    color="#f5ac7c"
                    stroke={1.8}
                />
            </a>
            <a href="https://twitter.com/?lang=fr" target="blank">
                <IconBrandTwitter 
                    className={styles.icon}
                    size={48}
                    color="#f5ac7c"
                    stroke={1.8}
                />
            </a>
        </div>
    )
}

export default SocialIcons;