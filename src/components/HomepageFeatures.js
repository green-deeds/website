import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'DeFi for Earth',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Use the decentralied Exchange (DEX) of the worlds forests and pay a small translation fees, where we plant trees. 
      </>
    ),
  },
  {
    title: 'Plant real trees',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We plant a tree for you and you will get an digital twin of this tree as NFT. You can decide location and the type of the new planted tree.
      </>
    ),
  },
  {
    title: 'Carbon Credits',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        On the carbon credit marketplace everyone can buy verified certificates backed by real trees in trusted areas. 
      </>
    ),
  },
  {
    title: 'Green Ecosystem',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We create with the community tools and events to bring back the power to the forest.
      </>
    ),
  },
  {
    title: 'Knowledge Base',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Our second goal is to bring infromation about nature to the people an inspire them to keep a healhy environment.
      </>
    ),
  },
  {
    title: 'AI satelite monitoring',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Our software monitors in realtime our planted through satalite date and a artificial intelligence checks for fires, illegal deforestation and general tree tracking.
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
