sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    'sap/ui/core/Fragment',
    'sap/m/Label',
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    'sap/ui/model/type/String',
    'sap/ui/table/Column',
    'sap/ui/table/TreeTable',
    'sap/m/SearchField'
], function (BaseController, JSONModel, formatter, Fragment, Label, Filter, FilterOperator, TypeString, UIColumn, UITree, SearchField) {
    "use strict";

    return BaseController.extend("com.martur.zmbdocumentmanagment.controller.InitialScreen", {

        formatter: formatter,
        onInit: function () {

        },
        _openDialog: function (dialogName) {
            if (!this._oDialog) {
                Fragment.load({
                    name: `com.martur.zmbdocumentmanagment.fragment.${dialogName}`,
                    controller: this
                }).then(
                    function (oDialog) {
                        // connect dialog to the root view of this component (models, lifecycle)
                        this.getView().addDependent(oDialog);
                        oDialog.addStyleClass(
                            this.getOwnerComponent().getContentDensityClass()
                        );
                        oDialog.open(oDialog);
                    }.bind(this));
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
            this._closeDialog()
        },
        _openInputTableValueHelp: function (dialogName) {
            let that = this;
            this._oBasicSearchField = new SearchField();
            if (!this._oDialog) {
                Fragment.load({
                    name: `com.martur.zmbdocumentmanagment.fragment.${dialogName}`,
                    controller: this
                }).then(
                    function (oDialog) {
                        // connect dialog to the root view of this component (models, lifecycle)
                        this.getView().addDependent(oDialog);
                        oDialog.addStyleClass(
                            this.getOwnerComponent().getContentDensityClass()
                        );
                        var oFilterBar = oDialog.getFilterBar(), oColumnProductCode, oColumnProductName;
                        that._oVHD = oDialog;

                        this.getView().addDependent(oDialog);

                        // Set key fields for filtering in the Define Conditions Tab
                        oDialog.setRangeKeyFields([{
                            label: "documentName",
                            key: "key",
                            type: "string",
                            typeInstance: new TypeString({}, {
                                maxLength: 7
                            })
                        }]);

                        // Set Basic Search for FilterBar
                        oFilterBar.setFilterBarExpanded(true);
                        // oFilterBar.setBasicSearch(this._oBasicSearchField);

                        // Trigger filter bar search when the basic search is fired
                        this._oBasicSearchField.attachSearch(function () {
                            oFilterBar.search();
                        });

                        oDialog.getTableAsync().then(function (oTable) {

                            oTable.setModel(this.getModel("jsonModel"));

                            // For Desktop and tabled the default table is sap.ui.table.Table
                            if (oTable.bindRows) {
                                // Bind rows to the ODataModel and add columns
                                oTable.bindAggregation("rows", {
                                    path: "/documentListSet",
                                    events: {
                                        dataReceived: function () {
                                            oDialog.update();
                                        }
                                    }
                                });
                                oColumnProductCode = new UIColumn({ label: new Label({ text: "Döküman No" }), template: new Text({ wrapping: false, text: "{jsonModel>key}" }) });
                                oColumnProductCode.data({
                                    fieldName: "jsonModel>key"
                                });
                                oColumnProductName = new UIColumn({ label: new Label({ text: "Döküman Ad" }), template: new Text({ wrapping: false, text: "{jsonModel>/fileName}" }) });
                                oColumnProductName.data({
                                    fieldName: "jsonModel>fileName"
                                });
                                oTable.addColumn(oColumnProductCode);
                                oTable.addColumn(oColumnProductName);
                            }

                            // For Mobile the default table is sap.m.Table
                            if (oTable.bindItems) {
                                // Bind items to the ODataModel and add columns
                                oTable.bindAggregation("items", {
                                    path: "/documentListSet",
                                    template: new ColumnListItem({
                                        cells: [new Label({ text: "{key}" }), new Label({ text: "{fileName}" })]
                                    }),
                                    events: {
                                        dataReceived: function () {
                                            oDialog.update();
                                        }
                                    }
                                });
                                oTable.addColumn(new MColumn({ header: new Label({ text: "Dosya No" }) }));
                                oTable.addColumn(new MColumn({ header: new Label({ text: "Dosya Adı" }) }));
                            }
                            oDialog.update();
                        }.bind(this));

                        // oDialog.setTokens(this._oMultiInput.getTokens());
                        oDialog.open();
                    }.bind(this));
            }
        }
    });
});
