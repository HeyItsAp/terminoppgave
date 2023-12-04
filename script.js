// 

    // Universal

        //
var pathtopage = window.location.pathname
var page = pathtopage.split("/").pop();
console.log("Script connected");
console.log("Site: " + page)


// 

    // Nav

        //
function SelectHamIcon(x) {
  x.classList.toggle("change");
}
/* Set the width of the side navigation to 250px */
function openNav() {
  /* Sjekker width til viewport og justerer mysidenav width */
  let sidebarwidth = "";
  if (window.innerHeight <= 450) {
    console.log(window.innerHeight);
    sidebarwidth = "100%";
  } else {
    console.log(window.innerHeight);
    sidebarwidth = "250px";
  }


  if (document.getElementById("mySidenav").style.width == sidebarwidth) {
    console.log("already open, closing");
    closeNav();
  } else {
    document.getElementById("mySidenav").style.width = sidebarwidth;
    document.getElementById("Ham-icon-id").classList.add("change");
  }
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("Ham-icon-id").classList.remove("change");

}
window.addEventListener("click", (d) => {
  if (!d.target.matches('.Ham-icon') && !d.target.matches('.Cookie-menu')) {
    var nav_is_showing = document.getElementById("mySidenav");
    if (nav_is_showing.style.width == "250px") {
      closeNav();
    }
  }
})

// 

    // Main Game

        //



var biscuitCount = 0;
var incrementvalue = 1;
var biscuitauto = 0;
var prestige_req = 10;
var biscuitprestige = 1000;

function incrementcount() {
  biscuitCount += incrementvalue;
  UpdateBiscuitCount();
  UpdatePrestige();
}
    if (page == "index.html") {
      setInterval(() => {
        for (let element of Upgrades){
          biscuitCount += Math.round((element.value*element.antal) * 100) / 100
        }
        UpdateBiscuitCount();
        UpdatePrestige();

        console.log(biscuitCount)
      }, 1000)
      function UpdateBiscuitCount(){
        let biscuitCountElement = document.getElementById("biscuit-count");
        biscuitCountElement.innerHTML = biscuitCount;
      }
    }
function UpdateBiscuitAuto(){
  let biscuitautoElement = document.getElementById("biscuit-auto-h2");
  biscuitautoElement.innerHTML = "Biscuits per second: <span id='biscuit-auto'>0</span>";
  biscuitauto = 0;
  for (let element of Upgrades){
    let autovalue = Math.round((element.value*element.antal) * 100) / 100
    biscuitauto += autovalue
  }
  document.getElementById("biscuit-auto").innerHTML = biscuitauto;
}
function UpdatePrestige(){
  biscuitprestige = Math.round((biscuitCount/prestige_req) * 100) / 100;
  if (biscuitprestige >= 1 && !showprestigeoption.called) {
    showprestigeoption();
    document.getElementById("prestige").innerHTML = biscuitprestige;
  } else if (showprestigeoption.called){
    document.getElementById("prestige").innerHTML = biscuitprestige;
  }
}
      function showprestigeoption(){
        showprestigeoption.called = true;
        let prestigeElement = document.getElementById("prestige-menu");
        
        let prestigetext = document.createElement("p");
        prestigetext.innerHTML = "You can prestige and get: <span id='prestige'></span>";
        prestigeElement.appendChild(prestigetext);
        
        let prestige_button = document.createElement("button");
        prestige_button.setAttribute("class", "prestige-btn")
        prestige_button.innerHTML = "<span class='bold-text'> Prestige </span>";
        prestigeElement.appendChild(prestige_button);
        prestige_button.addEventListener("click", () => {
          console.log("Reset");
          showprestigeoption.called = false;
          console.log(orignalupgrade)
          Upgrades = orignalupgrade
          console.log(Upgrades);
          biscuitCount = 0;
          UpdateBiscuitCount();
          incrementvalue = 1;
          biscuitauto = 0;
          prestige_req = 10;
          biscuitprestige = 0;
          RefreshUpgradesElem();
          UpdateBiscuitAuto();
          prestigetext.remove();
          prestige_button.remove();


          
        });
      }

  // Upgrades
