
const createElement = (tagName, { attrs = {}, children = [] } = {}) => {
  return {
    tagName,
    attrs,
    children,
  };
};

// Content Sectioning Elements
// Content sectioning elements allow you to organize the 
// document content into logical pieces. Use the sectioning 
// elements to create a broad outline for your page 
// content, including header and footer navigation, and 
// heading elements to identify sections of content.

const Address = (attrs = {}, children = []) => {return {tagName: 'address', attrs: attrs, children: children};};
const Article = (attrs = {}, children = []) => {return {tagName: 'article', attrs: attrs, children: children};};
const Aside = (attrs = {}, children = []) => {return {tagName: 'aside', attrs: attrs, children: children};};
const Footer = (attrs = {}, children = []) => {return {tagName: 'footer', attrs: attrs, children: children};};
const Header = (attrs = {}, children = []) => {return {tagName: 'header', attrs: attrs, children: children};};
const H1 = (attrs = {}, children = []) => {return {tagName: 'h1', attrs: attrs, children: children};};
const H2 = (attrs = {}, children = []) => {return {tagName: 'h2', attrs: attrs, children: children};};
const H3 = (attrs = {}, children = []) => {return {tagName: 'h3', attrs: attrs, children: children};};
const H4 = (attrs = {}, children = []) => {return {tagName: 'h4', attrs: attrs, children: children};};
const H5 = (attrs = {}, children = []) => {return {tagName: 'h5', attrs: attrs, children: children};};
const H6 = (attrs = {}, children = []) => {return {tagName: 'h6', attrs: attrs, children: children};};
const Hgroup = (attrs = {}, children = []) => {return {tagName: 'hgroup', attrs: attrs, children: children};};
const Main = (attrs = {}, children = []) => {return {tagName: 'main', attrs: attrs, children: children};};
const Nav = (attrs = {}, children = []) => {return {tagName: 'nav', attrs: attrs, children: children};};
const Section = (attrs = {}, children = []) => {return {tagName: 'section', attrs: attrs, children: children};};


// Text Content Elements
// Use HTML text content elements to organize blocks or 
// sections of content placed between the opening <body> 
// and closing </body> tags. Important for accessibility 
// and SEO, these elements identify the purpose or 
// structure of that content.

const Blockquote = (attrs = {}, children = []) => {return {tagName: 'blockquote', attrs: attrs, children: children};};
const Dd = (attrs = {}, children = []) => {return {tagName: 'dd', attrs: attrs, children: children};};
const Div = (attrs = {}, children = []) => {return {tagName: 'div', attrs: attrs, children: children};};
const Dl = (attrs = {}, children = []) => {return {tagName: 'dl', attrs: attrs, children: children};};
const Dt = (attrs = {}, children = []) => {return {tagName: 'dt', attrs: attrs, children: children};};
const Figcaption = (attrs = {}, children = []) => {return {tagName: 'figcaption', attrs: attrs, children: children};};
const Figure = (attrs = {}, children = []) => {return {tagName: 'figure', attrs: attrs, children: children};};
const Hr = (attrs = {}, children = []) => {return {tagName: 'hr', attrs: attrs, children: children};};
const Li = (attrs = {}, children = []) => {return {tagName: 'li', attrs: attrs, children: children};};
const Ol = (attrs = {}, children = []) => {return {tagName: 'ol', attrs: attrs, children: children};};
const P = (attrs = {}, children = []) => {return {tagName: 'p', attrs: attrs, children: children};};
const Pre = (attrs = {}, children = []) => {return {tagName: 'pre', attrs: attrs, children: children};};
const Ul = (attrs = {}, children = []) => {return {tagName: 'ul', attrs: attrs, children: children};};


// Inline text semantics
// Use the HTML inline text semantic to define the meaning, 
// structure, or style of a word, line, or any arbitrary 
// piece of text.

