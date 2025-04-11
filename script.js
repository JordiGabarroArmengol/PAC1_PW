class Comic {
  constructor(
    id,
    title,
    issueNumber,
    description,
    pageCount,
    thumbnail,
    price,
    creators,
    characters
  ) {
    this.id = id; //Identificador únic del còmic
    this.title = title; // Títol de còmic
    this.issueNumber = issueNumber; //Número de l'edició del còmic
    this.description = description; //Descripció del còmic
    this.pageCount = pageCount; //Número de pàgines
    this.thumbnail = new Thumbnail(thumbnail.path, thumbnail.extension); //Imatge del còmic (objecte de la classe Thumbnail)
    this.price = price; //Preu del còmic (únic)
    this.creators = creators; //Informació dels creadors
    this.characters = characters; //Llista de personatges
  }

  getThumbnailURL() {
    return this.thumbnail.getUrl(); //Accedim a l'objecte thumbnail i al seu mètode getUrl per obtenir la ruta de la imatge del còmic
  }
}

class Thumbnail {
  constructor(path, extension) {
    this.path = path; //Ruta de la imatge
    this.extension = extension; //Extensió de la imatge
  }

  getUrl() {
    return `${this.path}.${this.extension}`; //Creem un mètode que retorni la ruta de la imatge amb la seva extenció i afegim un '.'
  }
}

//---Exemple conforme la classe Comic i Thumbnail funcionen OK---

const comic1 = new Comic(
  1,
  "Black Panther",
  15,
  "Wakanda forever",
  35,
  { path: "img/panther", extension: "jpg" },
  4.75,
  ["Reginald Hudlin"],
  ["T'Challa"]
);

console.log(comic1.id);
console.log(comic1.title);
console.log(comic1.issueNumber);
console.log(comic1.description);
console.log(comic1.pageCount);
console.log(comic1.thumbnail);
console.log(comic1.price);
console.log(comic1.creators);
console.log(comic1.characters);
console.log(comic1.thumbnail.path);
console.log(comic1.thumbnail.extension);
console.log(comic1.thumbnail.getUrl());
console.log(comic1.getThumbnailURL());
console.log("-----------");

class Hero {
  constructor(id, name, description, modified, thumbnail, resourceUrl, comics) {
    this.id = id; //Identificador únic de l'heroi
    this.name = name; // Nom del heroi
    this.description = description; //Descripció de l'heroi
    this.modified = modified; //Data de la darrera modificació de les dades
    this.thumbnail = new Miniatura(thumbnail.path, thumbnail.extension); //Imatge de l'heroi (objecte de la classe Miniatura). Miniatura és la mateixa classe que Thumbnail, seria més eficiant borrar-la i apuntar a Thumbnail
    this.resourceUrl = resourceUrl; //Url de l'heroi a l'API de Marvel
    this.comics = comics; //Array amb llista de còmics en que l'heroi apareix
  }

  getThumbnailURL() {
    return this.thumbnail.getUrl(); //Accedim a l'objecte thumbnail i al seu mètode getUrl per obtenir la ruta de la imatge del còmic
  }
}

class Miniatura {
  constructor(path, extension) {
    this.path = path; //Ruta de la imatge
    this.extension = extension; //Extensió de la imatge
  }

  getUrl() {
    return `${this.path}.${this.extension}`; //Creem un mètode que retorni la ruta de la imatge amb la seva extenció i afegim un '.'
  }
}

//---Exemple conforme la classe Hero i Miniatura funcionen OK---

const hero1 = new Hero(
  1,
  "Thor",
  "Free Mjölnir",
  "2023-11-20T12:00:00Z",
  { path: "img/thor", extension: "png" },
  "/thor",
  ["comic1", "comic2"]
);

console.log(hero1.id);
console.log(hero1.name);
console.log(hero1.description);
console.log(hero1.modified);
console.log(hero1.thumbnail);
console.log(hero1.resourceUrl);
console.log(hero1.comics);
console.log(hero1.thumbnail.path);
console.log(hero1.thumbnail.extension);
console.log(hero1.thumbnail.getUrl());
console.log(hero1.getThumbnailURL());
console.log("-----------");

class Favorites {
  constructor() {
    this.comics = [];
  }

  addFavorite(comic) {
    //Afegeix un còmic a la llista de favorits.
    if (this.comics.some((comicsItem) => comicsItem.id === comic.id)) return; //El mètode some comprova si almenys un valor de l'array ja existeis. D'aquesta manera comprovem si ja existeix un cómic amb aquella id per no tenir duplicats
    this.comics.push(comic); //Si no exiteix, l'afegim amb el mètode push
  }

  removeFavorite(comicId) {
    //Elimina un còmic de la col·lecció de favorits pel seu ID.
    this.comics = this.comics.filter((comicsItem) => comicsItem.id !== comicId); //Amb el mètode filter, creem un nou array sense afegir el còmic que conté la id que volem esborrar
  }

  showFavorites() {
    //Mostra tots els còmics a la llista de favorits.
    return this.comics; //retornem l'array de comics favorits
  }

  addMultipleFavorites(...comics) {
    //Afegeix múltiples còmics a la llista de preferits utilitzant l'operador rest.
    for (let i = 0; i < comics.length; i++) {
      //Fem un bucle per saber quans comics conté l'operador rest
      if (!this.comics.some((comicsItem) => comicsItem.id === comics[i].id)) {
        //Un if per comprovar si el cómic que volem afegir, ja existeix
        this.comics.push(comics[i]); //Si no exiteix, l'afegim amb el mètode push
      }
    }
  }

