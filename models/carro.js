const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Carro = sequelize.define('carro', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    placaDoCarro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    marca: {
        type: Sequelize.STRING,
        allowNull: false
    },
    modelo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    anoDoModelo: {
        type: Sequelize.CHAR(4),
        allowNull: false
    },
    versao: {
        type: Sequelize.STRING
    },
    cambio: {
        type: Sequelize.STRING
    },
    combustivel: {
        type: Sequelize.STRING
    },
    direcao: {
        type: Sequelize.STRING
    },
    potenciaDoMotor: {
        type: Sequelize.STRING
    },
    tipoDeVeiculo: {
        type: Sequelize.STRING
    },
    quilometragem: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    portas: {
        type: Sequelize.TINYINT
    },
    finalDaPlaca: {
        type: Sequelize.TINYINT
    },
    cor: {
        type: Sequelize.STRING
    },
    airBag: {
        type: Sequelize.BOOLEAN
    },
    alarme: {
        type: Sequelize.BOOLEAN
    },
    arCondicionado: {
        type: Sequelize.BOOLEAN
    },
    travaEletrica: {
        type: Sequelize.BOOLEAN
    },
    vidroEletrico: {
        type: Sequelize.BOOLEAN
    },
    som: {
        type: Sequelize.BOOLEAN
    },
    sensorRe: {
        type: Sequelize.BOOLEAN
    },
    cameraRe: {
        type: Sequelize.BOOLEAN
    },
    blindado: {
        type: Sequelize.BOOLEAN
    },
    direcaoHidraulica: {
        type: Sequelize.BOOLEAN
    },
    aceitaTrocas: {
        type: Sequelize.BOOLEAN
    },
    unicoDono: {
        type: Sequelize.BOOLEAN
    },
    preco: {
        type: Sequelize.BIGINT
    },
    image: {
        type: Sequelize.TEXT
    },
    estadoFinanceiro: {
        type: Sequelize.INTEGER
    },
    cep: {
        type: Sequelize.STRING
    }
})

module.exports = Carro;