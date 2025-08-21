const controller = new AbortController();

async function controlledTask({ signal }) {
  try {
    while(!signal.aborted) {
      console.log('Работаю...');
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (signal.aborted) {
        console.log('Получен сигнал остановки');
        break;
      }
    }
  } finally {
    console.log('Очистка ресурсов');
  }
}

// Запуск
controlledTask({ signal: controller.signal });

// Остановка через 5 секунд
setTimeout(() => {
  controller.abort();
}, 5000);