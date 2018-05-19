<?php
 	$to='avtohels@yandex.ru';
	$subject = 'Тема письма';
	$message = 'Сообщение';
	// Заголовки сообщения, в них определяется кодировка сообщения, поля From, To и т.д.
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n";
	$headers .= "To: $to\r\n";
	$headers .= "From: Avtohels";
	require_once "smtpauth.php";
	MailSmtp ('avtohels@yandex.ru', $subject, $message, $headers);?>