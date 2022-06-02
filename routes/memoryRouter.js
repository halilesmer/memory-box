import express from "express";

const router = express.Router();

//get all memories from database
router.get('/', async (req, res)=> {
    res.json({ message: 'get all memories from database'})
})
//get single memory from database

router.get('/:id', (req,res)=> {
    res.json({message: 'get single memory from database'})
})

//creat a memory
router.post('/', (req,res)=> {
    res.json({message: 'creat a memory'})
})

//update a memory
router.put('/:id', (req,res)=> {
    res.json({message: 'update a memory'})
})

//delete a memory
router.delete('/:id', (req,res)=> {
    res.json({message: 'deleted a memory'})
})

export default router
