export interface ExampleDefinition {
  html: string,
  description?: string,
  css?: string,
  js?: string
};

export interface CategoryChildInterface {
  id: string,
  state?: string,
  title: string,
  description: string,
  accessibility?: string,
  benefits?: string,
  href: string,
  children?: CategoryChildInterface[],
  examples?: ExampleDefinition[]
};

export interface CategoryInterface {
  title: string,
  href?: string,
  children: CategoryChildInterface[]
};

export const ElementPageStructureData: CategoryInterface = {
  title: 'Elements',
  children: [
    {
      id: 'content-line',
      title: 'content-line',
      description: 'A basic text line element.',
      
      benefits: 'A content line is useful for dealing with situations such as typography <a href="https://en.wikipedia.org/wiki/Widows_and_orphans" target="_blank">Widows and Orphans</a>. This component also provides the ability to use responsive classes and text alignment options.',
      
      href: '/elements/content-line/',
      examples: [
        {
          description: 'Using responsive classes to show different classes per breakpoint',
          html: '/examples/content-line/0/index.html',
          css: '/examples/content-line/0/style.css',
        },
        {
          description: 'Responsive classes with more values',
          html: '/examples/content-line/1/index.html',
          css: '/examples/content-line/1/style.css',
        },
        {
          description: 'Using the text alignment option',
          html: '/examples/content-line/2/index.html'
        }
      ],
    },
    {
      id: 'content-button',
      title: 'content-button',
      accessibility: 'If no href is provided or the href is equivalent to "#", the role="button" attribute will automatically be applied and the href will be changed to javascript:void(0);',

      description: 'A basic element that can handle switching between anchor and button links, linking to trigger actions on the page, and making entire blocks clickable.',

      benefits: 'A content button can trigger actions, such as opening a content overlay or scrolling to an element by using href="#id". Content buttons also handles issues such as linking entire blocks of content, or having a smaller link within a larger link.',

      href: '/elements/content-button/',
      examples: [
        {
          description: 'One button has an anchor link, the other automatically adds role="button" to enhance the accessibility experience.',
          html: '/examples/content-button/0/index.html',
          css: '/examples/content-button/0/style.css',
        },
        {
          description: 'Listen to a button click',
          html: '/examples/content-button/1/index.html',
          css: '/examples/content-button/1/style.css',
        },
        {
          description: 'Make a block of content clickable',
          html: '/examples/content-button/2/index.html',
          css: '/examples/content-button/2/style.css',
        },
        {
          description: 'Use content buttons to lazy load overlays and videos.',
          html: '/examples/content-button/3/index.html',
          css: '/examples/content-button/3/style.css',
        },
      ],
    },
    {
      id: 'content-image',
      title: 'content-image',
      description: 'A basic element that shows lazy loaded images and MP4s as silent looping video.',

      benefits: 'Content image can use use responsive properties to show different src/width/height across breakpoints. In addition, content-image supports showing a silent looping mp4 instead of a GIF when an mp4 is used as the src. Responsive properties for width and height mean being able to better address cumulative layout shift across devices.',

      href: '/elements/content-image/',
      examples: [
        {
          description: 'Standard usage to display an image',
          html: '/examples/content-image/0/index.html',
          css: '/examples/content-image/0/style.css',
        },
        {
          description: 'Display silent looping mp4',
          html: '/examples/content-image/1/index.html',
          css: '/examples/content-image/1/style.css',
        },
        {
          description: 'Using responsive properties to show different content based on viewport.',
          html: '/examples/content-image/2/index.html',
        },
      ]
    },
    {
      id: 'content-video',
      title: 'content-video (alpha)',
      description: 'A basic element for showing videos using VideoJS. Supports YouTube only at the moment.',

      benefits: 'Uses IntersectionObserver to lazy load the YouTube player when user has scrolled the video into view.',

      href: '/elements/content-video/',
      examples: [
        {
          description: 'Display a lazy loaded YouTube video',
          html: '/examples/content-video/0/index.html',
          css: '/examples/content-video/0/style.css',
        },
        // {
        //   description: 'Display a lazy loaded MP4 video with subtitles',
        //   html: '/examples/content-video/1/index.html',
        //   css: '/examples/content-video/1/style.css',
        // },
      ],
    },
  ],
};

