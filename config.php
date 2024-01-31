<?php
    $db_host = 'std-mysql.ist.mospolytech.ru:3306/std_2313_ads';
    $db_user = 'std_2313_ads'; //имя пользователя совпадает с именем БД
    $db_password = '12345678'; //пароль, указанный при создании БД
    $database = 'std_2313_ads'; //имя БД, которое было указано при создании
    $mysql = mysqli_connect($db_host, $db_user, $db_password, $database);
?>