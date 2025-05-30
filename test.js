const { Task, PriorityQueue } = require('./priority-queue');

function runTests() {
  console.log("EJECUTANDO PRUEBAS DE COLA DE PRIORIDAD\n");
  
    console.log("Prueba 1: Inserción y extracción básica");
  const queue1 = new PriorityQueue(10);
  queue1.insert(new Task("Tarea A", 3));
  queue1.insert(new Task("Tarea B", 1));
  queue1.insert(new Task("Tarea C", 2));
  
  const task1 = queue1.extractHighestPriority();
  console.log(`Tarea extraída: ${task1.name}, Prioridad: ${task1.priority}`);
  console.assert(task1.name === "Tarea B" && task1.priority === 1, "La tarea extraída debería ser 'Tarea B' con prioridad 1");
  
  console.log("\nPrueba 2: Extraer todas las tareas en orden de prioridad");
  const queue2 = new PriorityQueue(10);   
  queue2.insert(new Task("Tarea X", 5));
  queue2.insert(new Task("Tarea Y", 2));
  queue2.insert(new Task("Tarea Z", 3));
  queue2.insert(new Task("Tarea W", 1));
  queue2.insert(new Task("Tarea V", 4));
  
  const expectedOrder = [1, 2, 3, 4, 5];
  let allCorrect = true;
  
  for (let i = 0; i < 5; i++) {
    const task = queue2.extractHighestPriority();
    console.log(`Extraída: ${task.name}, Prioridad: ${task.priority}`);
    if (task.priority !== expectedOrder[i]) {
      allCorrect = false;
      console.error(`Error: Se esperaba prioridad ${expectedOrder[i]} pero se obtuvo ${task.priority}`);
    }
  }
  
  console.assert(allCorrect, "Las tareas deberían extraerse en orden de prioridad ascendente");

  console.log("\nPrueba 3: Heap vacío");
  const queue3 = new PriorityQueue(5);
  const emptyResult = queue3.extractHighestPriority();
  console.log(`Resultado de extraer de un heap vacío: ${emptyResult}`);
  console.assert(emptyResult === null, "Extraer de un heap vacío debería devolver null");
  
  console.log("\nPruebas completadas.");
}

runTests();
