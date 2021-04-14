(function ($, Drupal, window, document, undefined) {
Drupal.behaviors.voice_control = {
  attach: function (context, settings) {
    Drupal.voice_control = Drupal.voice_control || {};

    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
    var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

    var mic_img = '<img id="voice-control-start" src="/sites/all/modules/voice_control/resources/mic.png" height="50px" width="50px">';
    $('body').append(mic_img);

    var recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = function(event) {
      var result = event.results[0][0].transcript;
      var confidence = Math.round(event.results[0][0].confidence) * 100;
      // console.log('Result: ' + result + ' ( ' + confidence + '% confident)');

      if (result.length !== 0) {
        var words = result.split(" ");
        if (words.length !== 0) {
          var fn = words[0];
          try {
            window["Drupal"]["voice_control"][fn](result, confidence);
          }
          catch (err) {
            console.log('Command \'' + fn + '\' not found.');
          }
        }
      }
    }

    recognition.onspeechend = function() {
      recognition.stop();

      listening = false;
      $('#voice-control-start').css("background", "red");
    }

    var listening = false;
    $('#voice-control-start').click(function() {
      listening = !listening;
      if (listening) {
        $(this).css("background", "green");

        recognition.start();
      }
      else {
        $(this).css("background", "red");

        recognition.stop();
      }
    });
  }
};

})(jQuery, Drupal, this, this.document);
