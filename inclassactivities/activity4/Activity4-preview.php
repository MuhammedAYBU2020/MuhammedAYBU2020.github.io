<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <h1>Preview</h1>

        <?php
            if($_POST["name"] == null) {
                echo "Name: Not Provided<br>";
            }
            else {
                echo $_POST["name"]."<br>";
            }

            if($_POST["username"] == null) {
                echo "Username: Not Provided<br>";
            }
            else {
                echo $_POST["username"]."<br>";
            }

            if($_POST["password"] == null) {
                echo "Password: Not Provided<br>";
            }
            else {
                echo $_POST["password"]."<br>";
            }

            if($_POST["address"] == null) {
                echo "Address: Not Provided<br>";
            }
            else {
                echo $_POST["address"]."<br>";
            }

            if($_POST["country-list"] == "none") {
                echo "Country: Not Provided<br>";
            }
            else {
                echo $_POST["country-list"]."<br>";
            }

            if($_POST["zipcode"] == null) {
                echo "ZIP Code: Not Provided<br>";
            }
            else {
                echo $_POST["zipcode"]."<br>";
            }

            if($_POST["email"] == null) {
                echo "Email: Not Provided<br>";
            }
            else {
                echo $_POST["email"]."<br>";
            }

            if(empty($_POST["sex"])) {
                echo "Sex: Not Provided<br>";
            }
            else {
                echo $_POST["sex"]."<br>";
            }

            if(empty($_POST["languages"])) {
                echo "Language: Not Provided<br>";
            }
            else {
                foreach ($_POST["languages"] as $value) {
                    echo $value." | ";
                }
                echo "<br>";
            }

            if($_POST["about"] == null) {
                echo "About: Not Provided<br>";
            }
            else {
                echo $_POST["about"]."<br>";
            }
        ?>
    </body>
</html>