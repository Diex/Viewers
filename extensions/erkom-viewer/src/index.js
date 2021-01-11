import init from './init';

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
          id: 'LengthToolTest',
          label: 'LengthTool Test',
          icon: 'level',
          type: 'setToolActive',
          commandName: 'setToolActive',
          commandOptions: {
            toolName: 'LengthToolTest',
            mouseButtonMask: 1,
          },
        },
      ],
      defaultContext: 'VIEWER',
    };
  },
};
