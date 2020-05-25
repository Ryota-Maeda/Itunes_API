const Card = ({ img, name, detail}) => `
  <div class="article-container">
    <img src="${img}" alt="">
    <p>${name}</p>
    <a href = "${detail}">
      <button type="button" class="article-btn">Detail</button>
    </a>
  </div>
`;

$('#search-btn').click(() => {

  const word = $('#search-word').val();
  $('#results').empty();

  $.ajax({
    url: 'https://itunes.apple.com/search?parameterkeyvalue',
    type: 'GET',
    data: {
      term: word,
      country: 'JP',
      media: 'music',
      entry: 'music',
      // limit: '50',
      lang: 'ja_jp'
    },
      dataType: 'jsonp',

  }).done((response) => {
    for (let i = 0; i < response.results.length; i++) {

      let img = response.results[i].artworkUrl100;
      let name = response.results[i].collectionName;
      let detail = response.results[i].collectionViewUrl;
      let Img = img.replace(/100x100bb/g, '500x500bb');

  
      $('#results').append(
        Card({img: Img, name: name, detail: detail})
      );
    }
    


    console.log(response)

  }).fail((error) => {
    console.log(error)

  })





})