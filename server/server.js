const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '8240907cd7d84080b65104a6996d7f89',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/images', express.static(path.join(__dirname, '../images')));


// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });


const PORT = process.env.PORT || 8080



app.listen(
    PORT,
    () => console.log(`its running on http://localhost:${PORT}`)
)

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'orange',
        size: 'large'
    })

});

app.post('/tshirt/:id', (req, res) => {

    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo'})
    }

    res.send({
        tshirt: `orange with your ${logo} and ID of ${id}`,
    });
});




