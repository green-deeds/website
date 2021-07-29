import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'DeFi for Earth',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This decentralized finance platform plants trees with a small percentage of translation fees. 
      </>
    ),
  },
  {
    title: 'Plant real trees',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We plant a tree for you and you will get a NFT. You can decide location and the type of the new planted tree.
      </>
    ),
  },
  {
    title: 'Carbon Credits',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        On the carbon credit marketplace companies can buy certificates backed by real trees in trusted areas. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
