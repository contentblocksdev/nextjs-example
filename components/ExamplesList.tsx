import { ContentButton, ContentGridFormatter, ContentLine, ContentSpacer, ContentTabs } from "@content-blocks/react";
import React, { ReactElement } from "react";
import { ExampleDefinition } from "../globals";
import { ExampleSandbox } from "./ExampleSandbox";

declare interface IExamplesList {
  examples: ExampleDefinition[]
}
export default class ExamplesList extends React.Component<IExamplesList> {
  examplesElement: HTMLDivElement | null = null;
  render() {
    let children: ReactElement[] = [];
    let tabs: ReactElement[] = [];
    let tabContents: ReactElement[] = [];

    this.props.examples.forEach((example: ExampleDefinition, index) => {
      tabs.push(<ContentSpacer bottom-offset="5px" right-offset="5px"><button key={`example${index}`} role="tab" aria-selected={index === 0} aria-controls={`example${index}-contents`} id={`example${index}`}>
        <div className="examples_title">Example #{index + 1}</div>
          { example.description && <div className="examples_description">{ example.description }</div> }
      </button></ContentSpacer>);
      tabContents.push(<div key={`example${index}-contents`} hidden={index > 0} tab-index="0" role="tabpanel" id={`example${index}-contents`} aria-labelledby={`example${index}`}>
        <ContentSpacer bottom-offset="20px">
          <ContentButton class="button button--info" href={ example.html } target="_blank">
            View Example in New Window
          </ContentButton>
        </ContentSpacer>
        <ExampleSandbox example={example}></ExampleSandbox>
      </div>);
    });

    return <ContentTabs>
      <ContentGridFormatter columns="1" type="grid">
        <ContentSpacer max-width="100%">
          <div className="examples_tablist"  role="tablist" aria-label="List of Examples">
            <ContentGridFormatter columns="1|3|4" type="grid">{ tabs }</ContentGridFormatter>
          </div>
        </ContentSpacer>
        <div>{ tabContents }</div>
      </ContentGridFormatter>
    </ContentTabs>
  }
}