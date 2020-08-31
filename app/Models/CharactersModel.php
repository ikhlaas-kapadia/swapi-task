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
        $people = $content;
        $resultsPerPage = count($people);
        $totalResults = $dataFormatted["count"];
        $pages = 1;
        $charactersArray = array("count"=>$totalResults, "perPage"=>$resultsPerPage);
        
      

      while($moreData == true && $pages < 3) {
        $pages++;
        $baseUrl = $moreData;
        $data = file_get_contents($baseUrl);
        $dataFormatted = json_decode($data, true);
        $moreContent = $dataFormatted["results"];
        $moreData = $dataFormatted["next"];
        $people = array_merge($people, $moreContent);
      }
        // return $people;
        $charactersArray["people"] = $people;
        $charactersArray["moreData"] = $moreData;
        return $charactersArray;
    }
}