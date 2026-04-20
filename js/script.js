let timer; //sebagai wadah untuk menampung setelan yang akan datang//
let timeLeft = 25 * 60; //mencari detik dengan cara menghitung satuannya//
let isRunning = false; //memberi tahu komputer untuk stop, agar tidak ada pen double an waktu//

const display = document.getElementById('display');

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60) //meghitung menit nya dan membulatkan hasil nya//
    let seconds = timeLeft % 60; // menghitung sisa baginya dan menghitung detik nya//

    display.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`; 
    //untuk membuat number menjadi string agar bisa di tambahkan 0 di depan angka nya//
}


function startTimer() {
    if(isRunning) return; //ketika fungsi nya sudah jalan stop sampai disana//

    isRunning = true;
    timer = setInterval(() => {
        if(timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            alert("waktu habis! istirahat sejenak")
            isRunning = false;
        }
    }, 1000)
}

function stopTimer() {
    clearInterval(timer); //untuk men stop kan hitungan detik//
    isRunning = false; //untuk mengaktifkan tombol pada tombol stop//
}
function resetTimer() {
    stopTimer();
    timeLeft = 25 * 60; //untuk memanggil urutannya tanpa ada bentrokan/tabrakan lebih tepatnya agar si loop nya nggak ngulang kalau kita pencet reset//
    updateDisplay();
}