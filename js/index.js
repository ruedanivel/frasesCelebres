
function CargarIMG()
{	

	var v_random = Math.floor((Math.random()*5)+1);

	//$('#bg').attr("src", "images/f"+v_random+".jpg");

	$('body').css('background-image','url(images/f'+v_random+'.png)');


	$.ajax({
		url:'http://musicamaestra.com/programin/app/frasesamor/php.php',
		type:'post',
		success:  function (response) {
			
			$('#text').html(response);
 
		}
	});


}

