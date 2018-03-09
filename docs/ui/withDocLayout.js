import React from 'react'
import { ComponentsProvider } from '@compositor/markdown'

import Layout from './Layout'
import Container from './Container'
import NavDocs from './NavDocs'
import SubNav from './SubNav'
import data from './data.json'
import { md, EditOnGitHub } from './'

export default (Component, metadata = {}) => ({ title, ...props }) => (
  <ComponentsProvider components={md}>
    {metadata.addons
      ? metadata.addons.map(addon => (
          <link
            rel="stylesheet"
            href={`https://unpkg.com/${addon}/css/${addon}.min.css`}
          />
        ))
      : null}
    <Layout title={title || metadata.title}>
      <SubNav nav={metadata.subNav} />
      <Container padding={true} className="black-70">
        <Component data={data} {...props} />
      </Container>
      {metadata.editUrl ? <EditOnGitHub url={metadata.editUrl} /> : null}
      {metadata.skipDocsNav ? null : (
        <Container padding={true} className="black-70 pv4">
          <NavDocs />
        </Container>
      )}
    </Layout>
  </ComponentsProvider>
)