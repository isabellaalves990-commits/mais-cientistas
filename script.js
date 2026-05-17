index.html

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mais Cientistas</title>

  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header>
    <h1>Mais Cientistas</h1>
    <p>Valorizando as mulheres na ciência brasileira 💜</p>
  </header>

  <nav>
    <a href="#antigas">Cientistas Antigas</a>
    <a href="#atuais">Cientistas Atuais</a>
    <a href="#tecnicos">Cursos Técnicos</a>
    <a href="#superiores">Cursos Superiores</a>
    <a href="#curiosidades">Curiosidades</a>
  </nav>

  <!-- PRIMEIRA PARTE -->
  <section id="antigas">
    <h2>Primeiras Cientistas do Brasil</h2>

    <div class="cards">

      <div class="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Bertha_Lutz_1925.jpg">
        <h3>Bertha Lutz</h3>
        <p>Pioneira da ciência e dos direitos das mulheres no Brasil.</p>
      </div>

      <div class="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Nise_da_Silveira.jpg">
        <h3>Nise da Silveira</h3>
        <p>Revolucionou os tratamentos psiquiátricos no país.</p>
      </div>

      <div class="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Marta_Vannucci.jpg">
        <h3>Marta Vannucci</h3>
        <p>Importante pesquisadora da biologia marinha.</p>
      </div>

    </div>
  </section>

  <!-- SEGUNDA PARTE -->
  <section id="atuais">
    <h2>Cientistas da Atualidade</h2>

    <div class="cards">

      <div class="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Jaqueline_Goes_de_Jesus.jpg">
        <h3>Jaqueline Goes</h3>
        <p>Sequenciou o coronavírus no Brasil.</p>
      </div>

      <div class="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Natalia_Pasternak.jpg">
        <h3>Natália Pasternak</h3>
        <p>Grande divulgadora científica brasileira.</p>
      </div>

      <div class="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Maydana_Zatz.jpg">
        <h3>Mayana Zatz</h3>
        <p>Referência mundial em genética.</p>
      </div>

    </div>
  </section>

  <!-- TERCEIRA PARTE -->
  <section id="tecnicos">
    <h2>Cursos Técnicos</h2>

    <button onclick="mostrarTecnico()">Ver Cursos Técnicos</button>

    <div id="cursosTecnicos" class="escondido">
      <ul>
        <li>Técnico em Biotecnologia</li>
        <li>Técnico em Química</li>
        <li>Técnico em Meio Ambiente</li>
        <li>Técnico em Informática</li>
      </ul>
    </div>
  </section>

  <!-- QUARTA PARTE -->
  <section id="superiores">
    <h2>Cursos Superiores</h2>

    <button onclick="mostrarSuperior()">Ver Cursos Superiores</button>

    <div id="cursosSuperiores" class="escondido">
      <ul>
        <li>Biologia</li>
        <li>Química</li>
        <li>Física</li>
        <li>Medicina</li>
        <li>Engenharia</li>
      </ul>
    </div>
  </section>

  <!-- QUINTA PARTE -->
  <section id="curiosidades">
    <h2>Curiosidades</h2>

    <button onclick="mostrarCuriosidade()">Mostrar Curiosidade</button>

    <p id="curio"></p>
  </section>

  <footer>
    <p>Site desenvolvido sobre mulheres na ciência 💜</p>
  </footer>

  <script src="script.js"></script>

</body>
</html>
```



style.css

```css
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Arial;
  scroll-behavior:smooth;
}

body{
  background:#f4f6fb;
}

header{
  background:#7b2cbf;
  color:white;
  text-align:center;
  padding:40px;
}

header h1{
  font-size:50px;
}

nav{
  background:white;
  padding:20px;
  display:flex;
  justify-content:center;
  gap:15px;
  flex-wrap:wrap;
}

nav a{
  text-decoration:none;
  background:#7b2cbf;
  color:white;
  padding:10px 15px;
  border-radius:20px;
}

section{
  padding:60px 10%;
}

h2{
  text-align:center;
  color:#7b2cbf;
  margin-bottom:30px;
}

.cards{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:20px;
}

.card{
  background:white;
  padding:20px;
  border-radius:20px;
  text-align:center;
  box-shadow:0 4px 10px rgba(0,0,0,0.1);
}

.card img{
  width:100%;
  height:250px;
  object-fit:cover;
  border-radius:15px;
}

.card h3{
  margin-top:15px;
  color:#7b2cbf;
}

button{
  display:block;
  margin:20px auto;
  padding:12px 20px;
  border:none;
  background:#7b2cbf;
  color:white;
  border-radius:15px;
  cursor:pointer;
  font-size:16px;
}

button:hover{
  background:#5a189a;
}

.escondido{
  display:none;
}

ul{
  background:white;
  padding:25px;
  border-radius:20px;
  max-width:500px;
  margin:auto;
}

li{
  margin:10px 0;
}

#curio{
  text-align:center;
  margin-top:20px;
  font-size:20px;
  color:#5a189a;
}

footer{
  background:#5a189a;
  color:white;
  text-align:center;
  padding:20px;
}
```



 script.js

```javascript
alert("Bem-vindo ao site Mais Cientistas! 💜");

function mostrarTecnico(){
  const cursos = document.getElementById("cursosTecnicos");

  if(cursos.style.display === "block"){
    cursos.style.display = "none";
  } else{
    cursos.style.display = "block";
  }
}

function mostrarSuperior(){
  const cursos = document.getElementById("cursosSuperiores");

  if(cursos.style.display === "block"){
    cursos.style.display = "none";
  } else{
    cursos.style.display = "block";
  }
}

function mostrarCuriosidade(){

  const curiosidades = [
    "As mulheres representam milhares de cientistas no Brasil.",
    "Bertha Lutz ajudou na luta pelos direitos femininos.",
    "O Brasil possui grandes pesquisadoras na medicina e genética.",
    "Muitas meninas estão entrando nas áreas de tecnologia."
  ];

  const numero = Math.floor(Math.random() * curiosidades.length);

  document.getElementById("curio").innerHTML = curiosidades[numero];
}
```
