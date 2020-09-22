import csTools from 'cornerstone-tools';
const ChestWallTool = csTools.ChestWallTool;
// const LengthTool = csTools.LengthTool;

/**
 *
 * @param {object} configuration
 * @param {Object|Array} configuration.csToolsConfig
 */

export default function init({ servicesManager, configuration = {} }) {
  // csTools.addTool(LengthTool, { name: 'LengthTool' });
  csTools.addTool(ChestWallTool, { name: 'ChestWallTool' });
}
