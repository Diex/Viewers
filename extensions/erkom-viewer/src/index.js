import init from './init';

const TOOLBAR_BUTTON_TYPES = {
  COMMAND: 'command',
  SET_TOOL_ACTIVE: 'setToolActive',
  BUILT_IN: 'builtIn',
};

export default {
  /**
   * Only required property. Should be a unique value across all extensions.
   */
  id: 'erkom-viewer',

  preRegistration({ servicesManager, configuration = {} }) {
    init({ servicesManager, configuration });
  },

  // cuando el viewer agrega las extensiones, se fija
  // si la extensión define un boton en una toolbar
  getToolbarModule() {
    return {
      definitions: [
        {
          id: 'Erkom Tool',
          label: 'Erkom Tool',
          icon: 'circle',
          type: 'setToolActive',
          commandName: 'setToolActive',
          commandOptions: {
            toolName: 'ChestWall',
            mouseButtonMask: 1,
          },
        },
        {
          id: 'Export PDF',
          label: 'Export PDF',
          icon: 'level',
          type: TOOLBAR_BUTTON_TYPES.COMMAND,
          commandName: 'exportPDF',
          // commandOptions: {
          //   toolName: 'ChestWall',
          //   mouseButtonMask: 1,
          // },
        },
      ],
      defaultContext: 'VIEWER',
    };
  },
};
