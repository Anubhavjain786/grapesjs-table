export default (editor, opts = {}) => {
  const bm = editor.BlockManager;
  const { tableBlock } = opts;
  const style = opts.style;

  const type = "table";

  const content = `<div data-gjs-type="${type}"></div>
    ${style ? `<style>${style}</style>` : ""}`;

  tableBlock &&
    bm.add("table", {
      label: "Table",
      attributes: { class: "fa fa-columns" },
      category: "Tables",
      activate: 1,
      content,
      // : {
      //   type: "table",
      //   activeOnRender: true,
      // },
      ...tableBlock,
    });
};
