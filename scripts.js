function selecionarPrato(clicked_id){
    tirarSelecionadoPrato();
    document.getElementById(clicked_id).style.boxShadow = "0px 0px 0px 5px #32B72F";
    var check = document.createElement("ion-icon")
    check.setAttribute("name","checkmark-circle")
    check.setAttribute("id","checkmarkid")
    check.setAttribute("class","checkmark")
    document.getElementById(clicked_id).appendChild(check);
}

function selecionarBebida(clicked_id){
    tirarSelecionadoBebida();
    document.getElementById(clicked_id).style.boxShadow = "0px 0px 0px 5px #32B72F";
    var check = document.createElement("ion-icon")
    check.setAttribute("name","checkmark-circle")
    check.setAttribute("id","checkmarkid")
    check.setAttribute("class","checkmark")
    document.getElementById(clicked_id).appendChild(check);
}

function selecionarSobremesa(clicked_id){
    tirarSelecionadoSobremesa();
    document.getElementById(clicked_id).style.boxShadow = "0px 0px 0px 5px #32B72F";
    var check = document.createElement("ion-icon")
    check.setAttribute("name","checkmark-circle")
    check.setAttribute("id","checkmarkid")
    check.setAttribute("class","checkmark")
    document.getElementById(clicked_id).appendChild(check);
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