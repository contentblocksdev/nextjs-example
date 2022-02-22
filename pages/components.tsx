import { ContentOverlay } from '@content-blocks/react';
import { ContentToutBlock } from '@content-blocks/react';
import { ContentVideo } from '@content-blocks/react';
import { ContentAccordion, ContentButton, ContentCarousel, ContentGridFormatter, ContentHeroBlock, ContentLine, ContentSpacer, ContentSplitBlock, ContentTabs, ContentTextBlock } from '@content-blocks/react';
import type { NextPage } from 'next'
import Head from 'next/head'

import { CategoryChildInterface, contentBlockPageStructureData } from '../globals'

export function ContentBlockIcon(props: any): JSX.Element {
  if (props.name === 'content-line') {
    return <div className="icon-content-line" style={props.style}></div>
  }
  if (props.name === 'content-button') {
    return <div className="icon-content-button">
        <ContentBlockIcon name="content-line" style={props.style}></ContentBlockIcon>
      </div>
  }
  if (props.name === 'content-image') {
    return <div className="icon-content-image" style={props.style}></div>
  }
  if (props.name === 'content-video') {
    return <div className="icon-content-video" style={props.style}></div>
  }
  if (props.name === 'content-image-or-video') {
    return <div className="icon-content-image-or-video">
      <ContentBlockIcon name="content-image" style={{'clipPath': 'polygon(0 0, 100% 0, 0 100%)'}}></ContentBlockIcon>
      <ContentBlockIcon name="content-video" style={{'clipPath': 'polygon(100% 0, 100% 100%, 0 100%)'}}></ContentBlockIcon>
    </div>
  }
  if (props.name === 'content-text-block') {
    return <ContentTextBlock>
      <ContentBlockIcon name="content-line"></ContentBlockIcon>
      <ContentBlockIcon name="content-line"></ContentBlockIcon>
      <ContentBlockIcon name="content-button"></ContentBlockIcon>
    </ContentTextBlock>
  }
  if (props.name === 'content-hero-block') {
    return <ContentHeroBlock>
      <div slot="background">
        <ContentBlockIcon name="content-image-or-video"></ContentBlockIcon>
      </div>
      <ContentSpacer slot="content" max-width="95%" horizontalPosition="center" left-offset="5px" right-offset="5px">
        <ContentTextBlock slot="content">
          <ContentBlockIcon name="content-line"></ContentBlockIcon>
          <ContentBlockIcon name="content-line"></ContentBlockIcon>
          <ContentBlockIcon name="content-button"></ContentBlockIcon>
        </ContentTextBlock>
      </ContentSpacer>
    </ContentHeroBlock>
  }

  if (props.name === 'content-split-block') {
    return <ContentSplitBlock reverse="false|true">
        <div slot="column1">
          <ContentBlockIcon name="content-image-or-video"></ContentBlockIcon>
        </div>
        <ContentTextBlock slot="column2">
          <ContentBlockIcon name="content-line"></ContentBlockIcon>
          <ContentBlockIcon name="content-line"></ContentBlockIcon>
          <ContentBlockIcon name="content-button"></ContentBlockIcon>
        </ContentTextBlock>
    </ContentSplitBlock>
  }
  if (props.name === 'content-tout-block') {
    return <ContentToutBlock>
        <div slot="media">
          <ContentBlockIcon name="content-image-or-video"></ContentBlockIcon>
        </div>
        <div slot="mediaContent">
          <ContentBlockIcon name="content-video"></ContentBlockIcon>
        </div>
        <ContentTextBlock>
          <ContentBlockIcon name="content-line"></ContentBlockIcon>
          <ContentBlockIcon name="content-line"></ContentBlockIcon>
          <ContentBlockIcon name="content-button"></ContentBlockIcon>
        </ContentTextBlock>
    </ContentToutBlock>
  }
  if (props.name === 'content-accordion') {
    return <ContentAccordion>
      <button style={{width: '100%'}} aria-expanded="false" aria-controls="faq1_desc">
        <ContentBlockIcon name="content-button"></ContentBlockIcon> Click Me
      </button>
      <div id="faq1_desc">
        <ContentBlockIcon name="content-text-block"></ContentBlockIcon>
      </div>
    </ContentAccordion>
  }
  if (props.name === 'content-carousel') {
    return <ContentCarousel>
      <div>
        <div style={{width: '50%', paddingBottom: '25px', margin: 'auto'}}>
          <ContentBlockIcon name="content-hero-block"></ContentBlockIcon>
        </div>
      </div>
      <div>
        <div style={{width: '50%', paddingBottom: '25px', margin: 'auto'}}>
          <ContentBlockIcon name="content-split-block"></ContentBlockIcon>
        </div>
      </div>
      <div>
        <div style={{width: '50%', paddingBottom: '25px', margin: 'auto'}}>
          <ContentBlockIcon name="content-text-block"></ContentBlockIcon>
        </div>
      </div>

    </ContentCarousel>
  }

  if (props.name === 'content-tabs') {
    return <ContentTabs>
      <div className="icon-content-tabs" role="tablist" aria-label="List of choices">
        <button role="tab" aria-selected="true" aria-controls="tab1-contents" id="tab1">What</button>
        <button role="tab" aria-selected="false" aria-controls="tab2-contents" id="tab2" tab-index="-1">How</button>
        <button role="tab" aria-selected="false" aria-controls="tab3-contents" id="tab3" tab-index="-1">Why</button>
      </div>

      <div tab-index="0" role="tabpanel" id="tab1-contents" aria-labelledby="tab1">
        <ContentBlockIcon name="content-line"></ContentBlockIcon>
      </div>

      <div tab-index="0" role="tabpanel" id="tab2-contents" aria-labelledby="tab2" hidden>
        <ContentBlockIcon name="content-image-or-video"></ContentBlockIcon>
      </div>

      <div tab-index="0" role="tabpanel" id="tab3-contents" aria-labelledby="tab3" hidden>
        <ContentBlockIcon name="content-video"></ContentBlockIcon>
      </div>
    </ContentTabs>
  }

  if (props.name === 'content-grid-formatter') {
    return <ContentGridFormatter columns="3">
      <ContentSpacer left-offset="5px" right-offset="5px">
        <ContentBlockIcon name="content-image-or-video"></ContentBlockIcon>
      </ContentSpacer>
      <ContentSpacer left-offset="5px" right-offset="5px">
        <ContentBlockIcon name="content-image-or-video"></ContentBlockIcon>
      </ContentSpacer>
      <ContentSpacer left-offset="5px" right-offset="5px">
        <ContentBlockIcon name="content-image-or-video"></ContentBlockIcon>
      </ContentSpacer>
    </ContentGridFormatter>
  }

  if (props.name === 'content-overlay') {
    return <div className="icon-content-overlay">
      <ContentButton class="button_dark" href="#heroVideoFullscreen">Launch Full Screen Video</ContentButton>
      <ContentOverlay id="heroVideoFullscreen" full-screen="true">
        <script slot="content" type="text/template">
          <ContentVideo autoplay={true} fit-container="true" width={640} height={190} src="https://www.youtube.com/watch?v=ANOgCY6NlGs"></ContentVideo>
        </script>
      </ContentOverlay>
    </div>
  }

  if (props.name === 'content-spacer') {
    return <div className="icon-content-spacer"></div>
  }
  return <></>;
}

