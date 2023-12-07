<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Biscuit Clicker </title>
    <link rel="stylesheet" href="./style.css">
    <link rel="icon" type="image/x-icon" href="Medium/Bilder/Mainicon.ico">
    <?php
    if (isset($_SESSION["login"]) && $_SESSION["login"] == true){?>
        <meta name="Login" content="<?php echo htmlspecialchars($_SESSION['login']); ?>">
    <?php } else { ?>
        <meta name="Login" content="0">
    <?php } ?>

</head>
<body>
    <div id="master-container">
        <nav>
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <a href="./login.php"> Login </a>
                <a href="./settings.php"> Settings </a>
                <a href="./items.php"> Items </a>
                <a href="./summons.php"> Summons</a>
            </div>
            <?php 
                if (isset($_SESSION["login"]) && $_SESSION["login"] == true){
                    echo '<h2 id="login" style="margin: 10px;"> Hello, ' . $_SESSION["Display_Name"] . '</h2>';
                }
            ?>
            <img src="./Medium/Bilder/Mainlogo.png" class="Cookie-menu" onclick="openNav()">
            <div class="Ham-icon" id="Ham-icon-id" onclick="SelectHamIcon(this), openNav()">
                <div class="Ham-icon-1"></div>
                <div class="Ham-icon-2"></div>
                <div class="Ham-icon-3"></div>
            </div>
        </nav>
        <div id="main-game">
            <div class="main-game-instructions">
                <h2> Welcome to Biscuit Clicker! </h2>
                <p> Click the biscuit to bake a cookie, use cookies to buy upgrades. Attain the upgrade Mr. Biscuit WorldWide to win </p>
            </div>
            <div class="main-game-info">
                <h2> Biscuits: <span id="biscuit-count"></span></h2>
                <h2 id="biscuit-auto-h2"> <!-- Biscuits per second: <span id="biscuit-auto">0</span> --></h2>
                <div id="prestige-menu"> 
                </div>
            </div>
            <img src="./Medium/Bilder/ClickerCookie.png" alt="Click on Biscuit for Biscuits" onclick="incrementcount()" class="clicker-biscuit">
        </div>
        <div id="upgrade-menu">
            <div id="The-upgrades-menu">
                <?php
                    if (isset($_SESSION["login"]) && $_SESSION["login"] == true){
                        echo '<button id="save" style="" onclick="save_progress()"> Save Progress</button>';
                    }
                ?>
                <!-- <div class="upgrade">
                    <div class="upgradeheadline">
                        <h2> More sleep</h2>
                        <p> Sleeping more makes you make more <span class="bold-text"> Gain 0.1 Cookie pr second</span></p>
                    </div>
                    <button onclick="buy()">Get more sleep<br>Pris: <span id="price">12</span><br>Antal: <span id="antal">0</span></button>
                </div> -->
            </div>
        </div>
        <footer>
            <div class="footer-wrapping">
                <h2 class="footer-title"> Kontakt</h2>
                <a href="mailto:adrian@gmail.com" class="footer-link">Adrian@gmail.com </a>
                <a href="telto:9696969" class="footer-link">&nbsp; +47 96969699</a>
                <!-- <a href="" class="footer-link"></a> -->
    
            </div>
        </footer>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script src="./script.js"></script>
   
</body>
</html>