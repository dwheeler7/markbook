const Bookmark = require('../../models/bookmark')


module.exports = {
    index,
    create,   
    destroy,
    update,
    jsonBookmarks,
    jsonBookmark
}

function jsonBookmark (_, res) {
    res.json(res.locals.data.bookmark)
}

function jsonBookmarks (_, res) {
    res.json(res.locals.data.bookmarks)
}

// index
async function index(req, res, next) {
    try {
        //
    }
}

// delete

async function destroy(req ,res,next) {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)
        res.locals.data.todo = todo
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// update


async function update(req ,res,next) {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.todo = todo
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// create
async function create(req, res, next){
    try {
        const todo = await Todo.create(req.body)
        console.log(todo)
        res.locals.data.todo = todo
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}