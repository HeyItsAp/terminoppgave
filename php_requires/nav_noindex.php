    <nav>
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <a href="./login.php"> Login</a>
            <a href="./settings.php"> Settings </a>
            <a href="./items.php"> Items </a>
            <a href="./summons.php"> Summons</a>
        </div>
        <a href="./index.php" class="Maingamelink"> &lt; Main Game</a>
        <?php 
                if (isset($_SESSION["login"]) && $_SESSION["login"] == true){
                    echo '<h2 style="margin: 10px;"> Hello, ' . $_SESSION["Display_Name"] . '</h2>';

                }
        ?>
        <img src="./Medium/Bilder/Mainlogo.png" class="Cookie-menu" onclick="openNav()">
        <div class="Ham-icon" id="Ham-icon-id" onclick="SelectHamIcon(this), openNav()">
            <div class="Ham-icon-1"></div>
            <div class="Ham-icon-2"></div>
            <div class="Ham-icon-3"></div>
        </div>
    </nav>