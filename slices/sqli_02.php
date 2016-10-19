$nis=$_POST['nis'];
$q_sems="SELECT id_nilai,nis,semester FROM nilai WHERE nis='$nis'GROUP BY semester";
$hasil=mysql_query($q_sems,$koneksi);
