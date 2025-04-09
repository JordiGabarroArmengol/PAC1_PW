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

const comic1 = new Comic(1, "Black Panther", 15, "Wakanda forever", 35, { path: "img/panther", extension: "jpg" }, 4.75, ["Reginald Hudlin"], ["T'Challa"]);

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
    this.thumbnail = new Miniatura(thumbnail.path, thumbnail.extension); //Imatge de l'heroi (objecte de la classe Miniatura)
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

const hero1 = new Hero(1,'Thor','Free Mjölnir','2023-11-20T12:00:00Z',{ path: "img/thor", extension: "png" },'/thor',['comic1', 'comic2']);

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
    if (this.comics.some(comicsItem => comicsItem.id === comic.id)) return;
    this.comics.push(comic);
  }

  removeFavorite(comicId) {
    this.comics = this.comics.filter(comicsItem => comicsItem.id !== comicId);
  }

  showFavorites() {
    return this.comics;
  }

  addMultipleFavorites(...comics) {
    for (let i = 0; i < comics.length; i++) {
      if (this.comics.some(comicsItem => comicsItem.id === comics[i].id)) return;
      this.comics.push(comics[i]);
    }
  }

  copyFavorites() {
    //const thisComicsString = JSON.stringify(this.comics)
    //const copyOfThisComics = JSON.parse(thisComicsString)

    const copyOfThisComics = structuredClone(this.comics)
    return copyOfThisComics;

  }
}

const favorites = new Favorites();
const comic2 = new Comic(2, "Iron Man", 12, "Iron suits up again", 28, { path: "img/ironman", extension: "png" }, 4.99, ["Larry Lieber"], ["Tony Stark"]);
const comic3 = new Comic(3, "Captain America", 8, "Shield in action", 30, { path: "img/cap", extension: "jpg" }, 3.5, ["Joe Simon"], ["Steve Rogers"]);
const comic4 = new Comic(4, "X-Men", 20, "Mutants unite", 40, { path: "img/xmen", extension: "png" }, 5.0, ["Chris Claremont"], ["Wolverine", "Cyclops"]);
const comic5 = new Comic(5, "Hulk", 20, "Green Power", 15, { path: "img/hulk", extension: "png" }, 5.0, ["Josh Mangor"], ["Marc Ruffalo"]);
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
favorites.addMultipleFavorites(comic2,comic3,comic5);
console.log(favorites.showFavorites());
console.log("-----------");
console.log("Lista Favorites copiada");
const copyOfFavorites = favorites.copyFavorites();
console.log(copyOfFavorites);


function findComicById(comics, targetId) {
  if (comics.length === 0) return null;
  if (comics[0].id === targetId) return comics[0];
  return findComicById(comics.slice(1), targetId);
}

console.log("-----------");
console.log("findComicById");
console.log(findComicById(favorites.showFavorites(), 5));

function calculateAveragePrice(comics) {
  if (comics.length === 0) return 0;
 return comics.reduce((total, comic) => total + comic.price, 0) / comics.length;
}

console.log("-----------");
console.log("calculateAveragePrice");
console.log(calculateAveragePrice(favorites.showFavorites()).toFixed(2));