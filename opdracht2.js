/*
Opdracht 2 - Elementen in de DOM plaatsen
Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!

Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
 */

let totalSold = 0;
for(let i = 0; i < inventory.length; i++){
    totalSold += inventory[i].sold;
}
console.log(totalSold);


const container = document.getElementById("tv-sold");

container.innerHTML = `
     <h3>Verkochte TV's</h3>
     <h4>${totalSold}</h4> `


let totalStock = 0;
for(let i = 0; i < inventory.length; i++){
    totalStock += inventory[i].originalStock;
}
console.log(totalStock);


const containerStock = document.getElementById("tv-stock");

containerStock.innerHTML = `
     <h3>Totaal TV's</h3>
     <h4>${totalStock}</h4> `


let expectedSold = totalStock - totalSold
const containerExpected = document.getElementById("tv-expected");

containerExpected.innerHTML = `
<h3>TV's vooraad</h3>
<h4>${expectedSold}</h4>
`

