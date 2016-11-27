<?php
$nis = $_GET['nis'];
$nis = mysql_real_escape_string($nis);
$q=mysql_query("SELECT * FROM siswa WHERE nis='$nis'",$koneksi);
?>
