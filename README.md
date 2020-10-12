# grapesjs-table

<!-- [START badges] -->
<p align="center">
  <a href="https://www.npmjs.com/package/grapesjs-table"><img src="https://img.shields.io/npm/v/grapesjs-table.svg" alt="NPM version" /></a>
  <a href="https://www.npmjs.com/package/grapesjs-table"><img src="https://img.shields.io/npm/dw/grapesjs-table.svg" alt="NPM downloads" /></a>
  <a href="https://travis-ci.com/github/Anubhavjain786/grapesjs-table"><img src="https://api.travis-ci.com/Anubhavjain786/grapesjs-table.svg?branch=master&status=passed" alt="Travis build" /></a>
  <a href="https://discord.gg/s2jebu"><img src="https://img.shields.io/badge/chat-discord-7289da.svg" alt="Chat Discord" /></a>
  <a href="https://github.com/Anubhavjain786/grapesjs-table/issues"><img src="https://img.shields.io/github/issues/Anubhavjain786/grapesjs-table.svg" alt="GitHub issues" /></a>
  <a href="https://david-dm.org/Anubhavjain786/grapesjs-table"><img src="https://img.shields.io/david/Anubhavjain786/grapesjs-table.svg" alt="dependencies status"></a>
  <a href="https://david-dm.org/Anubhavjain786/grapesjs-table?type=dev"><img src="https://david-dm.org/Anubhavjain786/grapesjs-table/dev-status.svg" alt="devDependencies status" /></a>
</p>

<!-- [END badges] -->

[DEMO](http://grapesjs.com/demo.html)

<!-- > **Provide a live demo of your plugin**
> For a better user engagement create a simple live demo by using services like [JSFiddle](https://jsfiddle.net) [CodeSandbox](https://codesandbox.io) [CodePen](https://codepen.io) and link it here in your README (attaching a screenshot/gif will also be a plus).
> To help you in this process here below you will find the necessary HTML/CSS/JS, so it just a matter of copy-pasting on some of those services. After that delete this part and update the link above -->

### Requirements

```
- GrapesJS v0.13.8 or higher
```

### HTML

```html
<link
  href="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
  rel="stylesheet"
/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="https://unpkg.com/grapesjs-table"></script>

<div id="gjs"></div>
```

### JS

```js
const editor = grapesjs.init({
  container: "#gjs",
  height: "100%",
  fromElement: true,
  storageManager: false,
  plugins: ["grapesjs-table"],
});
```

### CSS

```css
body,
html {
  margin: 0;
  height: 100%;
}
```

## Summary

- Plugin name: `grapesjs-table`
- Components
  - `table` - Main table component
  - `tablebody` - Component which contains table body
  - `tableFooter` - Component which contains table footer
  - `tableHead` - Component which contains table header
- Blocks
  - `table`

## Options

| Option             | Description                                                                                      | Default                            |
| ------------------ | ------------------------------------------------------------------------------------------------ | ---------------------------------- |
| `tableBlock`       | Object to extend the default table block, eg. `{ label: 'table', attributes: { ... } }`          |
| `tableProps`       | Object to extend the default table properties, eg. `{ name: 'My table', droppable: false, ... }` | `{}`                               |
| `bodyProps`        | Object to extend the default table body properties                                               | `{}`                               |
| `headProps`        | Object to extend the default table head properties                                               | `{}`                               |
| `footerProps`      | Object to extend the default table footer properties                                             | `{}`                               |
| `attrTable`        | Table attribute identifier (main component)                                                      | `data-table`                       |
| `attrTableBody`    | Table body attribute identifier                                                                  | `data-tbody`                       |
| `attrTableFooter`  | Table footer attribute identifier                                                                | `data-tfoot`                       |
| `attrTableHeader`  | Table Head attribute identifier                                                                  | `data-thead`                       |
| `classTable`       | Default class to use on table                                                                    | `table`                            |
| `classTableBody`   | Default class to use on table body                                                               | `table-body`                       |
| `classTableFooter` | Default class to use on table body footer                                                        | `table-footer`                     |
| `classTableHeader` | Default class to use on table body header                                                        | `table-header`                     |
| `style`            | Default style for table                                                                          | ` table { ....` (check the source) |

## Download

- CDN
  - `https://unpkg.com/grapesjs-table`
- NPM
  - `npm i grapesjs-table`
- GIT
  - `git clone https://github.com/anubhavjain786/grapesjs-table.git`

## Usage

Directly in the browser

```html
<link
  href="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
  rel="stylesheet"
/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-table.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
    container: "#gjs",
    // ...
    plugins: ["grapesjs-table"],
    pluginsOpts: {
      "grapesjs-table": {
        /* options */
      },
    },
  });
</script>
```

Modern javascript

```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-table';
import 'grapesjs/dist/css/grapes.min.css';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
});
```

## Development

Clone the repository

```sh
$ git clone https://github.com/anubhavjain786/grapesjs-table.git
$ cd grapesjs-table
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build the source

```sh
$ npm run build
```

## License

MIT
