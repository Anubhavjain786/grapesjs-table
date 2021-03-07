export default (comps, { modal, ...config }) => {
  const type = "table";
  const attrKey = config.attrTable;
  const classKey = config.classTable;

  const defaultComponent = comps.getType("table");
  const tableModel = defaultComponent.model;
  const tableView = defaultComponent.view;
  const tableProps = config.tableProps || {};

  const components = [];

  if (tableProps.header) {
    components.push({ type: "thead", row: 1, columns: tableProps.columns });
  }
  components.push({ type: "tbody", ...tableProps });

  if (tableProps.footer) {
    components.push({ type: "tfoot", row: 1, columns: tableProps.columns });
  }

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
            {
              type: "checkbox",
              label: "Table Header",
              name: "header",
              valueTrue: true,
              valueFalse: false,
              changeProp: 1,
            },
            {
              type: "checkbox",
              label: "Table Footer",
              name: "footer",
              valueTrue: true,
              valueFalse: false,
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
          this.listenTo(this, "change:header", this.changeDimensions);
          this.listenTo(this, "change:footer", this.changeDimensions);
        },

        changeDimensions() {
          const addRows = this.get("rows");
          const addColumns = this.get("columns");
          const header = this.get("header");
          const footer = this.get("footer");

          const components = [];

          if (header) {
            components.push({
              type: "thead",
              rows: 1,
              columns: addColumns,
            });
          }
          components.push({
            type: "tbody",
            rows: addRows,
            columns: addColumns,
          });

          if (footer) {
            components.push({
              type: "tfoot",
              rows: 1,
              columns: addColumns,
            });
          }
          this.components(components);
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

      openModal() {
        let setRows = tableProps.rows;
        let setColumns = tableProps.columns;
        const divContainer = document.createElement("div");

        const containerRows = document.createElement("div");
        containerRows.className = "modal-table-row";
        const labelRows = document.createElement("label");
        labelRows.innerHTML = "No. of Rows";
        containerRows.appendChild(labelRows);

        const inputRows = document.createElement("input");
        inputRows.setAttribute("type", "number");
        inputRows.setAttribute("value", setRows);
        inputRows.onchange = () => {
          setRows = inputRows.value;
        };
        containerRows.appendChild(inputRows);
        divContainer.appendChild(containerRows);

        const containerColumns = document.createElement("div");
        containerColumns.className = "modal-table-column";
        const labelColumns = document.createElement("label");
        labelColumns.innerHTML = "No. of Columns";
        containerColumns.appendChild(labelColumns);

        const inputColumns = document.createElement("input");
        inputColumns.setAttribute("type", "number");
        inputColumns.setAttribute("value", setColumns);
        inputColumns.onchange = () => {
          setColumns = inputColumns.value;
        };
        containerColumns.appendChild(inputColumns);
        divContainer.appendChild(containerColumns);

        const containerBtn = document.createElement("div");
        containerBtn.className = "modal-create-btn";
        const btn = document.createElement("button");
        btn.setAttribute("type", "button");
        btn.innerHTML = "Create Table";
        btn.onclick = () => {
          this.model.set("rows", setRows);
          this.model.set("columns", setColumns);
          modal.close();
        };
        containerBtn.appendChild(btn);

        divContainer.appendChild(containerBtn);

        const style = document.createElement("style");
        style.innerHTML = `
        .gjs-mdl-dialog {
          width: 35%;
        }
        .modal-table-row, .modal-table-column {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 15px;
        }
        .modal-table-row label, .modal-table-column label {
          font-size: 14px;
          flex: 1;
        }
        .modal-table-row input, .modal-table-column input {
          flex: 1;
          height: 35px;
          border-radius: 10px;
          border: 1px solid #f5f5f5;
          padding: 2px 16px;
          color: #333333;
        }
        .modal-table-row input, .modal-table-column input:focus {
          outline: none
        }
        .modal-create-btn {
          text-align: right;
        }
        .modal-create-btn button {
          height: 35px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          padding: 0 10px;
          color: #333333;
        }
        .modal-create-btn button:focus {
          outline: none
        }
        `;
        divContainer.appendChild(style);

        modal.setTitle("Add a New Table").setContent(divContainer).open();
      },
    }),
  });
};
