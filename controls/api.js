(function ($, Drupal, window, document, undefined) {
  Drupal.voice_control = Drupal.voice_control || {};

  // Function name needs to match the key provided in hook_add_voice_control().
  //
  // result: the text spoken after the command.
  // confidence: a percentage of how confident the voice recognition is that it heard correctly.
  Drupal.voice_control.api = function (result, confidence) {
    // Perform command actions here.
    console.log(result + ' - ' + confidence + '% confidence.');
  }
})(jQuery, Drupal, this, this.document);
