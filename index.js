const express = require("express");
const path = require("path");
import dotenv from 'dotenv'
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// BANCO DE DADOS FAKE
const pokedex = [ 
  {
    id: 01,
    nome: "Pikachu",
    tipo: "Elétrico",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    descricao:
      "Pikachu que pode gerar eletricidade poderosa tem bolsas nas bochechas que são extra macias e super elásticas.",
    altura: "40",
    peso: "64",
    categoria: "Rato",
    habilidade: "Gerar eletricidade",
  },
  {
    id: 02,
    nome: "Pidgeotto",
    tipo: "Normal/Vôo",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",
    descricao:
      "Este Pokémon é cheio de vitalidade. Ele voa constantemente em torno de seu grande território em busca de presas.",
    altura: "110",
    peso: "30",
    categoria: "Pássaro",
    habilidade: "Olho aguçado",
  },
  {
    id: 03,
    nome: "Mewtwo",
    tipo: "Psíquico",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    descricao:
      "Seu DNA é quase o mesmo do Mew. No entanto, seu tamanho e disposição são muito diferentes.",
    altura: "200",
    peso: "122",
    categoria: "Genético",
    habilidade: "Pressão",
  },
];

let message;

// Rotas
app.get("/", (req, res) => { 
  setTimeout(() => {
    message = "";
  }, 1000);
  res.render("index", { pokedex, message });
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);

app.get("/detalhes/:id", (req, res) => {
  let poke
  pokedex.filter((element) => {
    if (element.id ==  req.params.id) {
      poke = element
    }
  })
  res.render('detalhes.ejs', {
    poke, message,
  });
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro.ejs", {message});
});

app.post("/cadastro", (req, res) => {
  let id = pokedex[pokedex.length-1].id + 1
  const {nome, tipo, imagem, descricao, altura, peso, categoria, habilidade} = req.body
  pokedex.push({id: id, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade});
  message = `Seu Pokemon foi cadastrado com sucesso!`;
  res.redirect('/')
});
