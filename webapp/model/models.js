sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
],
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
            },
            createJsonModel: function () {
                let today = new Date();
                var oModel = new JSONModel({
                    busy: true,
                    today: `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`,
                    todayJS: today,
                    documentNameSearchHelpSet: this._filterInputDocumentNameSearchHelpData(),
                    documentListSet: this._documentsListSet(),
                });
                return oModel;
            },
            _filterInputDocumentNameSearchHelpData: function () {
                return [
                    {
                        key: "1",
                        value: ".doc"
                    },
                    {
                        key: "2",
                        value: ".docx"
                    },
                    {
                        key: "3",
                        value: ".pdf"
                    },
                    {
                        key: "4",
                        value: ".txt"
                    },
                    {
                        key: "5",
                        value: ".rtf"
                    },
                    {
                        key: "6",
                        value: ".pptx"
                    },
                    {
                        key: "7",
                        value: ".xls"
                    },
                    {
                        key: "8",
                        value: ".xlsx"
                    },
                    {
                        key: "9",
                        value: ".csv"
                    },
                ]
            },
            _documentsListSet: function () {
                return [
                    {
                        key: "1",
                        fileName: "HR Dosya 1",
                        iconSrc: 'sap-icon://open-folder',
                        uploadedBy: "HAKARAHAN",
                        nodes: [{
                            key: "2",
                            fileName: "HR Alt Dosya 1",
                            iconSrc: 'sap-icon://open-folder',
                            fileType: ".xls",
                            uploadedBy: "HAKARAHAN",
                            nodes: [
                                {
                                    key: "2",
                                    fileName: "HR Alt Döküman 1-1",
                                    iconSrc: 'sap-icon://excel-attachment',
                                    fileType: ".xls",
                                    uploadedBy: "HAKARAHAN",
                                    status: '01'
                                }
                            ],
                            status: '01'
                        }, {
                            key: "2",
                            fileName: "HR Alt Döküman 1",
                            iconSrc: 'sap-icon://excel-attachment',
                            fileType: ".xls",
                            uploadedBy: "HAKARAHAN",
                            status: '01'
                        }]
                    },
                    {
                        key: "1",
                        fileName: "HR Dosya 2",
                        iconSrc: 'sap-icon://open-folder',
                        uploadedBy: "HAKARAHAN",
                        nodes: [{
                            key: "2",
                            fileName: "HR Alt Dosya 2",
                            iconSrc: 'sap-icon://open-folder',
                            uploadedBy: "HAKARAHAN",
                            nodes: [
                                {
                                    key: "2",
                                    fileName: "HR Alt Döküman 2-2",
                                    iconSrc: 'sap-icon://excel-attachment',
                                    fileType: ".xls",
                                    uploadedBy: "HAKARAHAN",
                                    status: '02'
                                }
                            ]
                        }, {
                            key: "2",
                            fileName: "HR Alt Döküman 2",
                            iconSrc: 'sap-icon://excel-attachment',
                            fileType: ".xls",
                            uploadedBy: "HAKARAHAN",
                            status: '03'
                        }]
                    },
                    {
                        key: "3",
                        fileName: "HR Döküman 3",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '03'
                    },
                    {
                        key: "4",
                        fileName: "HR Döküman 4",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '03'
                    },
                    {
                        key: "1",
                        fileName: "HR Döküman 1",
                        iconSrc: 'sap-icon://pdf-attachment',
                        fileType: ".pdf",
                        uploadedBy: "HAKARAHAN",
                        status: '03'
                    },
                    {
                        key: "2",
                        fileName: "HR Döküman 2",
                        iconSrc: 'sap-icon://excel-attachment',
                        fileType: ".xls",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "3",
                        fileName: "HR Döküman 3",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "4",
                        fileName: "HR Döküman 4",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    }, {
                        key: "1",
                        fileName: "HR Döküman 1",
                        iconSrc: 'sap-icon://pdf-attachment',
                        fileType: ".pdf",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "2",
                        fileName: "HR Döküman 2",
                        iconSrc: 'sap-icon://excel-attachment',
                        fileType: ".xls",
                        uploadedBy: "HAKARAHAN",
                        status: '01'
                    },
                    {
                        key: "3",
                        fileName: "HR Döküman 3",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '01'
                    },
                    {
                        key: "4",
                        fileName: "HR Döküman 4",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '01'
                    }, {
                        key: "1",
                        fileName: "HR Döküman 1",
                        iconSrc: 'sap-icon://pdf-attachment',
                        fileType: ".pdf",
                        uploadedBy: "HAKARAHAN",
                        status: '01'
                    },
                    {
                        key: "2",
                        fileName: "HR Döküman 2",
                        iconSrc: 'sap-icon://excel-attachment',
                        fileType: ".xls",
                        uploadedBy: "HAKARAHAN",
                        status: '01'
                    },
                    {
                        key: "3",
                        fileName: "HR Döküman 3",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '01'
                    },
                    {
                        key: "4",
                        fileName: "HR Döküman 4",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    }, {
                        key: "1",
                        fileName: "HR Döküman 1",
                        iconSrc: 'sap-icon://pdf-attachment',
                        fileType: ".pdf",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "2",
                        fileName: "HR Döküman 2",
                        iconSrc: 'sap-icon://excel-attachment',
                        fileType: ".xls",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "3",
                        fileName: "HR Döküman 3",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "4",
                        fileName: "HR Döküman 4",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    }, {
                        key: "1",
                        fileName: "HR Döküman 1",
                        iconSrc: 'sap-icon://pdf-attachment',
                        fileType: ".pdf",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "2",
                        fileName: "HR Döküman 2",
                        iconSrc: 'sap-icon://excel-attachment',
                        fileType: ".xls",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "3",
                        fileName: "HR Döküman 3",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "4",
                        fileName: "HR Döküman 4",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    }, {
                        key: "1",
                        fileName: "HR Döküman 1",
                        iconSrc: 'sap-icon://pdf-attachment',
                        fileType: ".pdf",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "2",
                        fileName: "HR Döküman 2",
                        iconSrc: 'sap-icon://excel-attachment',
                        fileType: ".xls",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "3",
                        fileName: "HR Döküman 3",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "4",
                        fileName: "HR Döküman 4",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    }, {
                        key: "1",
                        fileName: "HR Döküman 1",
                        iconSrc: 'sap-icon://pdf-attachment',
                        fileType: ".pdf",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "2",
                        fileName: "HR Döküman 2",
                        iconSrc: 'sap-icon://excel-attachment',
                        fileType: ".xls",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "3",
                        fileName: "HR Döküman 3",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "4",
                        fileName: "HR Döküman 4",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                ]
            }

        };
    });