export default (comps, config) => {
  const type = "tbody";
  const attrKey = config.attrTableBody;
  const classKey = config.classTableBody;

  const defaultComponent = comps.getType("tbody");
  const tableModel = defaultComponent.model;
  const tableView = defaultComponent.view;

  comps.addType(type, {
    model: tableModel.extend(
      {
        defaults: {
          ...tableModel.prototype.defaults,
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
