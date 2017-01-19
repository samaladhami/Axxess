$(document).ready(function(){


  function removeInvalidNumberMode(){
    $('.number-input').removeClass('invalid-input');
    $('#invalid-input-text').css('visibility', ' hidden')
  }
  $('.number-input').click( () => {
    removeInvalidNumberMode()
  })

  $('#count-button-id').click( () => {
    const inputVal = Number( $('.number-input').val() )
    // check the input value
    if (isNaN(inputVal)){
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


    }
  })
})
