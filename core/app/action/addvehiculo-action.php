<?php
$placa=$_POST["placa"];
$marca=$_POST["marca"];

$vehiculo=new VehiculoData();

$vehiculo->placa=$placa;
$vehiculo->marca=$marca;

$aux=$vehiculo->add();

print "<script>window.location='index.php?';</script>";//redireccion al index


?>