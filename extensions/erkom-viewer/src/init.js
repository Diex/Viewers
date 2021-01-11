import csTools from 'cornerstone-tools';
const ChestWallTool = csTools.ChestWallTool;
const LengthToolTest = csTools.LengthToolTest;
/**
 *
 * @param {object} configuration
 * @param {Object|Array} configuration.csToolsConfig
 */

export default function init({ servicesManager, configuration = {} }) {
  csTools.addTool(ChestWallTool, { name: 'ChestWall' });
  csTools.addTool(LengthToolTest, { name: 'LengthToolTest' });
}
