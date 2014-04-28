(function() {
  define(['./module'], function(controllers) {
    return controllers.controller('webCtrl', [
      '$scope', function($scope) {
        var test;
        return $scope.webCtrl = [
          $scope.wsUri = "ws://192.168.43.5:9002", $scope.output, $scope.init, $scope.output = document.getElementById("output"), $scope.testWebSocket(), test = 'Hello world', testWebSocket()(function() {
            alert('webController testWebSocket');
            this.websocket = new WebSocket(wsUri);
            this.websocket.onopen = evt(function() {
              return onOpen(evt);
            });
            this.websocket.onclose = evt(function() {
              return onClose(evt);
            });
            this.websocket.onmessage = evt(function() {
              return onMessage(evt);
            });
            return this.websocket.onerror = evt(function() {
              return onError(evt);
            });
          }), onOpen(evt)(function() {
            writeToScreen("CONNECTED");
            return doSend("WebSocket rocks");
          }), onClose(evt)(function() {
            return writeToScreen("DISCONNECTED");
          }), onMessage(evt)(function() {
            writeToScreen(RESPONSE, evt.data);
            return websocket.close();
          }), onError(evt)(function() {
            return writeToScreen(ERROR, evt.data);
          }), doSend(message)(function() {
            writeToScreen("SENT ", message);
            return websocket.send(message);
          }), writeToScreen(message)(function() {
            pre.style.wordWrap = "break-word";
            pre.innerHTML = message;
            return output.appendChild(pre);
          }), window.addEventListener("load", init, false)
        ];
      }
    ]);
  });

}).call(this);
