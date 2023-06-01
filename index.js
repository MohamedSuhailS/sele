const express = require("express")
const app = express();
const route = express.Router();
const PORT = 3000;
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Body parser use JSON data
const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const cors = require('cors')

app.use(cors())
app.listen(PORT, () => {
    console.log(`Listening on POST: ${PORT}`);
});


app.get('/index', function (req, res) {  
    (async function example() {
        let driver = await new Builder().forBrowser(Browser.CHROME).build();
        try {
          await driver.get('https://www.google.com/ncr');
          await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
          await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
        } finally {
          await driver.quit();
        }
      })();
      example();
})
app.get("/", async (request, response) => {
      response.status(500).send("suhail");
});
module.exports=route; 