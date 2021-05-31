/* eslint-disable react/prop-types */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const teamMembers = [
  {
    fullName: 'Jerens S. Lensun',
    memberPicture: 'https://fakeimg.pl/64x64/25c2a0/ffffff/?text=JL&retina=1&font=bebas',
    memberRole: 'Roles To be Updated',
    github: 'https://github.com/jerensl',
    twitter: '',
    linkedin: 'https://www.linkedin.com/in/jerensl/',
  },
  {
    fullName: 'M. Hanif Azhary',
    memberPicture: 'https://fakeimg.pl/64x64/25c2a0/ffffff/?text=MHA&retina=1&font=bebas',
    memberRole: 'Roles To be Updated',
    github: 'https://github.com/nephertz',
    twitter: 'https://twitter.com/nephertz',
    linkedin: 'https://www.linkedin.com/in/mhanifazhary/',
  },
  {
    fullName: 'Maulina Damayani',
    memberPicture: 'https://fakeimg.pl/64x64/25c2a0/ffffff/?text=MD&retina=1&font=bebas',
    memberRole: 'Roles To be Updated',
    github: 'https://github.com/Maulina-beep',
    twitter: '',
    linkedin: 'https://www.linkedin.com/in/maulina-damayani-a2561b207/',
  },
  {
    fullName: 'Nadia Indarwati',
    memberPicture: 'https://fakeimg.pl/64x64/25c2a0/ffffff/?text=NI&retina=1&font=bebas',
    memberRole: 'Roles To be Updated',
    github: 'https://github.com/nadiadha',
    twitter: '',
    linkedin: 'https://www.linkedin.com/in/nadia-indarwati-aa8ab4208/',
  },
  {
    fullName: 'Toyib Nurseha',
    memberPicture: 'https://fakeimg.pl/64x64/25c2a0/ffffff/?text=TN&retina=1&font=bebas',
    memberRole: 'Roles To be Updated',
    github: 'https://github.com/ToyibNurseha',
    twitter: '',
    linkedin: 'https://www.linkedin.com/in/toyib-nurseha/',
  },
  {
    fullName: 'Ronan Harris',
    memberPicture: 'https://fakeimg.pl/64x64/25c2a0/ffffff/?text=RN&retina=1&font=bebas',
    memberRole: 'Roles To be Updated',
    github: 'https://github.com/ronanharris09',
    twitter: 'https://twitter.com/Ronanharris4',
    linkedin: 'https://www.linkedin.com/in/ronan-harris-46a842143/',
  },
];

/**
 * Return feature.
 * @return {html} features.
 */
function Feature({
  fullName, memberPicture, memberRole, github, twitter, linkedin}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="avatar">
        <img
          className="avatar__photo avatar__photo--xl"
          src={memberPicture}
        />
        <div className="avatar__intro">
          <h3 className="avatar__name">{fullName}</h3>
          <p className="avatar__subtitle">
            {memberRole}
          </p>
          <p className="avatara__subtitle">
            <a href={github}>GitHub</a> | <a href={linkedin}>LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  );
}
/**
 * Return homepage feature list.
 * @return {html} Homepage features
 */
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.title}>
          <h2>Our Team</h2>
        </div>
        <div className="row">
          {teamMembers.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
