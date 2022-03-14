const { response } = require("express");

let modelsPelanggan = require("../models/index").pelanggan
exports.getData=async(request, response) => {
    let data = await modelsPelanggan.findAll()
    return response.json(data)
}
exports.addData=async(request, response) => {
    let newData = {
        nama_pelanggan: request.body.nama_pelanggan,
        alamat_pelanggan: request.body.alamat_pelanggan,
        kontak: request.body.kontak
    }
    modelsPelanggan.create(newData)
    .then(result =>{
        return response.json({
            messeage: "Data has been added"
        })
    })
    .catch(error => {
        return response.json({
            messeage: error.messeage
        })
    })
}

exports.updateData=async(request, response) => {
    let updatedData = {
        nama_pelanggan: request.body.nama_pelanggan,
        alamat_pelanggan: request.body.alamat_pelanggan,
        kontak: request.body.kontak
    }
    let param = {
        id_pelanggan: request.params.id_pelanggan
    }
    modelsPelanggan.update(updatedData,{
        where: param
    })
    .then(result =>{
        return response.json({
            messeage: "Update Success"
        })
    })
    .catch(error => {
        return response.json({
            messeage: error.messeage
        })
    })
}
    exports.deleteData=async(request, response) => {
        let param = {
            id_pelanggan: request.params.id_pelanggan
        }
        modelsPelanggan.destroy({
            where: param
        })
        .then(result =>{
            return response.json({
                messeage: "Delete success"
            })
        })
        .catch(error => {
            return response.json({
                messeage: error.messeage
            })
        })
    }