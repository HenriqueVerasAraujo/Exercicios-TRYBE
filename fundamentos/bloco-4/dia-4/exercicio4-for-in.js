let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info.recorrente = "Sim";


  for (let dados in info) {
      console.log(dados)
  };

  for (let dados in info) {
      console.log(info[dados])
  };