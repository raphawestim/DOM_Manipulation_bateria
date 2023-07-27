const teclas = document.querySelectorAll('.tecla');

function tocarAudio(audioId) {
  const audio = document.querySelector(audioId)
  
  if(audio !== null && audio.localName === 'audio'){
      audio.currentTime = 0.1;
      audio.play();
  }else{
    alert('Audio nao encontrado ou seletor invalido!');
    console.log('Audio nao encontrado ou seletor invalido!');
  }

}

for(let contador = 0; contador < teclas.length; contador++){

  const listTecla = teclas[contador];
  const instrumento = listTecla.classList[1];
  const idAudio = `#som_${instrumento}`

  listTecla.onclick = () => {
    tocarAudio(idAudio);
  }
  console.log(contador);

  listTecla.addEventListener('keydown', (evento) => {
    if(evento.code === "Enter" || evento.code === "Space"){
      listTecla.classList.add('ativa'); 
    }
  });

  listTecla.addEventListener('keyup', (evento) => {
    if(evento.code === "Enter" || evento.code === "Space"){
      listTecla.classList.remove('ativa'); 
    }
  });

};

//----------------------------------------------------------versao nao otimizada do codigo acima!----------------------------------------------------------------------

// const pom  = document.querySelector('.tecla_pom');
// const clap = document.querySelector('.tecla_clap');
// const tim = document.querySelector('.tecla_tim');
// const puff = document.querySelector('.tecla_puff');
// const splash = document.querySelector('.tecla_splash');
// const toim = document.querySelector('.tecla_toim');
// const psh = document.querySelector('.tecla_psh');
// const tic = document.querySelector('.tecla_tic');
// const tom = document.querySelector('.tecla_tom');

// pom.addEventListener('click', () => {
//   tocarAudio('#som_tecla_pom');
// });

// clap.addEventListener('click', () => {
//   tocarAudio('#som_tecla_clap')
// });

// tim.addEventListener('click', () => {
//   tocarAudio('#som_tecla_tim')
// });

// puff.addEventListener('click', () => {
//   tocarAudio('#som_tecla_puff')
// });

// splash.addEventListener('click', () => {
//   tocarAudio('#som_tecla_splash')
// });

// toim.addEventListener('click', () => {
//   tocarAudio('#som_tecla_toim')
// });

// psh.addEventListener('click', () => {
//   tocarAudio('#som_tecla_psh')
// });

// tic.addEventListener('click', () => {
//   tocarAudio('#som_tecla_tic')
// });

// tom.addEventListener('click', () => {
//   tocarAudio('#som_tecla_tom')
// });