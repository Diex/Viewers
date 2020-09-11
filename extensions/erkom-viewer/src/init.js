import csTools from 'cornerstone-tools';
import BarTool from './tools/bar-tool';

/**
 *
 * @param {object} configuration
 * @param {Object|Array} configuration.csToolsConfig
 */

export default function init({ servicesManager, configuration = {} }) {
  csTools.addTool(BarTool, { name: 'BarTool' });
}
