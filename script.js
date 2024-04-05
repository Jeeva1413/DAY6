//  TASK 1
//The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:
//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
class Movie{
    constructor(tittle,studio,rating){
        this.tittle=tittle;
        this.studio=studio;
        this.rating=rating;
    }
}
const mov=new Movie("captain miller","sathya jyothi","8");
console.log(mov.tittle,mov.studio,mov.rating);

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class Movies{
    constructor(tittle,studio,rating="PG"){
        this.tittle=tittle;
        this.studio=studio;
        this.rating=rating;
    }
}
const mov1=new Movies("singapore saloon","red giant");
console.log(mov1.tittle,mov1.studio,mov1.rating);

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
class NewMovie{
    constructor(tittle,studio,rating){
        this.tittle=tittle;
        this.studio=studio;
        this.rating=rating;
    }
     static getPg (moviee){
            let out=moviee.filter(Movie=>Movie.rating === "PG");
            return out;

     } 

}
   let movie1 = new NewMovie("leo","7 screen studio","8");
   let movie2 = new NewMovie("captain miller","sathya jyothi","PG");
   let movie3= new NewMovie("singapore saloon","red giant","PG");
   let movie4=new NewMovie("jailar","sathya studio","7.6");
    let movie5=new NewMovie("singam","gemini studio","PG");
let moviearray=[movie1,movie2,movie3,movie4,movie5];
let pgmovies = NewMovie.getPg(moviearray);
console.log(pgmovies);

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
   class MovieName{
    constructor(tittle,studio,rating){
        this.tittle=tittle;
        this.studio=studio;
        this.rating=rating;
    }
   }
   const moviesname= new MovieName("Casino Royal","Eon Productions","PG13");
   console.log(moviesname.tittle,moviesname.studio,moviesname.rating);
  // 2.Convert the UML diagram to Typescript class. - use number for double 
  class Circle{
    constructor (radius,color){
        this.radius=radius;
        this.color=color;
    }
    get Radius(){
        return this.radius
    }
    set Radius(n){
        this.radius=n;
    }
    get Color(){
        return this.color;
    }
    set Color(c){
        this.color=c;
    }
    get toString(){
        return`Circcle"[radius=${this.radius}, color=${this.color}]"`
    }
    get area(){
        return Math.PI*Math.pow(this.radius,2)
    }
    get circumferance(){
        return 2*Math.PI*this.radius
    }
  }
let obj1= new Circle(1.0,"red")
console.log(obj1.Color);
console.log(obj1.Radius);
console.log(obj1.toString);
console.log(obj1.area);
console.log(obj1.circumferance);
 //3 Write a “person” class to hold all the details.
class Person{
    constructor(name,age,gender,martialstatus,contact,email){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.martialstatus=martialstatus;
        this.contact=contact;
        this.email=email;
     
    }
}
const obj=new Person("jeeva","26","female","married","9876543210","jeevacs1413@gmail.com");
console.log(obj.name,obj.age,obj.email,obj.gender,obj.martialstatus,obj.contact);


//4 write a class to calculate the Uber price.
class UberPrice {
    constructor(distance, duration, baseFare, costPerMile, costPerMinute) {
      this.distance = distance;
      this.duration = duration;
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
    }
  
    totalPrice() {
      return this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute);
    }
  }
  
  const myUber = new UberPrice(5, 10, 60, 14, 2);
  console.log(myUber.totalPrice());