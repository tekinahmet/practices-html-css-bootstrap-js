let user = {
  name: "John",
  age: 30,
  isAdmin: true,
  location: "New York",
  blogs: ["blog1", "blog2", "blog3"],
  login: function () {
    console.log("The user logged in");
  },
  logout() {
    console.log("The user logged out");
  },
  logBlogs() {
    //console.log(this.blogs); //this is the object user
    //console.log('this user has written these blogs: ' + this.blogs);//this user has written these blogs: blog1, blog2, blog3
    //console.log(`this user has written these blogs: ${this.blogs}`);//this user has written these blogs: blog1, blog2, blog3
    //console.log(`this user has written these blogs: ${this.blogs.join(", ")}`); //this user has written these blogs: blog1, blog2, blog3
    console.log(`this user has written these blogs: `);
    this.blogs.forEach((blog) => {
      console.log(blog);
    })
  },
};

//. notation
console.log(user); //{name: 'John', age: 30, isAdmin: true, location: 'New York', blogs: Array(3)}
console.log(user.blogs); //['blog1', 'blog2', 'blog3']
// to reach the value of a property use .notation on the object name and the property name separated by a dot .
console.log(user["location"]); //New York
console.log(user["age"]); //30
console.log(user["isAdmin"]); //true
console.log(user["blogs"]); //["blog1", "blog2", "blog3"]

//to change the value of a property
user["name"] = "Doe";
console.log(user["name"]); //Doe

const key = "name";
console.log(user[key]); //Doe

//to get the type of a variable
console.log(typeof user); //object

user.login(); //The user logged in

const name = "Mary";
console.log(name.toUpperCase()); //MARY

user.logout(); //The user logged out

user.logBlogs(); //['blog1', 'blog2', 'blog3']
//console.log(this); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
