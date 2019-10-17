const express = require("express");
const router = express.Router();
let Todo = require('../models/Todo');

router.get('/', async (req, res) => {
    try {
        const allTodos = await Todo.find();
        res.status(200).json({
            data: allTodos
        });
    } catch (err) {
        res.status(400).json({
            message: "Some error occured",
            err
        });
    }
});

router.post('/add', async (req, res) => {
    try {
        let todo = new Todo(req.body);
        const result = await todo.save();
        console.log("RESULT: ", result);
        res.status(200).json({
            message: 'todo added successfully',
            result
        });
    } catch (err) {
        res.status(400).json({
            message: "Some error occured while adding new todo",
            err
        });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Todo.deleteOne({
            "_id" : id
        });
        res.status(200).json({
            message: "Successfully delete todo"
        })
    } catch (err) {
        res.status(400).json({
            message: "Some error occured while deleting todo item",
            err
        });
    }
});

router.put('/update/:id', async (req, res) => {
   try {
       const id = req.params.id;
       let todo = new Todo(req.body);
       await Todo.updateOne(
           {
               "_id": id
           },
           {
               "content": todo.content,
               "isCompleted": todo.isCompleted
           }
       );
       res.status(200).json({
           message: "Successfully udpate todo"
       })
   } catch (err) {
       res.status(400).json({
           message: "Some error occured while updating todo item",
           err
       })
   }
   console.log('exit');
});

module.exports = router;