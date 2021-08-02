let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info.recorrente = "Sim";

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim",
};

for (let dados1 in info ) {
    if (dados1 === "recorrente" && info.recorrente === info2.recorrente){
        console.log("Ambos recorrentes");
    }else{
         console.log(info[dados1] + " e " + info2[dados1]);
        };
};

    


