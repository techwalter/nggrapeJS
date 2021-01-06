export default (editor) => {
  const pn = editor.Panels;
  // eConfig.showDevices = 0;

  // Remove Style Manager
  editor.Panels.removeButton("views", "open-layers");

  // Add devices buttons
  const panelDevices = pn.addPanel({ id: "devices-c" });
  panelDevices.get("buttons").add([
    {
      id: "set-device-desktop",
      command: {
        run: function (ed) {
          ed.setDevice("Desktop");
        },
        stop: function () {}
      },
      className: "fa fa-desktop",
      active: 1
    },
    {
      id: "set-device-tablet",
      command: {
        run: function (ed) {
          ed.setDevice("Tablet");
        },
        stop: function () {}
      },
      className: "fa fa-tablet"
    },
    {
      id: "set-device-mobile",
      command: {
        run: function (ed) {
          ed.setDevice("Mobile portrait");
        },
        stop: function () {}
      },
      className: "fa fa-mobile"
    }
  ]);

  // Add clear button
  const panelOptions = pn.getPanel("options");
  panelOptions.get("buttons").add([
    {
      id: "undo",
      className: "fa fa-undo",
      command: (e) => e.runCommand("core:undo")
    },
    {
      id: "redo",
      className: "fa fa-repeat",
      command: (e) => e.runCommand("core:redo")
    },
    {
      id: "canvas-clear",
      className: "fa fa-trash",
      command: (e) => {
        window.confirm("Are you sure to clean the canvas?") &&
          e.runCommand("core:canvas-clear") &&
          setTimeout(function () {
            localStorage.clear();
          }, 0);
      }
    }
  ]);
};
