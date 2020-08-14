<?php
    function fetchData(){
        $baseUrl = "https://swapi.dev/api/people";
        $data = file_get_contents($baseUrl);
        $dataFormatted = json_decode($data, true);
        $content = $dataFormatted["results"];
        $moreData = $dataFormatted["next"];
        $allPeople = $content;

      while($moreData == true) {
        $baseUrl = $moreData;
        $data = file_get_contents($baseUrl);
        $dataFormatted = json_decode($data, true);
        $moreContent = $dataFormatted["results"];
        $moreData = $dataFormatted["next"];
        $allPeople = array_merge($allPeople, $moreContent);

      }
        // $allPeople = $content;
        // echo("------>");
        // print_r ($allPeople);
        echo count($allPeople);
        return $allPeople;
     
    }
    $characters = fetchData();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Star Wars</title>
</head>
<body>
    <ul>
      <?php
         foreach ($characters as $character) {?>
         <li> <?php echo $character["name"]; ?> </li>
        <?php } ?>
    </ul>
</body>
</html>