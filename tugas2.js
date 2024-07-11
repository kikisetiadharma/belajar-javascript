// Mengambil nilai
const prompt = require('prompt-sync')({ sigint: true });

// Fungsi untuk mengecek apakah bilangan genap
function isEven(number)
{
    return number % 2 === 0;
}
  
  // Fungsi untuk menghitung akar pangkat dua
  function squareRoot(number) 
  {
    if (number < 0) 
        {
           throw new Error("Tidak bisa input bilangan negatif");
        }  
     else if (number % 2 !== 0) 
        {
          throw new Error("Tidak bisa input bilangan ganjil");
        }
    return Math.sqrt(number);
  }
  
  // Program utama
  let inputNumber;
  
  // Meminta input dari pengguna
  do 
  {
    inputNumber = parseInt(prompt("Masukkan bilangan genap: "));
  } 
  
  while (isNaN(inputNumber) || !isEven(inputNumber));
  
  // Menghitung dan menampilkan akar pangkat dua
  try 
  {
    const squareRootResult = squareRoot(inputNumber);
    console.log(`Akar pangkat dua dari ${inputNumber} adalah ${squareRootResult}`);
  }
    catch (error) 
    {
    console.error(error.message);
    }
  