  copyFavorites() {
    //Realitza una còpia de la col·lecció de favorits donada.
    const copyOfThisComics = structuredClone(this.comics); //Creem una copia independent amb el mètode structuredClone. Al utilitzar aquest mètode, si modifiquem la copia, el original no es moddificarà. Informació extreta del web https://midu.dev/como-clonar-un-array-en-javascript/
    return copyOfThisComics; //Retornem el nou array amb els comics copiats
  }
}

//---Exemple conforme la classe Favorites funciona OK---
const favorites = new Favorites();
const comic2 = new Comic(
  2,
  "Iron Man",
  12,
  "Iron suits up again",
  28,
  { path: "img/ironman", extension: "png" },
  4.99,
  ["Larry Lieber"],
  ["Tony Stark"]
);
const comic3 = new Comic(
  3,
  "Captain America",
  8,
  "Shield in action",
  30,
  { path: "img/cap", extension: "jpg" },
  3.5,
  ["Joe Simon"],
  ["Steve Rogers"]
);
const comic4 = new Comic(
  4,
  "X-Men",
  20,
  "Mutants unite",
  40,
  { path: "img/xmen", extension: "png" },
  5.0,
  ["Chris Claremont"],
  ["Wolverine", "Cyclops"]
);
const comic5 = new Comic(
  5,
  "Hulk",
  20,
  "Green Power",
  15,
  { path: "img/hulk", extension: "png" },
  5.0,
  ["Josh Mangor"],
  ["Marc Ruffalo"]
);
favorites.addFavorite(comic1);
favorites.addFavorite(comic2);
favorites.addFavorite(comic3);
console.log(favorites);
console.log("-----------");
favorites.removeFavorite(comic2.id);
console.log(favorites);
console.log("-----------");
favorites.addFavorite(comic4);
console.log(favorites);
console.log("-----------");
favorites.removeFavorite(comic3.id);
console.log(favorites);
console.log("-----------");
console.log("Lista Favorites");
console.log(favorites.showFavorites());
console.log("-----------");
console.log("Lista Favorites Multiple add");
favorites.addMultipleFavorites(comic2, comic3, comic5);
console.log(favorites.showFavorites());
console.log("-----------");
console.log("Lista Favorites copiada");
const copyOfFavorites = favorites.copyFavorites();
console.log(copyOfFavorites);

function findComicById(comics, targetId) {
  //Funció recursiva que cerqui un còmic dins d'una llista de còmics preferits pel seu ID.
  if (comics.length === 0) return null; //Si el array de comics que passem està buida, retornem null
  if (comics[0].id === targetId) return comics[0]; //Si el primer comic de array ja es el que busquem, el retornem.
  return findComicById(comics.slice(1), targetId); //Si el primer no és el que busquem, tornem a cridar la funció però passant el array eliminant el comic de la posició amb el mètode slice
}
//---Exemple conforme la funció findComicById funciona OK---
console.log("-----------");
console.log("findComicById");
console.log(findComicById(favorites.showFavorites(), 5));

function calculateAveragePrice(comics) {
  //Funció que calcula el preu mitjà d'una col·lecció de còmics
  if (comics.length === 0) return 0; //Si el array de comics que passem està buida, retorna el preu com a 0
  return (
    comics.reduce((total, comic) => total + comic.price, 0) / comics.length //Anem sumant el preu acumulat amb el mètode reduce i dividim amb el número total de còmics
  );
}
//---Exemple conforme la funció calculateAveragePrice funciona OK---
console.log("-----------");
console.log("calculateAveragePrice");
console.log(calculateAveragePrice(favorites.showFavorites()).toFixed(2));

function addMultipleFavorites(aFavorites, ...comics) {
  //Afegeix múltiples còmics a la llista de preferits utilitzant l'operador rest.
  for (let i = 0; i < comics.length; i++) {
    //Fem un bucle per saber quans comics conté l'operador rest
    if (!aFavorites.some((comicsItem) => comicsItem.id === comics[i].id)) {
      //Un if per comprovar si el cómic que volem afegir, ja existeix
      aFavorites.push(comics[i]); //Si no exiteix, l'afegim amb el mètode push
    }
  }
}

//---Exemple conforme la funció addMultipleFavorites funciona OK---
console.log("-----------");
console.log("addMultipleFavorites Funció");
const favorites2 = new Favorites();
addMultipleFavorites(favorites2.comics, comic2, comic3, comic5);
console.log(favorites2.showFavorites());

function copyFavorites(favoritesArray) {
  //Funció que faci una còpia d'una col·lecció de preferits donats utilitzant l'operador spread.
  return [...favoritesArray]; //Creem una còpia superficial de l'array amb el mètode spread. En aquest cas, a diferència del mètode de classe, si modifiquem el array copiat, també modificarem l'original.
}
//---Exemple conforme la funció copyFavorites funciona OK---
console.log("-----------");
console.log("copyFavorites Funció");
const copiedFavorites = copyFavorites(favorites2.showFavorites());
console.log(copiedFavorites);

function getAffordableComicTitles(comics, maxPrice) {
  //Funció que retorna un array amb els títols dels còmics que es poden comprar dins d'un pressupost
  return comics
    .filter((comic) => comic.price <= maxPrice) //Filtrem els còmics que tenen el preu per sota del pressupost
    .map((comic) => comic.title); //Només ens quedem amb el Title del còmic
}

console.log("-----------");
console.log("getAffordableComicTitles Funció");
console.log(getAffordableComicTitles(favorites2.showFavorites(), 4.75));
