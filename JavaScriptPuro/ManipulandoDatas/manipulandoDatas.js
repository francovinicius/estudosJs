var data = new Date(); //data atual

// data.getHours horas

var novaData = new Date('March 10, 2019');
//console.log (novaData)

var mDate = Date.parse(novaData) //converte para mseconds

// console.log(mDate)

var mDateDois = new Date (1552186800000);

// console.log(mDateDois) //processo inverso


var pegarMes = data.getMonth(); //Funciona para vermos o mês, assim como Hours para horas entre outros
                                //OBS QUANDO PEGAR O MES TEM TEM QUE CONTAR +1 || Janeiro é = 0
                                //semana tbm! Domingo = 0

// console.log(pegarMes)

var dataNova = data.getDate()+"/"+(data.getMonth()+1)+"/"+data.getFullYear();

// console.log(dataNova)

var dataNova2 = data.setDate(data.getDate()+5);
// console.log (dataNova2)
