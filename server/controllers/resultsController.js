const path = require('path');
const puppeteer = require('puppeteer');
const proxy = ''

const resultsController = {

    getResults: async (req, res, next) => {
        //test:
        
        const url = 'https://www.bhphotovideo.com/c/search?q=cinema%20camera&filters=fct_brand_name%3Ablackmagic-design'

            const browser = await puppeteer.launch(); //{args: ['--proxy-server=${proxy}']}
            const page = await browser.newPage();
            await page.setExtraHTTPHeaders({ 
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36', 
                'upgrade-insecure-requests': '1', 
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8', 
                'accept-encoding': 'gzip, deflate, br', 
                'accept-language': 'en-US,en;q=0.9,en;q=0.8' 
            }); 
            await page.goto(url);
            // await page.screenshot({path: path.resolve(__dirname, 'screenshot.png')})
            const productList = await page.evaluate(() => {
                console.log('we\'re here')
                const products = document.querySelectorAll("[data-selenium='miniProductPageProduct']") // "[data-foo='1']"
            
                return Array.from(products).slice(0, 20).map((product) => {
                    const title = product.querySelector('h3').innerText;
                    return { title }
                })
            })
            console.log(productList)
            await browser.close();
            // console.log('request received')
            res.locals.scrapeData = productList;
            return next()
        
    },





}


module.exports = resultsController;