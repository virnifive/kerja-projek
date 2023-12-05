<?php
$server = "localhost";
$user = "root";
$password = "";
$nama_database = "komentar";
$db = mysqli_connect( $server, $user, $password, $nama_database);
if (! $db){
    die( "Gagal tehubung dengan database : ". mysqli_connect_error());
}
?>