jQuery(document).ready(function($) {
  var token = '146270725.c1965a7.d06810560592483aa13d61c48e8a652b'  
      userid = 146270725,
      num_photos = 4;
   
  $.ajax({
    url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(data){
      console.log(data);
      for( x in data.data ){
        $('#instagram').append('<div class="ig-preview grid-parent grid-25 tablet-grid-25 mobile-grid-25"><a href="https://www.instagram.com/atrelofficial/" target="_blank"><img src="'+data.data[x].images.thumbnail.url+'" class="img-resp placeholder"><img src="'+data.data[x].images.standard_resolution.url+'" class="display"></a></div>');
      }
    },
    error: function(data){
      console.log(data);
    }
  });
});
