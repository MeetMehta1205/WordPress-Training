<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 

    <link rel="icon" type="image/png" sizes="32x32" href="star.png">

    <title>PHP Loop Exercises</title>

  </head>

  <body>

    <h1>Use PHP Loops for the Following Exercise</h1>

    <h2>Write a Program to Count 15 to 30 using a Loop</h2>  
    
    <?php
      for ($count = 15 ; $count <= 30 ; $count++) 
      { 
        echo "Number : " . $count . "<br>";
      }
    ?>

    <h2>Write a Program to create a given Pattern with * using a Loop</h2>

    <?php
      for ( $i = 1 ; $i <= 8 ; $i++ ) 
      { 
        for ( $j = 1 ; $j <= $i ; $j++ ) 
        { 
          echo "*";
        }
        echo "<br>";
      }
    ?>

    <h2>Write a Program to create a given Pattern with * using a Loop</h2>

    <?php
      for ( $i = 0 ; $i < 6 ; $i++ ) 
      {
        for ( $space = 1 ; $space < 6 - $i ;  $space++ ) 
        { 
          echo "&nbsp;";
         } 
        for ( $j = 0 ; $j < $i ; $j++ ) 
        { 
          echo "*";
        }
        echo "<br>";
      }
    ?>

  </body>

 </html>