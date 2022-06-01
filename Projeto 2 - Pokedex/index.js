require("dotenv").config();
const express = require("express");
const app = express();
const porta = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const path = require("path");

app.set("view engine", "ejs");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));


const pokedex = [
  {
    id: 1,
    nome: "Pikachu",
    tipo: "Elétrico",
    altura: 0.4,
    peso: 6,
    habilidade: "Estático",
    categoria: "Rato",
    descricao: "Pikachu que pode gerar eletricidade poderosa tem bolsas nas bochechas que são extra macias e super elásticas.",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  },
  {
    id: 2,
    nome: "Charmander",
    tipo: "Incêndio",
    altura: 0.6,
    peso: 8.5,
    habilidade: "Chama",
    categoria: "Lagarto",
    descricao: "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
  {
    id: 3,
    nome: "Bulbasaur",
    tipo: "Grama",
    altura: 0.7,
    peso: 6.9,
    habilidade: "Superar",
    categoria: "Semente",
    descricao: "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    id: 4,
    nome: "Squirtle",
    tipo: "Agua",
    altura: 0.5,
    peso: 9,
    habilidade: "Torrente",
    categoria: "Tartaruga Minúscula",
    descricao: "Quando retrai seu longo pescoço em sua concha, esguicha água com força vigorosa",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  },
];

let pokemon = undefined;
let mensagem = "";

// Rotas
app.get("/", (req, res) => {
    res.render("index", { pokedex, pokemon, mensagem});
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro", { pokedex, pokemon });
});


app.get("/detalhes/:id?", (req, res) => {
  const id = +req.query.id;
  pokemon = pokedex.find((pokemon) => pokemon && pokemon.id === id);
  mensagem = "";
  res.render("detalhes", { pokemon,pokedex });
});


app.post("/create", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);
  mensagem = "Pokemon capturado com Sucesso";
  res.redirect("/");
});



app.get("/delete/:id", (req, res) => {
  const id = +req.params.id - 1;
  delete pokedex[id];
  res.redirect("/");
});


app.listen(porta, () =>
  console.log(`Servidor rodando em http://localhost:${porta}`)
);
