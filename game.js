<html> 
	<head> 
		<title>
		Rock,Paper,Scissors</title> 
	</head> 
		<script>
			var value = window.prompt("please enter your name");

			//1. writing the value into HTML element 
			//document.getElementById("p").innerHTML = value + ", Welcome to play the game!!;"

			//2. write the value into new HTML document 
			document.write("<p>" + value + "</p>");

			//3. promt window alert
			window.alert (value);

			//4. write it to console 
			console.log(value);

			document.write("Welcome to the Game!");



		</script>
</html> 