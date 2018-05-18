import request from 'superagent'
import { SSL_OP_NO_QUERY_MTU } from 'constants';

var SONGS=[]

function onSubmit () {
  console.log('here')
  event.preventDefault()
  let query = document.getElementById('search').value

  getData(query)
  //replace this with goods from API
  // document.getElementById('test-area').innerHTML = query
}


document.getElementById('add-music-form').addEventListener('submit',onSubmit)


// .addEventListner('submit', onSubmit)

function getData(query){
  request.get(`https://itunes.apple.com/search?term=${query}`)
    .then (function a(result){
      var data= (JSON.parse(result.text))
      console.log(data.results.length)
      // console.log(data)
      for (var i = 0; i < data.results.length; i++){
        console.log(data.results[i])
        // document.getElementById('test-area').innerHTML = 
        SONGS.push(
        `<span class = 'artist-name'>${data.results[i].artistName}</span><br>
        <span class = 'track-name'>${data.results[i].trackCensoredName}</span><br>
        <img class = 'album-art' src=${data.results[i].artworkUrl100}><br>
        <audio controls class='sample'><source src = ${data.results[i].previewUrl} type = "audio/aac"></audio><br>`)
        console.log(data.results[0])
    } document.getElementById('test-area').innerHTML = SONGS.join('')
  })
}
// var form = document.getElementById("radio-form")
// var log = document.getElementById("log")

// form.addEventListner("submit", function(event){
//   var data = new FormData(form);
//   var output = "";
//   for (const entry of data){
//     output = entry[0] + '=' + entry[1]
//  +"/r"}
//  log.innerText = output;
//  console.log('works')
//  event.preventDefault();

// }, false)

  // console.log('artist')


function searchType(){
var radioChoice = document.musicForm.searchType
for (var i = 0; i < radioChoice.length; i++) {
  radioChoice[i].onclick = function() {
    // console.log(this.value)
    // document.getElementById('log').innerText = this.value
    if (this.value == 'song'){
      console.log('song')
      searchType='entity=allArtist&attribute=allSongTerm'
    }else if (this.value == 'album'){
      console.log('album')
      searchType='entity=allArtist&attribute=allAlbumTerm'
    }else if (this.value == 'artist'){
      console.log('arrtist')
      searchType='entity=allArtist&attribute=allArtistTerm'
    }else if (this.value == 'all'){
      console.log('alllll')
      searchType = ''
    }

    }
    }
}

  // radioChoice.addEventListener('onclick',function(){
  //   // if(this.checked){
  //   //   console.log('checked')
  //   // } else{
  //   //   console.log('not-checked')
  //   console.log('click')
    
  // })