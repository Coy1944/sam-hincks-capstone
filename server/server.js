const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const {recipe, email} = require("./specialtoday");

app.use(express.json());
app.use(cors());

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '8240907cd7d84080b65104a6996d7f89',
  captureUncaught: true,
  captureUnhandledRejections: true,
})


rollbar.log('Hello world!')

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/images', express.static(path.join(__dirname, '../images')));




const PORT = process.env.PORT || 8080



app.listen(
    PORT,
    () => console.log(`its running on http://localhost:${PORT}`)
)

app.get('/special', (req, res) => {
    res.status(200).send(recipe)

});

app.post('/special', (req, res) => {

    // const { id } = req.params;
    // email.list.push(req.body);
    console.log(req.body);

   

    res.send();
});




