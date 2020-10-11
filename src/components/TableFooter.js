export default (comps, config) => {
  const type = "tfoot";
  const attrKey = config.attrTableFooter;
  const classKey = config.classTableFooter;

  const defaultComponent = comps.getType("tfoot");
  const tableModel = defaultComponent.model;
  const tableView = defaultComponent.view;

  comps.addType(type, {
    model: tableModel.extend(
      {
        defaults: {
          ...tableModel.prototype.defaults,
          ...config.footerProps,
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
