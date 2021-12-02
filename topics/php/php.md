
[<](../../README.md)

<img width="275" src="../../assets/img/logos/logo-php.svg">

# PHP

An overview of PHP

### Contents

1. [Learning Objectives](#learning-objectives)
1. [Introduction](#introduction) `5 min`
1. [Discussion](#discussion) `5 min`
1. [References](#references)

## Learning Objectives

Students who complete the following will be able to:

- Discuss
- Describe
- Recall
- Demonstrate how to



## About PHP

PHP is a server-side scripting language that is primarily used to make dynamic websites.


### Hello World

PHP is a non-compiled language and therefore your machine (personal computer or a web server) must have PHP installed to execute the scripts. To see if you have it installed, and learn about the PHP version and modules you have, create a file named `phpinfo.php` with the following and place it in the directory where your website files live.

```
<?php
phpinfo();
?>
```




## GET Variables


### Sharing data between pages

We organize data and functions of a website through its pages. For example, if you display a list of courses on `courses.php` and want to let the user click on a course to edit on `edit.php` then you will need to send data between the pages so `edit.php` knows which record to [query](https://www.w3schools.com/php/php_mysql_select_where.asp).

A good way to send data between pages is to pass a [GET variable](https://www.php.net/manual/en/reserved.variables.get.php) in the url string. In the above example this might look like this: `edit.php?id=3` where `3` is the id of the record in the database. This method is also good because it consistently returns the resource, regardless of whether or not the user came from the first page. For example, this url will always display a google search for "cats": https://www.google.com/search?q=cats

```html
<!-- courses.php -->
<a href="edit.php?id=<?php echo $id; ?>">Edit</a>
```

```php
<!-- edit.php -->
<?php
$id = $_GET["id"];
// connect to mysqli
// create and run selection
$sql = "SELECT * FROM courses WHERE id='$id'";
$result = $conn->query($sql);
?>
```




### Filtering results

Another good use for passing data between pages is to filter the data shown. In the courses example, say you want to let the user show only courses in a particular department. To do this you could add an HTML select to the top of `courses.php` that, once selected, uses Javascript to reload the current page with a GET variable like `courses.php?deptid=5`. Then, at the top of `courses.php` add an `if` statement that checks for the GET variable, and if there is a department then append additional parameters to the query string before you write the data on the page. For example:


```php
<!-- courses.php -->
<?php
$sql = "SELECT * FROM courses";
if (isset($_GET['d'])) {
    $sql .= " WHERE department='" . (int)$_GET['d'];
}
$sql .= ";"
...
```

Note, you could use the department name instead of the id, but spaces look gross in a URL field and can be unpredictable `courses.php?d=digital%20studies`. The professional solution is to use a lowercase string with hyphens and [url rewriting](https://www.codesmite.com/article/clean-url-rewrites-using-apache) in an .htaccess file to allow a url string like `courses/digital-studies`. This makes the url human-readable and hides the technology you are using.

For example, while both of these urls work, the second one hides the `p` variable and makes it much cleaner:

- https://owenmundy.com/?p=tally-saves-the-internet  
- https://owenmundy.com/site/tally-saves-the-internet




### Use GET to increment a value

Another common pattern with PHP is to pass variables using GET to a different page that handles the database update and redirects back to the original page.

```html
<!-- courses.php -->
<a href="rate.php?id=321&rating=1">Up button</a>
```

```php
<!-- rate.php -->
<?php
// 1. make sure the values are what you expect first, then...
// 2. update database using id and rating from GET variables
// 3. redirect back to the original page
header("Location: courses.php");
die();
```







## References

- [W3Schools PHP](https://www.w3schools.com/php/php_intro.asp)
