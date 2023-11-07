import puppeteer from "puppeteer";

const url = 'https://www.bhphotovideo.com/c/search?q=cinema%20camera&filters=fct_brand_name%3Ablackmagic-design'

const main = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: screenshot.png})
    await browser.close();
}