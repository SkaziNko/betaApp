const fs = require('fs');
const { MongoClient } = require('mongodb');

// URL de conexión a MongoDB Atlas
const uri = "mongodb+srv://skazinko:alinko2223@betaapp.7n3s2.mongodb.net/?retryWrites=true&w=majority&appName=BetaApp";

// Nombre de la base de datos y colección
const dbName = "myDatabase";
const collectionName = "users";

(async () => {
  const client = new MongoClient(uri);

  try {
    // Leer archivo de texto
    const data = fs.readFileSync('./usuarios_5000.txt', 'utf-8');
    const usuarios = data.split('\n').map((line) => {
      const [id, nombre, email, password] = line.split(','); // Asegúrate de ajustar el delimitador si es diferente
      return { id, nombre, email, password };
    });

    // Conectar a MongoDB
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insertar usuarios
    const result = await collection.insertMany(usuarios);
    console.log(`Usuarios insertados: ${result.insertedCount}`);
  } catch (err) {
    console.error("Error al insertar usuarios:", err);
  } finally {
    await client.close();
  }
})();
