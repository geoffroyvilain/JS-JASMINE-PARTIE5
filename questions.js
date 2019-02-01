// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/splice
//    Créer un tableau "languages" contenant "Html", "CSS", "Java", "PHP"
var languagesArrayCreation = function () {
  var languages = ['Html', 'CSS', 'Java', 'PHP'];//pour creer un tableau x = ['x', 'y', 'z']; et le créer dans une variable
  return languages;
}
//  Créer un tableau "numbers" contenant les numbers de 0 à 5
var numbersArrayCreation = function () {
  var numbers = [0, 1, 2, 3, 4, 5];   // idem pour creer un tableau pas de quote pour des chiffres
    return numbers;
}
//    Remplacer le troisième élément du tableau par "Javascript"
var ElementReplacement = function (languages) {
// x.splice(position, nombre d'élément à supprimer, et ceux par quoi on remplace)
  languages[2] = 'Javascript';  // ou languages.splice(2, 1, 'Javascript');
return languages;
}
//    Ajouter "Ruby" et "Python" à la fin du tableau
var AddElementToLanguagesArray = function (languages) {
  //push ajoute à la fin du tableau
    languages.push('Ruby', 'Python')  //autre méthode moins bien :languages.splice(5, 0, 'Ruby', 'Python');
  return languages;
}
//    Ajouter "-2" et "-1" au début du tableau numbers
var AddElementToNumbersArray = function (numbers) {
    numbers.unshift(-2, -1); // autre méthode moins bien : numbers.splice(0, 0, -2, -1);
  return numbers;
}
//  Supprimer le premier élément du tableau languages
var deleteArrayFirstElement = function (languages) {
  languages.shift()   //ne fonctionne que pour effacer le 1er élément
// autre méthode moins bien :languages.splice(0, 1);
  return languages;
}
//    Supprimer le dernier élément du tableau languages(ici 5 éléments)
var deleteArrayLastElement = function (languages) {
  languages.pop(); //supprime le dernier élément d'un tableau
//languages.splice(4, 1);
  return languages;
}
//     Faire de la chaîne "socialMediaInString" un tableau "socialMedia"
var stringToArray = function (socialMediaInString) {
var socialMedia = socialMediaInString.split(','); //éclate selon le parametre, ici un item après chaque virgule
  return socialMedia;
}
//    Faire du tableau "languages" une chaîne "languagesInString". Séparer les languages par une virgule
var arrayToString = function (languages) {
var languagesInString = languages.join(',');
//var languagesInString = languages.toString(); //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/toString
  return languagesInString;
}
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort
//    Trier le tableau "socialMedia"
var arraySort = function (socialMedia) {
  return socialMedia.sort();  //trie par ordre alphabétique
}
//    Bonus : Inverser le tableau "languages"
var arrayInvert = function (languages){
  return languages.reverse();
}
