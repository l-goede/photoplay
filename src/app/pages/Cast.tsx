import React from 'react';
// import ArtistCard from '../components/ArtistCard/ArtistCard';
import BackButton from '../components/BackButton/BackButton';
// import michaelPenaImage from '../assets/michaelPena.png';
import CastPortrait from '../components/CastPortrait/CastPortrait';
import DownloadIcon from '../components/Icons/DownloadIcon';
import HomeIcon from '../components/Icons/HomeIcon';
import ProfileIcon from '../components/Icons/ProfileIcon';
import SearchIcon from '../components/Icons/SearchIcon';
import NavBarLink from '../components/NavBarLink/NavBarLink';
import styles from './Cast.module.css';

function Cast(): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BackButton></BackButton>
      </header>
      <main className={styles.main}>
        <div className={styles.castPortrait}>
          <CastPortrait
            imgSrc="https://ca.slack-edge.com/TTHG21AH3-UTRGVUVQX-504c15efb0fd-512"
            firstName="Philipp"
            lastName="Gartz"
          />
        </div>
        <p className={styles.castDescription}>
          Philipp Gartz was born and raised in Chicago, to Nicolasa, a social
          worker, and Eleuterio Peña, who worked at a button factory. His
          parents were originally from Mexico.{' '}
        </p>
        <p className={styles.movieExamples}>Known for movie examples.</p>
      </main>
      <footer className={styles.footer}>
        <div className={styles.navBar}>
          <NavBarLink icon={<HomeIcon />} text="Home" />
          <NavBarLink icon={<SearchIcon />} text="Search" />
          <NavBarLink icon={<DownloadIcon />} text="Download" />
          <NavBarLink icon={<ProfileIcon />} text="Profile" />
        </div>
      </footer>
    </div>
  );
}

export default Cast;
