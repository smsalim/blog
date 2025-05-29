const express = require('express')
const path = require('path')
const blogs = require('../data/blogs.js')
const router = express.Router()


router.get('/', (req, res)=>{
    // res.sendFile(path.join(__dirname, '../templates/index.html'))
    res.render('home')
})

router.get('/blog', (req, res)=>{
    res.sendFile(path.join(__dirname, '../templates/bloghome.html'))
})

router.get('/blog/:slug', (req, res)=>{
    myBlog = blogs.find((e) => { 
        return e.slug == req.params.slug
    })
    // myBlog = blogs.filter((e) => { 
    //     return e.slug == req.params.slug
    // })
    console.log(myBlog)
    res.sendFile(path.join(__dirname, '../templates/blogpage.html'))
})

module.exports = router
