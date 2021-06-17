export default (comps, config) => {
  const type = "cell";
  const attrKey = config.attrTableCell;
  const classKey = config.classTableCell;

  const defaultComponent = comps.getType("cell");
  const tableModel = defaultComponent.model;
  const tableView = defaultComponent.view;

  comps.addType(type, {
    model: tableModel.extend(
      {
        defaults: {
          ...tableModel.prototype.defaults,
          editable: true,
          components: [
            {
              tagName: "span",
              type: "text",
              attributes: { title: "cell" },
              components: [
                {
                  type: "textnode",
                  content: "Cell",
                },
              ],
            },
          ],
          ...config.bodyProps,
        },
        init() {
          const attrs = this.getAttributes();
          attrs[attrKey] = 1;
          this.setAttributes(attrs);
          classKey && this.addClass(classKey);
        },
      },
      {
        isComponent(el) {
          if (el.hasAttribute && el.hasAttribute(attrKey)) {
            return { type };
          }
        },
      }
    ),
    view: tableView.extend({}),
  });
};
