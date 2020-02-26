// node api
const {ipcRenderer} = require('electron')

ipcRenderer.on('getContent', function(){
  //var content = document.getElementsById("btn_test");
  //ipcRenderer.sendToHost('getContent', content.innerText);
  document.getElementById('btn_test').onclick = function () {
    ipcRenderer.sendToHost('print', 'print');
  };
});
