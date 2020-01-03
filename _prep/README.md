

## Wireframes

https://ninjastorage.blob.core.windows.net/html/C32TTFx/4ce915a8-40ed-02cd-3ca9-0b7ed9d1e8a1.html

## API Snippet
This API will be used to convert location name and zip to Lattitude and longitude.

https://api.opencagedata.com/geocode/v1/json?q=New York City&key=15ff9fe808984f1ca9d347f81db54d48


```
 "bounds": {
    "northeast": {
        "lat": -34.5776519,
        "lng": -58.4614548
    },
 }
``` 

#### MVP 
- Create  New trail and user
- Read trail details
- Update a trail description
- Delete user and or trail descriptions
- Render data on page
- Add map api to identify a location with trails

#### PostMVP

- Add current weather
- add pins on map
- Allow user to choose favorites
- Save their choices in our database

## ERD Diagram

https://www.lucidchart.com/invitations/accept/be4e4749-e00d-4e1e-b2de-16ec11283efa

## React Component Hierarchy

https://www.lucidchart.com/invitations/accept/33710cf4-4487-484f-8bd1-163c24fd7710

## Priority Matrix

https://ninjastorage.blob.core.windows.net/html/C32TTFx/578a06b4-20d8-a67e-cd9b-5158bacfb72a.html

## Functional Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

|   Component  | Description | 
| ------------ | :---: |  
| Nav          | Renders the header/navbar that contains links to TrailList and CityList |
| TrailList    | Renders search, and a list of trails with basic info  + image |
| Trail        | Renders info about individual trail: coordinates + address, distance, location on map + trail view |
| Create Trail | Renders a form to allow user to create a trail |
| Edit Trail   | Renders a form to allow user to edit trail description |
| CityList     | Renders search and a list of cities with basic info (# of trails) + image |
| City         | Renders info about the city: coordinates, all trail id's |
| CreateUser   | Renders form to create user |
| EditUser     | Renders form to allow user to edit profile info or delete |
| User         | Renders user info & favorites |
| Search       | Renders a search form, which allows to search for a specific city or trail |
| Map          | Renders a map with trials around a city and A trail route |
| Footer       | Displays project and team name, creation date. Located at bottom of page |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Search| M | 2 hrs| hrs | hrs |
| Adding Trails| H | 4 hrs| hrs | hrs |
| Adding City  | H | 5 hrs| hrs | hrs |
| Adding Map design  | M | 4 hrs| hrs | hrs |
| Adding Map API| M | 4 hrs| hrs | hrs |
| Adding Nav| M | 2 hrs| hrs | hrs |
| Adding Geolocation| M | 3 hrs| hrs | hrs |
| Adding Create Trail| M | 2 hrs| hrs | hrs |
| Building DataBase | H | 2 hrs| hrs | hrs |
| Building Trails Tables| H | 4 hrs| hrs | hrs |
| Building City Table| H | 4 hrs| hrs | hrs |
| Building Trails routes| H | 4 hrs| hrs | hrs |
| Building City Routes | H | 4 hrs| hrs | hrs |
| Seeding tables| M | 3 hrs| hrs | hrs |
| Database Migration | M | 2 hrs| hrs | hrs |
| Debugging| M | 4 hrs| hrs | hrs |
| Project Approval | M | 1 hrs| hrs | hrs |
| Working with backend api | H | 3 hrs| hrs | hrs |
| Styling | M | 6 hrs| hrs | hrs |
| testing routes and components| M | 4 hrs| hrs | hrs |
| Total | H | 63 hrs| hrs | hrs |


## Additional Libraries
 Axios, react-router-dom, react-router, OpenLayers 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object