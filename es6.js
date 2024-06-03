// Template Literal
function fullname(fname, lname) {
  return `Welcome ${lname}, ${fname} 😊!!!`;
}
console.log(fullname("vaishnavi", "gundlapally"));
// This is interpolation (substitution)
//Multi line string
function movieUrl(domain, genre, year) {
  return "http://" + domain + "?genere=" + genre + "&year=" + year;
}
console.log(movieUrl("imdb.com", "thriller", 2020));

const movieUr = (domain, genre, year) =>
  `http://${domain}?genere=${genre}&year=${year}`;
console.log(movieUr("imdb.com", "thriller", 2020));

//Destructuring
var [t1, t2, t3 = 80] = [100, 200, null]; //null is also a value
console.log(t1, t2, t3);
// output is 100,200,null
var [,t, g, r = 80] = [100, 200, null]; //Holes --> to skip the values
console.log(t, g, r);
var [t1, , t2, t3 = 80] = [100, 200, null]; 
console.log(t1, t2, t3);

// object destructuring:
const avengers ={
    name: "tony stark",
    house:"🏘️",
    networth: "💰",
};
console.log(name);
console.log(networth);
// or u can do
const {name, networth,power}=avengers;

