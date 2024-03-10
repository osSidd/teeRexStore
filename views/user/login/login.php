<?php include('../header.php'); ?>
    <?php
        setcookie('jc', 'jcnes');
    ?>

    <h2>Login</h2>
    <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post">
        <div>
            <label for="email">Email:</label>
            <input type="email" name="email" placeholder="Email id">
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" name="password" placeholder="Password">
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
    </form>
    <?php
        print_r($_COOKIE['jc']);
        print_r($_POST);
    ?>
<?php include('../footer.php'); ?>