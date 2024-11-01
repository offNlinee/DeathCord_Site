let musicas = [
    {titulo: 'Asteca Fantasy', src:'Player/Musica/Asteca Fantasy.mp3'},//0
    {titulo:'Bento Na Vida', src:'Player/Musica/Brisa Na VIda.mp3'},//1
    {titulo:'Corredor De Sangue', src:'Player/Musica/Corredor De Sangue.mp3'},//2
    {titulo:'Indo Recuperar', src:'Player/Musica/Indo Recuperar.mp3'},//3
    {titulo:'Abandonado', src:'Player/Musica/Abandonado.mp3'},//4
    {titulo:'Arthur', src:'Player/Musica/Arthur.mp3'},//5
    {titulo:'Bento Estratosfera', src:'Player/Musica/Bento Estratosfera.mp3'},//6
    {titulo:'Ismaels', src:'Player/Musica/Ismael.mp3'},//7
    {titulo:'Julio Porque', src:'Player/Musica/Julio Porque.mp3'},//8
    {titulo:'Macumbeira Sexy', src:'Player/Musica/Macumbeira da paixão.mp3'},//9
    {titulo:'Miniatura', src:'Player/Musica/Miniatura.mp3'},//10
    {titulo:'Nome Manchado', src:'Player/Musica/Nome Manchado.mp3'},//11
    {titulo:'Repelente de Mulher', src:'Player/Musica/Repelente de Mulher.mp3'},//12
    {titulo:'Victor', src:'Player/Musica/Victor.mp3'},//13
    {titulo:'Entre o Medo e o Desejo', src:'Player/Musica/Entre o Medo e o Desejo.mp3'},//14
    {titulo:'FriendZone', src:'Player/Musica/FriendZone.mp3'}//15

];
let musica = document.querySelector('audio');
let indexMusica = 0;
let duracaoMusica = document.querySelector('.fim');
let NomeMusica = document.querySelector('.Descricao h2');
duracaoMusica.textContent = segundoParaMinutos (Math.floor(musica.duration));
//eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate', atulizarBarra);
document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica <0){
        indexMusica = 15;
    }
    renderizarMusica(indexMusica);

});
document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 15){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});
//funcao
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () =>{
        NomeMusica.textContent = musicas[index].titulo;
        duracaoMusica.textContent = segundoParaMinutos (Math.floor(musica.duration));
    });
}
function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}
function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}
function atulizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100)+ '%';
    let tempoDecorrido = document.querySelector('.Inicio');
    tempoDecorrido.textContent = segundoParaMinutos (Math.floor(musica.currentTime));
}
function segundoParaMinutos(segundos){
    let campoMinutos = Math.floor (segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0'+campoSegundos;
    }
    return campoMinutos+':'+campoSegundos;
}
