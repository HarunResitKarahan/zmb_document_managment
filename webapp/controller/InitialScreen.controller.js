sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    'sap/ui/core/Fragment',
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (BaseController, JSONModel, formatter, Fragment, Filter, FilterOperator) {
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
        },
        _documentSortConfirm: function (oEvent) {
            this._closeDialog()
        }
    });
});
