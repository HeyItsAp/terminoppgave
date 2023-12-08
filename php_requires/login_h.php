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
    $username = validate($_POST['username']);
    $pwd = validate($_POST['password']);
    // echo $username . '<br>';
    // echo $pwd . '<br>';
    if(empty($username) || empty($pwd)) {
        header( "refresh:0; url=../registration.php" );
        echo '<script> alert("Something is missing");</script>';
        die("");
    }

    try {
        require_once "dbh-inc.php"; 
        $query = "SELECT id, DisplayName, username, pwd FROM user WHERE username = :username AND pwd = :pwd;";
        $stmt = $pdo -> prepare($query);
        $stmt -> bindParam(':username', $username);
        $stmt -> bindParam(':pwd', $pwd);        
        $stmt -> execute();
        $result = $stmt ->fetch(PDO::FETCH_ASSOC);
        if ($result == false) {
            // Cant find Login
            $pdo = null;
            $stmt = null;           
            header( "refresh:0; url=../index.php" );
            echo '<script> alert("Log in fail");</script>';
            die("");
        } else {
            // Found Login

            $_SESSION['login'] = true;
            $_SESSION['username'] = $username;
            $_SESSION['pwd'] = $pwd;
            $_SESSION['id'] = $result['id'];
            $_SESSION['Display_Name'] = $result['DisplayName'];


            $pdo = null;
            $stmt = null; 
            header( "refresh:0; url=../index.php" );
            echo '<script> alert("Logged in, ass '.$_SESSION['username']. '");</script>';

        }
    } catch (PDOExecption $e) {
        die("Failed : " . $e->getMessage()); 
    }
} else {
    header("Location: ../login.php");
}
