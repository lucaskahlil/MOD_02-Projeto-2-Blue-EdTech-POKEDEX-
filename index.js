const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const pokedex = [
    {
        numero: "01",
        nome: "Pikachu",
        tipo: "Elétrico",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        descriçao:"Pikachu que pode gerar eletricidade poderosa tem bolsas nas bochechas que são extra macias e super elásticas.",
        altura: "40cm",
        peso: "6Kg",
        categoria: "Rato",
        habilidade: "Gerar eletricidade"
    },
    {
        numero: "02",
        nome: "Pidgeotto",
        tipo: "Normal/Vôo",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",
        descriçao:"Este Pokémon é cheio de vitalidade. Ele voa constantemente em torno de seu grande território em busca de presas.",
        altura: "110cm",
        peso: "30Kg",
        categoria: "Pássaro",
        habilidade: "Olho aguçado"
    },
    {
        numero: "03",
        nome: "Mewtwo",
        tipo: "Psíquico",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
        descriçao:"Seu DNA é quase o mesmo do Mew. No entanto, seu tamanho e disposição são muito diferentes.",
        altura: "200cm",
        peso: "122Kg",
        categoria: "Genético",
        habilidade: "Pressão"
    }
]

// Rotas
app.get("/", (req, res) => {
  res.render("index", {pokedex});
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
