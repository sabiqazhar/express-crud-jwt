const TodoModel = require('../models/todo')

const getAll = async (req, res) => {
    const todos = await TodoModel.find()
    
    res.status(200).json({todos})
}

const getById = async (req, res) => {
    await TodoModel.findById(req.params.id, (err, result)=>{
        if (err){
            res.status(400).json({
                error: err
            })
        } else{
            res.status(200).json({
                result
            })
        }
    })
}

const postData = async (req, res) => {
    const body = req.body

    if (!body.title || !body.status) {
        res.status(401).json({
            status: 401,
            message: `Validation error: Todo validation failed: title: ${body.title}, status: ${body.status}` 
        })
        return
    }

    const newData = new TodoModel({
        title: body.title,
        status: body.status
    })

    const dataSave = await newData.save()
    const dataAfterAction = await TodoModel.find()

    res.status(201).json({
        message: "data added!",
        added: dataSave,
        dataAll: dataAfterAction
    })
}

const putData = async (req, res)=> {
    const {params: {id}, body} = req

    if (!body.title || !body.status || !id){
        res.status(401).json({
            status: 401,
            message: 'Validation error: id or required body properties is not defined'
        })
        return
    }

    updatedData = await TodoModel.findByIdAndUpdate({_id: id}, body)
    dataAfterAction = await TodoModel.find()

    if (!updatedData){
        res.status(501).json({
            status: 501,
            message: "Edit todo failed! not implement!"
        })
        return
    }

    res.status(200).json({
        message: "data updated!",
        updatedData,
        dataAll: dataAfterAction
    })

}

const deleteData = async (req, res)=>{
    if (!req.params.id){
        res.status(401).json({
            status: 401,
            message: "Validation error: Params _id is not defined"
        })
        return
    }

    const deletedData = await TodoModel.findByIdAndDelete({_id: req.params.id})
    const dataAfterAction = await TodoModel.find()

    if(!deletedData){
        res.status(501).json({
            status: 501,
            message: "Deleted failed! not implement!"
        })
        return
    }

    res.status(200).json({
        message: "Data deleted!",
        deletedData,
        dataAll: dataAfterAction
    })
}

module.exports = {getAll, getById, postData, putData, deleteData}