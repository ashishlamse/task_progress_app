const weatherApiRouter = require('../../controller/weathers/magicseweedWeather');
const weatherRouter = require('express').Router();
const authenticate=require('../../middlware/ authentication');
//weather router
weatherRouter.get('/',authenticate.verifyTocken,weatherApiRouter.getWeather);
weatherRouter.put('/',authenticate.verifyTocken,weatherApiRouter.updateWeather);
weatherRouter.get('/icon',authenticate.verifyTocken,weatherApiRouter.getWeatherIcons);
weatherRouter.get('/details',authenticate.verifyTocken,weatherApiRouter.getWeatherData);

module.exports=weatherRouter;