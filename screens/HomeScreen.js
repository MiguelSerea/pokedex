import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Button,
} from "react-native";
import UserCard from "../components/UserCard"; // Vai virar um card de Pokémon

export default function HomeScreen({ navigation }) {
  const [pokemons, setPokemons] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPokemons = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await res.json();
      const detalhes = await Promise.all(
        data.results.map(async (pokemon) => {
          const resDetalhe = await fetch(pokemon.url);
          return await resDetalhe.json();
        })
      );
      setPokemons(detalhes);
    } catch (err) {
      console.error("Erro ao buscar pokémons:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const pokemonsFiltrados = pokemons.filter((p) =>
    p.name.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokédex</Text>
      <TextInput
        style={styles.input}
        placeholder="Buscar Pokémon..."
        value={filtro}
        onChangeText={setFiltro}
      />
      <Button title="Recarregar" onPress={fetchPokemons} />
      {loading ? (
        <ActivityIndicator size="large" style={styles.loader} />
      ) : (
        <FlatList
          data={pokemonsFiltrados}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <UserCard
              user={item}
              onPress={() => navigation.navigate("Detalhes", { user: item })}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 10,
    padding: 8,
  },
  loader: {
    marginTop: 20,
  },
});
