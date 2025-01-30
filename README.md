# react-native-fps-counter

A lightweight FPS counter widget for React Native applications. This package provides a simple way to monitor the frame rate of your React Native app in real-time.

## Features

- 📊 Real-time FPS monitoring
- 🎯 Accurate frame counting using React Native Reanimated
- 🎨 Customizable appearance
- 🪶 Lightweight implementation
- 📱 Works on both iOS and Android

## Installation

```sh
npm install react-native-fps-counter react-native-reanimated
# or
yarn add react-native-fps-counter react-native-reanimated
```

> Make sure you have [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation) properly configured in your project.

## Basic Usage

```tsx
import { FPSCounter } from 'react-native-fps-counter';

function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* Your app content */}
      <FPSCounter />
    </View>
  );
}
```

## Example usage


```tsx
// Example with animations to test FPS
import { FPSCounter } from 'react-native-fps-counter';
import Animated, { 
  useSharedValue, 
  withRepeat, 
  withTiming,
  useAnimatedStyle 
} from 'react-native-reanimated';

function AnimatedExample() {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 2000 }),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <View style={{ flex: 1 }}>
      <Animated.View 
        style={[{
          width: 100,
          height: 100,
          backgroundColor: '#6200ee',
        }, animatedStyle]} 
      />
      <FPSCounter />
    </View>
  );
}
```

## Customization

The FPS counter is highly customizable:

```tsx
<FPSCounter
  // Update interval in milliseconds
  updateInterval={500}
  
  // Custom container styles
  containerStyle={{
    top: 100,
    right: 10,
    left: undefined,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 8,
  }}
  
  // Custom text styles
  textStyle={{
    color: '#00ff00',
    fontSize: 16,
    fontFamily: 'monospace',
  }}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `updateInterval` | number | 1000 | The interval (in milliseconds) at which the FPS count updates |
| `containerStyle` | ViewStyle | - | Custom styles for the container view |
| `textStyle` | TextStyle | - | Custom styles for the FPS text |

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)