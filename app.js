alert('Boas vindas ao jogo do numero secreto');
let numeroSecreto = 8;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s
while (chute != numeroSecreto) {
    chute = prompt ('escolha um número entre 1 e 10');
//se chute for igual ao numero secreto
    if (chute == numeroSecreto){
        break;  
    } else{
        if (chute > numeroSecreto) {
            alert (`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++
        }
    }
    
if (tentativas > 1) {
    alert(`isso ai!!!!!! voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`isso ai!!!!!! voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`)
}
