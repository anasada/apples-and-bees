<?php 

$username=$_POST['username'];
$map_num=$_POST['map_num'];
$r_time=$_POST['r_time'];
$points_to=$_POST['signal'];
$help_rt=$_POST['help_rt'];
$rec_path=$_POST['rec_path'];
$rec_score=$_POST['rec_score'];

$dbhost='us-cdbr-east-06.cleardb.net';
$dbuser='be08301fba8c9c';
$dbpass='aebb772c';
$db='heroku_fa973accb1ebf54';
$con=mysqli_connect($dbhost,$dbuser,$dbpass,$db);

if($con){
    // echo "connection successful!";
    $sql="insert into `user_response`(username,map_num,r_time,points_to,help_rt,rec_path,rec_score)values('$username','$map_num','$r_time','$points_to','$help_rt','$rec_path','$rec_score')";
    $result=mysqli_query($con,$sql);
}else{
    die(mysqli_error($con));
}


?>