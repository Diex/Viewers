import init from './init';

export default {
  /**
   * Only required property. Should be a unique value across all extensions.
   */
  id: 'erkom-viewer',

  preRegistration({ servicesManager, configuration = {} }) {
    init({ servicesManager, configuration });
  },
  getToolbarModule() {
    return {
      definitions: [
        {
          id: 'Erkom Tool',
          label: 'Erkom Tool',
          icon: 'level',
          type: 'setToolActive',
          commandName: 'setToolActive',
          commandOptions: {
            toolName: 'ChestProthesisTool',
            mouseButtonMask: 1,
          },
          // commandOptions: { toolName: 'BarTool', mouseButtonMask: 1 },
        },
      ],
      defaultContext: 'VIEWER',
    };
  },
};
