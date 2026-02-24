import { StyleSheet, View } from "react-native";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";

export default function RadialBackground({ children }) {
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
        <Defs>
          <RadialGradient
            id="grad"
            cx="50%"
            cy="30%"
            r="70%"
          >
            <Stop offset="0%" stopColor="#0a0a0aff" stopOpacity="1" />
            <Stop offset="100%" stopColor="#000000" stopOpacity="1" />
          </RadialGradient>
        </Defs>

        <Rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#grad)"
        />
      </Svg>

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});