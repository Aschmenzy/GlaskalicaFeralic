import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Levels, rijeci } from "../rijeci";
import { ImageBackground } from "react-native";

export default function ChallengeScreen() {
  const router = useRouter();
  const { type, level } = useLocalSearchParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [remainingLetters, setRemainingLetters] = useState<string[]>([]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [nextRequiredIndex, setNextRequiredIndex] = useState(0);

  // Ensure level and type are valid
  if (!level || Array.isArray(level) || !(level in rijeci)) {
    return <Text>Invalid level selected</Text>;
  }

  const wordList = rijeci[level as Levels];
  const currentWord = wordList[currentIndex];

  if (!type || Array.isArray(type) || typeof currentWord !== "string") {
    return <Text>Invalid type or word</Text>;
  }

  // Generate challenge word based on the game type
  const generateChallengeWord = () => {
    if (type === "Prvi Glas") {
      // First letter missing
      return `_ ${currentWord.slice(1).split("").join(" ")}`;
    } else if (type === "Zadnji Glas") {
      // Last letter missing
      return `${currentWord.slice(0, -1).split("").join(" ")} _`;
    } else {
      // All letters missing
      return currentWord
        .split("")
        .map((_, index) =>
          guessedLetters[index] ? guessedLetters[index] : "_"
        )
        .join(" ");
    }
  };

  // Generate options dynamically for the current word
  React.useEffect(() => {
    const wordLetters = currentWord.split("");
    setRemainingLetters([...wordLetters]); // Initialize with all letters
    setOptions(generateOptions(currentWord, type));
    setGuessedLetters([]); // Reset guessed letters for a new word
    setNextRequiredIndex(0); // Reset the required letter index
  }, [currentWord]);

  const handleOptionPress = (option: string) => {
    const requiredLetter =
      type === "Prvi Glas"
        ? currentWord[0] // First letter is missing
        : type === "Zadnji Glas"
        ? currentWord[currentWord.length - 1] // Last letter is missing
        : remainingLetters[0]; // Sequential guessing (first missing letter)

    if (option === requiredLetter) {
      // Add correct letter to guessedLetters
      setGuessedLetters((prev) => [...prev, option]);

      // Remove the first instance of the correct letter from remainingLetters
      setRemainingLetters((prev) => {
        const index = prev.indexOf(option);
        if (index > -1) {
          const newRemaining = [...prev];
          newRemaining.splice(index, 1);
          return newRemaining;
        }
        return prev;
      });

      // Remove the used letter from the options
      setOptions((prevOptions) =>
        prevOptions.filter((item) => item !== option)
      );

      // Check if the word is complete
      if (
        type === "Prvi Glas" ||
        type === "Zadnji Glas" ||
        remainingLetters.length === 1
      ) {
        if (currentIndex < wordList.length - 1) {
          setCurrentIndex((prev) => prev + 1); // Move to the next word
        } else {
          Alert.alert(
            "Congratulations!",
            "You've completed all words in this level."
          );
          router.back();
        }
      }
    } else if (currentWord.includes(option)) {
      // If the letter is in the word but out of sequence, do nothing
      Alert.alert("Hold on!", "That's correct but not in the right order.");
    } else {
      // Remove incorrect option
      setOptions((prevOptions) =>
        prevOptions.filter((item) => item !== option)
      );
      Alert.alert("Wrong!", "Try again.");
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/background.jpg")}
      style={styles.container}
    >
      {/* Back button */}
      <TouchableOpacity
        onPress={() => router.push("/pages/homeScreen")}
        style={styles.returnButton}
      >
        <Text style={styles.returnButtonText}>Povratak</Text>
      </TouchableOpacity>

      <View style={styles.WordContainer}>
        {/* Word */}
        <Text style={styles.challengeText}>{generateChallengeWord()}</Text>

        {/* Options */}
        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleOptionPress(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
}

function generateOptions(word: string, type: string): string[] {
  const wordLetters = word.split("");
  const randomLetters = "abcdefghijklmnoprstuvz"
    .split("")
    .filter((letter) => !wordLetters.includes(letter))
    .sort(() => Math.random() - 0.5)
    .slice(0, 5); // Add 5 random distractors

  const options = [...wordLetters, ...randomLetters];
  return options.sort(() => Math.random() - 0.5);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 30,
  },
  WordContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
  challengeText: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "navy",
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
    width: "90%",
  },
  optionButton: {
    backgroundColor: "rgba(155, 210, 255, 0.8)",
    padding: 20,
    margin: 10,
    borderRadius: 50,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  optionText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  returnButton: {
    position: "absolute",
    top: 5,
    left: 5,
    backgroundColor: "#FF5733",
    padding: 10,
    borderRadius: 5,
  },
  returnButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
