<?php namespace App\Controllers;
use App\Models\CharactersModel;
use CodeIgniter\Controller;
class Home extends BaseController
{
	public function index()
	{	$model = new CharactersModel();
		$data['characters'] = $model->get_Characters();
		echo view('main', $data);
		
	}

	//--------------------------------------------------------------------

}