// Can be modified 
var Upgrades = [
  {
    navn: "Better sleep",
    headline: "Get better sleep",
    unlocked: true,
    antal: 0,
    value: 0.5,
    cost: 50,
    des: "Sleeping more makes you make more. <br><span class='bold-text'> Gain 0.5 Cookie pr second</span>"
  },
  {
    navn: "Dinner every day",
    headline: "Eat more",
    unlocked: false,
    antal: 0,
    value: 2,
    cost: 200,
    des: "With the biscuits your making, you can finally but some good food. <br><span class='bold-text'> Gain 2 Cookie pr second</span>"
  },
  {
    navn: "Education",
    headline: "Actually learn lol",
    unlocked: false,
    antal: 0,
    value: 20,
    cost: 1000,
    des: "You actually learn how to cook :skull: <br><span class='bold-text'> Gain 20 Cookie pr second</span>"
  },
  {
    navn: "Extra lessons",
    headline: "Extra steps",
    unlocked: false,
    antal: 0,
    value: 50,
    cost: 2000,
    des: "Go back to elmentary school and learn the basics <br><span class='bold-text'> Gain 50 Cookie pr second</span>"
  },
  {
    navn: "Collage",
    headline: "Big step",
    unlocked: false,
    antal: 0,
    value: 200,
    cost: 5000,
    des: "You go to Collage, your friends respect your leave and run the store <br><span class='bold-text'> Gain 200 Cookie pr second</span>"
  },
  {
    navn: "Working Graduate",
    headline: "Smart boi",
    unlocked: false,
    antal: 0,
    value: 2000,
    cost: 10000,
    des: "You come back with more knowlegde than ever before <br><span class='bold-text'> Gain 2000 Cookie pr second</span>"
  },
  {
    navn: "Political effects",
    headline: "Joe Biden",
    unlocked: false,
    antal: 0,
    value: 9,
    cost: 10,
    des: "The new political polich changes bisnis as a whole <br><span class='bold-text'> Gain 9 Cookie pr second</span>"
  },
  {
    navn: "Chance to expand",
    headline: "I'll Take it!",
    unlocked: false,
    antal: 0,
    value: 10000,
    cost: 5000000,
    des: "You buy local emptu spaces to expand <br><span class='bold-text'> Gain 9 Cookie pr second</span>"
  },
  {
    navn: "Cooperation",
    headline: "Stonks",
    unlocked: false,
    antal: 0,
    value: 200000,
    cost: 100000000,
    des: "You make deals with other bisnisess, and become one big cooperation <br><span class='bold-text'> Gain 9 Cookie pr second</span>"
  },
  {
    navn: "Mr. Biscuit WorldWide",
    headline: "Become Apple",
    unlocked: false,
    antal: 0,
    value: 200000,
    cost: 100000000,
    des: "This is the name of your offical popular World wide cookies<br><span class='bold-text'> Gain 9 Cookie pr second</span>"
  }
];

// Copy with no mods

