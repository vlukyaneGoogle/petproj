const express = require("express");
const router = express.Router();

let todos = require("../dummydb");

router.get("/list", async (req, res) => {
    try {
        res.status(200).json({
            data: todos
        });
    } catch (err) {
        res.status(400).json({
            message: "Some error occured",
            err
        });
    }
});

router.get("/list/:id", async (req, res) => {
    let { id } = req.params;
    id = Number(id);
    try {
        let todo = todos.find(todo => todo._id === id);
        res.status(200).json({
            data: todo
        });
    } catch (err) {
        res.status(400).json({
            message: "Some error occured",
            err
        });
    }
});

module.exports = router;