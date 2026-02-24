import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { VideoView, useVideoPlayer } from "expo-video";
import { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const hasNavigated = useRef(false);

  const player = useVideoPlayer(
    require("../assets/video/introvg.mp4"),
    (player) => {
      player.loop = false;
      player.play();
    }
  );

  useEffect(() => {
    const run = async () => {
      // Minimum splash time
      await new Promise(resolve => setTimeout(resolve, 1000));

      const token = await AsyncStorage.getItem("userToken");

      if (hasNavigated.current) return;

      hasNavigated.current = true;

      router.replace(token ? "/homemain" : "/homemain");
    };

    run();
  }, []);

  return (
    <View style={styles.container}>
      <VideoView
        style={styles.video}
        player={player}
        contentFit="cover"
        nativeControls={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  video: {
    flex: 1,
  },
});