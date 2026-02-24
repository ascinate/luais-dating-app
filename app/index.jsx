import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { VideoView, useVideoPlayer } from "expo-video";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const player = useVideoPlayer(
    require("../assets/video/introvg.mp4"),
    (player) => {
      player.loop = false;
      player.play();
    }
  );

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const token = await AsyncStorage.getItem("userToken");

    if (token) {
      router.replace("/homemain"); // 
    } else {
      setLoading(false); // 
    }
  };

  useEffect(() => {
    const subscription = player.addListener("playToEnd", () => {
      router.replace("/homemain");
    });

    return () => subscription.remove();
  }, [player]);

  if (loading) return null;

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