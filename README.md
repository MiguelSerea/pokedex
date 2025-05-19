==============================
Pokédex App - React Native
==============================

Este é um aplicativo mobile feito em React Native usando Expo, que consome a PokéAPI para exibir uma lista de Pokémon, permitindo buscar e ver detalhes de cada um.

------------------------------
📦 Tecnologias usadas
------------------------------
- React Native
- Expo
- PokéAPI (https://pokeapi.co)
- React Navigation

------------------------------
📲 Funcionalidades
------------------------------
- Listar os 151 primeiros Pokémon
- Buscar por nome
- Ver detalhes como imagem, tipo, altura e peso

------------------------------
📁 Estrutura dos arquivos
------------------------------
- App.js .................... Inicializa a navegação
- AppNavigator.js ........... Define as rotas com React Navigation
- screens/
    - HomeScreen.js ......... Lista os Pokémon com campo de busca
    - DetailsScreen.js ...... Mostra detalhes do Pokémon
- components/
    - UserCard.js ........... (Renomeado como PokémonCard) Renderiza cada Pokémon da lista

------------------------------
⚙️ Como rodar o projeto
------------------------------
1. Clone o repositório:
   git clone https://github.com/seu-usuario/seu-repositorio.git

2. Instale as dependências:
   cd nome-do-projeto
   npm install
   npx expo install @react-navigation/native
   npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
   npx expo install @react-navigation/native-stack
   npx expo install react-dom react-native-web @expo/metro-runtime

4. Inicie o Expo:
   npx expo start

5. Use o Expo Go no seu celular para escanear o QR Code, ou pressione "w" para abrir no navegador.

------------------------------
📦 Imports necessários
------------------------------
Você precisa garantir que os seguintes pacotes estejam instalados:

- Expo:
    Já vem com muitos pacotes por padrão (como react-native, react)

- React Navigation:
    npm install @react-navigation/native
    npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated

    E para navegação em pilha:
    npm install @react-navigation/native-stack

------------------------------
🔗 PokéAPI usada
------------------------------
- Lista de Pokémon:
  https://pokeapi.co/api/v2/pokemon?limit=50

- Detalhes de cada Pokémon (via URL individual):
  Exemplo: https://pokeapi.co/api/v2/pokemon/1/

------------------------------
🧠 Exemplo de como buscar Pokémon
------------------------------

// HomeScreen.js
fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
  .then(res => res.json())
  .then(data => {
    const detalhes = Promise.all(
      data.results.map(pokemon => fetch(pokemon.url).then(res => res.json()))
    );
    setPokemons(await detalhes);
  });

------------------------------
👾 Exibindo imagem do Pokémon
------------------------------

<Image
  source={{ uri: pokemon.sprites.front_default }}
  style={{ width: 60, height: 60 }}
/>

------------------------------
📌 Observações
------------------------------
- Esse projeto foi feito para fins educacionais.
- A PokéAPI é gratuita e pode ter limites de uso por IP.
- Você pode expandir para mostrar habilidades, evoluções, ou aplicar paginação.

------------------------------
📧 Contato
------------------------------
Autor: Miguel
GitHub: https://github.com/MiguelSerea
