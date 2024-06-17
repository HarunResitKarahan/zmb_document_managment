sap.ui.define(
  [
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/core/Fragment",
    "sap/m/Label",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/type/String",
    "sap/ui/table/Column",
    "sap/ui/table/TreeTable",
    "sap/m/ColumnListItem",
    "sap/m/SearchField",
    "sap/m/Column",
    "sap/m/Text",
  ],
  function (
    BaseController,
    JSONModel,
    formatter,
    Fragment,
    Label,
    Filter,
    FilterOperator,
    TypeString,
    UIColumn,
    UITree,
    ColumnListItem,
    SearchField,
    MColumn,
    Text
  ) {
    "use strict";

    return BaseController.extend(
      "com.martur.zmbdocumentmanagment.controller.InitialScreen",
      {
        formatter: formatter,
        onInit: function () {},
        _openDialog: function (dialogName) {
          if (!this._oDialog) {
            Fragment.load({
              name: `com.martur.zmbdocumentmanagment.fragment.${dialogName}`,
              controller: this,
            }).then(
              function (oDialog) {
                // connect dialog to the root view of this component (models, lifecycle)
                this.getView().addDependent(oDialog);
                oDialog.addStyleClass(
                  this.getOwnerComponent().getContentDensityClass()
                );
                oDialog.open(oDialog);
              }.bind(this)
            );
          }
        },
        _closeDialog: function () {
          // this._oDialog.close();
          // this._oDialog.destroy();
          this._oDialog = undefined;
          this._oVHD.close();
          this._oVHD.destroy();
          this._oVHD = undefined;
        },
        _documentSortConfirm: function (oEvent) {
          this._closeDialog();
        },
        _openInputTableValueHelp: function (dialogName) {
          let that = this;
          this._oBasicSearchField = new SearchField();
          var aRows = this.getModel("jsonModel").getData().documentListSet;
          if (!this._oDialog) {
            Fragment.load({
              name: `com.martur.zmbdocumentmanagment.fragment.${dialogName}`,
              controller: this,
            }).then(
              function (oDialog) {
                // connect dialog to the root view of this component (models, lifecycle)
                this.getView().addDependent(oDialog);
                oDialog.addStyleClass(
                  this.getOwnerComponent().getContentDensityClass()
                );
                var oFilterBar = oDialog.getFilterBar(),
                  oColumnDocumentCode,
                  oColumnDocumentName;
                that._oVHD = oDialog;

                this.getView().addDependent(oDialog);

                // Set Basic Search for FilterBar
                oFilterBar.setFilterBarExpanded(false);
                oFilterBar.setBasicSearch(this._oBasicSearchField);

                // Trigger filter bar search when the basic search is fired
                this._oBasicSearchField.attachSearch(function () {
                  oFilterBar.search();
                });

                oDialog.getTableAsync().then(
                  function (oTable) {
                    oTable.setModel(this.getModel("jsonModel"));

                    // For Desktop and tabled the default table is sap.ui.table.Table
                    if (oTable.bindRows) {
                      // Bind rows to the ODataModel and add columns
                      oTable.bindAggregation("rows", {
                        path: "/documentListSet",
                        events: {
                          dataReceived: function () {
                            oDialog.update();
                          },
                        },
                      });
                      oColumnDocumentCode = new UIColumn({
                        width: "8rem",
                        label: new Label({ text: "Döküman No" }),
                        template: new Text({
                          wrapping: false,
                          text: `{key}`,
                        }),
                      });
                      oColumnDocumentName = new UIColumn({
                        label: new Label({ text: "Döküman Ad" }),
                        template: new Text({
                          wrapping: false,
                          text: `{fileName}`,
                        }),
                      });
                      oTable.addColumn(oColumnDocumentCode);
                      oTable.addColumn(oColumnDocumentName);
                    }

                    // For Mobile the default table is sap.m.Table
                    if (oTable.bindItems) {
                      // Bind items to the ODataModel and add columns
                      oTable.bindAggregation("items", {
                        path: "/documentListSet",
                        template: new ColumnListItem({
                          cells: [
                            new Label({ text: "{key}" }),
                            new Label({ text: "{fileName}" }),
                          ],
                        }),
                        events: {
                          dataReceived: function () {
                            oDialog.update();
                          },
                        },
                      });
                      oTable.addColumn(
                        new MColumn({ header: new Label({ text: "Dosya No" }) })
                      );
                      oTable.addColumn(
                        new MColumn({
                          header: new Label({ text: "Dosya Adı" }),
                        })
                      );
                    }
                    oDialog.update();
                  }.bind(this)
                );

                // oDialog.setTokens(this._oMultiInput.getTokens());
                oDialog.open();
              }.bind(this)
            );
          }
        },
        onDocumentNameValueHelpOkPress: function (oEvent) {
          var aTokens = oEvent.getParameter("tokens");
          if (aTokens.length > 0) {
            this.getModel("jsonModel").setProperty(
              "/filterInputValues/documentName",
              aTokens[0].getText()
            );
          }
          this._closeDialog();
        },
        onDocumentNameFilterBarSearch: function (oEvent) {
          var sSearchQuery = this._oBasicSearchField.getValue(),
            aSelectionSet = oEvent.getParameter("selectionSet");

          var aFilters =
            aSelectionSet &&
            aSelectionSet.reduce(function (aResult, oControl) {
              if (oControl.getValue()) {
                aResult.push(
                  new Filter({
                    path: oControl.getName(),
                    operator: FilterOperator.Contains,
                    value1: oControl.getValue(),
                  })
                );
              }

              return aResult;
            }, []);

          aFilters.push(
            new Filter({
              filters: [
                // new Filter({ path: "key", operator: FilterOperator.Contains, value1: sSearchQuery }),
                new Filter({
                  path: "fileName",
                  operator: FilterOperator.Contains,
                  value1: sSearchQuery,
                }),
              ],
              and: false,
            })
          );

          this._filterTable(
            new Filter({
              filters: aFilters,
              and: true,
            })
          );
        },
        _filterTable: function (oFilter) {
          var oVHD = this._oVHD;

          oVHD.getTableAsync().then(function (oTable) {
            if (oTable.bindRows) {
              oTable.getBinding("rows").filter(oFilter);
            }
            if (oTable.bindItems) {
              oTable.getBinding("items").filter(oFilter);
            }

            // This method must be called after binding update of the table.
            oVHD.update();
          });
        },
        onTreeTableBasicSearch: function (oEvent) {
          let table = this.getView().byId("idDocumentTreeTable"),
            oBinding = table.getBinding("rows"),
            oFilter = [],
            inputValue = oEvent.getSource().getValue();
          if (inputValue !== "") {
            oFilter = new Filter(
              [
                new Filter("fileName", FilterOperator.Contains, inputValue),
                new Filter("uploadedBy", FilterOperator.Contains, inputValue),
              ],
              false
            );
            oBinding.filter([oFilter]);
          } else {
            oBinding.filter([oFilter]);
          }
        },
      }
    );
  }
);
