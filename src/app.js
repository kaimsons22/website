const path = require('path');
const express = require('express');
const app = express();

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))
app.set('view engine', 'ejs')

const viewsPath = path.join(__dirname, '../templates/views')
app.set('views', viewsPath)

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/redeem', (req, res) => {
    res.render('form1', {
        errorMessage: '',
        title: 'Redeem Now'
    })
})

app.get('/application1', (req, res) => {
    res.render('form1', {
        errorMessage: '',
        title: 'Application for cancellation of card protection plan'
    })
})

app.get('/application2', (req, res) => {
    res.render('form1', {
        errorMessage: '',
        title: 'Card activation application'
    })
})

app.get('/application3', (req, res) => {
    res.render('form1', {
        errorMessage: '',
        title: 'Card block application'
    })
})

app.get('/application4', (req, res) => {
    res.render('form1', {
        errorMessage: '',
        title: 'Limit increase application'
    })
})

app.get('/form1', (req, res) => {
    res.render('form1', {
        errorMessage : '', 
        title: '' 
    })
})

app.get('/form2', (req, res) => {
    res.render('form2')
})

app.get('/form3', (req, res) => {
    res.render('form3')
})

app.get('/err', (req, res) => {
    res.render('form1', {
        errorMessage : 'Oops! Something went wrong.', 
        title: '' 
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is up on port 3000.')
})