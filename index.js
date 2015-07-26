(function () {

  if (document.documentElement) {
    initialize();
  } else {
    window.addEventListener('DOMContentLoaded', initialize);
  }

  function initialize () {

    var inputFld = document.getElementById('messages-input');

    // Look for an existing handler, remove it if found.
    var existingHandler = document.documentElement.dataset.messageTweaksKeypressHandler;
    if (existingHandler) {
      inputFld.removeEventListener('keypress', existingHandler);
    }

    var handler = function (ev) {
      if (ev.keyCode !== 13) { return; }
      document.getElementById('messages-send-button').click();
      ev.preventDefault();
      ev.stopPropagation();
      Compose.clear();
    };

    // Remember the handler and attach it to the input field.
    document.documentElement.dataset.messageTweaksKeypressHandler = handler;
    inputFld.addEventListener('keypress', handler);

  }

}());