const A = (attrs = {}, children = []) => {return {tagName: 'a', attrs: attrs, children: children};};
const Abbr = (attrs = {}, children = []) => {return {tagName: 'abbr', attrs: attrs, children: children};};
const B = (attrs = {}, children = []) => {return {tagName: 'b', attrs: attrs, children: children};};
const Bdi = (attrs = {}, children = []) => {return {tagName: 'bdi', attrs: attrs, children: children};};
const Bdo = (attrs = {}, children = []) => {return {tagName: 'bdo', attrs: attrs, children: children};};
const Br = (attrs = {}, children = []) => {return {tagName: 'br', attrs: attrs, children: children};};
const Cite = (attrs = {}, children = []) => {return {tagName: 'cite', attrs: attrs, children: children};};
const Code = (attrs = {}, children = []) => {return {tagName: 'code', attrs: attrs, children: children};};
const Data = (attrs = {}, children = []) => {return {tagName: 'data', attrs: attrs, children: children};};
const Dfn = (attrs = {}, children = []) => {return {tagName: 'dfn', attrs: attrs, children: children};};
const Em = (attrs = {}, children = []) => {return {tagName: 'em', attrs: attrs, children: children};};
const I = (attrs = {}, children = []) => {return {tagName: 'i', attrs: attrs, children: children};};
const Kbd = (attrs = {}, children = []) => {return {tagName: 'kbd', attrs: attrs, children: children};};
const Mark = (attrs = {}, children = []) => {return {tagName: 'mark', attrs: attrs, children: children};};
const Q = (attrs = {}, children = []) => {return {tagName: 'q', attrs: attrs, children: children};};
const Rb = (attrs = {}, children = []) => {return {tagName: 'rb', attrs: attrs, children: children};};
const Rt = (attrs = {}, children = []) => {return {tagName: 'rt', attrs: attrs, children: children};};
const Rtc = (attrs = {}, children = []) => {return {tagName: 'rtc', attrs: attrs, children: children};};
const Ruby = (attrs = {}, children = []) => {return {tagName: 'ruby', attrs: attrs, children: children};};
const S = (attrs = {}, children = []) => {return {tagName: 's', attrs: attrs, children: children};};
const Samp = (attrs = {}, children = []) => {return {tagName: 'samp', attrs: attrs, children: children};};
const Small = (attrs = {}, children = []) => {return {tagName: 'small', attrs: attrs, children: children};};
const Span = (attrs = {}, children = []) => {return {tagName: 'span', attrs: attrs, children: children};};
const Strong = (attrs = {}, children = []) => {return {tagName: 'strong', attrs: attrs, children: children};};
const Sub = (attrs = {}, children = []) => {return {tagName: 'sub', attrs: attrs, children: children};};
const Time = (attrs = {}, children = []) => {return {tagName: 'time', attrs: attrs, children: children};};
const U = (attrs = {}, children = []) => {return {tagName: 'u', attrs: attrs, children: children};};
const Var = (attrs = {}, children = []) => {return {tagName: 'var', attrs: attrs, children: children};};
const Wbr = (attrs = {}, children = []) => {return {tagName: 'wbr', attrs: attrs, children: children};};


// Image and multimedia
// HTML supports various multimedia resources such as 
// images, audio, and video.

const Area = (attrs = {}, children = []) => {return {tagName: 'area', attrs: attrs, children: children};};
const Audio = (attrs = {}, children = []) => {return {tagName: 'audio', attrs: attrs, children: children};};
const Img = (attrs = {}, children = []) => {return {tagName: 'img', attrs: attrs, children: children};};
const Map = (attrs = {}, children = []) => {return {tagName: 'map', attrs: attrs, children: children};};
const Track = (attrs = {}, children = []) => {return {tagName: 'track', attrs: attrs, children: children};};
const Video = (attrs = {}, children = []) => {return {tagName: 'video', attrs: attrs, children: children};};


// Embedded content
// In addition to regular multimedia content, HTML can 
// include a variety of other content, even if it's not 
// always easy to interact with.

const Embed = (attrs = {}, children = []) => {return {tagName: 'embed', attrs: attrs, children: children};};
const Iframe = (attrs = {}, children = []) => {return {tagName: 'iframe', attrs: attrs, children: children};};
const $Object = (attrs = {}, children = []) => {return {tagName: 'object', attrs: attrs, children: children};};
const Param = (attrs = {}, children = []) => {return {tagName: 'param', attrs: attrs, children: children};};
const Picture = (attrs = {}, children = []) => {return {tagName: 'picture', attrs: attrs, children: children};};
const Portal = (attrs = {}, children = []) => {return {tagName: 'portal', attrs: attrs, children: children};};
const Source = (attrs = {}, children = []) => {return {tagName: 'source', attrs: attrs, children: children};};


// SVG and MathML
// You can embed SVG and MathML content directly into HTML 
// documents, using the <svg> and <math> elements.

const Svg = (attrs = {}, children = []) => {return {tagName: 'svg', attrs: attrs, children: children};};
const $Math = (attrs = {}, children = []) => {return {tagName: 'math', attrs: attrs, children: children};};


// Scripting
// In order to create dynamic content and Web applications, 
// HTML supports the use of scripting languages, most 
// prominently JavaScript. Certain elements support this 
// capability.

const Canvas = (attrs = {}, children = []) => {return {tagName: 'canvas', attrs: attrs, children: children};};
const Noscript = (attrs = {}, children = []) => {return {tagName: 'noscript', attrs: attrs, children: children};};
const Script = (attrs = {}, children = []) => {return {tagName: 'script', attrs: attrs, children: children};};


// Demarcating edits
// These elements let you provide indications that specific 
// parts of the text have been altered.

const Del = (attrs = {}, children = []) => {return {tagName: 'del', attrs: attrs, children: children};};
const Ins = (attrs = {}, children = []) => {return {tagName: 'ins', attrs: attrs, children: children};};


