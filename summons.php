<?php
session_start();

if (!isset($_SESSION["login"]) && $_SESSION["login"] != true){
    header( "refresh:0; url=login.php" );
    echo '<script> alert("You need to be logged in to acsess this");</script>';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Biscuit Clicker </title>
    <link rel="stylesheet" href="./style.css">
    <link rel="icon" type="image/x-icon" href="Medium/Bilder/Mainicon.ico">
    <style>
        #video:-webkit-full-screen[controls],
        #video:-moz-full-screen[controls],
        #video:-ms-fullscreen[controls],
        #video:fullscreen[controls] {
        opacity: 0; /* Controls are hidden when in fullscreen */
        }
    </style>
</head>
<body>
    <!-- <nav>
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <a href="./settings.html"> Settings </a>
            <a href="./items.html"> Items </a>
            <a href="./summons.html"> Summons</a>
            <a href="./login.html"> Login / Logout</a>
        </div>
        <a href="./index.html" class="Maingamelink"> &lt; Main Game</a>
        <img src="./Medium/Bilder/Mainlogo.png" class="Cookie-menu" onclick="openNav()">
        <div class="Ham-icon" id="Ham-icon-id" onclick="SelectHamIcon(this), openNav()">
            <div class="Ham-icon-1"></div>
            <div class="Ham-icon-2"></div>
            <div class="Ham-icon-3"></div>
        </div>
    </nav> -->
    <?php 
        require_once "php_requires/nav_noindex.php";
    ?>
        <div id="Summons">
            <p id="Stats"> </p>
            <button onclick="pullItem()" id="pull-button">Pull!</button>
            <p id="Error-msg"> </p>
            <div id="result" class="result">
                <p id="result-text"> </p>
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
    <script src="./script.js"></script>
   
</body>
</html>