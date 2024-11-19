import React from "react";
import { Stack } from "expo-router";
import Index from ".";
import HomeScreen from "@/components/HomeScreen";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hide the header
      }}
    ></Stack>
  );
}
