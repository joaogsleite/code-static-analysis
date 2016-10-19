$id_nilai=$_GET['idn'];
$q_nilai="SELECT * FROM nilai INNER JOIN matapelajaran ON 
matapelajaran.id_matapelajaran = nilai.id_matapelajaran INNER JOIN siswa ON siswa.nis=nilai.nis 
INNER JOIN kelas ON kelas.id_kelas=nilai.id_kelas
WHERE id_nilai='$id_nilai'";
$hasil=mysql_query($q_nilai,$koneksi);
