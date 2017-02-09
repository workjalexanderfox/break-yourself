# break-yourself

[![](https://cdn.meme.am/instances/500x/53638610.jpg)](https://www.youtube.com/watch?v=5wteB4EDo2Y)

-[Chris Tucker](http://www.imdb.com/name/nm0000676/) as [Smokey](http://www.imdb.com/character/ch0011184/), from the 1995 film [Friday](http://www.imdb.com/title/tt0113118/)

Run your latest version tests against your working version to make sure you don't break yourself. If you do break yourself, make sure you use proper semver etiquette before publishing a new version.

## Install
```bash
npm i -D break-yourself
```

## Config
In your package json add a script:
```json
"test:yourself": "break-yourself"
```

In your .gitignore add:
```txt
break-yourself/
```

## Run
```bash
npm run test:yourself
```

Profit.
