<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Activity 5</title>
        <link rel="stylesheet" href="style.css" type="text/css">
    </head>
    <body>
        <form method="post">
            <label>From:</label>
            <input type="text" name="from" id="from" value="0">

            <label>Currency:</label>
            <select name="from-currency" id="from-currency">
                <option value="USD">US Dollar</option>
                <option value="CAD">Canadian Dollar</option>
                <option value="EUR">Euro</option>
            </select><br>

            <!------------------------------------------------>

            <label>To:</label>
            <input type="text" name="to" id="to" value="0">

            <label>Currency:</label>
            <select name="to-currency" id="to-currency">
                <option value="USD">US Dollar</option>
                <option value="CAD">Canadian Dollar</option>
                <option value="EUR">Euro</option>
            </select><br>

            <input type="submit" name="convert" value="convert" id="convert">
        </form><br>

        <?php
            // These data is belongs to Google Currency Exchange Rate & News on 09/04/2023.
            $currencies = array(
                "USD" => array("USD" => 1,"CAD" => 1.36,"EUR" => 0.91),
                "CAD" => array("CAD" => 1,"USD" => 0.74,"EUR" => 0.67),
                "EUR" => array("EUR" => 1,"USD" => 1.10,"CAD" => 1.47),
            );

            $symbols = array(
                "USD" => "&#36;",
                "CAD" => "&#67;&#36;",
                "EUR" => "&#8364;",
            );

            if(isset($_POST["convert"])) {
                $from_money = $_POST["from"];
                $from_currency = $_POST["from-currency"];
                $to_currency = $_POST["to-currency"];

                // echo $symbols[$from_currency];
                // echo $symbols[$to-currency];

                $converted = $from_money * $currencies[$from_currency][$to_currency];

                echo "<p class='output'>".$symbols[$from_currency]." ".$from_money." = ".$symbols[$to_currency]." ".$converted ;
            }
        ?>
    </body>
</html>