import request from 'superagent'
import { SSL_OP_NO_QUERY_MTU } from 'constants';


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
      document.getElementById('test-area').innerHTML = 
      `<span class = 'artist-name'>${data.results[0].artistName}</span>
      <span class = 'track-name'>${data.results[0].trackCensoredName}</span>
      <img class = 'album-art' src=${data.results[0].artworkUrl100}>
      <audio controls class='sample'><source src = ${data.results[0].previewUrl} type = "audio/aac"></audio>`
      console.log(data.results[0])
    })
}

