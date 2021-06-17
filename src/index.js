import loadComponents from "./components";
import loadBlocks from "./blocks";

const attrTable = "data-table";
const attrTableBody = "data-tbody";
const attrTableFooter = "data-tfoot";
const attrTableHeader = "data-thead";
const attrTableCell = "data-cell";

export default (editor, opts = {}) => {
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

      // Table Cell container attribute identifier
      attrTableCell,

      // Default class to use on table
      classTable: "table",

      // Default class to use on table body
      classTableBody: "table-body",

      // Default class to use on table footer
      classTableFooter: "table-footer",

      // Default class to use on table header
      classTableHeader: "table-header",

      // Default class to use on table header
      classTableCell: "table-cell",

      style: `
      table {
        width: 100%;
        border: 1px solid #cccccc;
        margin-bottom: 20px;
      }
      table td {
        padding: 8px;
        border: 1px solid #cccccc;
      }
    `,
    },
    ...opts,
  };

  // Add components
  loadComponents(editor, options);

  // Add blocks
  loadBlocks(editor, options);
};
