importScripts('https://cdn.jsdelivr.net/npm/marked/marked.min.js');
onmessage = function(e) {
  console.log('Message received from main script');
  var workerResult = marked(e.data);
  console.log('Posting message back to main script');
  postMessage(workerResult);
}