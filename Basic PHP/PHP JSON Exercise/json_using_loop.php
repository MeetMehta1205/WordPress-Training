<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 

    <link rel="icon" type="image/png" sizes="32x32" href="json.png">

    <title>JSON Data</title>

  </head>

  <body>
    <h1>Write a PHP Program to Loop over the JSON Data</h1>

    <?php
      $jsonobj = '[{
      "name" : "Ayush Singh",
      "age"  : "22",
      "school" : "Dehradoon Public School"
      },
      {
      "name" : "Smith Patel",
      "age"  : "18",
      "school" : "St. Xaviour School"
      },
      {
      "name" : "Rena Pamar",
      "age"  : "12",
      "school" : "Delhi Public School"
      }]';

      $obj = json_decode($jsonobj);

      foreach($obj as $value) 
      {
        $name = $value->name;
        $age = $value->age;
        $school = $value->school;
        echo "Name : " . $name . "<br>" . "Age : " . $age . "<br>" . "School : " . $school . "<br><br>";
      }  
    ?>
  </body>

 </html>