export const BlockPageStructureData = {
  title: 'Blocks',
  children: [
    {
      id: 'content-text-block',
      title: 'content-text-block',
      description: 'A text block can be considered as the base text layer. It usually consists of content-line elements or content-spacer formatters. A text block is highly flexible and can be reused in many different places.',

      benefits: 'Text blocks allow you to match the height of a container or set a fixed height and vertical alignment.',
      href: '/blocks/content-text-block/',
      examples: [
        {
          description: 'Basic text block with a few lines of content.',
          html: '/examples/content-text-block/0/index.html'
        },
        {
          description: 'Make the entire block clickable as well as having an inner clickable button, without interfering.',
          html: '/examples/content-text-block/1/index.html',
          css: '/examples/content-text-block/1/style.css'
        },
      ],
    },
    {
      id: 'content-hero-block',
      title: 'content-hero-block',
      description: 'A hero block is one of the two most common content blocks used. A hero block consists of a media layer with a text layer placed on top.',

      benefits: 'A hero block is a very common design that can be used to show different types of content. On small screens, the background slot stacks vertically with the content slot. On larger screens, the content slot overlays the background slot.',
      href: '/blocks/content-hero-block/',
      examples: [
        {
          description: 'Standard image background with text block.',
          html: '/examples/content-hero-block/0/index.html',
          css: '/examples/content-hero-block/0/style.css'
        },
        {
          description: 'Hero with block with text block using content spacer for advanced positioning.',
          html: '/examples/content-hero-block/1/index.html',
          css: '/examples/content-hero-block/1/style.css'
        },
        {
          description: 'Hero block with a button that launches an overlay with video.',
          html: '/examples/content-hero-block/2/index.html',
          css: '/examples/content-hero-block/2/style.css'
        },
      ]
    },
    {
      id: 'content-split-block',
      title: 'content-split-block',
      description: 'A split block is a common layout where two pieces of content are shown side by side. This is similar to a grid layout, but with the ability to reverse the columns per breakpoint. On smaller screens stacks into a tout layout.',
      
      benefits: 'Split blocks can optionally reverse the display of conten, and stack to single column on small screens. This may be useful to reverse the content in situations where the order of HTML output is hard to control, such as a CMS driven template. A "column1" / "column2" slot can be reversed with this component based on the breakpoint.',

      href: '/blocks/content-split-block/',
      examples: [
        {
          description: 'Standard split block that collapses to single column.',
          html: '/examples/content-split-block/0/index.html',
          css: '/examples/content-split-block/0/style.css'
        },
        {
          description: 'Reverse the display on small displays.',
          html: '/examples/content-split-block/1/index.html',
          css: '/examples/content-split-block/1/style.css'
        },
      ],
    },
    {
      id: 'content-tout-block',
      title: 'content-tout-block',
      description: 'A tout block is a vertical structure with a media element and text block. A tout is usually displayed in a grid with other similar touts.',
      href: '/blocks/content-tout-block/',
      examples: [
        {
          description: 'Commonly used configuration of touts in a grid formatter.',
          html: '/examples/content-tout-block/0/index.html',
          css: '/examples/content-tout-block/0/style.css'
        },
        {
          description: 'Touts with hover content that always appear on small screens by default.',
          html: '/examples/content-tout-block/1/index.html',
          css: '/examples/content-tout-block/1/style.css'
        },
      ],
    },
  ],
};

