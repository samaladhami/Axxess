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
      //invalid number
      $('.number-input').addClass('invalid-input');
      $('#invalid-input-text').css('visibility', ' visible');
    }
    else{
      // valid number
      

    }
  })
})