var orignalupgrade = [
  {
    navn: "Better sleep",
    headline: "Get better sleep",
    unlocked: true,
    antal: 0,
    value: 0.5,
    cost: 50,
    des: "Sleeping more makes you make more. <br><span class='bold-text'> Gain 0.5 Cookie pr second</span>"
  },
  {
    navn: "Dinner every day",
    headline: "Eat more",
    unlocked: false,
    antal: 0,
    value: 2,
    cost: 200,
    des: "With the biscuits your making, you can finally but some good food. <br><span class='bold-text'> Gain 2 Cookie pr second</span>"
  },
  {
    navn: "Education",
    headline: "Actually learn lol",
    unlocked: false,
    antal: 0,
    value: 20,
    cost: 1000,
    des: "You actually learn how to cook :skull: <br><span class='bold-text'> Gain 20 Cookie pr second</span>"
  },
  {
    navn: "Extra lessons",
    headline: "Extra steps",
    unlocked: false,
    antal: 0,
    value: 50,
    cost: 2000,
    des: "Go back to elmentary school and learn the basics <br><span class='bold-text'> Gain 50 Cookie pr second</span>"
  },
  {
    navn: "Collage",
    headline: "Big step",
    unlocked: false,
    antal: 0,
    value: 200,
    cost: 5000,
    des: "You go to Collage, your friends respect your leave and run the store <br><span class='bold-text'> Gain 200 Cookie pr second</span>"
  },
  {
    navn: "Working Graduate",
    headline: "Smart boi",
    unlocked: false,
    antal: 0,
    value: 2000,
    cost: 10000,
    des: "You come back with more knowlegde than ever before <br><span class='bold-text'> Gain 2000 Cookie pr second</span>"
  },
  {
    navn: "Political effects",
    headline: "Joe Biden",
    unlocked: false,
    antal: 0,
    value: 9,
    cost: 10,
    des: "The new political polich changes bisnis as a whole <br><span class='bold-text'> Gain 9 Cookie pr second</span>"
  },
  {
    navn: "Chance to expand",
    headline: "I'll Take it!",
    unlocked: false,
    antal: 0,
    value: 10000,
    cost: 5000000,
    des: "You buy local emptu spaces to expand <br><span class='bold-text'> Gain 9 Cookie pr second</span>"
  },
  {
    navn: "Cooperation",
    headline: "Stonks",
    unlocked: false,
    antal: 0,
    value: 200000,
    cost: 100000000,
    des: "You make deals with other bisnisess, and become one big cooperation <br><span class='bold-text'> Gain 9 Cookie pr second</span>"
  },
  {
    navn: "Mr. Biscuit WorldWide",
    headline: "Become Apple",
    unlocked: false,
    antal: 0,
    value: 200000,
    cost: 100000000,
    des: "This is the name of your offical popular World wide cookies<br><span class='bold-text'> Gain 9 Cookie pr second</span>"
  }
];


function RefreshUpgradesElem(){
  let upgradeelements = document.querySelectorAll("div.upgrade");
  for (let index = 0; index < upgradeelements.length; index++){
    upgradeelements[index].remove();
  } 
  for (let element of Upgrades){
    if (element.unlocked == true){
      CreateUpgrade(element)
    }
  }
}
if (page == "index.html"){
  RefreshUpgradesElem();
  UpdateBiscuitCount();

}

