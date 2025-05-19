import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function DetailsScreen({ route }) {
  const { user: pokemon } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: pokemon.sprites.other["official-artwork"].front_default }}
        style={styles.image}
      />
      <Text style={styles.name}>{pokemon.name}</Text>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Tipo:</Text>
        <Text style={styles.value}>
          {pokemon.types.map((t) => t.type.name).join(", ")}
        </Text>
        <Text style={styles.label}>Altura:</Text>
        <Text style={styles.value}>{pokemon.height / 10} m</Text>
        <Text style={styles.label}>Peso:</Text>
        <Text style={styles.value}>{pokemon.weight / 10} kg</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textTransform: "capitalize",
  },
  infoBox: {
    backgroundColor: "#fff",
    padding: 16,
    width: "100%",
    borderRadius: 12,
    elevation: 3,
  },
  label: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    color: "#333",
  },
});
