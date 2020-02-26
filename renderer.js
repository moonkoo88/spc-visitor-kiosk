// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const webContents = window.getCurWebContent();
const options = { silent: true, deviceName: 'Microsoft Print to PDF' };

var webview = document.getElementById('tmp2');

// ipc 메시지 이벤트가 webview에
webview.addEventListener('ipc-message', function(event) {
  switch(event.channel){
   case "print":
    console.log(event.args[0]);  // content.innerText가 출력된다
    console.log(webContents.getPrinters());
    webview.print(options);
    break;
  };
 });

// webview로드 완료 이벤트. onload 같은 느낌.
webview.addEventListener("did-finish-load", function(){
  //console.log(webview.getURL());
  webview.send("getContent");
});
