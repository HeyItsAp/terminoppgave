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
UpdateBiscuitCount();
var incrementvalue = 1;
var biscuitauto = 0;
var prestige_req = 10;
var biscuitprestige = 0;

function incrementcount() {
  biscuitCount += incrementvalue;
  UpdateBiscuitCount();
  UpdatePrestige();
}
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
let DidPrestigeshow = false;
function UpdatePrestige(){
  biscuitprestige = Math.round((biscuitCount/prestige_req) * 100) / 100;
  if (biscuitprestige >= 1 && !DidPrestigeshow){
    showprestigeoption();
    DidPrestigeshow = true;
  }
  document.getElementById("prestige").innerHTML = biscuitprestige;
}
      function showprestigeoption(){
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
          biscuitCount = 0;
          UpdateBiscuitCount();
          incrementvalue = 1;
          biscuitauto = 0;
          prestige_req = 10;
          biscuitprestige = 0;
          Upgrades = [
            {
              navn: "Better sleep",
              headline: "Get better sleep",
              unlocked: true,
              antal: 0,
              value: 1,
              cost: 1,
              des: "Sleeping more makes you make more. <br><span class='bold-text'> Gain 0 Cookie pr second</span>"
            },
            {
              navn: "Dinner every day",
              headline: "Eat more",
              unlocked: false,
              antal: 0,
              value: 1,
              cost: 50,
              des: "With the biscuits your making, you can finally but some good food. <br><span class='bold-text'> Gain 1 Cookie pr second</span>"
            },
            {
              navn: "Education",
              headline: "Actually learn lol",
              unlocked: false,
              antal: 0,
              value: 10,
              cost: 20,
              des: "You actually learn how to cook :skull: <br><span class='bold-text'> Gain 10 Cookie pr second</span>"
            },
          ];
          RefreshUpgradesElem();
          UpdateBiscuitAuto();

          
        });
      }

  // Upgrades 
var Upgrades = [
  {
    navn: "Better sleep",
    headline: "Get better sleep",
    unlocked: true,
    antal: 0,
    value: 1,
    cost: 1,
    des: "Sleeping more makes you make more. <br><span class='bold-text'> Gain 0 Cookie pr second</span>"
  },
  {
    navn: "Dinner every day",
    headline: "Eat more",
    unlocked: false,
    antal: 0,
    value: 1,
    cost: 50,
    des: "With the biscuits your making, you can finally but some good food. <br><span class='bold-text'> Gain 1 Cookie pr second</span>"
  },
  {
    navn: "Education",
    headline: "Actually learn lol",
    unlocked: false,
    antal: 0,
    value: 10,
    cost: 20,
    des: "You actually learn how to cook :skull: <br><span class='bold-text'> Gain 10 Cookie pr second</span>"
  },
]
let orignalupgrade = Upgrades;
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
          return document.getElementById("upgrade-info").innerHTML = "You dont have enough money";
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
  {
    navn: "Your mom",
    beskrivelse: "Your mom is helpful. <br><span class='bold-text'> Gain 1 Biscuit per second </span>", // Span for bold text
    Obtained: true,
  },
  {
    navn: "Your Dad",
    beskrivelse: "Your dad finally came home with the milk. <br><span class='bold-text'> Biscuit per Click: +5 </span>", // Span for bold text
    Obtained: true,
  },
  {
    navn: "Your Grandma-ashes",
    beskrivelse: "Reliable Biscuit maker.<br> <span class='bold-text'> Gain 10 biscuit per second</span>", // Span for bold text
    Obtained: true,
  },
  {
    navn: "Cookie Factory",
    beskrivelse: "The Ultimate Biscuit Maker. <br><span class='bold-text'> Gain 100 biscuit per second</span>", // Span for bold text
    Obtained: false,
  },
]
if (page == "items.html") {
  for (let element of items) {
      if (element.Obtained == true){
        console.log(element.navn + " = true")
        CreateItem(element)
      } else {
        console.log(element.navn + " = false")
      }
  }
}
function pullItem() {
  const resultElement = document.getElementById("result");
  
  // Generate a random index to pick an item from the array
  const randomIndex = Math.floor(Math.random() * items.length);
  const selectedItem = items[randomIndex]["navn"];

  // Display the result
  resultElement.innerHTML = `You got: ${selectedItem}`;
  resultElement.classList.add("animate"); // Add animation class
  resultElement.addEventListener("animationend", removeAnimation);
}
function removeAnimation() {
  const resultElement = document.getElementById("result");
  resultElement.classList.remove("animate");
}
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
        //   <p id="iteminfo"> Your mom is helpful. <span class="bold-text"> Gain 1 cookie per second </span></p>
        //     <div class="form-check form-switch d-flex align-items-center p-0 ms-5 ms-5 justify-content-center" >
        //       <input class="form-check-input text-success" type="checkbox" name="x1" checked>
        //       <label class="form-check-label fs-5 text-black ms-2" for="x1"> Disable or Enable </label>
        //     </div>
        // </div>
  }