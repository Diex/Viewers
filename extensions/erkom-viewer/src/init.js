import csTools from 'cornerstone-tools';
const ChestWallTool = csTools.ChestWallTool;
// const ExportPDF = csTools.ChestWallTool.exportPDF;
/**
 *
 * @param {object} configuration
 * @param {Object|Array} configuration.csToolsConfig
 */

export default function init({ servicesManager, configuration = {} }) {
  csTools.addTool(ChestWallTool, { name: 'ChestWall' });
  // csTools.addTool(ExportPDF, { name: 'ExportPDF' });
}
