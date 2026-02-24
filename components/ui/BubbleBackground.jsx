import { useEffect, useRef } from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";

const { width, height } = Dimensions.get("window");

function Bubble({ size, left, delay }) {
  const translateY = useRef(new Animated.Value(height)).current;
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const vertical = Animated.timing(translateY, {
      toValue: -500,
      duration: 6000 + Math.random() * 20000,
      delay,
      useNativeDriver: true,
    });

    const horizontal = Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: 25,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: -25,
          duration: 1200,
          useNativeDriver: true,
        }),
      ])
    );

    Animated.parallel([vertical, horizontal]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.bubble,
        {
          width: size,
          height: size,
          left,
          transform: [{ translateY }, { translateX }],
        },
      ]}
    />
  );
}

export default function BubbleBackground() {
  return (
    <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
      {Array.from({ length: 30 }).map((_, i) => (
        <Bubble
          key={i}
          size={8 + Math.random() * 12}
          left={Math.random() * width}
          delay={i * 200}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    position: "absolute",
    top: 0,
    borderRadius: 100,
    backgroundColor: "#392243",
  },
});