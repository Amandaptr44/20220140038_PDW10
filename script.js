window.onload = function() {
    // Menampilkan tanggal hari ini secara real-time
    updateTanggal();
    setInterval(updateTanggal, 1000); // Perbarui setiap detik

    // Set nilai tanggal saat formulir dimuat
    var today = new Date();
    var month = today.getMonth() + 1; // Bulan dimulai dari 0 (Januari)
    var day = today.getDate();
    var year = today.getFullYear();
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    var formattedDate = year + '-' + month + '-' + day;
    document.getElementById("tanggal").value = formattedDate;
}

function updateTanggal() {
    var today = new Date();
    var date = today.getFullYear() + '-' + addZero(today.getMonth() + 1) + '-' + addZero(today.getDate());
    var time = addZero(today.getHours()) + ":" + addZero(today.getMinutes()) + ":" + addZero(today.getSeconds());
    document.getElementById("tanggalHariIni").innerHTML = "Tanggal hari ini: " + date + " " + time;
}

function addZero(num) {
    return (num < 10 ? '0' : '') + num;
}

function kirimData() {
    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var alamat = document.getElementById("alamat").value;
    var peminatan = document.querySelector('input[name="peminatan"]:checked');
    var tanggal = document.getElementById("tanggal").value;

    if (nama === "" || nim === "" || alamat === "" || peminatan === null || tanggal === "") {
        alert("Harap lengkapi semua field!");
        return;
    }

    var peminatanText = "";
    if (peminatan) {
        peminatanText = peminatan.nextElementSibling.textContent; // Mendapatkan teks label radio button yang dipilih
    }

    var data = {
        nama: nama,
        nim: nim,
        alamat: alamat,
        peminatan: peminatanText,
        tanggal: tanggal
    };

    var message = "Data yang Anda masukkan:\n\n";
    message += "Nama: " + data.nama + "\n";
    message += "NIM: " + data.nim + "\n";
    message += "Alamat: " + data.alamat + "\n";
    message += "Peminatan: " + data.peminatan + "\n";
    message += "Tanggal: " + data.tanggal;

    console.log(data);
    alert(message);
}