const ChildrenList = function(props: any) {
  let children: CategoryChildInterface[] = props.list;
  return <>{children.map((childPage: CategoryChildInterface) => 
      <li key={childPage.id} className="component-item">
        <ContentButton href={childPage.href} clickable-block="true">
          <ContentGridFormatter flexGrow="true" columns="2">
              <ContentSpacer maxWidth="120px|250px" right-offset="20px|50px" left-offset="5px|20px">
                <ContentBlockIcon name={childPage.id}></ContentBlockIcon>
              </ContentSpacer>
              <ContentTextBlock>
                <ContentSpacer top-offset="5px" bottom-offset="5px">
                  <ContentLine tag="h4">
                    { childPage.title }
                  </ContentLine>
                  <ContentLine>{ childPage.description }</ContentLine>
                </ContentSpacer>
              </ContentTextBlock>
            </ContentGridFormatter>
          </ContentButton>
      </li>
  )}</>;
}

const ComponentsPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Content Blocks - Components</title>
      </Head>
      <ContentSpacer max-width="900px" horizontal-position="center" left-offset="10px|20px" right-offset="10px|20px">
        { contentBlockPageStructureData.map((value: any) => {
          return (
            <ContentSpacer key={value.title} class="component-list" top-offset="10px">
              <h2>{ value.title }</h2>
              <ul>
                <ChildrenList list={value.children}></ChildrenList>
              </ul>
            </ContentSpacer>
          )
        }) }
      </ContentSpacer>  
    </div>
  )
}

export default ComponentsPage
