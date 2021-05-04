function retornaProjecaoPessoas(){
  var valor = Number(document.getElementById('valoriInvestido').value);

  if(valor == ""){
    window.alert('Digite um valor válido!')
  }
  
  //Se esse if for igual a true, significa que pelo menos 100 visualizações o cliente terá
  if(valor >= 3.5 ){



  }else{
    window.alert('De acordo com o que você investiu, você terá um alcance de 30 a 90 visualizações! ');
  }

}