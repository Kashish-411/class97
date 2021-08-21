
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAf8s--Dh-ccdjZLqJKvyDQiFKIMT1MEQE",
      authDomain: "kwitter-d871c.firebaseapp.com",
      databaseURL: "https://kwitter-d871c-default-rtdb.firebaseio.com",
      projectId: "kwitter-d871c",
      storageBucket: "kwitter-d871c.appspot.com",
      messagingSenderId: "702773312397",
      appId: "1:702773312397:web:4652ac43e8b947ca1b1bc4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    user_name=localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML="welcome" + user_name + "!"

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-" + Room_names)
room="<div class 'room_name' id="+ Room_names+"onclick='redirectToRoomName(this.id)'># "+ Room_names + "</div> <hr>";
document.getElementById("output").innerHTML  += row;
      //End code
      });});}
getData();
function addRoom(){
      room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child("room_name").update({
      purpose:"adding room name"
})
localStorage.setItem("room_name", room_name) 
window.location="kwitter_page.html";
}
function redirectToRoomName(name) {
      console.log(name)
      localStorage.setItem("room_name",name)
      Window.location="kwitter_page.html"
}

