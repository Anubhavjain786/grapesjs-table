export default (comps, config) => {
  const type = "thead";
  const attrKey = config.attrTableHeader;
  const classKey = config.classTableHeader;

  const defaultComponent = comps.getType("thead");
  const tableModel = defaultComponent.model;
  const tableView = defaultComponent.view;

  comps.addType(type, {
    model: tableModel.extend(
      {
        defaults: {
          ...tableModel.prototype.defaults,
          ...config.headProps,
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
