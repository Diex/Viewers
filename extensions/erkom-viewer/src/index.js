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
          icon: 'circle',
          type: 'setToolActive',
          commandName: 'setToolActive',
          commandOptions: {
            toolName: 'ChestWall',
            mouseButtonMask: 1,
          },
        },
        // {
        //   id: 'LengthToolTest',
        //   label: 'LengthTool Test',
        //   icon: 'level',
        //   type: 'setToolActive',
        //   commandName: 'setToolActive',
        //   commandOptions: {
        //     toolName: 'LengthToolTest',
        //     mouseButtonMask: 1,
        //   },
        // },
      ],
      defaultContext: 'VIEWER',
    };
  },
};
