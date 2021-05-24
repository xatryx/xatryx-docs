import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

/**
 * Header for homepage
 * @constructor
 */
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
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
          <div className="col col--6">
            <p className="hero__subtitle">
              <span>
                We are part of<strong>Bangkit 2021</strong>
                Programme, Team<strong>#0073</strong>.
              </span>
              <br />
              <span>
                Currently working on something related to improve your online
                experiences.
              </span>
              <br />
              <span className="font-bold">
                ETA June <strong>4</strong><sup>th</sup>
              </span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

/**
 * Represents a book.
 * @constructor
 */
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
