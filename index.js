const {app, BrowserWindow}= require('electron');
app.on('ready',()=>{
let mainwindow = new BrowserWindow();
mainwindow.loadURL(`file://${__dirname}/index.html`);
});
