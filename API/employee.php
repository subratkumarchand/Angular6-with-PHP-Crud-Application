 <?php 
 // required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 $con = mysqli_connect("localhost","root","","api");
 
 $request_method = $_SERVER['REQUEST_METHOD'];
  switch($request_method){
    case 'GET':
		getEmployee();
	    break;
	case 'POST':
        insertEmployee();
        break;
    case 'PUT':
        updateEmployee();
        break;
    case 'DELETE':
        deleteEmployee();
        break;
	case 'OPTIONS':
        //deleteEmployee();
        break;
    default:
        header('HTTP/1.0 405 Method Not Allowed');
        break;
  }
  
  function getEmployee(){
	  global $con;
	  if($con){
			$sql = "SELECT * FROM employee";
			$data = mysqli_query($con,$sql);
			$rows=array();
			while($r=mysqli_fetch_assoc($data)){
		  $rows[]=$r;
		  }
		  echo json_encode($rows,JSON_PRETTY_PRINT);
		 }
  }
 function insertEmployee(){
    $employee = json_decode(file_get_contents("php://input"));
    if(isset($employee)){
		 global $con;
		$name = $employee->Name;
		$designation = $employee->Designation;
		$role = $employee->Role;
		$experiance = $employee->Experiance;
		if(!empty($name) && !empty($designation) && !empty($experiance) && !empty($role)){
        $query  ="INSERT INTO employee(Name, Designation, Role, Experiance) VALUES('$name','$designation','$role','$experiance')";
        if(mysqli_query($con, $query) or die(mysqli_error($con)) )
        {
            $response=array(
                'status' => 201,
                'status_message' =>'Employee Added Successfully.',
				'status_name' => $name
            );
        }else
        {
            $response=array(
                'status' => 400,
                'status_message' =>'Employee Addition Failed.'
            );
        }
    }
    else
    {
        $response=array(
            'status' => 400,
            'status_message' =>'Request Body Empty.'
        );
    }
}
    header('Content-Type: application/json');
    echo json_encode($response);
 }
 function deleteEmployee(){
	  $employee = $_GET['id'];
	 if(isset($employee)){
		 global $con;
		$id = $employee;
	 $sql=mysqli_query($con,"DELETE  FROM employee WHERE id='$id' ") or die(mysqli_error($con));
  if($sql){
		$response=array(
            'status' =>202 ,
            'status_message' =>'data deleted.',
			'status_id' => $id
        );
  }else{
	  $response=array(
            'status' =>204 ,
            'status_message' =>'error'
        );
  }
	 }
   header('Content-Type: application/json');
    echo json_encode($response);
 }
 function updateEmployee(){
    $employee = json_decode(file_get_contents("php://input"));
    if(isset($employee)){
		 global $con;
		 $id = $employee->id;
		$name = $employee->Name;
		$designation = $employee->Designation;
		$role = $employee->Role;
		$experiance = $employee->Experiance;
		if(!empty($name) && !empty($designation) && !empty($experiance) && !empty($role)){
        $query  = " UPDATE employee SET Name='$name',Designation='$designation',Role='$role',Experiance='$experiance' WHERE id='$id'";
        if(mysqli_query($con, $query) or die(mysqli_error($con)) )
        {
            $response=array(
                'status' => 201,
                'status_message' =>'Employee updated Successfully.',
				'status_name' => $name
            );
        }else
        {
            $response=array(
                'status' => 400,
                'status_message' =>'Employee Addition Failed.'
            );
        }
    }
    else
    {
        $response=array(
            'status' => 400,
            'status_message' =>'Request Body Empty.'
        );
    }
}
    header('Content-Type: application/json');
    echo json_encode($response);
} 
 
 
 
 
 ?>