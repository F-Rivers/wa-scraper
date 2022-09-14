github repo: https://github.com/F-Rivers/wa-scraper

# sources used:

https://www.youtube.com/watch?v=-3lqUHeZs_0&ab_channel=CodewithAniaKub%C3%B3w
https://robghchen.medium.com/how-to-scrape-a-static-website-846bd9c6ed28

# tech stack

# initial commands:

```
create-react-app wa-scraper
cd wa-scraper
npm i request-promise
npm i cheerio
```

# multiple errors in browser:

```
Module not found: Error: Can't resolve
```

solution:

```

npm uninstall react-scripts
npm install react-scripts@4.0.3
```

https://github.com/Rob--W/cors-anywhere/issues/301 request access to temporary
server  
info renders in browser console this circumvents issue with cors (because we're
not evil)

# brainstorming

- if .gov updates styling, our code will break
  - ? strip markup from content and keep text?
- strip out code and leave only text
  - can avoid styling breaking issues

create package.json with app details

```
npm init
```

install express dependency

```
npm i express
```
