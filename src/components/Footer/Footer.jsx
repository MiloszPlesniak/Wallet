import { useState } from 'react';
import ModalTemplate from 'components/ModalTemplate/ModalTemplate';
import Buttons from 'components/Buttons/Buttons';
import GitHubIcon from '@mui/icons-material/GitHub';
import sprite from '../../assets/svg/sprite.svg';
import styles from './Footer.module.scss';

const listOfAppCreators = [
  {
    name: 'Miłosz',
    role: 'Team Leader',
    github: 'https://github.com/MiloszPlesniak',
    avatar: 'https://avatars.githubusercontent.com/u/105582642?v=4',
  },
  {
    name: 'Bolek',
    role: 'Developer & Scrum Master',
    github: 'https://github.com/BoloMasta',
    avatar: 'https://avatars.githubusercontent.com/u/103572991?v=4',
  },
  {
    name: 'Ula',
    role: 'Developer',
    github: 'https://github.com/Urszula-Molska',
    avatar: 'https://avatars.githubusercontent.com/u/105520935?v=4',
  },
  {
    name: 'Jacek',
    role: 'Developer',
    github: 'https://github.com/jacekpietrzak',
    avatar: 'https://avatars.githubusercontent.com/u/5859748?v=4',
  },
  {
    name: 'Angelika',
    role: 'Developer',
    github: 'https://github.com/AngelikaGralewska',
    avatar: 'https://avatars.githubusercontent.com/u/105511457?v=4',
  },
  {
    name: 'Karolina',
    role: 'Developer',
    github: 'https://github.com/KarolinaZinczuk',
    avatar: 'https://avatars.githubusercontent.com/u/104589501?v=4',
  },
];

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__logo}>
        <svg className={styles.Footer__logo__svg1}>
          <use href={`${sprite}#icon-logo-img`}></use>
        </svg>
        <svg className={styles.Footer__logo__svg2}>
          <use href={`${sprite}#icon-logo-title`}></use>
        </svg>
      </div>
      <p className={styles.Footer__text__NoMobile}>
        {`© ${new Date().getFullYear()} All rights don't reserved`}
      </p>

      <p className={styles.Footer__text}>
        {'made with passion by'}
        <span
          className={styles.Footer__link}
          onClick={() => setIsModalOpen(true)}
        >
          {'Web squirrels '}

          <span className={styles.Footer__link__icon}>{'🐿️'}</span>
        </span>
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
          {listOfAppCreators.map(({ name, role, github, avatar }) => (
            <li key={name} className={styles.Footer__modalTeamListItem}>
              <a href={github} target="_blank" rel="noreferrer">
                <img
                  src={avatar}
                  className={styles.Footer__modalTeamListItemIcon}
                />
              </a>
              <a href={github} target="_blank" rel="noreferrer">
                <p className={styles.Footer__modalTeamListItemName}>{name}</p>
              </a>
              <p className={styles.Footer__modalTeamListItemRole}>{role}</p>
            </li>
          ))}
        </ul>

        <Buttons
          firstButtonText="Visit project's GitHub"
          secondButtonText="Close"
          firstButtonHandler={() => {
            window.open('https://github.com/MiloszPlesniak/Wallet');
          }}
          secondButtonHandler={() => setIsModalOpen(false)}
        />
      </ModalTemplate>
    </footer>
  );
};

export default Footer;
