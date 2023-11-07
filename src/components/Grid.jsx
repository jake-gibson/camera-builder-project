import React from "react";
import Result from "./Result.jsx";
import Equipment from "./Equipment.jsx";
// import puppeteer from "puppeteer";

const Grid = () => {

    

//     const url = 'https://www.bhphotovideo.com/c/search?q=cinema%20camera&filters=fct_brand_name%3Ablackmagic-design'

//     const main = async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(url);
//     await page.screenshot({path: screenshot.png})
//     await browser.close();
// }
//     main();

    const results = [];
    const equip = [];

    for(let i = 0; i < 20; i++){
        results.push(<Result />)
    }

    for(let i = 0; i < 8; i++){
        equip.push(<Equipment />)
    }

    return(
        <div id="grid">
            {results}
            {/* {equip} */}
        </div>
    );
}

export default Grid;