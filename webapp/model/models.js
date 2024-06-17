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
                    documentTypeSearchHelpSet: this._filterInputDocumentTypeSearchHelpData(),
                    documentStatusSearchHelpSet: this._filterInputDocumentStatusSearchHelpData(),
                    filterInputValues: this._filterInputValues(),
                    documentListSet: this._documentsListSet(),
                });
                return oModel;
            },
            _filterInputValues: function () {
                return {
                    documentName: ""
                }
            },
            _filterInputDocumentStatusSearchHelpData: function () {
                return [
                    {
                        key: "1",
                        value: "Sisteme Taşınıyor",
                        iconSrc: 'sap-icon://in-progress'
                    },
                    {
                        key: "2",
                        value: "Sistemde Mevcut",
                        iconSrc: "sap-icon://message-success"
                    },
                    {
                        key: "3",
                        value: "Sisteme Taşınmadı",
                        iconSrc: 'sap-icon://message-error'
                    },
                ]
            },
            _filterInputDocumentTypeSearchHelpData: function () {
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
                        key: "2",
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
                        key: "5",
                        fileName: "HR Döküman 1",
                        iconSrc: 'sap-icon://pdf-attachment',
                        fileType: ".pdf",
                        uploadedBy: "HAKARAHAN",
                        status: '03'
                    },
                    {
                        key: "6",
                        fileName: "HR Döküman 2",
                        iconSrc: 'sap-icon://excel-attachment',
                        fileType: ".xls",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "7",
                        fileName: "HR Döküman 3",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "8",
                        fileName: "HR Döküman 4",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    }, {
                        key: "9",
                        fileName: "HR Döküman 1",
                        iconSrc: 'sap-icon://pdf-attachment',
                        fileType: ".pdf",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "10",
                        fileName: "HR Döküman 2",
                        iconSrc: 'sap-icon://excel-attachment',
                        fileType: ".xls",
                        uploadedBy: "HAKARAHAN",
                        status: '01'
                    },
                    {
                        key: "11",
                        fileName: "HR Döküman 3",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '01'
                    },
                    {
                        key: "12",
                        fileName: "HR Döküman 4",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '01'
                    }, {
                        key: "13",
                        fileName: "HR Döküman 1",
                        iconSrc: 'sap-icon://pdf-attachment',
                        fileType: ".pdf",
                        uploadedBy: "HAKARAHAN",
                        status: '01'
                    },
                    {
                        key: "14",
                        fileName: "HR Döküman 2",
                        iconSrc: 'sap-icon://excel-attachment',
                        fileType: ".xls",
                        uploadedBy: "HAKARAHAN",
                        status: '01'
                    },
                    {
                        key: "15",
                        fileName: "HR Döküman 3",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '01'
                    },
                    {
                        key: "16",
                        fileName: "HR Döküman 4",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    }, {
                        key: "17",
                        fileName: "HR Döküman 1",
                        iconSrc: 'sap-icon://pdf-attachment',
                        fileType: ".pdf",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "18",
                        fileName: "HR Döküman 2",
                        iconSrc: 'sap-icon://excel-attachment',
                        fileType: ".xls",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "19",
                        fileName: "HR Döküman 3",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "20",
                        fileName: "HR Döküman 4",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    }, {
                        key: "21",
                        fileName: "HR Döküman 1",
                        iconSrc: 'sap-icon://pdf-attachment',
                        fileType: ".pdf",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "22",
                        fileName: "HR Döküman 2",
                        iconSrc: 'sap-icon://excel-attachment',
                        fileType: ".xls",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "23",
                        fileName: "HR Döküman 3",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "24",
                        fileName: "HR Döküman 4",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    }, {
                        key: "25",
                        fileName: "HR Döküman 1",
                        iconSrc: 'sap-icon://pdf-attachment',
                        fileType: ".pdf",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "26",
                        fileName: "HR Döküman 2",
                        iconSrc: 'sap-icon://excel-attachment',
                        fileType: ".xls",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "27",
                        fileName: "HR Döküman 3",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "28",
                        fileName: "HR Döküman 4",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    }, {
                        key: "29",
                        fileName: "HR Döküman 1",
                        iconSrc: 'sap-icon://pdf-attachment',
                        fileType: ".pdf",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "30",
                        fileName: "HR Döküman 2",
                        iconSrc: 'sap-icon://excel-attachment',
                        fileType: ".xls",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "31",
                        fileName: "HR Döküman 3",
                        iconSrc: 'sap-icon://doc-attachment',
                        fileType: ".doc",
                        uploadedBy: "HAKARAHAN",
                        status: '02'
                    },
                    {
                        key: "32",
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