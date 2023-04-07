<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Activity 4 | Registration Form</title>
        <link rel="stylesheet" href="style.css" type="text/css">
    </head>
    <body>
        <h1>Registration Form</h1>
        <form action="Activity4-preview.php" method="post">
            <label>Name :</label>
            <input type="text" name="name" id="name"><br><br>

            <label>Username :</label>
            <input type="text" name="username" id="username"><br><br>

            <label>Password :</label>
            <input type="password" name="password" id="password"><br><br>

            <label>Address :</label>
            <input type="text" name="address" id="address"><br><br>

            <label>Country :</label>
            <select name="country-list" id="country-list">
                <option value="none">(Please select a country)</option>
                <option value="Türkiye">Türkiye</option>
                <option value="Greece">Greece</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Azerbaijan">Azerbaijan</option>
            </select><br><br>

            <label>ZIP Code :</label>
            <input type="text" name="zipcode" id="zipcode"><br><br>

            <label>Email :</label>
            <input type="email" name="email" id="email"><br><br>

            <label>Sex :</label>
            <input type="radio" name="sex" id="sex" value="Male">Male
            <input type="radio" name="sex" id="sex" value="Female">Female<br><br>

            <label>Language :</label>
            English<input type="checkbox" name="languages[]" id="language" value="English">
            French<input type="checkbox" name="languages[]" id="language" value="French">
            German<input type="checkbox" name="languages[]" id="language" value="German"><br><br>

            <label>About :</label>
            <textarea name="about" id="about" cols="25" rows="5"></textarea><br><br>

            <input type="submit" value="Submit" id="submit-btn">
        </form>
    </body>
</html>