// Table content
// The elements here are used to create and handle tabular 
// data.

const Caption = (attrs = {}, children = []) => {return {tagName: 'caption', attrs: attrs, children: children};};
const Col = (attrs = {}, children = []) => {return {tagName: 'col', attrs: attrs, children: children};};
const Colgroup = (attrs = {}, children = []) => {return {tagName: 'colgroup', attrs: attrs, children: children};};
const Table = (attrs = {}, children = []) => {return {tagName: 'table', attrs: attrs, children: children};};
const Tbody = (attrs = {}, children = []) => {return {tagName: 'tbody', attrs: attrs, children: children};};
const Td = (attrs = {}, children = []) => {return {tagName: 'td', attrs: attrs, children: children};};
const Tfoot = (attrs = {}, children = []) => {return {tagName: 'tfoot', attrs: attrs, children: children};};
const Th = (attrs = {}, children = []) => {return {tagName: 'th', attrs: attrs, children: children};};
const Thead = (attrs = {}, children = []) => {return {tagName: 'thead', attrs: attrs, children: children};};
const Tr = (attrs = {}, children = []) => {return {tagName: 'tr', attrs: attrs, children: children};};


// Forms
// HTML provides a number of elements which can be used together to create forms which the user can fill out and submit to the Web site or application. There's a great deal of further information about this available in the HTML forms guide.

const Button = (attrs = {}, children = []) => {return {tagName: 'button', attrs: attrs, children: children};};
const Datalist = (attrs = {}, children = []) => {return {tagName: 'datalist', attrs: attrs, children: children};};
const Fieldset = (attrs = {}, children = []) => {return {tagName: 'fieldset', attrs: attrs, children: children};};
const Form = (attrs = {}, children = []) => {return {tagName: 'form', attrs: attrs, children: children};};
const Input = (attrs = {}, children = []) => {return {tagName: 'input', attrs: attrs, children: children};};
const Label = (attrs = {}, children = []) => {return {tagName: 'label', attrs: attrs, children: children};};
const Legend = (attrs = {}, children = []) => {return {tagName: 'legend', attrs: attrs, children: children};};
const Meter = (attrs = {}, children = []) => {return {tagName: 'meter', attrs: attrs, children: children};};
const Optgroup = (attrs = {}, children = []) => {return {tagName: 'optgroup', attrs: attrs, children: children};};
const Option = (attrs = {}, children = []) => {return {tagName: 'option', attrs: attrs, children: children};};
const Output = (attrs = {}, children = []) => {return {tagName: 'output', attrs: attrs, children: children};};
const Progress = (attrs = {}, children = []) => {return {tagName: 'progress', attrs: attrs, children: children};};
const Select = (attrs = {}, children = []) => {return {tagName: 'select', attrs: attrs, children: children};};
const Textarea = (attrs = {}, children = []) => {return {tagName: 'textarea', attrs: attrs, children: children};};


// Interactive elements
// HTML offers a selection of elements which help to create 
// interactive user interface objects.

const Details = (attrs = {}, children = []) => {return {tagName: 'details', attrs: attrs, children: children};};
const Dialog = (attrs = {}, children = []) => {return {tagName: 'dialog', attrs: attrs, children: children};};
const Menu = (attrs = {}, children = []) => {return {tagName: 'menu', attrs: attrs, children: children};};
const Summary = (attrs = {}, children = []) => {return {tagName: 'summary', attrs: attrs, children: children};};


// Web Components
// Web Components is an HTML-related technology which makes 
// it possible to, essentially, create and use custom 
// elements as if it were regular HTML. In addition, you can 
// create custom versions of standard HTML elements.

const Slot = (attrs = {}, children = []) => {return {tagName: 'slot', attrs: attrs, children: children};};
const Template = (attrs = {}, children = []) => {return {tagName: 'template', attrs: attrs, children: children};};


// Custom Elements
// Custom Elements are pseudo-element that are used to 
// handle special events like route navigation, conditional 
// rendering and iterational rendering

const Route = (attrs = {}, children = []) => {return {tagName: 'route', attrs: attrs, children: children};};
const Redirect = (attrs = {}, children = []) => {return {tagName: 'redirect', attrs: attrs, children: children};};
const RouteForward = (attrs = {}, children = []) => {return {tagName: 'routeForward', attrs: attrs, children: children};};
const RouteBack = (attrs = {}, children = []) => {return {tagName: 'routeBack', attrs: attrs, children: children};};
const Loop = (attrs = {}, children = []) => {return {tagName: 'loop', attrs: attrs, children: children};};
const Cond = (attrs = {}, children = []) => {return {tagName: 'cond', attrs: attrs, children: children};};

// query selector
const $ = (selector) => {
  return document.querySelectorAll(selector)
};
