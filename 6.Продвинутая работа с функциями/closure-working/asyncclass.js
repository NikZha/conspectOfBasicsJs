class AsyncWorker {
  constructor() {
    this._isRunning = false;
    this._task = null;
  }

  async start() {
    if (this._isRunning) return;
    
    this._isRunning = true;
    this._task = this._run();
  }

  async stop() {
    if (!this._isRunning) return;
    
    this._isRunning = false;
    await this._task;
  }

  async _run() {
    while (this._isRunning) {
      console.log('Работаю...');
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    console.log('Остановлено');
  }
}

// Использование
const worker = new AsyncWorker();
worker.start();

// Остановка через 5 секунд
setTimeout(() => worker.stop(), 5000);