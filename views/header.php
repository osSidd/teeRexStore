<?php declare(strict_types=1); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catering reserving and ordering system</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="/"><h1>Catering</h1></a></li>
                <li><a href="#">products</a></li>
                <li><a href="/views/user/register.php">register</a></li>
                <li><a href="/views/user/login/login.php">login</a></li>
            </ul>
        </nav>
    </header>
    <main>
    <?php 
        $view = $_SERVER['PHP_SELF']; 
        $view_arr = explode('/', $view);
        echo $view_arr[count($view_arr) - 1];
    ?>