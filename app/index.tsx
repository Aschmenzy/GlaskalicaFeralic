import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
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

    <ImageBackground
      source={require("../assets/images/greetingScreenPozadina.jpg")}
      style={styles.container}
    >
      <View style={styles.container}>
        <Image source={require("../assets/images/logo.png")} style={styles.logo}></Image>
        <TouchableWithoutFeedback onPress={() => {
          console.log('TouchableWithoutFeedback pressed');
          router.push("../pages/homeScreen");
        }}>
          <View style={styles.pocmiTekst}>
            <Text style={styles.tekst}>Dotakni za početak</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ImageBackground>
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
    fontSize: 32, // Adjust for visibility
    fontWeight: "bold", // Bold style
    fontFamily: "sans-serif", // Use built-in sans-serif font
    color: "black", // Ensure text color is visible
    marginVertical: 20,
  },
  logo: {
    height: 200,
    width: 400,
  },
  pocmiTekst: {
    width: 300, // Make the bubble a circle
    height: 150,
    justifyContent: "center", // Center text inside the bubble
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "rgba(173, 216, 230, 0.6)", // Light blue with transparency
    borderRadius: 100, // Make it a perfect circle
    borderWidth: 4, // Add a border for the outer bubble effect
    borderColor: "rgba(173, 216, 230, 0.8)", // Slightly stronger blue for border
    shadowColor: "#00BFFF", // Blue shadow for the glow effect
    shadowOpacity: 0.6,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 }, // Make shadow spread evenly
  },
});
