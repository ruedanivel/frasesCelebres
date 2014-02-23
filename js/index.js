

function CargarIMG()
{	

	//var v_random = Math.floor((Math.random()*5)+1);

	$('.nav-img').attr("src", "images/butonpulse.svg");


	//$('body').css('background-image','url(images/f'+v_random+'.png)');

	$.ajax({
		url:'http://musicamaestra.com/programin/app/frasesamor/php.php',
		type:'post',
		success:  function (response) {
			
			$('#text').html(response);

			$('.nav-img').attr("src", "images/buton.svg");
 
		}
	});


}