function CreateUpgrade(element) {
  let Upgrade_div = document.createElement("div")
    Upgrade_div.setAttribute("id", "Upgrade-" + element.navn)
    Upgrade_div.setAttribute("class", "upgrade")
    document.getElementById("The-upgrades-menu").appendChild(Upgrade_div)
    
    let upgradeheadline = document.createElement("div")
      upgradeheadline.setAttribute("class", "upgradeheadline")
      upgradeheadline.setAttribute("id", "upgradeheadline-" + element.navn)
      document.getElementById("Upgrade-" + element.navn).appendChild(upgradeheadline)
      
      let Upgrade_h2 = document.createElement("h2")
        Upgrade_h2.innerHTML = element.navn
        document.getElementById("upgradeheadline-" + element.navn).appendChild(Upgrade_h2)
      let Upgrade_des = document.createElement("p")
        Upgrade_des.innerHTML = element.des
        Upgrade_des.setAttribute("id", "iteminfo")
        document.getElementById("upgradeheadline-" + element.navn).appendChild(Upgrade_des)
    let Upgrade_buy_button = document.createElement("button")
      Upgrade_buy_button.innerHTML = element.headline + "<br>Pris: <span id='price-"+ element.navn + "'>" + element.cost + "</span><br>Antal: <span id='antal-" + element.navn + "'>" + element.antal + "</span>";
      document.getElementById("Upgrade-" + element.navn).appendChild(Upgrade_buy_button)
      Upgrade_buy_button.addEventListener("click", () => {
        console.log("Click")
        if (biscuitCount >= element.cost){
          // Neste upgrade unlocked
          let currentUpgrade = Upgrades.indexOf(element);
          if (Upgrades[currentUpgrade+1] != undefined){
            Upgrades[currentUpgrade+1]["unlocked"] = true;
          }
          console.log("Nothing 2")

          RefreshUpgradesElem();
          // Oppdater text og data
          biscuitCount = biscuitCount - element.cost
          element.antal++;
          element.cost = Math.round(element.cost *1.15);
          UpdateBiscuitCount();
          UpdateBiscuitAuto();
          document.getElementById("price-" + element.navn).innerHTML = element.cost
          document.getElementById("antal-" + element.navn).innerHTML = element.antal

          
   
          return document.getElementById("upgrade-info").innerHTML = "";

          

        } else {
          console.log(biscuitCount, element.cost, element.antal);
          // return document.getElementById("upgrade-info").innerHTML = "You dont have enough money";
          alert("You dont have enough Biscuit");
          return
        }



    })
      // Example:
      // <div class="upgrade">
      //   <div class="upgradeheadline">
      //       <h2> More sleep</h2>
      //       <p> Sleeping more makes you make more <span class="bold-text"> Gain 0.1 Cookie pr second</span></p>
      //   </div>
      //   <button onclick="buy()">Get more sleep<br>Pris: <span id="price">12</span><br>Antal: <span id="antal">0</span></button>
      // </div>
}




// 

    // Items

        //
  

