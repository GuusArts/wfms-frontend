import WebSocket from 'ws';

let socket = new WebSocket('http://buildbot64.local/history/timeseries/stream', {
  rejectUnauthorized: false,
});

socket.onopen = function () {
  console.log('socket is now open');
  socket.send(
    JSON.stringify({
      id: 'test-command',
      command: 'ranges',
      query: {
        fields: ["battlebot64/Kettle Sensor/value[degC]","battlebot64/Kettle Actuator/desiredState"],
        duration: '1d',
      },
    }),
  );
};

socket.onmessage = function (event) {
  console.log('[message]', event.data);
};

socket.onclose = function (event) {
  if (event.wasClean) {
    console.log(
      `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`,
    );
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    console.log('[close] Connection died');
  }
};

socket.onerror = function (error) {
  console.log('[error]', error);
};
await new Promise((resolve) => setTimeout(resolve, 3600 * 1000));
