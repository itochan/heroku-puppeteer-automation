# heroku-puppeteer-automation

## Initialize Heroku application
```
heroku create
heroku buildpacks:set heroku/nodejs
heroku buildpacks:add jontewks/puppeteer
git push heroku master
```