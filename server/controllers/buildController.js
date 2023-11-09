const path = require('path');
const mongoose = require('mongoose');
const Build = require('../models/buildModel')

const MONGO_URI = 'mongodb+srv://jakesgibson:codesmith@cluster0.rbosfyy.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(MONGO_URI);
// const puppeteer = require('puppeteer');
// const pluginStealth = require('puppeteer-extra-plugin-stealth') 
// const {executablePath} = require('puppeteer'); 
// const proxy = '50.168.163.177:80'

const buildController = {

    saveBuildDB: async (req, res, next) => {
        //test:
        console.log('starting save to DB')
        console.log(req.body)

        const build = {
            ...req.body
        }

        try{ 
            const newBuild = await Build.create(build) 
            console.log('Success, new build saved:')
            console.log(newBuild);
            res.locals.newBuild = newBuild;
            return next();
        } 
        catch(err){
            return next({
                log: "Unable to create a new object in Mongo; saveBuildDB()",
                status: 400,
                message: { err: 'Unable to save Build in Database'}
                })
        }

        
    },

    getAllBuildsDB: async (req, res, next) => {
        //test:
        console.log('getting builds from DB')

        try{ 
            const allBuilds = await Build.find() 
            console.log('Success, all builds:')
            console.log(allBuilds);
            res.locals.allBuilds = allBuilds;
            return next();
        } 
        catch(err){
            return next({
                log: "Unable to get all builds from Mongo; getAllBuildsDB()",
                status: 400,
                message: { err: 'Unable to get Builds from Database'}
                })
        }
    },





}


module.exports = buildController;