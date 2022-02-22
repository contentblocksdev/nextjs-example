import {ContentSpacer } from '@content-blocks/react';
import type { NextPage } from 'next'
import Head from 'next/head'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'
import { unified } from 'unified';
import fs from 'fs';

export async function getStaticProps(ctx: any): Promise<any> {
  const unifiedProcessor = unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkHtml);

  const markdownFile = (fs.readFileSync(`pages/documentation.md`));
  const nodeTree = await unifiedProcessor.parse(markdownFile);
  const html = unifiedProcessor.stringify(nodeTree);
  return { props: {
    html
  }};
}
function DocumentationPage (props: any) {
  return (
    <div>
      <Head>
        <title>Content Blocks - Documentation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentSpacer left-offset="10px|20px" right-offset="10px|20px" max-width="900px" horizontal-position="center" class="documentation_page">
        <div dangerouslySetInnerHTML={{ __html: props.html }}></div>
      </ContentSpacer>  
    </div>
  )
}

export default DocumentationPage
