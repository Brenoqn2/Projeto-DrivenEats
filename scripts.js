var countPrato = 0;
var countBebida = 0;
var countSobremesa = 0;
var countPedido = 0;

var pratoEscolhido ='';
var bebidaEscolhida = '';
var sobremesaEscolhida = '';

function selecionarPrato(clicked_id){
    tirarSelecionadoPrato();
    document.getElementById(clicked_id).style.boxShadow = "0px 0px 0px 5px #32B72F";
    var check = document.createElement("ion-icon")
    check.setAttribute("name","checkmark-circle")
    check.setAttribute("id","checkmarkid")
    check.setAttribute("class","checkmark")
    document.getElementById(clicked_id).appendChild(check);
    countPrato ++;
    pratoEscolhido=clicked_id;
    finalizarPedido();
}

function selecionarBebida(clicked_id){
    tirarSelecionadoBebida();
    document.getElementById(clicked_id).style.boxShadow = "0px 0px 0px 5px #32B72F";
    var check = document.createElement("ion-icon")
    check.setAttribute("name","checkmark-circle")
    check.setAttribute("id","checkmarkid")
    check.setAttribute("class","checkmark")
    document.getElementById(clicked_id).appendChild(check);
    countBebida++;
    bebidaEscolhida=clicked_id;
    finalizarPedido();
}

function selecionarSobremesa(clicked_id){
    tirarSelecionadoSobremesa();
    document.getElementById(clicked_id).style.boxShadow = "0px 0px 0px 5px #32B72F";
    var check = document.createElement("ion-icon")
    check.setAttribute("name","checkmark-circle")
    check.setAttribute("id","checkmarkid")
    check.setAttribute("class","checkmark")
    document.getElementById(clicked_id).appendChild(check);
    countSobremesa++;
    sobremesaEscolhida=clicked_id;
    finalizarPedido();
}

function tirarSelecionadoPrato(){
    var opcoes = document.getElementById("opcoesPratos");
    var opcao = opcoes.getElementsByClassName("opcao");
    for (let i = 0; i < opcao.length; i++){
        opcao[i].style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
    }
    tirarCheckMark();
}

function tirarSelecionadoBebida(){
    var opcoes = document.getElementById("opcoesBebidas");
    var opcao = opcoes.getElementsByClassName("opcao");
    for (let i = 0; i < opcao.length; i++){
        opcao[i].style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
    }
    tirarCheckMark();
}

function tirarSelecionadoSobremesa(){
    var opcoes = document.getElementById("opcoesSobremesas");
    var opcao = opcoes.getElementsByClassName("opcao");
    for (let i = 0; i < opcao.length; i++){
        opcao[i].style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
    }
    tirarCheckMark();
}

function tirarCheckMark(){
    var check_Mark = document.getElementById("checkmarkid");
    try {
        check_Mark.remove();
    } 
    catch (e){};
}

function finalizarPedido(){
    if (countPrato >= 1 && countBebida >=1 && countSobremesa >=1 && countPedido == 0) {
        let botaoInferior = document.getElementById("botaoInferior");
        let texto = document.getElementById("textoInicial");
        texto.remove();
        let tagP = document.createElement("p");
        let textoFinal = document.createTextNode("Fechar pedido")
        tagP.appendChild(textoFinal);
        botaoInferior.appendChild(tagP);
        botaoInferior.style.backgroundColor = "#32B72F";
        botaoInferior.setAttribute("class","botao");
        countPedido ++;
    }
}

function fecharPedido(){
    if (countPedido == 0){}
    
    else{
        let precoBebida = 'preço' + bebidaEscolhida; 
        let precoPrato = 'preço' + pratoEscolhido;
        let precoSobremesa = 'preço' + sobremesaEscolhida;
        precoBebida = document.getElementById(precoBebida).textContent;
        precoBebida = precoBebida.split(" ").pop();
        precoBebida =  parseFloat(precoBebida.replace(',','.'));

        precoPrato = document.getElementById(precoPrato).textContent;
        precoPrato = precoPrato.split(" ").pop();
        precoPrato =  parseFloat(precoPrato.replace(',','.'));

        precoSobremesa = document.getElementById(precoSobremesa).textContent;
        precoSobremesa = precoSobremesa.split(" ").pop();
        precoSobremesa =  parseFloat(precoSobremesa.replace(',','.'));

        let precoFinal =  precoBebida + precoPrato + precoSobremesa;
        precoFinal = precoFinal.toFixed(2);
         
        let bebidaFinal = 'nome' + bebidaEscolhida;
        bebidaFinal = document.getElementById(bebidaFinal).textContent;
        let pratoFinal = 'nome' + pratoEscolhido;
        pratoFinal = document.getElementById(pratoFinal).textContent;
        let sobremesaFinal = 'nome' + sobremesaEscolhida;
        sobremesaFinal = document.getElementById(sobremesaFinal).textContent;

        let mensagemPronta =  "Olá, gostaria de fazer o pedido:\n- Prato: "+ pratoFinal + "\n- Bebida: " + bebidaFinal + "\n- Sobremesa: "+ sobremesaFinal + "\nTotal: R$ " + precoFinal;

        let nomeCliente = prompt("Qual o seu nome?");
        let enderecoCliente = prompt("Qual seu endereço?");

        mensagemPronta = mensagemPronta + "\n \nNome: " + nomeCliente +"\nEndereço: " + enderecoCliente 

        mensagemPronta = encodeURIComponent(mensagemPronta); 

        var link = "https://wa.me/5521964406513?text="

        link = link+mensagemPronta;

        linkBotao = document.getElementById("linkWhatsapp");
        linkBotao.setAttribute("href",link);
    }
}
    
