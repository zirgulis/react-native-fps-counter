import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useFrameCallback,
  runOnJS,
} from 'react-native-reanimated';
import type { FPSCounterProps, FrameData } from './types';

const DEFAULT_UPDATE_INTERVAL = 1000;
const TARGET_FPS = 60;
const FRAME_TIME_THRESHOLD = 1000 / TARGET_FPS; // ~16.67ms

export const FPSCounter = ({
  updateInterval = DEFAULT_UPDATE_INTERVAL,
  containerStyle,
  textStyle,
}: FPSCounterProps) => {
  const [metrics, setMetrics] = React.useState<FrameData>({
    fps: 0,
    frameTime: 0,
    droppedFrames: 0,
  });
  const frameCount = useSharedValue(0);
  const lastFrameTimestamp = useSharedValue(-1);
  const frameTimes = useSharedValue<number[]>([]);
  const droppedFrames = useSharedValue(0);

  const updateMetrics = React.useCallback((data: FrameData) => {
    setMetrics(data);
  }, []);

  useFrameCallback(frameInfo => {
    'worklet';
    const now = frameInfo.timestamp;

    if (lastFrameTimestamp.value === -1) {
      lastFrameTimestamp.value = now;
      return;
    }

    // Calculate frame time
    const frameTime = now - lastFrameTimestamp.value;
    frameTimes.value = [...frameTimes.value, frameTime];

    // Check for dropped frames
    if (frameTime > FRAME_TIME_THRESHOLD * 2) {
      // If frame took more than 2x target frame time
      const droppedFrameCount =
        Math.floor(frameTime / FRAME_TIME_THRESHOLD) - 1;
      droppedFrames.value += droppedFrameCount;
    }

    frameCount.value++;
    const timeElapsed = now - lastFrameTimestamp.value;

    if (timeElapsed >= updateInterval) {
      const fps = Math.round((frameCount.value * 1000) / timeElapsed);

      // Calculate average frame time
      const avgFrameTime =
        frameTimes.value.reduce((a, b) => a + b, 0) / frameTimes.value.length;

      runOnJS(updateMetrics)({
        fps,
        frameTime: Math.round(avgFrameTime * 100) / 100,
        droppedFrames: droppedFrames.value,
      });

      // Reset counters
      frameCount.value = 0;
      lastFrameTimestamp.value = now;
      frameTimes.value = [];
      droppedFrames.value = 0;
    }
  });

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      <Animated.Text style={[styles.text, textStyle]}>
        {`${metrics.fps} FPS\n${metrics.frameTime.toFixed(1)}ms\n${
          metrics.droppedFrames
        } dropped`}
      </Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 40,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 8,
    borderRadius: 4,
    zIndex: 9999,
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
