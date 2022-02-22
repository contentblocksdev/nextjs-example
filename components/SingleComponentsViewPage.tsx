import { allComponentPagePaths, CategoryChildInterface, CategoryInterface, contentBlockPageStructureData } from '../globals';
import React, { ReactElement, useEffect } from 'react';
import { ContentButton, ContentGridFormatter, ContentNavigationBlock, ContentSpacer } from '@content-blocks/react';
import styles from '../styles/Component.Single.module.scss';
import ExamplesList from './ExamplesList';
import { NavLink } from '../pages/_app';
import { ContentBlockIcon } from '../pages/components';
import Head from 'next/head';


export interface SingleComponentsViewProps {
  data?: CategoryChildInterface | null;
  readme?: string | null,
  inPageNav?: Object[],
}
function childMenuRender(children: CategoryChildInterface[]) {
  let childMenuArray: ReactElement[] = [];
  if (children.length) {
    children.forEach((childElement: CategoryChildInterface) => {
      childMenuArray.push(<li><NavLink href={ childElement.href } text={ childElement.title }></NavLink></li>);
    });
  }
  return childMenuArray;
};

export class SingleComponentsViewPage extends React.Component<SingleComponentsViewProps> {
  element: React.RefObject<any>;
  pageSections: Object[] = [];
  constructor(props: any) {
    super(props);
    this.element = React.createRef();
    this.pageSections = props.inPageNav;
  }

  async componentDidMount() {
    const mermaid = (await import('mermaid')).default;
    let mermaidElements: HTMLElement[] = this.element.current.querySelectorAll('pre > code');
    mermaid.initialize({startOnLoad: false});
    for (let elem of mermaidElements) {
      mermaid.render('theGraph', elem.innerText, function(svgCode) {
        elem.innerHTML = svgCode;
      });
    }
  }
  
  render() {
    let leftMenu: ReactElement[] = [];
    let rightMenu: ReactElement[] = [];

    contentBlockPageStructureData.forEach((element: CategoryInterface) => {
      let childMenu: ReactElement[] = childMenuRender(element.children);
      leftMenu.push(<li>{ element.title }</li>);
      if (childMenu.length) {
        leftMenu.push(<li key={element.title}><ul className="side_menu_subnav">
          { childMenu }
        </ul></li>);
      }
    });
    if (this.pageSections) {
      if (typeof window === 'undefined' && this.props.data?.examples?.length) {
        this.pageSections.push({
          id: 'examples',
          text: 'Examples'
        });
      }
      this.pageSections.forEach((navItem: any) => {
        rightMenu.push(<li key={navItem.id}><ContentButton clickable-block={true} href={`#${navItem.id}`}>{ navItem.text }</ContentButton></li>)
      });
    }  
    
    return <div className={styles.page_wrapper} ref={this.element}>
      <Head>
        <title>Content Blocks - { this.props.data?.title }</title>
      </Head>
      <ContentGridFormatter columns="1|2|3" flexGrow="true" class={`none|${styles.page_grid}`}>
        <ContentSpacer max-width="100%|238px">
          <ContentNavigationBlock>
            <button slot="openButton" aria-label="Toggle Navigation">
              <span className="icon hamburger_menu"></span>
            </button>
            <nav slot="content">
              <button slot="closeButton" aria-label="Close Navigation">
                <span className="icon close_menu"></span>
              </button>
              <ul className={styles.side_menu}>{ leftMenu }</ul>
            </nav>
          </ContentNavigationBlock>
        </ContentSpacer>
        <div>
          <ContentSpacer left-offset="5px|12px" right-offset="5px|12px" horizontalPosition="center">
            { this.props.readme && <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: this.props.readme }}></div> }
            { this.props.data && this.props.data.examples && <div>
              <h2 id="examples">Examples</h2>
              <ExamplesList key={this.props.data.id} examples={this.props.data.examples}></ExamplesList>
            </div>
            }
            <footer>
              Content Blocks free of warranty. All rights reserved.
            </footer>
          </ContentSpacer>
        </div>
        <ContentSpacer class={styles.sticky_subnav} max-width="0px|0px|200px">
          <div className={styles.preview}>
            <ContentSpacer left-offset="5px" right-offset="5px">
              <div>Structural Preview</div>
              <h4>{ this.props.data?.title }</h4>
              <ContentBlockIcon name={ this.props.data?.id }></ContentBlockIcon>
            </ContentSpacer>
          </div>
          { rightMenu && <ul>
            { rightMenu }
          </ul> }
        </ContentSpacer>
      </ContentGridFormatter>
    </div>;
  }
}



export default SingleComponentsViewPage