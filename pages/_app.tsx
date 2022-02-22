import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ContentButton, ContentGridFormatter, ContentNavigationBlock, ContentSpacer } from '@content-blocks/react'
import { useRouter } from 'next/router';
import { allComponentPagePaths } from '../globals';
import '../styles/site-theme.scss';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export function NavLink(props: any) {
  const { asPath } = useRouter();
  let classString = '';
  let foundPathMatch = false;
  foundPathMatch = asPath === '/' && props.href === '/';
  if (props.href !== '/') {
    if (!foundPathMatch) {
      foundPathMatch = asPath.includes(props.href);
    }
    if (!foundPathMatch && props.href === '/components') {
      foundPathMatch = allComponentPagePaths.includes(asPath);
      console.log(asPath);
    }
  }
  if (foundPathMatch) {
    classString = 'active';
  }
  return <a className={classString} href={props.href}>{ props.text }</a>;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  const renderedAppComponent = getLayout(<Component {...pageProps} />);
  return (
    <>
    <ContentSpacer max-width="900px" horizontal-position="center">
      <header className="navigation-menu">
        <ContentGridFormatter columns="2" flexGrow="false" flexAlign="space-between">
          <ContentButton href="/" class="logo">Content Blocks</ContentButton>
          <ContentNavigationBlock class='mobile_menu|full_menu' hamburger="fixed|none">
            <button slot="openButton" aria-label="Toggle Navigation">
              <span className="icon hamburger_menu"></span>
            </button>
            <nav slot="content">
              <button slot="closeButton" aria-label="Close Navigation">
                <span className="icon close_menu"></span>
              </button>
              <ul>
                <li><NavLink href="/" text="Home"></NavLink></li>
                <li><NavLink href="/components" text="Components"></NavLink></li>
                <li><NavLink href="/documentation" text="Documentation"></NavLink></li>
                <li><NavLink href="/examples" text="Examples"></NavLink></li>
              </ul>
            </nav>
          </ContentNavigationBlock>
        </ContentGridFormatter>
      </header>
      </ContentSpacer>
    { renderedAppComponent }
    </>
  )
}

export default MyApp
