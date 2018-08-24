/*
Sort: -1
*/

Please follow the general [engineering preparations](/engineering/preparation) first.

# PHP Stack

Most people will find it easy to just use [XAMPP](https://www.apachefriends.org/index.html).  
But if you don't need the extra `apache`, `mysql`, and `perl`,
I suggest to just download and extract [php](https://www.apachefriends.org/index.html) somewhere,
and add it's path to your computer environtment variable.

# Composer

[Composer](https://getcomposer.org) is PHP's package manager.
It manage the namespace aautoloading according to specified PSR rule.
We'll use it rarely, but it's essential for PHP development.

After `composer`, you need to install some global packages, namely:

- [php-cs-fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer)
- [composer-asset-plugin](https://github.com/fxpio/composer-asset-plugin)