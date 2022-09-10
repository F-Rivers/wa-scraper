github repo: https://github.com/F-Rivers/wa-scraper

# sources used:

https://robghchen.medium.com/how-to-scrape-a-static-website-846bd9c6ed28

# tech stack

backend: lite weight db

- sqlite
- python flask

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
