import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

/**
 * Header for homepage
 * @return {html} Content for Hero Banner.
 */
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Aegis Documentations ⏱️
              </Link>
            </div>
          </div>
          <div className="col">
            <p className="hero__subtitle">
              <span>
                We are part of <b>Bangkit 2021</b> Programme, Team <b>#0073</b>.
              </span>
              <br />
              <span>
                Currently working on something related to improve your online
                experiences.
              </span>
              <br />
              <span>
                <b>ETA June 4<sup>th</sup></b>
              </span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

/**
 * Return homepage.
 * @return {html} Primary web content.
 */
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.tagline}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
