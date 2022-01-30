let countPrato = 0;
let countBebida = 0;
let countSobremesa = 0;
let countPedido = 0;

let pratoEscolhido ='';
let bebidaEscolhida = '';
let sobremesaEscolhida = '';

let pratoFinal ='';

function selecionar(elemento){
    if (elemento.classList.contains("prato")){
        countPrato ++;
        pratoEscolhido=String(elemento.id);
        let opcoes = document.getElementById("opcoesPratos");
        let opcao = opcoes.getElementsByClassName("opcao");   
        for (let i = 0; i < opcao.length; i++){
            opcao[i].style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
            let check = opcao[i].getElementsByClassName("checkmark");
            try{
                check[0].remove()
            }
            catch(e){};
        }  
        }

    if (elemento.classList.contains("bebida")){
        countBebida ++;
        bebidaEscolhida=String(elemento.id);
        let opcoes = document.getElementById("opcoesBebidas");
        let opcao = opcoes.getElementsByClassName("opcao"); 
        for (let i = 0; i < opcao.length; i++){
            opcao[i].style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
            let check = opcao[i].getElementsByClassName("checkmark");
            try{
                check[0].remove()
            }
            catch(e){};
        }
        }

    if (elemento.classList.contains("sobremesa")){
        countSobremesa ++;
        sobremesaEscolhida=String(elemento.id);
        let opcoes = document.getElementById("opcoesSobremesas");
        let opcao = opcoes.getElementsByClassName("opcao");
        for (let i = 0; i < opcao.length; i++){
            opcao[i].style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
            let check = opcao[i].getElementsByClassName("checkmark");
            try{
                check[0].remove()
            }
            catch(e){};
        }
        }

    elemento.style.boxShadow = "0px 0px 0px 5px #32B72F";
    let check = document.createElement("ion-icon")
    check.setAttribute("name","checkmark-circle")
    check.setAttribute("class","checkmark")
    elemento.appendChild(check);    

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
        precoBebida = precoBebida.toFixed(2);
        precoPrato = precoPrato.toFixed(2);
        precoSobremesa = precoSobremesa.toFixed(2);

         
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

        document.getElementById("nomePratoConfirma").innerHTML = pratoFinal;
        document.getElementById("precoPratoConfirma").innerHTML = precoPrato.replace('.',',');
        document.getElementById("nomeBebidaConfirma").innerHTML = bebidaFinal;
        document.getElementById("precoBebidaConfirma").innerHTML = precoBebida.replace('.',',');
        document.getElementById("nomeSobremesaConfirma").innerHTML = sobremesaFinal;
        document.getElementById("precoSobremesaConfirma").innerHTML = precoSobremesa.replace('.',',');
        document.getElementById("precoTotal").innerHTML = "R$ " + precoFinal.replace('.',',');
    
        let  div = document.getElementById("confirmarDados");
        div.setAttribute("class","on");
    }
}

function cancelarConfirmarDados(){
    let  div = document.getElementById("confirmarDados");
    div.setAttribute("class","off");
}
    