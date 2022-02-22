import {ContentButton, ContentLine, ContentSpacer } from '@content-blocks/react';
import type { NextPage } from 'next'
import Head from 'next/head'

const DocumentationPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Content Blocks - Examples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentSpacer left-offset="10px|20px" right-offset="10px|20px" max-width="900px" horizontal-position="center" class="examples_page">        
        <h1>Examples</h1>
        <ContentButton clickable-block="true" class="examples_page__item" target="_blank" href="/demos/ecommerce-informational.html">
          <ContentLine tag="h2">ECommerce - Informational</ContentLine>
          <ContentLine tag="h3">HTML5</ContentLine>
          Demonstration of a styled ECommerce theme built without using any additional Javascript besides the Content Blocks bundle. Includes content overlays, heroes, grids, YouTube video, and more. 
        </ContentButton>
        <ContentButton clickable-block="true" class="examples_page__item" target="_blank" href="https://github.com/contentblocksjs/nextjs-site">
          <ContentLine tag="h2">Content Blocks Documentation Site</ContentLine>
          <ContentLine tag="h3">NextJS / React</ContentLine>
          This current site is built using React via NextJS. The full source is available on GitHub.
        </ContentButton>
        <div>
          More examples coming soon... 
        </div>
      </ContentSpacer>  
    </div>
  )
}

export default DocumentationPage