// Items Data  
var items = [
  //<span class='bold-text'></span> For bold text

  // Trash tier items
  // Fix us
  {
    navn: "Disabled Kid",
    Rarity: "Trash",
    beskrivelse: "Poor guy <br><span class='bold-text'> Already Disabled. Nothing. </span>", // Span for bold text
    Obtained: true,
  },
  {
    navn: "Sakura (Fra Naurto)",
    Rarity: "Trash",
    beskrivelse: "Annoying Customer <br><span class='bold-text'> -10 Biscuit pr Second </span>", // Span for bold text
    Obtained: true,
  },
  {
    navn: "Santa Claus",
    Rarity: "Trash",
    beskrivelse: "Sadly, did not come to give gifts. <br> <span class='bold-text'> -10 Biscuit pr Second </span>", // Span for bold text
    Obtained: true,
  },
  
  // Rare items
  {
    navn: "Black hole",
    Rarity: "Rare",
    beskrivelse: "You learned how to refine energy and able to extract the energy of a black hole. <br><span class='bold-text'> + 25 biscuit pr Second.</span>", // Span for bold text
    Obtained: true,
  },
  {
    navn: "Skibidi Toilet",
    Rarity: "Rare",
    beskrivelse: "Premium Toilet <br><span class='bold-text'> + 10 biscuit pr Click </span>", // Span for bold text
    Obtained: true,
  }, 
  {
    navn: "Whip from the good old times.",
    Rarity: "Rare",
    beskrivelse: "The best motivator for any type of workplace. <br><span class='bold-text'> + 10 biscuit pr Click </span>", // Span for bold text
    Obtained: true,
  }, 
  {
    navn: "Chainsaw man",
    Rarity: "Rare",
    beskrivelse: "Honest worker, but dumb. <br><span class='bold-text'> + 25 biscuit pr Second </span>", // Span for bold text
    Obtained: true,
  }, 
  {
    navn: "W Rizz.",
    Rarity: "Rare",
    beskrivelse: "W Rizz. <br><span class='bold-text'> + 25 biscuit pr Second</span>", // Span for bold text
    Obtained: true,
  }, 
  {
    navn: "Creator's Mother",
    Rarity: "Rare",
    beskrivelse: "How the hell is my mom in the game? <br><span class='bold-text'> + 10 biscuit pr Click </span>", // Span for bold text
    Obtained: true,
  },
  // Epic items
  {
    navn: "H Magnus H",
    Rarity: "Epic",
    beskrivelse: "Add him on Epic Games. <br><span class='bold-text'> + 200 biscuit pr Second </span>", // Span for bold text
    Obtained: true,
  },
  {
    navn: "Dad's Milk",
    Rarity: "Epic",
    beskrivelse: "Your dad came home with premium milk. <br><span class='bold-text'> + 200 biscuit pr second. </span>", // Span for bold text
    Obtained: true,
  },
  {
    navn: "Water bending",
    Rarity: "Epic",
    beskrivelse: "Avatar reference. <br><span class='bold-text'> + 100 biscuit pr click </span>", // Span for bold text
    Obtained: true,
  },
  // Legendary 
  {
    navn: "Ni-ho-di",
    Rarity: "Legendary",
    beskrivelse: "Good job. You won. <br><span class='bold-text'> 50000 biscuit pr Click </span>", // Span for bold text
    Obtained: true,
  },
  {
    navn: "Life",
    Rarity: "Legendary",
    beskrivelse: "You finally go outside <br><span class='bold-text'> 1000000 biscuit pr second </span>", // Span for bold text
    Obtained: true,
  }
]
if (page == "items.html") {
  function CreateItem(element) {
    let Item_div= document.createElement("div")
    Item_div.setAttribute("id", "Item-" + element.navn)
    Item_div.setAttribute("class", "item-container")
    document.getElementById("items").appendChild(Item_div)

      let Item_h2 = document.createElement("h2")
      Item_h2.innerHTML = element.navn
      document.getElementById("Item-" + element.navn).appendChild(Item_h2)

      let Item_des = document.createElement("p")
      Item_des.innerHTML = element.beskrivelse
      Item_des.setAttribute("id", "iteminfo")
      document.getElementById("Item-" + element.navn).appendChild(Item_des)
      let Item_rarity = document.createElement("p")
      Item_rarity.innerHTML = element.Rarity
      Item_rarity.setAttribute("id", "iteminfo")
      document.getElementById("Item-" + element.navn).appendChild(Item_rarity)

      let Item_checkbox_div = document.createElement("div")
      Item_checkbox_div.setAttribute("id", "Item-" + element.navn + "2")
      Item_checkbox_div.setAttribute("class", "form-check form-switch d-flex align-items-center p-0 ms-5 ms-5 justify-content-center")
      document.getElementById("Item-" + element.navn).appendChild(Item_checkbox_div)

        let Item_checkbox= document.createElement("input")
        Item_checkbox.setAttribute("class", "form-check-input text-success")
        Item_checkbox.setAttribute("type", "checkbox")
        Item_checkbox.setAttribute("name", "x1") // Do be determined later
        Item_checkbox.setAttribute("checked", "") // Do be determined later
        document.getElementById("Item-" + element.navn + "2").appendChild(Item_checkbox)

        let Item_label= document.createElement("label")
        Item_label.setAttribute("class", "form-check-label fs-5 text-black ms-2")
        Item_label.setAttribute("for", "x1") // Do be determined later
        Item_label.innerHTML = "Disable or Enable"
        document.getElementById("Item-" + element.navn + "2").appendChild(Item_label)

      // Eksempel: 
      // <div class="item-container" id="daidwidwa">
      //   <h2> Your MOm </h2>
      //   <img src="#" alt="YourMom">
      //   <p> Rarity </p>

      //   <p id="iteminfo"> Your mom is helpful. <span class="bold-text"> Gain 1 cookie per second </span></p>
      //     <div class="form-check form-switch d-flex align-items-center p-0 ms-5 ms-5 justify-content-center" >
      //       <input class="form-check-input text-success" type="checkbox" name="x1" checked>
      //       <label class="form-check-label fs-5 text-black ms-2" for="x1"> Disable or Enable </label>
      //     </div>
      // </div>
  }
  for (let element of items) {
      if (element.Obtained == true){
        console.log(element.navn + " = true")
        CreateItem(element)
      } else {
        console.log(element.navn + " = false")
      }
  }
}
// 

    // Summons

        //
