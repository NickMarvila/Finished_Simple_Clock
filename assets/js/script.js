const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time() {
  var dateToday = new Date();
  var hr = dateToday.getHours();
  var min = dateToday.getMinutes();
  var s = dateToday.getSeconds();

  if(hr < 10) hr = '0' + hr;

  if(min < 10) min = '0' + min;

  if(s < 10) s = '0' + s;

  hours.textContent = hr;
  minutes.textContent = min;
  seconds.textContent = s;
})
// Define um array com o caminho dos arquivos de áudio
var audioPaths = ['assets/diretorio/audio01.mp3', 'assets/diretorio/audio02.mp3', 'assets/diretorio/audio03.mp3', 'assets/diretorio/audio04.mp3', 'assets/diretorio/audio05.mp3', 'assets/diretorio/audio06.mp3', 'assets/diretorio/audio07.mp3', 'assets/diretorio/audio08.mp3', 'assets/diretorio/audio09.mp3', 'assets/diretorio/audio10.mp3', 'assets/diretorio/audio11.mp3', 'assets/diretorio/audio12.mp3', 'assets/diretorio/audio13.mp3', 'assets/diretorio/audio14.mp3', 'assets/diretorio/audio15.mp3', 'assets/diretorio/audio16.mp3', 'assets/diretorio/audio17.mp3', 'assets/diretorio/audio18.mp3', 'assets/diretorio/audio19.mp3', 'assets/diretorio/audio20.mp3', 'assets/diretorio/audio21.mp3', 'assets/diretorio/audio22.mp3', 'assets/diretorio/audio23.mp3', 'assets/diretorio/audio24.mp3', 'assets/diretorio/audio25.mp3', 'assets/diretorio/audio26.mp3', 'assets/diretorio/audio27.mp3', 'assets/diretorio/audio28.mp3', 'assets/diretorio/audio29.mp3', 'assets/diretorio/audio30.mp3' ];

// Define o índice do primeiro áudio a ser reproduzido
var audioIndex = 0;

// Define a função que será executada a cada período de tempo
function tocarAudio() {
  var audio = new Audio(audioPaths[audioIndex]);
  audio.play();

  // Incrementa o índice para tocar o próximo áudio na próxima execução
  audioIndex++;

  // Reinicia o índice quando chegar ao final do array
  if (audioIndex >= audioPaths.length) {
    audioIndex = 0;
  }
}

// Programa a execução da função a cada 10 segundos
setInterval(tocarAudio, 10 * 1000);
