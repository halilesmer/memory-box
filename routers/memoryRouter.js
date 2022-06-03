import express from "express";
import mongoose from "mongoose";
import Memory from "../db/memoryModel.js";
const router = express.Router();

//get all memories from database
router.get('/', async (req, res) => {
    try {
        const memories = await Memory.find()

        res.status(200).json(memories)

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

//get single memory from database
router.get('/:id', async (req, res) => {


    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({ message: 'Memory is not valid' })

            const memory = await Memory.findById(id);
            if (!memory) return;

            res.status(200).json(memory);
        }
    } catch (error) {
        res.status(404).json({ message: 'Memory not found' });
    }

})

//creat a memory
router.post('/', async (req, res) => {
    try {
        const memory = req.body;
        const createMemory = await Memory.create(memory);
        res.status(201).json(createMemory);

    } catch (error) {
        console.log(error.message);
        res.json({ message: 'Create the message failed' })
    }
})
//update a memory
router.put('/:id', (req, res) => {
    res.json({ message: 'update a memory' })
})

//delete a memory
router.delete('/:id', (req, res) => {
    res.json({ message: 'deleted a memory' })
})

export default router
