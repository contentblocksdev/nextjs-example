# Documentation

## Getting Started

#### Script Tag / ESM Bundle
```
npm install @content-blocks/js
```
```
<script type="module" src="/node_modules/@content-blocks/js/content-blocks/content-blocks.esm.js"></script>
```
#### Note
We do not recommend exposing your node_modules folder publically. Instead, you should copy the module resources you need to a separate folder with your own build process.

### Javascript Bundle
```
npm install @content-blocks/js
```
```
import { ContentLine } from '@content-blocks/js';
```

### React Bundle
```
npm install @content-blocks/react
```
```
import { ContentLine } from '@content-blocks/react';
```

#### Note
When using Content Blocks with React, always use the kebab-case version of the property. This ensures any applicable CSS styles are also applied correctly.

#### Note
NextJS was used to export static HTML instead of server side rendering.

We recommend you go through the [components](/components) for a reference to the different events, slots, and properties available per component.

We recommend you go through the [examples](/examples) for in-depth examples.

### Flash of Unstyled Content (FOUC)

Add the following CSS to your page.
```
html {
  visibility: hidden;
}
html.hydrated {
  visibility: inherit;
}
```

## How it works
Content Blocks are web components built using <a href="https://stenciljs.com/" target="_blank">StencilJS</a>. The two main features of Content Blocks are **slots** and **responsive properties**. Some of the components such as tabs, accordions, and overlays are adapted based on examples provided by the W3 foundation.

### Slots
Slots allow you to pass content into a predefined position, or slot. When no slot is specified, it is usually placed in the 'content' slot when available. Content can be passed as such:

```
<content-hero-block>
  <img slot="background" src="image.jpg" />
  <div slot="content">Hello World!</div>
  <div>
    I'm without a slot, but I'll usually end up next to the "content" slot! 
    Sometimes I can cause issues and am not guaranteed to work.
  </div>
</content-hero-block>
```

### Responsive Properties
Responsive properties allow you to specify different values for different breakpoints, based on common screen sizes. Each value separated by "|" is applied at the following size:

```
0|768|1024|1366|1440|1920
```

Here is an example of a responsive property in use:

```
<content-image src="img-mobile.jpg|image-ipad.jpg|image-tablet.jpg" width="3|16" height="4|9"></content-image>
```

This will show 3 different images with 2 different aspect ratios. Since there is no 3rd value supplied for the width and height, they fallback to the last value received. The responsive property feature is used across many content blocks.

## Usecases
When creating templates and ecommerce experiences, adapting to changing designs and requirements while also addressing accessibility, layout shift, and performance can be challenging. Content Blocks provides pre-built structures and components that let you build interactive, keyboard accessible experiences for all sorts of content.

Content Blocks specifically provides easy to use layouts like heroes and split blocks which can be customized with slots and properties.

Also included are components for interactions such as capturing a button click to open a modal, showing a modal that overtakes a section of content or the entire screen, tabbed content, accordions, and much more. 

Content Blocks are useful in situations where the content displayed may be variable. For example, a design with an image can easily be updated to show a silent looping mp4 (as a performant alternative to GIF), or a YouTube video.

You may also want to preemptively use a Content Block, so you have the ability to use any of the features if needed. 


Content Blocks work really well for building:
* Template systems
* CMS driven templates
* Marketing pages
* Ecommerce layouts
* probably much more

## Should I use this?
Probably not. This whole project is experimental. You're probably better off accounting for accessibility, performance, and cumulative layout shift in your own app. You'll probably use standardized features like tabbed content or heroes and grids from other frameworks, i.e. Bootstrap. You might also prefer to write all your CSS inline with a tool such as Tailwind CSS. You might want to address making your page keyboard accessible and fixing  keyboard traps and tabindexes yourself.

Or you might give these components a try and start having moments where it 'clicks', such as using slots to insert your own content or when you realize you can have all the features of a content-line, content-image or content-grid everywhere in every combination. You might appreciate that all the components are lazy loaded and asynchronously rendered, leaving one thing less to worry about. 

In fact with just a single script tag, you can build an entire complex page with just HTML and writing less than 1 kb of CSS. Content Blocks are designed to be fully keyboard accessible, whether the content being displayed is a button launching a fullscreen overlay, an overlay opening an overlay, a button revealing dropdown content launching an overlay with tabs, etc.

## I have a question / concern - where do I go?
Please start a new [discussion on Github](https://github.com/contentblocksdev/nextjs-example/discussions)