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
        const bookmarks = await Bookmark.find()
        res.locals.data.bookmarks = bookmarks
        next()        
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// delete

async function destroy(req ,res,next) {
    try {
        const bookmark = await Bookmark.findByIdAndDelete(req.params.id)
        res.locals.data.bookmark = bookmark
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// update
async function update(req ,res,next) {
    try {
        const bookmark = await Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.bookmark = bookmark
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// create
async function create(req, res, next){
    try {
        const bookmark = await Bookmark.create(req.body)        
        res.locals.data.bookmark = bookmark
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}