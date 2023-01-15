# Covid-cases
"As a UK citizen, I would like to know how cases of COVID-19 have been changing over time in my region."

Then I created Covid-cases: a React web page displaying the latest Covid-19 statistics for the UK, fetching data from the GOV.UK Covid-19 API  **https://coronavirus.data.gov.uk/details/developers-guide**
![image](/searchPage.jpg)
The user can search for a region and see more detailed breakdowns with intuitive Chart.js bar graphs
![image](/detailPage.jpg)

## How to run
In a terminal:
```bash
# Initial setup
npm install
# Start the server
npm start
```

Then it will be on your **localhost:3000**


## To do
1. Scalability: the web page should be adaptive across different devices

2. Balance between beautiful graphics and speed of loading

3. More data visualisation views:
**https://coronavirus.data.gov.uk/** The map view is great.
'overview first, zoom & filter, details on demand' is the 'Visual Information-Seeking Mantra' for large datasets