let Summonreq = 10;
document.getElementById("Stats").innerHTML = "You have: " + biscuitprestige + " BP <br> For one summon: " + Summonreq + " BP <br>";
function pullItem(){
  if (biscuitprestige >= Summonreq){
  biscuitprestige - Summonreq;
  document.getElementById("Stats").innerHTML = "You have: " + biscuitprestige + " BP <br> For one summon: " + Summonreq + " BP <br>";

  // Reset
    document.getElementById("result-text").style.display = 'none';
    document.getElementById("result-text").innerHTML = '';
    document.getElementById('result-text').className = '';
  
  const Rarity_array = pullRarity();

  console.log(Rarity_array)
  if (Rarity_array.length == 1) {
    var random_index = 0;
  } else {
    var random_index = Math.floor(Math.random() * Rarity_array.length);
  }
  var random_index = Math.floor(Math.random() * Rarity_array.length);
  document.getElementById("pull-button").style.display = 'none';
  // Display result
  var video = document.createElement("video");
    video.setAttribute("autoplay", "");
    video.setAttribute("id", "video");
    document.getElementById("result").appendChild(video);
      let source = document.createElement("source");
      source.setAttribute("type", "video/mp4");
        if (Rarity_array[random_index].Rarity === "Trash"){
          console.log("TRash");
          source.setAttribute("src", "Medium/3star_animation.mp4");
        }  else if (Rarity_array[random_index].Rarity === "Rare"){
          console.log("Rare");
          source.setAttribute("src", "Medium/3star_animation.mp4");
        }  else if (Rarity_array[random_index].Rarity === "Epic"){
          console.log("Epic");
          source.setAttribute("src", "Medium/4star_animation.mp4");
        }  else if (Rarity_array[random_index].Rarity === "Legendary"){
          console.log("Legedary");
          source.setAttribute("src", "Medium/5star_animation.mp4");
        }
        video.appendChild(source);
    // Prevent scrolling
    document.body.style.height = "100%"
    document.body.style.overflow = "hidden"
    

    video.addEventListener('ended', () => {
      // Ending
      document.getElementById("pull-button").style.display = 'block';
      let videoElement = document.getElementById("video");
      videoElement.remove();
      document.getElementById("result-text").style.display = 'block';
      document.getElementById("result-text").innerHTML = 'You got: ' + Rarity_array[random_index].navn + '.<br> Rarity: ' + Rarity_array[random_index].Rarity;
      document.getElementById('result-text').className = 'animation';
      document.body.style.height = "auto"
      document.body.style.overflow = "auto"
    });
    video.addEventListener('play', function() {
      // Try to request fullscreen when the video starts playing
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
      }
    });

  } else { 
    document.getElementById("Error-msg").innerHTML = 'Not enough';
  }
 
}

function pullRarity() {

  // Random number generator
  const randomNumber = Math.random() * 100;
  
  const trashProbability = 60;
  const rareProbability = 35;
  const epicProbability = 4;
  const LegendaryProbability = 1;
  if (randomNumber < trashProbability){
    return items.filter(items => items.Rarity === "Trash");
  } else if (randomNumber <= (rareProbability + trashProbability)) {
    return items.filter(items => items.Rarity === "Rare");
  } else if (randomNumber <= (rareProbability + epicProbability + trashProbability)) {
    return items.filter(items => items.Rarity === "Epic");
  } else if (randomNumber <= (rareProbability + epicProbability + trashProbability + LegendaryProbability)){
    return items.filter(items => items.Rarity === "Legendary");
  }
}

