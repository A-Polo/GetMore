<?
error_reporting(-1);
ini_set('display_errors',0);
header('Content-Type: text/html; charset=utf-8');


$adminemail="admin@getmore.com.ua";  // e-mail админа

$date=date("d.m.y"); // число.месяц.год

$time=date("H:i"); // часы:минуты:секунды

$backurl="http://getmore.com.ua/";  // На какую страничку переходит после отправки письма


$name=$_POST['name'];

$email=$_POST['email'];

$msg=$_POST['message'];

if (!preg_match("|^([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is",
strtolower($email)))

 {

  echo
"<center>Вернитесь <a href='javascript:history.back(1)'><B>назад</B></a>. Вы указали неверные данные!";

  }

 else

 {


$msg="


Имя: $name

E-mail: $email

Сообщение: $msg

";

mail("$adminemail", "$date $time Сообщение
от $name", "$msg");


print "<script language='javascript'><!--
function reload() {location = \"$backurl\"}; setTimeout(reload, 3000);
//--></script>

$msg

<p>Сообщение отправлено! Подождите, сейчас вы будете перенаправлены на главную страницу...</p>";
exit;

 }

?>