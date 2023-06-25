<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 

    <link rel="icon" type="image/png" sizes="32x32" href="1.png">

    <title>Associative Array Example</title>
  </head>

  <body>
    <h1>Write a Program to loop through an associative array using ForEach</h1>

    <?php
      $a = array('one' => 'I', 'two' => 'II', 'three' =>'III', 'four' => 'IV');

      foreach ($a as $key => $value) 
      {
          echo $key . "=>" . $value . "<br>";
      }
    ?>
  </body>
 </html>