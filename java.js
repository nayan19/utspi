function enableinput() {
		//document.getElementById('aktif').disabled = false;
		document.anggota.aktif.disabled = false;
}

function disableinput() {
		//document.getElementById('deaktif').disabled = true;
		document.anggota.deaktif.disabled = true;
}

function enableform(formId) {
	var f = document.forms[formId].getElementsByTagName('')
}

function tambah(){
	var harga = document.getElementById('harga');
	var jum = document.getElementById('jum');
	var total = document.getElementById('total');

	hasil = parseFloat(harga.value) * parseFloat(jum.value);
	total.value = hasil;
}