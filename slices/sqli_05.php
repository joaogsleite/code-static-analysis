$matapelajaran=$_POST['matapelajaran'];
$idmatapelajaran=$_POST['idmatapelajaran'];
$edit_matapelajaran="UPDATE matapelajaran SET matapelajaran='$matapelajaran' WHERE id_matapelajaran='$idmatapelajaran'";
mysql_query($edit_matapelajaran,$koneksi);
