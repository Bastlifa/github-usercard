/* Step 1: using axios, send a GET request to the following URL 
          (replacing the palceholder with your Github name):
          https://api.github.com/users/<your name>
*/



axios.get('https://api.github.com/users/Bastlifa')
  .then (response => {console.log(response.data); document.querySelector('.cards').appendChild(cardMaker(response.data))})
  .catch( error =>
    {
      console.log("Error:", error)
    })

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

const followersArray = ["tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "victusfate"
];

followersArray.forEach(follower =>
  {
    axios.get(`https://api.github.com/users/${follower}`)
      .then(response => document.querySelector(".cards").appendChild(cardMaker(response.data)))
      .catch(error => console.log(error))
  })

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

function cardMaker(userObj)
{
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  
  let usrImg = document.createElement("img");
  usrImg.src = userObj.avatar_url;
  cardDiv.appendChild(usrImg);

  let cardInfo = document.createElement("div")
  cardInfo.classList.add("card-info");
  cardDiv.appendChild(cardInfo);

  let nameH3 = document.createElement("h3");
  nameH3.classList.add("name");
  nameH3.textContent = userObj.name;
  cardInfo.appendChild(nameH3);

  let usrNameP = document.createElement("p");
  usrNameP.classList.add("username");
  usrNameP.textContent = userObj.login;
  cardInfo.appendChild(usrNameP);

  let usrLocP = document.createElement("p");
  usrLocP.textContent = `Location: ${userObj.location}`;
  cardInfo.appendChild(usrLocP);

  let usrProfA = document.createElement("a");
  usrProfA.href = userObj.html_url;
  usrProfA.textContent = userObj.html_url;

  let usrProfP = document.createElement("p");
  usrProfP.textContent = `Profile: `;
  usrProfP.appendChild(usrProfA)
  cardInfo.appendChild(usrProfP);

  let usrFollowerCountP = document.createElement("p");
  usrFollowerCountP.textContent =`Followers: ${userObj.followers}`;
  cardInfo.appendChild(usrFollowerCountP);

  let usrFollowingCountP = document.createElement("p");
  usrFollowingCountP.textContent = `Following ${userObj.following}`;
  cardInfo.appendChild(usrFollowingCountP);

  let usrBioP = document.createElement("p");
  usrBioP.textContent = `Bio: ${userObj.bio}`;
  cardInfo.appendChild(usrBioP);

  return cardDiv
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