export const ComponentStructureData = {
  title: 'Components',
  children: [
    {
      id: 'content-accordion',
      title: 'content-accordion',
      description: 'An accordion is a collection of collapsible fields. These components are fully keyboard accessible and are a popular design pattern for revealing additional content.',

      accessibility: 'Fully keyboard accessible and built in accordance to the <a href="https://www.w3.org/TR/wai-aria-practices/examples/disclosure/disclosure-faq.html" target="_blank">W3 Disclosure FAQ Example</a>.',

      benefits: 'Manages the toggling of aria-expanded attributes to show and hide the related content.',
      href: '/components/content-accordion/',
      examples: [
        {
          description: 'Basic accordion example with CSS for styling',
          html: '/examples/content-accordion/0/index.html',
          css: '/examples/content-accordion/0/style.css',
        }
      ]
    },
    {
      id: 'content-carousel',
      title: 'content-carousel (alpha)',
      description: 'A content carousel built on SwiperJS.',
      benefits: 'Dynamically lazy loads SwiperJS and all dependencies with the ability to customize swiperOptions via property or JS Event.',
      href: '/components/content-carousel/',
      examples: [
        {
          description: 'Basic carousel example',
          html: '/examples/content-carousel/0/index.html',
          css: '/examples/content-carousel/0/style.css',
        }
      ]
    },
    {
      id: 'content-tabs',
      title: 'content-tabs',
      description: 'Content tabs reveal content and hide other expanded content in the same group.',

      accessibility: 'Properly supports tabgroup focus and keyboard navigation with left and right arrow keys. Built in accordance to the <a href="https://www.w3.org/TR/wai-aria-practices-1.2/examples/tabs/tabs-1/tabs.html" target="_blank">W3 Tabs Example</a>.',
      href: '/components/content-tabs/',
      examples: [
        {
          description: 'Basic tabs example. Accessible and properly implements arrow key navigation for tablist.',
          html: '/examples/content-tabs/0/index.html',
        }
      ]
    },
    {
      id: 'content-overlay',
      title: 'content-overlay',
      description: 'A content overlay is a dialog modal that is triggered to launch. A content overlay can either take over the entire screen or just the module it is contained within.',

      benefits: 'Can display a variety of content, such as revealing content in current position, overtaking another content, or overtaking the screen.',

      accessibility: 'Fully keyboard accessible and maintains focus in full screen mode. All overlays can be closed with the Escape key. Built in accordance to the <a href="https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html" target="_blank">W3 Dialog Modal Example</a>',
      href: '/components/content-overlay/',
      examples: [
        {
          description: 'Use content buttons to lazy load overlays and videos.',
          html: '/examples/content-button/3/index.html',
          css: '/examples/content-button/3/style.css',
        },
      ]
    },
  ],
};

export const FormatterStructureData = {
  title: 'Formatters',
  children: [
    {
      id: 'content-grid-formatter',
      title: 'content-grid-formatter',
      description: 'A grid that supports css grid and flex for displaying rows of content.',

      benefits: 'Quickly swap between grid and flex styles. Customize number of columns per breakpoint using responsive property values.',

      href: '/formatters/content-grid-formatter/',
      examples: [
        {
          description: 'Use content buttons to lazy load overlays and videos.',
          html: '/examples/content-grid-formatter/0/index.html',
        },
        {
          description: 'Using CSS grid with gutters instead of flexbox',
          html: '/examples/content-grid-formatter/1/index.html',
          css: '/examples/content-grid-formatter/1/style.css',
        },
        {
          description: 'Display different sized columns',
          html: '/examples/content-grid-formatter/2/index.html',
          css: '/examples/content-grid-formatter/2/style.css',
        },
      ]
    },
    {
      id: 'content-spacer',
      title: 'content-spacer',
      description: 'A responsive spacing wrapper that can be used anywhere to format content.',
      benefits: 'Useful for adjusting spacing, max width, and horizontal alignment using max width options. All properties support responsive  values, allowing easy and quick design adjustments.',
      href: '/formatters/content-spacer/',
      examples: [
        {
          description: 'Basic usage within a hero block',
          html: '/examples/content-hero-block/0/index.html',
          css: '/examples/content-hero-block/0/style.css'
        },
      ]
    }
  ],
};

export const contentBlockPageStructureData: CategoryInterface[] = [
  ElementPageStructureData,
  BlockPageStructureData,
  ComponentStructureData,
  FormatterStructureData
];

export const allComponentPagePaths: string[] = (function() {
  let returnArray: string[] = [];
  let recursiveFn = (pathsArray: CategoryChildInterface[]) => {
    pathsArray.forEach((childPath: CategoryChildInterface) => {
      if (childPath.href) {
        returnArray.push(childPath.href);
      }
      if (childPath.children) {
        recursiveFn(childPath.children);
      }
    });
  };
  contentBlockPageStructureData.forEach(pathData => {
    if (pathData.href) {
      returnArray.push(pathData.href);
    }
    if (pathData.children) {
      recursiveFn(pathData.children);
    }
  });
  return returnArray;
})();

export const childComponentPagePaths: string[] = (function() {
  let returnArray: string[] = [];
  let existingLinks = allComponentPagePaths;
  existingLinks.forEach(link => {
    if ((link.match(/\//g) || []).length > 1) {
      returnArray.push(link);
    }
  })
  return returnArray;
})();
