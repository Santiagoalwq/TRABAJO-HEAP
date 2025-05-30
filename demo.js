const { Task, PriorityQueue } = require('./priority-queue');

function demoPriorityQueue() {
  console.log("DEMOSTRACIÓN DE COLA DE PRIORIDAD CON MINHEAP\n");
  
  const queue = new PriorityQueue(50);
  
  console.log("Insertando tareas en la cola:");
  
  const tasks = [
    new Task("Completar informe", 2),
    new Task("Reunión urgente", 1),
    new Task("Revisar correos", 3),
    new Task("Llamar al cliente", 1),
    new Task("Actualizar sistema", 2),
    new Task("Preparar presentación", 4),
    new Task("Emergencia de producción", 1),
    new Task("Planificar sprint", 3)
  ];
  
  tasks.forEach(task => {
    console.log(`Insertando: ${task}`);
    queue.insert(task);
  });
  
  queue.printHeap();
  queue.printHeapStructure();
  
  console.log("\n----- Extrayendo tareas por orden de prioridad -----");
  const extractedTasks = [];
  
  while (queue.size > 0) {
    const task = queue.extractHighestPriority();
    extractedTasks.push(task);
    console.log(`Extraída: ${task}`);
    
    if (queue.size > 0) {
      queue.printHeap();
    }
  }

  console.log("\n----- Lista ordenada de tareas extraídas -----");
  extractedTasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

demoPriorityQueue();
