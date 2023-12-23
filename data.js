const nama = "muhamad jepri";
let usia = 7;

const biodata = document.getElementById('biodata');

function generatebiodata() {
    let generasi;

    if (usia > 10 && usia < 18) {
        generasi = "generasi remaja";
    } 
    else if (usia > 18 && usia < 30) {
        generasi ="generasi dewasa";
    }
    else if (usia >= 30) {
        generasi = "generasi Tua";
    }
    else if (usia > 2 && usia < 10) {
        generasi = "generasi Umum";
    }
    else {
        generasi = "generasi Umum";
    }

    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generatebiodata();