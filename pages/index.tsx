import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import DefaultLayout from './layouts/default'
import styles2 from '../styles/Site.module.scss';
import { ContentAccordion, ContentButton, ContentGridFormatter, ContentHeroBlock, ContentImage, ContentLine, ContentOverlay, ContentSpacer, ContentTextBlock } from '@content-blocks/react';
import { CategoryInterface, contentBlockPageStructureData } from '../globals';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <DefaultLayout>
        <Head>
          <title>Content Blocks</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ContentSpacer max-width="1920px" horizontal-position="center" bottom-offset="40px|5vh">
          <ContentHeroBlock class="introduction-hero" id="introHero">
            <ContentImage width="1920" height="667|400" slot="background"
              src="/hero.jpg">
            </ContentImage>
            <ContentSpacer slot="content" full-height="true" left-offset="20px|4" right-offset="20px|4" top-offset="20px|4" bottom-offset="20px|4"
              max-width="100|90|55" horizontal-alignment="left">
              <ContentTextBlock class="color--black|color--white" vertical-alignment="center">
                <ContentLine class="text-style--eyebrow">Introducing</ContentLine>
                <ContentLine class="text-style--title">Content Blocks</ContentLine>
                <ContentLine class="text-style--subtitle">Accessible, Performant, Engineered for Scalability</ContentLine>
                <ContentLine class="text-style--subtitle"></ContentLine>
                <ContentLine class="text-style--copy" max-width="100|500px">A collection of frontend web components designed to build
                  accessible and performant e-commerce and template experiences with ease.</ContentLine>
                <ContentSpacer top-offset="3">
                  <ContentButton class="button button--primary" href="/components">Browse Components</ContentButton>
                  <ContentButton class="button button--secondary" href="/documentation">Documentation</ContentButton>
                </ContentSpacer>
                <ContentTextBlock slot="footer">
                  <ContentLine class="text-style--feature">Built for Responsiveness and Scalability</ContentLine>
                  <ContentLine class="text-style--feature">Fully Lazy Loaded</ContentLine>
                  <ContentLine class="text-style--feature">Fully Keyboard Accessible</ContentLine>
                  <ContentLine class="text-style--feature">Zero dependencies, works with frameworks like jQuery or React</ContentLine>
                </ContentTextBlock>
              </ContentTextBlock>
            </ContentSpacer>
          </ContentHeroBlock>

          <ContentSpacer max-width="1280px" horizontal-position="center" top-offset="20px|40px" bottom-offset="0" left-offset="20px" right-offset="20px">
            <ContentGridFormatter columns="1|2">
              <div>
                <ContentLine class="text-style--title" max-width="90|560px">
                  Why Content Blocks?
                </ContentLine>
                <ContentSpacer max-width="100|100|740px">
                  <p>Content Blocks make building ecommerce and marketing sites faster and easier. Slots allow easy customization, and responsive properties make handling responsive breakpoints a breeze.</p>
                  <p>This library was developed to address the common challenges experienced when building custom frontend architectures for Fortune 500 companies. Content Blocks make working with changing requirements simple because all the functionality is encapsulated within each component, and can be used in any slot.</p>
                  <p>The individual components handle accessibility, lazy loading, and asynchronous rendering. To learn more about how these features work, take a look at the <Link href="/documentation"><a>Documentation</a></Link>.</p>
                </ContentSpacer>
              </div>
              <div>
                <ContentSpacer max-width="1280px" horizontal-position="center" left-offset="0|20px" right-offset="0|20px">
                  <ContentLine class="text-style--title" max-width="90|560px">
                    Getting Started
                  </ContentLine>
                  <h4>Javascript Bundle</h4>
                  <pre>
                    <code>
                      npm install @content-blocks/js;
                    </code>
                  </pre>
                  <pre>
                    <code dangerouslySetInnerHTML={{ __html: "import { ContentLine } from '@content-blocks/js';"}}></code>
                  </pre>

                  <h4>React Bundle</h4>
                  <pre>
                    <code>
                      npm install @content-blocks/react
                    </code>
                  </pre>
                  <pre>
                    <code dangerouslySetInnerHTML={{ __html: "import { ContentLine } from '@content-blocks/react';"}}></code>
                  </pre>
                  <ContentLine max-width="100|560px">
                    Visit the <Link href="/documentation"><a>Documentation</a></Link> page for instructions to include Content Blocks in your application. You can also learn more about slots and responsive properties.
                  </ContentLine>
                  <br />
                  <ContentLine class="text-style--title" max-width="90|560px">
                    Examples
                  </ContentLine>
                  <ContentLine max-width="100|560px">
                    <ol>
                      <li><a href="/demos/ecommerce-informational.html" target="_blank">HTML5 Ecommerce Page</a></li>
                      <li><a href="https://github.com/contentblocksdev/nextjs-example" target="_blank">NextJS Content Blocks Site (React)</a></li>
                    </ol>
                  </ContentLine>
                  


                </ContentSpacer>
              </div>
            </ContentGridFormatter>
          </ContentSpacer>

          <ContentSpacer max-width="1280px" horizontal-position="center" top-offset="40px" bottom-offset="0" left-offset="20px" right-offset="20px">
            <ContentLine class="text-style--title" max-width="90|560px">
              A suite of optimized components for every content experience
            </ContentLine>
            <ContentSpacer top-offset="20px" bottom-offset="20px">
              <ContentGridFormatter columns="1" top-offset="10px">
                <div>
                  <ContentGridFormatter columns="2|4">
                    { contentBlockPageStructureData.map((value: CategoryInterface) => 
                      <ContentSpacer key={value.title} top-offset="10px" bottom-offset="10px">
                        <h3>{ value.title }</h3>
                        <ul>
                          { value.children.map(element => <li key={element.id}><a href={ element.href }>{ element.title }</a></li>)}
                        </ul>
                      </ContentSpacer>
                    )}
                  </ContentGridFormatter>
                </div>
              </ContentGridFormatter>
            </ContentSpacer>
          </ContentSpacer>
          
        </ContentSpacer>
    </DefaultLayout>
  )
}

export default Home
