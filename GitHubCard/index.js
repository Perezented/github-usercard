/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// resonpnse.data.avatar_url
const attachHere = document.querySelector(".cards");

axios
    .get("https://api.github.com/users/Perezented")
    .then(response => {
        console.log(response);
        // cardMaker(response);
        attachHere.append(cardMaker(response));
    })
    .catch(error => {
        console.log("ERRORZ MENG!", error);
    });
axios
    .get("https://api.github.com/users/Perezented/followers")
    .then(response => {
        console.log(response);
        cardMaker(response);
    });
// axios
//     .get("https://api.github.com/users/Perezented")
//     .then(response => {
//         console.log(response);
//         myImg.src = response.data.avatar_url;
//         name.textContent = response.data.name;
//         location.textContent = "Location: " + response.data.location;
//         profileLink.href = response.data.html_url;
//         followers.textContent = "Followers: " + response.data.followers;
//         following.textContent = "Following: " + response.data.following;
//         bio.textContent = response.data.bio;
//     })
//     .catch(error => {
//         console.log("no data", error);
//     });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
const followersArray = [];
// //creating card with class

function cardMaker(obj) {
    const card = document.createElement("div"),
        myImg = document.createElement("img"),
        cardInfo = document.createElement("div"),
        name = document.createElement("name"),
        userN = document.createElement("p"),
        gpsLoc = document.createElement("p"),
        profile = document.createElement("p"),
        profileLink = document.createElement("a"),
        followers = document.createElement("p"),
        following = document.createElement("p"),
        bio = document.createElement("p");

    card.classList.add("card");
    cardInfo.classList.add("card-info");
    name.classList.add("name");
    userN.classList.add("username");

    card.append(myImg, cardInfo);
    profile.append("Profile: ", profileLink);
    cardInfo.append(name, userN, gpsLoc, profile, followers, following, bio);

    myImg.src = obj.data.avatar_url;
    name.textContent = obj.data.name;
    userN.textContent = obj.data.login;
    gpsLoc.textContent = "Location: " + obj.data.location;
    profileLink.textContent = "{address to users github page}";
    profileLink.href = obj.data.html_url;
    followers.textContent = "Followers: " + obj.data.followers;
    following.textContent = "Following: " + obj.data.following;
    bio.textContent = obj.data.bio;

    console.log(card);
    return card;
}
cardMaker;

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
