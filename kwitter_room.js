
var firebaseConfig = {
      apiKey: "AIzaSyDNUnCBnd-hpjJYPFjYGJ4mu_9eP-U-Ja0",
      authDomain: "kwitter-5d475.firebaseapp.com",
      databaseURL: "https://kwitter-5d475-default-rtdb.firebaseio.com",
      projectId: "kwitter-5d475",
      storageBucket: "kwitter-5d475.appspot.com",
      messagingSenderId: "1081192968565",
      appId: "1:1081192968565:web:72842ccdce9be81403a33c"
    };
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_message.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_message.html";
    }