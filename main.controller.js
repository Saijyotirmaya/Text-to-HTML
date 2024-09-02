sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("fiori.new.controller.View1", {
    onInit: function () {
      var that = this;
      sap.ui.require(["sap/ui/richtexteditor/RichTextEditor"], function (RTE) {
        that.oRichTextEditor = new RTE("myRTE", {
          editorType: sap.ui.richtexteditor.EditorType.TinyMCE,
          width: "500px",
          height: "300px",
          showGroupFont: true,
          tooltip: "Enter Text",
          value: "",
        });

        that.getView().byId("editorContainer").addItem(that.oRichTextEditor);
      });
    },

    onConvert: function () {
      var text = this.getView().byId("RichTextEditor2");
      var value = this.getView()
        .byId("editorContainer")
        .getItems()[0]
        .getValue();
      if (value.length > 0) {
        text.setValue(value);
        this.getView().byId("uploadText").setEnabled(true);
      } else {
        sap.m.MessageBox.information("Empty Input. Please type something");
      }
    },
  });
});
