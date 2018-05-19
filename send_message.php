<?php
	require_once "smtpauth.php"; // подключаем класс
 
	$name = $_POST['name'];
	$phone = $_POST['phone'];
        $mail = $_POST['mail'];
	$firm = $_POST['firm'];
	$year = $_POST['year'];
	$power = $_POST['power'];
        $VIN = $_POST['VIN'];
     
	$to = "avtohels@yandex.ru";
	$from = "Avtohels";
	$subject = "Тема письма";
	$header = "From: $from\n";
	$header .= "Content-type: text/html; charset=\"utf-8\;";

	$body = "
	<p>Имя: $name</p> 
	<p>Телефон: $phone</p> 
	<p>E-mail: $mail</p> 
	<p>Марка автомобиля: $firm</p>
	<p>Год выпуска: $year</p>
	<p>Мощность двигателя: $power</p>
	<p>VIN: $VIN</p> 
	";

	MailSmtp ('avtohels@yandex.ru', $subject, $body, $header);
?>



