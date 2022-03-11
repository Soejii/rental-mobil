const { response } = require("express");
let md5 = require('md5')

let modelsKaryawan = require("../models/index").karyawan
exports.getData=async(request, response) => {
    let data = await modelsKaryawan.findAll()
    return response.json(data)
}
exports.addData=async(request, response) => {
    let newData = {
        nama_karyawan: request.body.nama_karyawan,
        alamat_karyawan: request.body.alamat_karyawan,
        kontak: request.body.kontak,
        username: request.body.username,
        password: md5(request.body.password)
    }
    modelsKaryawan.create(newData)
    .then(result =>{
        return response.json({

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
        nama_karyawan: request.body.nama_karyawan,
        alamat_karyawan: request.body.alamat_karyawan,
        kontak: request.body.kontak,
        username: request.body.username,
        password: md5(request.body.password)
    }
    let param = {
        id_karyawan: request.params.id_karyawan
    }
    modelsKaryawan.update(updatedData,{
        where: param
    })
    .then(result =>{
        return response.json({
            messeage: "Update Succes"
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
            id_karyawan: request.params.id_karyawan
        }
        modelsKaryawan.destroy({
            where: param
        })
        .then(result =>{
            return response.json({
                messeage: "Delete succes"
            })
        })
        .catch(error => {
            return response.json({
                messeage: error.messeage
            })
        })
    }