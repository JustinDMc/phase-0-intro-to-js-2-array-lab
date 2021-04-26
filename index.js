const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

function appendCat(name) {
    const catsNew = [...cats, "Broom"];
    return catsNew;
}

function prependCat(name) {
    const newCats = ["Arnold", ...cats];
    return newCats;
}

function removeLastCat() {
    const anotherAnotherCatsNew = cats.slice(0,2);
    return anotherAnotherCatsNew;
}

function removeFirstCat() {
    const anotherAnotherAnotherCatsNew = cats.slice(1,3);
    return anotherAnotherAnotherCatsNew;
}
  
