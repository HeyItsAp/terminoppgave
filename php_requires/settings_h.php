<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get and validate data
    function validate($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    $new_display = validate($_POST['new_display']);
    $new_username = validate($_POST['new_username']);
    $new_pwd = validate($_POST['new_password']);
    $new_confpwd = validate($_POST['confirm_password']);

    echo $new_display . '<br>';
    echo $new_username . '<br>';
    echo $new_pwd . '<br>';
    echo $new_confpwd . '<br>';

    if(empty($new_username) || empty($new_pwd) || empty($new_confpwd) || empty($new_display)) {
        header( "refresh:0; url=../settings.php" );
        echo '<script> alert("Something is missing");</script>';
        die("");
    }
    if($new_pwd !== $new_confpwd) {
        header( "refresh:0; url=../settings.php" );
        echo '<script> alert("Passwords dont match");</script>';
        die("");
    }

    try {
        require_once "dbh-inc.php"; 
        $query = "UPDATE user SET DisplayName = :displayname, username = :username, pwd = :pwd WHERE id = :id";
        $stmt = $pdo -> prepare($query);
        $stmt -> bindParam(':displayname', $new_display);
        $stmt -> bindParam(':username', $new_username);
        $stmt -> bindParam(':pwd', $new_confpwd);          
        $stmt -> bindParam(':id', $_SESSION['id']);
        $stmt -> execute();
            
            // New session variables
            $_SESSION['login'] = true;
            $_SESSION['username'] = $new_username;
            $_SESSION['pwd'] = $new_confpwd;
            $_SESSION['Display_Name'] = $new_display;


            $pdo = null;
            $stmt = null; 
            header( "refresh:0; url=../index.php" );
            echo '<script> alert("Logged in, as '.$_SESSION['username']. '");</script>';

        
    } catch (PDOExecption $e) {
        die("Failed : " . $e->getMessage()); 
    }
} else {
    header("Location: ../login.php");
}
