<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get data

    $item = $_POST['item'];
    $prestige_count = $_POST['prestige_count'];
    $user_id = $_SESSION['id'];
    try {
        require_once "dbh-inc.php";
        foreach ($item as $item_name => $bool)  {
            $query = "UPDATE items_bool SET `$item_name` = :bool WHERE User_id = :user_id";
            $stmt = $pdo -> prepare($query);
            $stmt -> bindParam(':bool', $bool, PDO::PARAM_STR);
            $stmt -> bindParam(':user_id', $user_id,PDO::PARAM_INT);
            $stmt -> execute();
        } 
        $query = "UPDATE biscuit_progress SET prestige_count = :prestige_count WHERE User_id = :user_id";
        $stmt = $pdo -> prepare($query);
        $stmt -> bindParam(':prestige_count', $prestige_count, PDO::PARAM_STR);
        $stmt -> bindParam(':user_id', $user_id,PDO::PARAM_INT);
        $stmt -> execute();
    }   
    catch (PDOExecption $e) {
        die("Failed : " . $e->getMessage()); 
    }
    $query = null;
    $stmt = null;
    header( "refresh:0; url=../summons.php" );
    echo '<script> alert("Item is saved");</script>';
    die("");
} else {
    header("Location: ../login.php");
}
