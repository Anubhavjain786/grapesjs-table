import loadComponents from "./components";
import loadBlocks from "./blocks";

const attrTable = "data-table";
const attrTableBody = "data-tbody";
const attrTableFooter = "data-tfoot";
const attrTableHeader = "data-thead";

export default grapesjs.plugins.add("grapesjs-table", (editor, opts = {}) => {
  const options = {
    ...{
      // Object to extend the default table block, eg. `{ label: 'table', attributes: { ... } }`
      // Pass a falsy value to avoid adding the block
      tableBlock: {},

      // Object to extend the default accordions properties, eg. `{ name: 'Table', droppable: false,row: 3,columns: 3, ... }`
      tableProps: {
        rows: 3,
        columns: 3,
        header: true,
        footer: true,
      },

      // Object to extend the default table body properties, eg. `{ name: 'tbody', ... }`
      bodyProps: {},

      // Object to extend the default table head properties
      headProps: {},

      // Object to extend the default table footer properties
      footerProps: {},

      // Table attribute identifier (main component)
      attrTable,

      // Table Body attribute identifier
      attrTableBody,

      // Table Footer content attribute identifier
      attrTableFooter,

      // Table Header container attribute identifier
      attrTableHeader,

      // Default class to use on table
      classTable: "table",

      // Default class to use on table body
      classTableBody: "table-body",

      // Default class to use on table footer
      classTableFooter: "table-footer",

      // Default class to use on table header
      classTableHeader: "table-header",

      style: `
      .table {
        background-color :#eee;
        text-decoration: none;
        color: inherit;
        padding: 7px 14px;
        transition: opacity 0.3s;
        display: block;
        border-radius: 3px;
        margin-right: 10px;
        height:15vw;
        margin-top: 5px;
        width: 100%;
      }
      .table-body {
        display: block;
        height:100%;
        width: 100%;
      }
      .table-footer {
        display: block;
        width: 100%;
      }
      .table-header {
        display: block;
        width: 100%;
      }
      .row {
         display: block;
        height:100%;
        width: 100%;
      }
      .cell {
         display: block;
        height:100%;
        width: auto;
      }
    `,
    },
    ...opts,
  };

  // Add components
  loadComponents(editor, options);

  // Add blocks
  loadBlocks(editor, options);
});
