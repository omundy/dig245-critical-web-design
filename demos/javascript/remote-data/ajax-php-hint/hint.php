<?php
// Fill up array with names

$names = "Savannah, Tiffany, Christopher, Chris, Bob, Alison, Elise, Braylin, Brittany, Chelsea, Joseph, Liz, Zachary, Jose, Heidi, Owen, Chase, Ciper, Cumbie, Davis, Delgado, Levy, Mesa, Morales, Morales, Rogers, Summers, Taylor, Trychel, Valdes Bartroli, Zito, Mundy";




$a = explode(', ', $names);



//get the q parameter from URL
$q = $_GET["q"];

//lookup all hints from array if length of q>0
if (strlen($q) > 0)
{
	$hint="";
	for($i=0; $i<count($a); $i++)
	{
		if (strtolower($q)==strtolower(substr($a[$i],0,strlen($q))))
		{
			if ($hint=="")
			{
				$hint= '<a href="../../../">'. $a[$i] .'</a>';
			}
			else
			{
				$hint=$hint.", ".  '<a href="../../../">'. $a[$i] .'</a>';
			}
		}
	}
}

// Set output to "no suggestion" if no hint were found
// or to the correct values
if ($hint == "")
{
	$response="no suggestion";
}
else
{
	$response=$hint;
}

//output the response
echo $response;
?>