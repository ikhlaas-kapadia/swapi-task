<?php namespace App\Models;

use CodeIgniter\Model;

class CharactersModel extends Model
{
    public function get_Characters(){
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
        return $allPeople;
    }
}