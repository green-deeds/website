import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'

function TreesHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>Trees</h1>
        <p className='hero__subtitle'>coming soon</p>
        <div className={styles.buttons}>
          
        </div>
      </div>
    </header>
  )
}

export default function Trees() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <TreesHeader />
    </Layout>
  )
}
