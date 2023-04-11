import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Svelte Fundamentals',
    Svg: require('@site/static/img/logo/logo.svg').default,
    description: (
      <>
        Core Svelte <code>concepts</code> and best practices for 
        building component-based apps.
      </>
    ),
  },
  {
    title: 'SvelteKit Development',
    Svg: require('@site/static/img/logo/logo-blue.svg').default,
    description: (
      <>
        SvelteKit <code>framework</code> and developer tools for 
        efficient build-deploy-test workflows!
      </>
    ),
  },
  {
    title: 'Playwright Testing',
    Svg: require('@site/static/img/logo/logo.svg').default,
    description: (
      <>
        End-to-end <code>testing</code> with tools for authoring,
        debugging, and reporting.
      </>
    ),
  },
  {
    title: 'Azure Integrations',
    Svg: require('@site/static/img/logo/logo-blue.svg').default,
    description: (
      <>
        Azure <code>cloud</code> integrations for hosting, 
        analytics, storage, AI and more.
      </>
    ),
  },
  {
    title: 'VS Code Extensions',
    Svg: require('@site/static/img/logo/logo.svg').default,
    description: (
      <>
        Install <code>extensions</code> for productive use 
        of Svelte, Azure, Playwright and more.
      </>
    ),
  },
  {
    title: 'GitHub Copilot',
    Svg: require('@site/static/img/logo/logo-blue.svg').default,
    description: (
      <>
        Activate <code>Copilot</code> for AI-driven assistance 
        with authoring code, tests & comments.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
