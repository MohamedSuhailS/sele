const express = require("express")
const app = express();
const route = express.Router();
const PORT = 3000;
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Body parser use JSON data
const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

app.listen(PORT, () => {
    console.log(`Listening on POST: ${PORT}`);
});


app.get('/index', function (req, res) {  
    const { Builder, By, Key, until } = require('selenium-webdriver');
    const chrome = require('selenium-webdriver/chrome');
    
    // Set up Chrome options
    const chromeOptions = new chrome.Options();
    chromeOptions.addArguments('--headless'); // Run in headless mode
    
    // Create a new WebDriver instance
    const driver = new Builder()
      .forBrowser('chrome')
      .setChromeOptions(chromeOptions)
      .build();
    
    // Perform actions
    async function performActions() {
      try {
        // Navigate to a webpage
        await driver.get('https://www.google.com');
    
        // Find an element and interact with it
        const searchInput = await driver.findElement(By.name('q'));
        await searchInput.sendKeys('Selenium', Key.RETURN);
    
        // Wait for search results to load
        await driver.wait(until.titleContains('Selenium'), 5000);
    
        // Print the page title
        const pageTitle = await driver.getTitle();
        console.log('Page title:', pageTitle);
      } finally {
        // Quit the WebDriver session
        await driver.quit();
      }
    }
    
    // Call the function to execute the actions
    performActions();
    
})
app.get("/", async (request, response) => {
      response.status(500).send("suhail");
});
module.exports=route; 