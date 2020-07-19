# heroku-puppeteer-automation

## Initialize Heroku application
```
heroku create
heroku buildpacks:set heroku/nodejs
heroku buildpacks:add jontewks/puppeteer
git push heroku master
```

## RECOMMEND: Setting Basic authorization
```
heroku config:set USER=[username]
heroku config:set PASSWORD=[password]
```