(function ($, Drupal, window, document, undefined) {
  Drupal.voice_control = Drupal.voice_control || {};

  Drupal.voice_control.click = function (result, confidence) {
    var text = result.substr(result.indexOf(" ") + 1);
    var anchor = $('a:containsExactly(' + text + ')');
    var url = $(anchor[0]).attr('href'); // Just use the first matching link it finds for now.

    if (url) {
      window.location.href = url;
    }
    else {
      console.log('Cannot find: ' + result);
    }
  }

  $.expr[':'].containsExactly = function(obj, index, meta, stack)
  {
    return $(obj).text().toLowerCase() === meta[3].toLowerCase();
  };
})(jQuery, Drupal, this, this.document);
