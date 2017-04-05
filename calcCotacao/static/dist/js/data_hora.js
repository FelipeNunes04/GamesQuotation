function showHoraData() {
	// Obtém a data/hora atual
	var data = new Date();

	// Guarda cada pedaço em uma variável
	var dia     = data.getDate();           // 1-31
	var dia_sem = data.getDay();            // 0-6 (zero=domingo)
	var mes     = data.getMonth()+1;          // 0-11 (zero=janeiro)
	var ano2    = data.getYear();           // 2 dígitos
	var ano4    = data.getFullYear();       // 4 dígitos
	var hora    = data.getHours();          // 0-23
	var min     = data.getMinutes();        // 0-59
	var seg     = data.getSeconds();        // 0-59
	var mseg    = data.getMilliseconds();   // 0-999
	var tz      = data.getTimezoneOffset(); // em minutos

	// Adicionando 0 em valores menores que 10
	if(dia<10) dia = "0"+dia;
	if(mes<10) mes = "0"+mes;

	// Formata a data e a hora (note o mês + 1)
	var str_data = dia + '/' +	mes+ '/' + ano4;
	var str_hora = hora + ':' + min + ':' + seg;
	document.getElementById("data_hora").innerHTML=str_hora+" "+str_data;
}

function initDataHora(){
	setInterval(showHoraData,1000);
}