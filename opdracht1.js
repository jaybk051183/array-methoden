//Opdracht 1 - Array Methoden
// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

const televisieType = inventory.map((stock) => {
    return stock.name;
})

console.log(televisieType);

const televisiesUitverkocht = inventory.filter(uitverkocht => uitverkocht.originalStock === uitverkocht.sold);

console.log(televisiesUitverkocht);

const televisieambiLight = inventory.filter(ambi => ambi.ambiLight = true);

console.log(televisieambiLight);

inventory.sort((a, b) => a.price - b.price);

console.log(inventory);