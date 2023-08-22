# FlamDragon_Project
A full-stack, faux-store, final-project website for Mississippi Coding Academies

## Project Requirements

### Build an online store using Node.js on the back end and React on the front end.

- Must have a home, about, all products, and single product page
- Build a database that has the inventory and any other tables that are needed
- Using Node.js and Express, build an api to connect to the database
- Using React, render the data to the browser and the appropriate pages
- Must have a form (either contact or inventory) to collect data from the end client and store into the database
- Must be responsive (mobile, tablet, desktop)

## Front End  

The site is a React single-page application, written in JSX and JavaScript. It’s styled with a combination of vanilla CSS and Bootstrap, with the exception of the carousel. (It uses the React-Bootstrap library, which I found played better with React than the standard carousel from Bootstrap.)

##   Back End

The site employs Node and Express on the back end, with MySQL for the database queries. (This is not a production app, so the database is hosted on my local machine.) The database: 1) pulls data from a “products” table to populate the Products page, and 2) accepts user input on the Newsletter page to store names and email addresses in a “customers” table .

## Additional Libraries Used

I used the hamburger-react package for my animated hamburger menu. I used the react-router-dom package for the routing.

## Project Screenshots

![Screenshot of the home page, added in the Markdown, showing the drummer Elvin Jones smoking a cigareete while playing the drumset.](https://github.com/sydekix/FlamDragon_Project/assets/30737202/0d6f5e38-de9d-4a06-8a94-81e73ccb4ea6)

![Screenshot of desktop view of the Products page, added in the Markdown](https://github.com/sydekix/FlamDragon_Project/assets/30737202/49ae105a-9dab-4dc6-9e91-c77c1b30b85c)


![Screenshot of a tablet view of the Products page, added in the Markdown.](https://github.com/sydekix/FlamDragon_Project/assets/30737202/b447156d-f245-449c-93bd-911db77aeaa0)

![Screenshot of a mobile view of the Products page, added in the Markdown.](https://github.com/sydekix/FlamDragon_Project/assets/30737202/da816215-9af4-4756-8096-72321377061d)

