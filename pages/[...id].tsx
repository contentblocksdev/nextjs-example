import { SingleComponentsViewPage, SingleComponentsViewProps } from "../components/SingleComponentsViewPage";
import { BlockPageStructureData, CategoryInterface, CategoryChildInterface, childComponentPagePaths, ComponentStructureData, ElementPageStructureData, FormatterStructureData } from "../globals";
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'
import { unified } from 'unified';
import fs from 'fs';
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

class SingleComponentView extends SingleComponentsViewPage {}
export default SingleComponentView;

export async function getStaticProps(ctx: any): Promise<any> {
  let categoryStructureData: CategoryInterface | undefined; 
  let foundComponentRecord: CategoryChildInterface | null = null;
  let foundFile = null;
  let inPageNav: Object[] = [];
  switch(ctx.params.id[0]) {
    case 'elements':
      categoryStructureData = ElementPageStructureData;
      break;
    case 'blocks':
      categoryStructureData = BlockPageStructureData;
      break;
    case 'components':
      categoryStructureData = ComponentStructureData;
      break;
    case 'formatters':
      categoryStructureData = FormatterStructureData;
      break;
  }
  if (categoryStructureData) {
    const unifiedProcessor = unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkHtml);
      const readmeFile = (fs.readFileSync(`node_modules/@content-blocks/docs/${ctx.params.id.join('/')}/readme.md`));
      const nodeTree = await unifiedProcessor.parse(readmeFile);
      foundComponentRecord = categoryStructureData.children.find(child => child.id === ctx.params.id[1]) || null;
      foundFile = unifiedProcessor.stringify(nodeTree);
      if ((foundFile as unknown as string).length) {
        var $html = $('<div />',{ html: foundFile });
        let descriptionText = foundComponentRecord?.description ? `<h2>Description</h2><div>${foundComponentRecord?.description}</div>` : '';
        let benefitsText = foundComponentRecord?.benefits ? `<h2>Benefits</h2><div>${foundComponentRecord?.benefits}</div>` : '';
        let accessibilityText = foundComponentRecord?.accessibility ? `<h2>Accessibility</h2><div>${foundComponentRecord?.accessibility}</div>` : '';
        let additionalTexts = [descriptionText, benefitsText, accessibilityText];
        $html.find('h1').each(function(this: any) {
          $(additionalTexts.join('')).insertAfter($(this));
        });
        $html.find('h2').each(function(this: any) {
          let text = $(this).text();
          let id = text.replace(' ', '_').toLowerCase();
          $(this).attr('id', id);
          inPageNav.push({id, text});
        });
      }
      foundFile = $html.html();
  }
  if (!foundComponentRecord) {
    return {
      notFound: true,
    }
  }
  return { props: {
    data: foundComponentRecord, readme: foundFile, inPageNav
  }};
}

export async function getStaticPaths() {
  return {
    paths: childComponentPagePaths,
    fallback: false,
  }

}