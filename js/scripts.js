$(document).ready(function(){

  let counter = 0;
  function removeInvalidNumberMode(){
    $('.number-input').removeClass('invalid-input');
    $('#invalid-input-text').css('visibility', ' hidden')
  }
  // removes invalid number mode when the user clicks on the input field
  $('.number-input').click( () => {
    removeInvalidNumberMode()
  })

  $('#count-button-id').click( () => {
    const inputVal = $('.number-input').val();
    // check the input value
    if ( Number( isNaN(inputVal) ) || inputVal === ''){
      //invalid number handler
      $('.number-input').addClass('invalid-input');
      $('#invalid-input-text').css('visibility', ' visible');
    }
    else{
      // valid number
      $('#count-button-id, .number-input').prop('disabled',true)
                                          .css({
                                                'opacity': '0.8' ,
                                                'cursor' : 'not-allowed'
                                              });
      for (let i = 1; i <= inputVal ; i++) {
        setTimeout(function () {
          $('.counter > h2').text(i);
        }, i * 1000)
      }


    }
  })
})
