import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

export default function UserCard({ user, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [
      styles.card,
      pressed && styles.cardPressed,
    ]}>
      <Image source={{ uri: user.sprites.front_default }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.type}>
          Tipo: {user.types?.[0]?.type?.name || "Desconhecido"}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginVertical: 8,
    padding: 12,
    borderRadius: 8,
    elevation: 2,
    alignItems: "center",
  },
  cardPressed: {
    opacity: 0.8,
  },
  image: {
    width: 60,
    height: 60,
  },
  info: {
    marginLeft: 12,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "capitalize",
  },
  type: {
    color: "#555",
  },
});
