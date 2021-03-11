const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 1440,
    height: 810,
    webPreferences: {
      nodeIntegration: true
    },
    icon: __dirname + '/replit.ico'
  });
  win.removeMenu();

  win.loadURL('https://repl.it/~');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});