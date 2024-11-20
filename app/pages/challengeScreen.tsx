import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Levels, rijeci } from "../rijeci";
import { ImageBackground } from "react-native";


export default function ChallengeScreen() {
    const router = useRouter();
    const { type, level } = useLocalSearchParams();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Ensure level and type are valid
    if (!level || Array.isArray(level) || !(level in rijeci)) {
        return <Text>Invalid level selected</Text>;
    }

    const wordList = rijeci[level as Levels];
    const currentWord = wordList[currentIndex];
    console.log("Current word:", currentWord);

    if (!type || Array.isArray(type) || typeof currentWord !== "string") {
        return <Text>Invalid type or word</Text>;
    }

    const generateChallengeWord = () => {
        if (type === "Prvi Glas") {
            // zamini prvo slovo s "_"
            return `_ ${currentWord.slice(1)}`; 
        } else if (type === "Zadnji Glas") {
             // zamini zadnje slovo s "_"
            return `${currentWord.slice(0, -1)} _`;
        } else if (type === "Svi Glasovi") {
            // zamini sva slova s  "_"
            return "_ ".repeat(currentWord.length); 
        } else {
            return currentWord; 
        }
    };

    console.log("Type:", type);
    console.log("Current word:", currentWord);
    console.log("Generated challenge word:", generateChallengeWord());
    return (
        <ImageBackground
            source={require("../../assets/images/background.jpg")}
            style={styles.container}
        >
            <View style={styles.container}>
                {/* povratak gumb */}
                <TouchableOpacity onPress={() => router.back()} style={styles.returnButton}>
                    <Text style={styles.returnButtonText}>Povratak</Text>
                </TouchableOpacity>

                {/* rijec */}
                <Text style={styles.challengeText}>{generateChallengeWord()}</Text>

                {/* opcije */}
                <View style={styles.optionsContainer}>
                    {generateOptions(currentWord, type).map((option, index) => (
                        <TouchableOpacity key={index} style={styles.optionButton}>
                            <Text style={styles.optionText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ImageBackground>
    );
}

function generateOptions(word: string, type: string): string[] {
    const correctLetter =
        type === "first"
            ? word[0]
            : type === "last"
                ? word[word.length - 1]
                : word[0];
    const randomLetters = "abcdefghijklmnoprstuvz"
        .split("")
        .filter((letter) => letter !== correctLetter)
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

    return [correctLetter, ...randomLetters].sort(() => Math.random() - 0.5);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 30,
    },
    challengeText: {
        fontSize: 36,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30,
        color: "black",
    },
    optionsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 20,
        width: "100%",
    },
    optionButton: {
        backgroundColor: "#4CAF50",
        paddingVertical: 15,
        margin: 10,
        borderRadius: 8,
        width: "15%",
        alignItems: "center",
        justifyContent: "center",
    },
    optionText: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
    }, // Styles for Return Button
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