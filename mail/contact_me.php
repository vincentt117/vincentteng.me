<?php
echo "export SENDGRID_API_KEY=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" > sendgrid.env
echo "sendgrid.env" >> .gitignore
source ./sendgrid.env

require("path/to/sendgrid-php/sendgrid-php.php");
$apiKey = getenv('SENDGRID_API_KEY');
$sg = new \SendGrid($apiKey);

$response = $sg->client->suppressions()->bounces()->get();
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
	
// Create the email and send the message
$from = 
$to = new SendGrid\Email(null,'v.teng@mail.utoronto.ca'); 
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
$headers = "From: https://vincentt117.github.io/\n"; 
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>
