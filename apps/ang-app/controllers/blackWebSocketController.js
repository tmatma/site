(function() {
  define(['./module'], function(controllers) {
    return controllers.controller('blackWebSocketController', [
      '$scope', function($scope) {
        var output, wsUri;
        wsUri = "ws://localhost:9002";
        output;
        init;
        output = document.getElementById("output");
        testWebSocket();
        testWebSocket()(function() {
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
        });
        onOpen(evt)(function() {
          writeToScreen("CONNECTED");
          return doSend("WebSocket rocks");
        });
        onClose(evt)(function() {
          return writeToScreen("DISCONNECTED");
        });
        onMessage(evt)(function() {
          writeToScreen(RESPONSE, evt.data);
          return websocket.close();
        });
        onError(evt)(function() {
          return writeToScreen(ERROR, evt.data);
        });
        doSend(message)(function() {
          writeToScreen("SENT ", message);
          return websocket.send(message);
        });
        writeToScreen(message)(function() {
          pre.style.wordWrap = "break-word";
          pre.innerHTML = message;
          return output.appendChild(pre);
        });
        return window.addEventListener("load", init, false);
      }
    ]);
  });

}).call(this);
