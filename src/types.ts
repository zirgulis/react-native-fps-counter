export interface FPSCounterProps {
  /**
   * Update interval in milliseconds
   * @default 1000
   */
  updateInterval?: number;
  /**
   * Style for the container
   */
  containerStyle?: object;
  /**
   * Style for the FPS text
   */
  textStyle?: object;
}

export type FrameData = {
  /**
   * Current frames per second
   */
  fps: number;
  /**
   * Average frame time in milliseconds
   */
  frameTime: number;
  /**
   * Number of dropped frames in the last interval
   */
  droppedFrames: number;
};
