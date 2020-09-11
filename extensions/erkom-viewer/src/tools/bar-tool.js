import csTools from 'cornerstone-tools';
const BaseAnnotationTool = csTools.importInternal('base/BaseAnnotationTool');
// const {
//   getNewContext,
//   draw,
//   drawCircle,
//   setShadow,
//   drawJoinedLines,
// } = csTools.importInternal('drawing');
const draw = csTools.importInternal('drawing/draw');
const drawCircle = csTools.importInternal('drawing/drawCircle');
const getNewContext = csTools.importInternal('drawing/getNewContext');

// import { angleCursor } from '../cursors/index.js';

export default class BarTool extends BaseAnnotationTool {
  constructor(props = {}) {
    const defaultProps = {
      name: 'BarTool',
      supportedInteractionTypes: ['Mouse', 'Touch'],
      // svgCursor: angleCursor,
      // configuration: {
      //   drawHandles: true,
      //   drawHandlesOnHover: false,
      //   hideHandlesIfMoving: false,
      //   renderDashed: false,
      // },
    };

    super(props, defaultProps);
  }

  renderToolData(evt) {
    const eventData = evt.detail;
    const enabledElement = eventData.enabledElement;

    const { element } = eventData;
    const context = getNewContext(eventData.canvasContext.canvas);

    draw(context, context => {
      const rectOptions = {};

      drawCircle(
        context,
        element,
        { x: 100, y: 100 },
        100,
        rectOptions,
        'pixel'
      );
    });
  }

  createNewMeasurement(eventData) {
    const goodEventData =
      eventData && eventData.currentPoints && eventData.currentPoints.image;

    if (!goodEventData) {
      logger.error(
        `required eventData not supplied to tool ${this.name}'s createNewMeasurement`
      );

      return;
    }

    const { x, y } = eventData.currentPoints.image;

    return {
      visible: true,
      active: true,
      color: undefined,
      invalidated: true,
      handles: {
        start: {
          x,
          y,
          highlight: true,
          active: false,
        },
        end: {
          x,
          y,
          highlight: true,
          active: true,
        },
      },
    };
  }
}
