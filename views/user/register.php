<?php include('../header.php'); ?>

    <h2>Sign up</h2>
    <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post">
        <div>
            <label for="name">Full name:</label>
            <input type="text" name="name" placeholder="Full name">
        </div>
        <div>
            <label for="username">Username:</label>
            <input type="text" name="username" placeholder="Username">
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" name="email" placeholder="Email id">
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" name="password" placeholder="Password">
        </div>
        <div>
            <button type="submit">Sign up</button>
            <button type="reset">Reset form</button>
        </div>
    </form>
    <?php
        print_r($_POST);
    ?>
<?php include('../footer.php'); ?>