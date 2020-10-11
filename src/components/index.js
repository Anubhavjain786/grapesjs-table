import Table from "./Table";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import TableFooter from "./TableFooter";

export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  config.modal = editor.Modal;

  TableFooter(domc, config);
  TableHead(domc, config);
  TableBody(domc, config);
  Table(domc, config);
};
