/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const attachHere = document.querySelector(".cards");
const attachFollowingHere = document.querySelector(".cardsFollowing");
const followingHeader = document.createElement("h2");
attachFollowingHere.append(followingHeader);
const followersHeader = document.createElement("h2");
attachHere.append(followersHeader);

document.querySelectorAll("div h2").forEach(value => {
    console.log(value);
    value.style.textAlign = "center";
    value.style.fontSize = "3.5rem";
    value.style.color = "white";
    value.style.marginBottom = "1rem";
});

axios
    .get("https://api.github.com/users/Perezented")
    .then(response => {
        console.log(response);
        const attachMyCardHere = document.querySelector(".myCard");
        attachMyCardHere.append(cardMaker(response.data));
        attachMyCardHere.style.width = "70%";
        followersHeader.textContent = `Followers (${response.data.followers})`;

        followingHeader.textContent = `Following (${response.data.following})`;
    })
    .catch(error => {
        console.log("ERRORZ MENG!", error);
    });
axios
    .get("https://api.github.com/users/Perezented/followers")
    .then(response => {
        const followersArray = [];

        response.data.forEach(value => {
            followersArray.push(value.login);
            const theirName = value.login;
            axios
                .get(`https://api.github.com/users/${theirName}`)
                .then(response2 => {
                    console.log(response2);
                    attachHere.append(cardMaker(response2.data));
                })
                .catch(error => {
                    console.log("ERRORZ MENG!", error);
                });
        });
        console.log(followersArray);
    });
axios
    .get("https://api.github.com/users/Perezented/following")
    .then(response => {
        const followersArray = [];

        response.data.forEach(value => {
            followersArray.push(value.login);
            const theirName = value.login;
            axios
                .get(`https://api.github.com/users/${theirName}`)
                .then(response2 => {
                    console.log(response2);
                    attachFollowingHere.append(cardMaker(response2.data));
                })
                .catch(error => {
                    console.log("ERRORZ MENG!", error);
                });
        });
        console.log(followersArray);
    });

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

    myImg.src = obj.avatar_url;
    name.textContent = obj.name;
    userN.textContent = obj.login;
    gpsLoc.textContent = "Location: " + obj.location;
    profileLink.textContent = obj.html_url;
    profileLink.href = obj.html_url;
    followers.textContent = "Followers: " + obj.followers;
    following.textContent = "Following: " + obj.following;
    bio.textContent = obj.bio;

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
