const { MongoClient ,ObjectId } = require('mongodb');

class MongoDriver {
    constructor(config) {
        this.config = config;
    }

    // async connect() {
    //     const uri = `mongodb://${this.config.DB_HOST}:${this.config.DB_PORT}`;
    //     this.client = new MongoClient(uri);
    //     await this.client.connect();

    //     this.db = this.client.db('database');
    //     this.collection = this.db.collection('usuarios');
    // }
    async connect() {
        try {
            const uri = `mongodb://${this.config.DB_HOST}:${this.config.DB_PORT}`;
            this.client = new MongoClient(uri);
            await this.client.connect();

            this.db = this.client.db(this.config.DB_NAME || 'database'); // Permitir el uso de DB_NAME desde config
            this.collection = this.db.collection('usuarios');

            console.log('Conexión a MongoDB establecida');
        } catch (error) {
            console.error('Error al conectar con MongoDB:', error);
            throw new Error('No se pudo conectar con MongoDB');
        }
    }    

    async getAllUsers() {
        return await this.collection.find().toArray();
    }

    async getUserById(id) {
        return await this.collection.findOne({ _id: new ObjectId(id) });
    }

    async createuser(user) {
        await this.collection.insertOne(user);

        console.log('usuario Creado mongo');
    }      
}

module.exports = MongoDriver;