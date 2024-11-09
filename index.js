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


// =================
// Zadani:
// Hod mincí
// Vytvořte si repozitář ze šablony cviceni-hod-minci. Repozitář obsahuje stránku s nedokončenou simulací hodu mince. Vaším úkolem bude mincí „hodit“.

// 1. V souboru index.js si do proměnné padlOrel uložte hodnotu true nebo false na základě náhodné hodnoty z funkce Math.random(). Pravděpodobnost 50:50 zajistíte porovnáním výsledku funkce s hodnotou 0.5.

// const padlOrel = Math.random() < 0.5;
// 2. Pomocí document.querySelector vyberte ze stránky prvek .vysledek a nahraďte jeho obsah textem Padl orel nebo Padla panna na základě náhodné hodnoty z předchozího kroku.

// if (padlOrel) {
//   // Nahraďte text pro orla
// } else {
//   // Nahraďte text pro pannu
// }
// 3. Vyzkoušejte stránku několikrát načíst a koukněte, jestli se text mění.

// 4. Kromě změny textu ještě přidejte prvku .mince druhou třídu mince--orel nebo mince--panna opět podle hodnoty v proměnné padlOrel.

// 5. Znovu několikrát vyzkoušejte, že obrázek mince odpovídá textu pod ním.
// =================

// // Vybereme prvek s třídou "vysledek" a uložíme ho do proměnné "vysledek"
// const vysledek = document.querySelector('.vysledek');

// // Vybereme prvek s třídou "mince" a uložíme ho do proměnné "mince"
// const mince = document.querySelector('.mince');

// // Vytvoříme proměnnou "padlOrel" a přiřadíme jí náhodnou hodnotu true nebo false
// // Math.random() vrací číslo mezi 0 a 1, pokud je menší než 0.5, bude "padlOrel" true (padl orel)
// const padlOrel = Math.random() < 0.5;

// // Podmínka: pokud "padlOrel" je true (padl orel)
// if (padlOrel) {
//   // Změníme text obsahu prvku "vysledek" na "Padl orel"
//   vysledek.textContent = 'Padl orel';
//   // Přidáme k prvku "mince" třídu "mince--orel" pro zobrazení orla
//   mince.classList.add('mince--orel');
// } else {
//   // Pokud "padlOrel" není true (padla panna), nastavíme text na "Padla panna"
//   vysledek.textContent = 'Padla panna';
//   // Přidáme k prvku "mince" třídu "mince--panna" pro zobrazení panny
//   mince.classList.add('mince--panna');
// }

// Reseni dle lektora:
const vysledek = document.querySelector('.vysledek');
const mince = document.querySelector('.mince');

const padlOrel = Math.random() < 0.5;

if (padlOrel) {
  vysledek.textContent = 'Padl orel';
  mince.classList.add('mince--orel');
} else {
  vysledek.textContent = 'Padla panna';
  mince.classList.add('mince--panna');
}