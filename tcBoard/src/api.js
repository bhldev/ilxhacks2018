import openSocket from 'socket.io-client';
const socket = openSocket('http://' + window.location.hostname + ':8001');
export function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 3000);
}
export function subscribeToLed(sb) {
  socket.on('led', state => sb(state));
  socket.emit('subscribeToLed', true);
}
export function subscribeToPush(pb) {
    socket.on('push', state => pb(state));
    socket.emit('subscribeToPush', true);
  }
