let Carro = require('../models/carro')
const {validationResult} = require('express-validator')
const fs = require('fs')

exports.getAll = (req, res, next) => {
    console.log('Initiating getAll');
    Carro.findAll()
    .then(carros => {
        res.json(carros)
    })
    .catch(err => {
        err.statusCode = 500;
        next(err);
    });
}

exports.addCarro = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error = new Error('Validation failed, entered data is incorrect');
        error.statusCode = 422;
        throw error;
    }

    Carro.create({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        placaDoCarro: req.body.placaDoCarro,
        marca: req.body.marca,
        modelo: req.body.modelo,
        anoDoModelo: req.body.anoDoModelo,
        versao: req.body.versao,
        cambio: req.body.cambio,
        combustivel: req.body.combustivel,
        direcao: req.body.direcao,
        potenciaDoMotor: req.body.potenciaDoMotor,
        tipoDeVeiculo: req.body.tipoDeVeiculo,
        quilometragem: req.body.quilometragem,
        portas: req.body.portas,
        finalDaPlaca: req.body.finalDaPlaca,
        cor: req.body.cor,
        airBag: req.body.airBag,
        alarme: req.body.alarme,
        arCondicionado: req.body.arCondicionado,
        travaEletrica: req.body.travaEletrica,
        vidroEletrico: req.body.vidroEletrico,
        som: req.body.som,
        sensorRe: req.body.sensorRe,
        cameraRe: req.body.cameraRe,
        blindado: req.body.blindado,
        direcaoHidraulica: req.body.direcaoHidraulica,
        aceitaTrocas: req.body.aceitaTrocas,
        unicoDono: req.body.unicoDono,
        preco: req.body.preco,
        estadoFinanceiro: req.body.estadoFinanceiro,
        cep: req.body.cep,
    })
    .then(carro => res.status(201).json(carro))
    .catch(err => {
        err.statusCode = 500;
        next(err);
    });
}

exports.addCarro = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error = new Error('Validation failed, entered data is incorrect');
        error.statusCode = 422;
        throw error;
    }
}

exports.getById = (req, res, next) => {
    Carro.findByPk(req.params.id)
        .then((carro) => {
            res.json(carro)
        })
        .catch(err => {
            err.statusCode = 500;
            next(err);
        });
}

exports.getByName = (req,res,next) =>{
    Carro.findAll({where: {titulo: req.params.titulo}})
        .then((carro) => {
            res.json(carro)
        })
        .catch(err => {
            err.statusCode = 500;
            next(err);
        });
}

exports.putCarro = (req, res, next) => {
    console.log(req.body)
    Carro.findByPk(req.body.id)
        .then((carro) => {
            carro.titulo= req.body.titulo
            carro.descricao= req.body.descricao
            carro.placaDoCarro= req.body.placaDoCarro
            carro.marca= req.body.marca
            carro.modelo= req.body.modelo
            carro.anoDoModelo= req.body.anoDoModelo
            carro.versao= req.body.versao
            carro.cambio= req.body.cambio
            carro.combustivel= req.body.combustivel
            carro.direcao= req.body.direcao
            carro.potenciaDoMotor= req.body.potenciaDoMotor
            carro.tipoDeVeiculo= req.body.tipoDeVeiculo
            carro.quilometragem= req.body.quilometragem
            carro.portas= req.body.portas
            carro.finalDaPlaca= req.body.finalDaPlaca
            carro.cor= req.body.cor
            carro.airBag= req.body.airBag
            carro.alarme= req.body.alarme
            carro.arCondicionado= req.body.arCondicionado
            carro.travaEletrica= req.body.travaEletrica
            carro.vidroEletrico= req.body.vidroEletrico
            carro.som= req.body.som
            carro.sensorRe= req.body.sensorRe
            carro.cameraRe= req.body.cameraRe
            carro.blindado= req.body.blindado
            carro.direcaoHidraulica= req.body.direcaoHidraulica
            carro.aceitaTrocas= req.body.aceitaTrocas
            carro.unicoDono= req.body.unicoDono
            carro.preco= req.body.preco
            carro.estadoFinanceiro= req.body.estadoFinanceiro
            carro.cep= req.body.cep
            return carro.save();
        })
        .then(carro => res.json(carro))
        .catch(err => {
            err.statusCode = 500;
            next(err);
        });
}

exports.delCarro = (req, res, next) => {
    Carro.findByPk(req.params.id)
        .then((carro) => {
            return carro.destroy();
        })
        .then(carro => res.json(carro))
        .catch(err => {
            next(err);
        });
}