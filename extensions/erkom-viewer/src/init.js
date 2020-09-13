import csTools from 'cornerstone-tools';
const ChestProthesisTool = csTools.ChestProthesisTool;

/**
 *
 * @param {object} configuration
 * @param {Object|Array} configuration.csToolsConfig
 */

export default function init({ servicesManager, configuration = {} }) {
  csTools.addTool(ChestProthesisTool, { name: 'ChestProthesisTool' });
}
