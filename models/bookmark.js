const { model, Schema } = require('mongoose')


const bookmarkSchema = new Schema ({
    title: { required: true, type: String },
    url: { 
        type: String,
        required: true, 
        validate: {
            validator: function(v) {
                return /^(http|https):\/\//.test(v)
            },
            message: props => `${props.value} is not a valid HTTPS URL`
        }
     }
}, {
    timestamps: true
})

// 

const Bookmark = model('Bookmark', bookmarkSchema)

module.exports = Bookmark