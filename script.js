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



function clickTime(){
  console.log('hi')
}


// .addEventListner('submit', onSubmit)

function getData(query){
  SONGS=[]
  request.get(`https://itunes.apple.com/search?term=${query}`)
    .then (function a(result){
      var data= (JSON.parse(result.text))
      // console.log(data)
      for (var i = 0; i < data.results.length; i++){
        // document.getElementById('test-area').innerHTML = 
        // var ids = this.results[i].previewUrl
                  //onClick = "${clickPlay(ids)}"

        SONGS.push(
        `<div class="box">
          <img class = 'album-art' 
          id = ${data.results[i].previewUrl}
          src=${data.results[i].artworkUrl100}>
          <div class = "artist-track">
            <span class = 'artist-name'>${data.results[i].artistName}</span><br>
            <span class = 'track-name'>${data.results[i].trackCensoredName}</span>
          </div>
          <audio controls><source src = ${data.results[i].previewUrl} type = "audio/aac"></audio></div>`)
        // console.log(SONGS)
        
    } document.getElementById('test-area').innerHTML = SONGS.join('')
    var albumArtList = document.querySelectorAll('.album-art')
    for (var i=0; i<albumArtList.length; i++){
      albumArtList[i].addEventListener("click",function()
      {document.getElementById('music-player').innerHTML=
      `<audio controls><source src = ${this.id}  
      type = "audio/aac"></audio></div>`})
    //console.log(document.getElementById('test-area').innerHTML)
    }
})}
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

function reply_click(){
  console.log('clicked')
}






function clickPlay(songId){
  document.getElementById('music-player').innerHTML=
  `<audio controls><source src = ${songId}  
  type = "audio/aac"></audio></div>`
}



console.log(SONGS[0])
  // radioChoice.addEventListener('onclick',function(){
  //   // if(this.checked){
  //   //   console.log('checked')
  //   // } else{
  //   //   console.log('not-checked')
  //   console.log('click')
    
  // })

  // https://itunes.apple.com/search?term=${query}&entity=allArtist&attribute=allArtistTerm

  //use array index . url