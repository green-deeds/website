import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'

function AboutHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>About</h1>
        <p className='hero__subtitle'>Together vs Clima Change!</p>
        <p>
          We are a passionate team which loves nature and technologies with the focus to bring these two togehter for a sustainable future.
        </p>
        <p>
          Our team consists of developers, designers and devop engineers. With a lot of experience with application building and distributed ledger technologies like Blockchain we'are ready to build the next Decentralied Finance (DeFi) platform with the purpose to keep a healty environment with a strong focus on trees.
        </p>
        <div className={styles.buttons}>

        </div>
      </div>
    </header>
  )
}

export default function About() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <AboutHeader />
    </Layout>
  )
}
