var express = require('express');  
var app = express();  
app.use(express.static('public'));  
const {Builder, Browser, By, Key, until} = require('selenium-webdriver');


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
app.get('/process_get', function (req, res) {  
response = {  
       first_name:req.query.first_name,  
       last_name:req.query.last_name  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
})  
var server = app.listen(8000, function () {  
  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
  
})  