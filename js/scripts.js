"use strict"

$(document).ready(function(){

  let counter = 0
  function disableInvalidNumberMode(){
    $( '.number-input' ).removeClass( 'invalid-input' );
    $( '#invalid-input-text' ).css( 'visibility', ' hidden' )
  }
  // disables invalid number mode when the user clicks on the input field
  $( '.number-input' ).click( () => {
    disableInvalidNumberMode()
  })

  $( '#count-button-id' ).click( () => {
    const inputVal = $( '.number-input' ).val();
    // check the input value
    if ( Number( isNaN( inputVal ) ) || inputVal === '' || Number(inputVal) <= 0){
      //invalid number handler
      $( '.number-input' ).addClass( 'invalid-input' );
      $( '#invalid-input-text' ).css( 'visibility', ' visible' );
    }
    else{
      // valid number
      $( '#count-button-id, .number-input' ).prop( 'disabled',true )
                                          .css({
                                                'opacity': '0.6' ,
                                                'cursor' : 'not-allowed'
                                            });
      // checks if a number divisible by 5, 3 or both
      function checkTheCounter(num){
        if( num % 3 === 0 && num % 5 === 0) {
          $( '#fingers' ).css( 'background-color', 'rgb(255, 210, 176)' );
          $('#toes').css( 'background-color', 'rgb(187, 207, 251)' );
        }
        else if( num % 3 === 0){
          $( '#fingers' ).css( 'background-color', 'rgb(255, 210, 176)' );
        }
        else if( num % 5 === 0) {
          $( '#toes' ).css( 'background-color', 'rgb(187, 207, 251)' );
        }
      }
      //
      // this variable outside startCount function so I can have access to it.
      let countInterval;
      function startCount() {
        // countInterval = intervalID so I can use clearInterval(intervalID)
        countInterval = setInterval( ( ) => {
          if( counter === Number(inputVal) ) {
            clearInterval( countInterval );
          }
          else {
            $( '.counter > h2' ).hide()
            counter++;
            $( '#fingers, #toes' ).removeAttr('style');
            $( '.counter > h2' ).fadeIn( 500 )
            $( '.counter > h2' ).text( counter );

            checkTheCounter(counter);
          }
        } , 1000 );
      }
      startCount();

      $( '#reset' ).click( () => {
        $( '#count-button-id, .number-input' ).removeAttr('style')
                                              .prop( 'disabled',false );
        clearInterval( countInterval );
        counter = 0;
        $( '.counter > h2' ).text( counter );
        $( '.number-input' ).val('');
        $( '#fingers, #toes' ).removeAttr('style');
      });

      $('#restart').click( () => {
        clearInterval( countInterval );
        startCount();
        counter = 0;
        $( '#fingers, #toes' ).removeAttr('style');
        $( '.counter > h2' ).text( counter );
      })
    }
  })
})
