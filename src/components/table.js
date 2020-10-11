export default (comps, { modal, ...config }) => {
  const type = "table";
  const attrKey = config.attrTable;
  const classKey = config.classTable;

  const defaultComponent = comps.getType("table");
  const tableModel = defaultComponent.model;
  const tableView = defaultComponent.view;
  const tableProps = config.tableProps || {};

  const components = [];

  components.push({ type: "tbody", ...tableProps });

  comps.addType(type, {
    model: tableModel.extend(
      {
        defaults: {
          ...tableModel.prototype.defaults,
          components,
          traits: [
            {
              type: "number",
              label: "Number of Rows",
              name: "rows",
              changeProp: 1,
            },
            {
              type: "number",
              label: "Number of Columns",
              name: "columns",
              changeProp: 1,
            },
          ],

          ...tableProps,
        },

        init() {
          const attrs = this.getAttributes();
          attrs[attrKey] = 1;
          this.setAttributes(attrs);
          classKey && this.addClass(classKey);
          this.listenTo(this, "change:rows", this.changeDimensions);
          this.listenTo(this, "change:columns", this.changeDimensions);
        },

        changeDimensions() {
          const addRows = this.get("rows");
          const addColumns = this.get("columns");
          this.components([
            { type: "tbody", rows: addRows, columns: addColumns },
          ]);
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

    view: tableView.extend({
      init() {
        this.listenTo(this.model, "active", this.openModal);
      },

      getRowContainerForModal(setRows) {
        const containerRows = document.createElement("div");
        const labelRows = document.createElement("label");
        labelRows.innerHTML = "rows&nbsp;";
        containerRows.appendChild(labelRows);

        const inputRows = document.createElement("input");
        inputRows.setAttribute("type", "number");
        inputRows.setAttribute("value", setRows);
        inputRows.onchange = () => {
          setRows = inputRows.value;
        };
        containerRows.appendChild(inputRows);
        return containerRows;
      },

      getColumnContainerForModal(setColumns) {
        const containerColumns = document.createElement("div");

        const labelColumns = document.createElement("label");
        labelColumns.innerHTML = "columns&nbsp;";
        containerColumns.appendChild(labelColumns);

        const inputColumns = document.createElement("input");
        inputColumns.setAttribute("type", "number");
        inputColumns.setAttribute("value", setColumns);
        inputColumns.onchange = () => {
          setColumns = inputColumns.value;
        };
        containerColumns.appendChild(inputColumns);
        return containerColumns;
      },

      getBtnContainerForModal(setRows, setColumns) {
        const containerBtn = document.createElement("div");
        const btn = document.createElement("button");
        btn.innerHTML = "Create Table";
        btn.onclick = () => {
          this.model.set("rows", setRows);
          this.model.set("columns", setColumns);
          modal.close();
        };
        containerBtn.appendChild(btn);
        return containerBtn;
      },

      openModal() {
        let setRows = tableProps.rows;
        let setColumns = tableProps.columns;

        const divContainer = document.createElement("div");
        divContainer.appendChild(this.getRowContainerForModal(setRows));
        divContainer.appendChild(this.getColumnContainerForModal(setColumns));
        divContainer.appendChild(
          this.getBtnContainerForModal(setRows, setColumns)
        );

        modal.setTitle("New Table").setContent(divContainer).open();
      },
    }),
  });
};
