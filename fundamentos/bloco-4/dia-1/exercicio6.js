let peça = "bispo";

switch (peça) {
    case "peão":
       console.log("Peão - Se move apenas uma casa para frente");
        break;
    case "cavalo":
        console.log("cavalo - Movimento em L, todas as direções");
        break;
    case "torre":
        console.log("torre - movimento em linha reta, todas as direções");
        break;
    case "bispo":
        console.log("bispo - movimento em diagonal, todas as direções");
        break;
    case "rainha":
        console.log("rainha - diagonal ou linha reta, todas as direções");
        break;    
    case "rei":
        console.log("rei - diagonal ou linha reta, todas as direções, se move apenas uma casa");
        break;
    default:
        console.log("Valor não valido,tentar os seguintes valores:");
        console.log("peão, cavalo, torre, bispo, rainha, rei.");
        break;
};