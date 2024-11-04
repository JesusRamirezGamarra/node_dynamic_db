const mysql = require('mysql2/promise');

class MySQLDriver {
    constructor(config) {
        this.config = config;
    }

    // async connect() {
    //     console.log('config :', this.config);
    //     //const uri = 'mysql://' + this.config.DB_USER_NAME + ':' + this.config.DB_PASSWORD + '@' + this.config.DB_HOST;
    //     const uriConnection = 'mysql://' + this.config.DB_USER_NAME + ':' + this.config.DB_PASSWORD + '@' + this.config.DB_HOST;    
    //     this.connection = await mysql.createConnection(uriConnection);
    //     //this.connection = await mysql.createConnection(this.config);
    // }

    async connect() {
        console.log('config :', this.config);
        // Crea la conexión usando el objeto de configuración directamente
        this.connection = await mysql.createConnection({
            host: this.config.DB_HOST,
            user: this.config.DB_USER_NAME,
            password: this.config.DB_PASSWORD,
            database: this.config.DB_NAME,  // Asegúrate de incluir DB_NAME en config si estás usando una base de datos específica
            port: this.config.DB_PORT || 3306
        });
    }

    async getAllUsers() {
        const [rows] = await this.connection.execute('SELECT * FROM usuarios');
        return rows;
    }

    async getUserById(id) {
        const [rows] = await this.connection.execute('SELECT * FROM usuarios WHERE id = ?', [id]);
        return rows[0];
    }

    // async createuser(user) {
    //     const { nombre, apellido, edad, sexo } = user;

    //     await this.connection.execute(
    //         'INSERT INTO usuarios (nombre, apellido, edad, sexo) VALUES (?, ?, ?, ?)',
    //         [nombre, apellido, edad, sexo]
    //     );

    //     console.log('usuario Creado');
    // }

    async createuser(user) {
        const { nombre, apellido, edad, sexo } = user;
    
        try {

            const [result] = await this.connection.execute(
                'INSERT INTO usuarios (nombre, apellido, edad, sexo) VALUES (?, ?, ?, ?)',
                [nombre, apellido, edad, sexo]
            );
    
            const usuarioCreado = {
                id: result.insertId,  // ID generado por la base de datos
                nombre,
                apellido,
                edad,
                sexo,
                creadoEn: new Date().toISOString(),  // Fecha de creación en formato ISO
                status: 'Usuario creado exitosamente'
            };
    
            console.log('Usuario creado:', usuarioCreado);
    
            return usuarioCreado;
        } catch (error) {
            console.error('Error al crear usuario:', error);
            throw new Error('No se pudo crear el usuario');
        }
    }
    
}

module.exports = MySQLDriver;