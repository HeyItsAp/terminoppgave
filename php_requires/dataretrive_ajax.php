<?php
session_start();

if (isset($_SESSION["login"]) && $_SESSION["login"] == true){
    $user_information = [];
    $user_id = $_SESSION['id'];
    try {
        require_once "dbh-inc.php"; 
        $query = "SELECT * FROM biscuit_progress WHERE User_id = :id";
        $stmt = $pdo -> prepare($query);
        $stmt -> bindParam(':id', $user_id);        
        $stmt -> execute();
        $result = $stmt ->fetchAll(PDO::FETCH_ASSOC);
        $user_information["biscuit_progress"] = $result;

        $query = "SELECT `Disabled Kid`, `Sakura (Fra Naurto)`, `Santa Claus`, `Black hole`, `Whip from the good old times`, `Chainsaw man`, `W Rizz.`, `Creator's Mother`, `H Magnus H`, `Dad's Milk`, `Water bending`, `Ni-ho-di`, `Life` FROM items_bool WHERE User_id = :id;";
        $stmt = $pdo -> prepare($query);
        $stmt -> bindParam(':id', $user_id);        
        $stmt -> execute();
        $result = $stmt ->fetchAll(PDO::FETCH_ASSOC);
        $user_information["items"] = $result;

        $query = "SELECT `Better sleep`, `Dinner every day`, `Education`, `Extra lessons`, `Collage`, `Working Graduate`, `Political effects`, `Chance to expand`, `Cooperation`, `Mr. Biscuit WorldWide` FROM upgrades_number WHERE User_id = :id;";
        $stmt = $pdo -> prepare($query);
        $stmt -> bindParam(':id', $user_id);        
        $stmt -> execute();
        $result = $stmt ->fetchAll(PDO::FETCH_ASSOC);
        $user_information["upgrades"] = $result;

        // echo '<pre>';
        // print_r($user_information);
        // echo '</pre>';
        $jsonData = json_encode($user_information);
        echo $jsonData;
    } catch (PDOExecption $e) {
        die("Failed : " . $e->getMessage()); 
    }
} else {
    echo "False";
    die("");
    
}