const source = document.getElementById("entry-template").innerHTML;
const template = Handlebars.compile(source);

const pokemons
const context = { pokemons };
const html = template(context);

console.log(html)

document.querySelector("body").innerHTML = html