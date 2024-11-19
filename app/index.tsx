import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import { useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => router.push("../pages/homeScreen")}
    >
      <ImageBackground
        source={require("../assets/images/greetingScreenPozadina.jpg")}
        style={styles.container}
      >
        <View style={styles.container}>
          <Text style={styles.tekst}>FERALIĆ tu cemo stavbi njihov logo</Text>
          <Text style={styles.tekst}>dodirni za početak</Text>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tekst: {
    textAlign: "center",
    fontSize: 18,
  },
});
