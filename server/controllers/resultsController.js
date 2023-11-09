const path = require('path');
const puppeteer = require('puppeteer');
// const pluginStealth = require('puppeteer-extra-plugin-stealth') 
// const {executablePath} = require('puppeteer'); 
// const proxy = '50.168.163.177:80'

const resultsController = {

    getResults: async (req, res, next) => {
        //test:
        console.log('starting puppeteer')
        console.log(req.body)
        
        const url = req.body.url;

            // await puppeteer.use(pluginStealth()) 
            const browser = await puppeteer.launch( {headless: false , args: [ '--disable-web-security' ]}); //{args: ['--proxy-server=${proxy}']} executablePath: executablePath(),
            const page = await browser.newPage();
            await page.setExtraHTTPHeaders({ 
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36', 
                'upgrade-insecure-requests': '1', 
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8', 
                'accept-encoding': 'gzip, deflate, br', 
                'accept-language': 'en-US,en;q=0.9,en;q=0.8' 
            }); 
            await page.setViewport({
                width: 1200,
                height: 800
            });
            // await page.setRequestInterception(true); 
            // page.on('request', async (request) => { 
            //     if (request.resourceType() == 'image') { 
            //         await request.abort(); 
            //     } else { 
            //         await request.continue(); 
            //     } 
            // }); 
            console.log('we get to url: ', url)
            await page.goto(url);

            // await autoScroll(page);
            
            await page.screenshot({
                path: 'screenshot.png',
                fullPage: true
            });
            await page.waitForTimeout((Math.floor(Math.random() * 12) + 5) * 1000) 
            // await page.screenshot({path: path.resolve(__dirname, 'screenshot.png')})
            console.log('we\'re here')
            const productList = await page.evaluate( () => {
                
                const products = document.querySelectorAll("[data-selenium='miniProductPageProduct']") // "[data-foo='1']"
            
                return Array.from(products).slice(0, 20).map((product) => {
                    const title = product.querySelector('h3').innerText || "No Test Available";
                    const price = product.querySelector("[data-selenium='uppedDecimalPriceFirst']").innerText.replace(/\$,/gi, '') || "No Price Available";
                    const photoLink = product.querySelector("[data-selenium='miniProductPageProductImgLink']") || '#';
                    const link = ("https://www.bhphotovideo.com/" + photoLink.href) || '#';
                    const imgURL = photoLink.firstChild.src;
                    return { title, price, link, imgURL }
                })
            })
            await page.screenshot({
                path: path.resolve(__dirname, `screenshot.png`),
                fullPage: true
            });
            console.log(productList)
            await browser.close();
            // console.log('request received')
            res.locals.scrapeData = productList;
            return next()
        
    },





}


module.exports = resultsController;