import request from 'superagent'
// import { SSL_OP_NO_QUERY_MTU } from 'constants';

var SONGS = []

function onSubmit () {
  event.preventDefault()
  let query = document.getElementById('search').value
  getData(query)
}

document.getElementById('add-music-form').addEventListener('submit', onSubmit)

function getData (query) {
  SONGS = []
  request.get(`https://itunes.apple.com/search?term=${query}`)
    .then(function a (result) {
      var data = (JSON.parse(result.text))
      for (var i = 0; i < data.results.length; i++) {
        SONGS.push(
          `<div class="box">
          <img class = 'album-art' id = ${data.results[i].previewUrl} src=${data.results[i].artworkUrl100}>
          <div class = "artist-track">
            <span class = 'artist-name'>${data.results[i].artistName}</span><br>
            <span class = 'track-name'>${data.results[i].trackCensoredName}</span>
          </div>
          </div>`)
      }
      document.getElementById('song-results').innerHTML = SONGS.join('')
      clickPlay()
    })
}

//  music player,song title, and artist appears in header when album art is clicked
function clickPlay () {
  var albumArtList = document.querySelectorAll('.album-art')
  for (var i = 0; i < albumArtList.length; i++) {
    albumArtList[i].addEventListener('click', function () {
      document.getElementById('music-player').innerHTML =
      `<audio controls autoplay class=top-audio"><source src = ${this.id}  
       type = "audio/aac"></audio><div class = "nowPlaying">${this.parentNode.innerHTML}</div>`
      console.log(this.parentNode)
    })
  }
}

//  sticky header (found on a css tutorial)
// When the user scrolls the page, execute myFunction

window.onscroll = function () { myFunction() }
// Get the header
var header = document.getElementById('myHeader')
// Get the offset position of the navbar
var sticky = header.offsetTop
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction () {
  if (window.pageYOffset >= sticky) {
    header.classList.add('sticky')
  } else {
    header.classList.remove('sticky')
  }
}

// Code that I didn't end up using for the radio form. It did not make sense to add it at this time
// but maybe I will add it in the future

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
// function searchType(){
// var radioChoice = document.musicForm.searchType
// for (var i = 0; i < radioChoice.length; i++) {
//   radioChoice[i].onclick = function() {
//     // console.log(this.value)
//     // document.getElementById('log').innerText = this.value
//     if (this.value == 'song'){
//       console.log('song')
//       searchType='entity=allArtist&attribute=allSongTerm'
//     }else if (this.value == 'album'){
//       console.log('album')
//       searchType='entity=allArtist&attribute=allAlbumTerm'
//     }else if (this.value == 'artist'){
//       console.log('arrtist')
//       searchType='entity=allArtist&attribute=allArtistTerm'
//     }else if (this.value == 'all'){
//       console.log('alllll')
//       searchType = ''
//     }

//     }
//     }
// }
