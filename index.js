// const padlOrel = Math.random() < 0.5;

// const vysledek = document.querySelector (".vysledek")

// vysledek.textContent = {
// if (padlOrel) {
//     "Padl orel"// Nahraďte text pro orla
//   } else {
//     "Padla panna"// Nahraďte text pro pannu
//   }}

// const stranaMince = document.querySelector(".mince")

// stranaMince = {
//     if (padlOrel) {stranaMince.classList.add(mince--orel)
//     } else {
//      stranaMince.classList.add(mince--panna)
// }



// Vybereme prvek s třídou "vysledek" a uložíme ho do proměnné "vysledek"
const vysledek = document.querySelector('.vysledek');

// Vybereme prvek s třídou "mince" a uložíme ho do proměnné "mince"
const mince = document.querySelector('.mince');

// Vytvoříme proměnnou "padlOrel" a přiřadíme jí náhodnou hodnotu true nebo false
// Math.random() vrací číslo mezi 0 a 1, pokud je menší než 0.5, bude "padlOrel" true (padl orel)
const padlOrel = Math.random() < 0.5;

// Podmínka: pokud "padlOrel" je true (padl orel)
if (padlOrel) {
  // Změníme text obsahu prvku "vysledek" na "Padl orel"
  vysledek.textContent = 'Padl orel';
  // Přidáme k prvku "mince" třídu "mince--orel" pro zobrazení orla
  mince.classList.add('mince--orel');
} else {
  // Pokud "padlOrel" není true (padla panna), nastavíme text na "Padla panna"
  vysledek.textContent = 'Padla panna';
  // Přidáme k prvku "mince" třídu "mince--panna" pro zobrazení panny
  mince.classList.add('mince--panna');
}