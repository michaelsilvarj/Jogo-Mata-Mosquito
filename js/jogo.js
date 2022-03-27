
	
	var altura = 0
	var largura = 0
	var vidas = 1

	function ajustaTamanhoPalcoJogo (){ 
		altura =  window.innerHeight; // identifica altura
		largura = window.innerWidth;
		console.log(largura, altura);
	}	

	ajustaTamanhoPalcoJogo();

	function posicaoRandomica (){

		/* Remove o mosquito anterior caso exista  */
		if(document.getElementById('mosquito') ){
			document.getElementById('mosquito').remove();
		}

		/* Arredonda para baixo colocando em posição aleatória,  
		e coloca proporcional as dimensões do browser */

		var posicaoX = Math.floor(Math.random() * largura) - 90;
		var posicaoY = Math.floor(Math.random() * altura) - 90;

		// Operdor Ternario, se posicao x for menor que zero receberá ela mesma
		posicaoX = posicaoX < 0 ? 0 : posicaoX;
		posicaoY = posicaoY < 0 ? 0 : posicaoY;		

		console.log(posicaoX, posicaoY);


		
		

		console.log(posicaoX, posicaoY);

		// cria elemento html
		var mosquito = document.createElement('img');
		mosquito.src= 'imagens/mosquito.png'
		mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
		mosquito.style.left = posicaoX + 'px'; //Acessa os atriutos de estilo html criado
		mosquito.style.top = posicaoY + 'px';
		mosquito.style.position = 'absolute';
		mosquito.id='mosquito'
		mosquito.onclick = function() {
		this.remove()
	}

		//adiciona um filho ao documento html
		document.body.appendChild (mosquito);

		console.log(ladoAleatorio());	

	}


	function tamanhoAleatorio (){
		var classe = Math.floor(Math.random()* 3);
		console.log(classe);

		switch(classe){
			case 0:
				return 'mosquito1';

			case 1:
				return 'mosquito2';

			case 2:
				return 'mosquito3';
		}
	}



	function ladoAleatorio (){

		var classe = Math.floor(Math.random()* 2);
		console.log(classe);

		switch(classe){
			case 0:
				return 'ladoA';

			case 1:
				return 'ladoB';

		}
	}
	

