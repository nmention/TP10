module.exports = {
    hostname: "serveurmysql",
    user:"nmention",
    password:"3004",
    database:"bdd_node_1",
    dialect:"mysql",
    port: 3306,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};