import { useState } from 'react';
import ModalTemplate from 'components/ModalTemplate/ModalTemplate';
import Logo from 'components/Logo/Logo';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from './Footer.module.scss';

const listOfAppCreators = [
  {
    name: 'Miłosz',
    role: 'Team Leader',
    github: 'https://github.com/MiloszPlesniak',
  },
  {
    name: 'Bolek',
    role: 'Developer & Scrum Master',
    github: 'https://github.com/BoloMasta',
  },
  {
    name: 'Ula',
    role: 'Developer',
    github: 'https://github.com/Urszula-Molska',
  },
  {
    name: 'Jacek',
    role: 'Developer',
    github: 'https://github.com/jacekpietrzak',
  },
  {
    name: 'Angelika',
    role: 'Developer',
    github: 'https://github.com/AngelikaGralewska',
  },
  {
    name: 'Karolina',
    role: 'Developer',
    github: 'asd',
  },
];

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className={styles.Footer}>
      <Logo className={styles.Footer__logo} />
      <p className={styles.Footer__text}>{`© ${new Date().getFullYear()}`}</p>
      <p className={styles.Footer__text} onClick={() => setIsModalOpen(true)}>
        {'Web squirrels 🐿️'}
      </p>

      <ModalTemplate
        title="Web squirrels 🐿️"
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <p className={styles.Footer__modalText}>
          {
            'The Web Squirrels are a team of 6 students from the Full Stack Developer course at GOIT. The application you are currently using is our final work of our year of learning different technologies used to create modern applications. If you like the site or just want to hire us, you can write to us. May the nuts be with you.'
          }
        </p>

        <ul className={styles.Footer__modalTeamList}>
          {listOfAppCreators.map(({ name, role, github }) => (
            <li key={name} className={styles.Footer__modalTeamListItem}>
              <p className={styles.Footer__modalTeamListItemName}>{name}</p>
              <p className={styles.Footer__modalTeamListItemRole}>{role}</p>
              <a href={github} target="_blank" rel="noreferrer">
                <GitHubIcon className={styles.Footer__modalTeamListItemIcon} />
              </a>
            </li>
          ))}
        </ul>
      </ModalTemplate>
    </footer>
  );
};

export default Footer;
