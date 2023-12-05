<?php

session_start();

session_unset();
session_destroy();

header( "refresh:0; url=index.php" );
echo '<script> alert("Log out sucsess");</script>';

