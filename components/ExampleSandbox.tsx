import React, { RefObject, useEffect } from "react";

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'jotted/jotted.min.css';
import { ExampleDefinition } from "../globals";

declare interface IExampleSandbox {
  example: ExampleDefinition
}

export class ExampleSandbox extends React.Component<IExampleSandbox> {
  element: RefObject<any>;
  constructor(props: any) {
    super(props);
    this.element = React.createRef();
  }

  async componentDidMount() {
    const CodeMirror = (await import('codemirror')).default;
    const Jotted = (await import('jotted')).default;
    let files = [];
    let htmlPath = this.element.current.getAttribute('data-html');
    let cssPath = this.element.current.getAttribute('data-css');
    if (htmlPath) {
      files.push({
        type: 'html',
        url: htmlPath,
      });
    }
    if (cssPath) {
      files.push({
        type: 'css',
        url: cssPath
      });
    }
    let jotted = new Jotted(this.element.current, {
      files: files,
      plugins: [
        { 
          'name': 'codemirror',
          'options': {
            'mode': 'htmlmixed',
          },
        },
        'pen',
      ]
    });
  }
  render() {
    return <div ref={this.element} data-html={this.props.example.html} data-css={this.props.example.css} className="example_sandbox"></div>;
  }
}