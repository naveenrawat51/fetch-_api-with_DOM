let mainDiv = document.getElementById("log");

// create user profile DOM to append every time
let userProfileDOM = (name, email) => {
  let parentDiv = document.createElement("div");
  parentDiv.className = "col-md-4 cardParent";

  let innerParentDiv = document.createElement("div");
  innerParentDiv.className = "card innerParentCard";

  let profileImage = document.createElement("img");
  profileImage.className = "card-img-top img1";
  profileImage.src = "./images/profile.jpg";
  let innerParentDiv1 = document.createElement("div");
  innerParentDiv1.className = "card-body";

  let h4 = document.createElement("h4");
  h4.textContent = name;
  h4.className = "card-title h4Card";

  let p = document.createElement("p");
  p.textContent = email;
  p.className = "card-text h4Card";

  let a = document.createElement("a");
  a.textContent = "See Profile";
  a.className = "btn btn-primary a1";

  parentDiv.appendChild(innerParentDiv);
  innerParentDiv.appendChild(profileImage);
  profileImage.insertAdjacentElement("afterend", innerParentDiv1);
  innerParentDiv1.appendChild(h4);
  innerParentDiv1.appendChild(p);
  innerParentDiv1.appendChild(a);

  return parentDiv;
};

// fetch all users profile
fetch("https://jsonplaceholder.typicode.com/users")
  .then(data => data.json())
  .then(data => {
    data.forEach(userProfile => {
      mainDiv.appendChild(userProfileDOM(userProfile.name, userProfile.email));
    });
  })
  .catch(error => console.log(error));

  
  // to Search all the profiles
  let searchProfile = () => {
      let allMainCardDiv = mainDiv.getElementsByClassName("cardParent");
      let searchText = document.getElementById("myInput").value.toLowerCase();
      
      for(let i=0; i<allMainCardDiv.length; i++){
          let personNames = allMainCardDiv[i].getElementsByTagName("h4")[0].textContent;
          
          if(personNames.toLowerCase().indexOf(searchText) > -1){
            allMainCardDiv[i].style.display = "";
        } else {
            allMainCardDiv[i].style.display = "none";
          }
      }
  }
