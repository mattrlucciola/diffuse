# Diffuse

Collaborative MIDI-writing tool to help users socially synthesize symphonies.

<!-- ![](./jpeg.jpeg) -->
<!-- ![](./gif.gif) -->
Track your song's past, present, and what it could be.

## Project Description

Music is the most pervasive form of media, standing strong millenium after millenium.
Each song is extraordinarily complicated orchestration of instruments, effects, rhythms and melodies.  This application is not just a collaboration platform but rather a tool for songwriters to cleanly track the story of their song's development.

## Project Schedule
| Component             | Priority  | Est. Time | Work Time | Time ∆    |
| :---                  | :---:     | :---:     | :---:     | :---:     |
| UserView              | H         | 1 hrs     | 0 hrs     | -1 hrs    |
| UserEdit              | L         | 1.5 hrs   | 0 hrs     | -1.5 hrs  |
| ProjectList           | H         | 1.5 hrs   | 0.5 hrs   | -1.0 hrs  |
| ProjectListElem       | H         | 1 hrs     | 0.5 hrs   | -0.5 hrs  |
| HistoryView           | L         | 1 hrs     | 1 hrs     | 0 hrs     |
| HistoryElem           | L         | 2.5 hrs   | 1 hrs     | -1.5 hrs  |
| ProjectView           | H         | 1 hrs     | 1 hrs     | 0 hrs     |
| ProjectNav            | H         | 3.5 hrs   | 1.5 hrs   | -2 hrs    |
| InstrumentList        | M         | 1 hrs     | 0.5 hrs   | -0.5 hrs  |
| InstrumentContainer   | M         | 1 hrs     | 0.5 hrs   | -0.5 hrs  |
| InstrumentHead        | M         | 1.5 hrs   | 0.5 hrs   | -1.0 hrs  |
| InstrumentCanvas      | H         | 4 hrs     | 0.5 hrs   | -3.5 hrs  |
| CommentList           | M         | 1 hrs     | 0 hrs     | -1 hrs    |
| CommentElem           | M         | 2 hrs     | 0 hrs     | -2 hrs    |
| Misc. CSS             | M         | 4 hrs     | 1 hrs     | -3 hrs    |
| Total                 |           | 29.5 hrs  | 8.5 hrs   | -19 hrs   |


## Wireframes

![](./_prep/wireframe-home.png)
![](./_prep/wireframe-project.png)
![](./_prep/wireframe-user.png)
![](./_prep/wireframe-history.png)

## Priority Matrix

![](./_prep/time-importance-matrix.png)


## (P)MVP

- UserView
      - Public Information
      - Bio
      - (PMVP) Picture
      - ProjectList
- ProjectView
      - JSON-ified MIDI
      - Draw MIDI
      - Record sequence to database
      - Specify other users to collaborate
      - Comments
            - Allow users to comment on a project
            - (PMVP) Allow user to "like" a comment
- (PMVP) HistoryView
      - Accessible from ProjectView only
      - Array of project states listed by name and save/commit date

## Component Architecture

![](./_prep/component-diagram.png)

## UI Components

Main
      - Home
      - Project
      - User
      - History
SidebarLeft
      - ProjectDropdown
      - HistoryDropdown
SidebarRight
      - None

## Helper Functions

## Additional Libraries

- React-router-dom
- React.js
- Django
- MongoDB


## ERD

![](./_prep/ERD.png)

## Code Snippet

## Change Log

## Issues and Resolutions

- seeding db
- configuring auth with django + react
- serving react with django