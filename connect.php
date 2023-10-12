<?php 


// $username="test";
// $map_num="1";
// $config="AAB";
// $point_to="2";
// $conf_rating="3";
// $attention_rt="4";

$username=$_POST['username'];
$map_num=$_POST['map_num'];
$config=$_POST['config'];
$point_to=$_POST['signal'];
$conf_rating=$_POST['conf_rating'];
$attention_rt=$_POST['attention_rt'];

echo "i'm out here";

$dbhost='co28d739i4m2sb7j.cbetxkdyhwsb.us-east-1.rds.amazonaws.com';
$dbuser='ciqkb98i04oi5mqj';
$dbpass='yge7sok0jdptl8eh';
$db='xj2tpr6deo31cluv';
$con=mysqli_connect($dbhost,$dbuser,$dbpass,$db);

if($con){
    echo "connection successful!";
    $sql="INSERT INTO `user_response`(username,map_num,config,point_to,conf_rating,attention_rt)VALUES('$username','$map_num','$config','$point_to','$conf_rating','$attention_rt')";
    $result=mysqli_query($con,$sql);
}else{
    echo "no connect";
    die(mysqli_error($con));
}


?>
