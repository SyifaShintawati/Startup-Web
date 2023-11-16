//  Javascript untuk input email pada section contact us 
document.addEventListener("DOMContentLoaded", function () {
    // membuat variabel input dan button untuk mengambil id dan class nya
    var inputEmail = document.getElementById('emailaddress');
    var buttonInput = document.getElementById('buttonInputLetter');
  
    buttonInput.addEventListener('click', function (event) {
        var inputValue = inputEmail.value;
    
        // validasi email menggunakan regex
        var emailValidasi = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        // cek apakah input email tidak kosong dan sesuai dengan regex
        if (inputValue.trim() !== '' && emailValidasi.test(inputValue)) {
            // ambil array email dari local storage (jika ada)
            var storedEmails = JSON.parse(localStorage.getItem('newsletterEmails')) || [];
    
            // cek apakah email sudah ada dalam array
            if (!storedEmails.includes(inputValue)) {
            // push email ke dalam array
            storedEmails.push(inputValue);
    
            // simpan array email ke dalam local storage
            localStorage.setItem('newsletterEmails', JSON.stringify(storedEmails));
    
            alert('Alamat email disimpan di local storage!');
            
            location.reload();
            } else {
            alert('Alamat email sudah ada di local storage.');
            }
        } else {
            alert('Silakan masukkan alamat email yang valid. contoh :\nnama@domain.TLD (.com, .co.id, dll)');
            event.preventDefault();
        }
    });
  });
  