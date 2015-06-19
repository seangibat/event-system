#How to Start#

* ```cd``` into the events subfolder
* ```npm install```
* ```bower install```
* ```npm start```
* browse to http://localhost:3000

#A Few Things#

There were slightly differing instructions regarding what should be displayed in each row. The text said {title} {from}-{to}, but the pictures had the from and to as part of the details. I put them as part of the details, but I could easily move them up to the summary row.

Thank you for the opportunity! I'd be happy to talk about my implementation with you.

Sean

#Updates#

* 3:00AM PST - changed the participants list to be comma separated rather than space separated
* 3:30AM PST - fixed a bug angular was throwing on delete
* 3:30AM PST - made initial page load display the most recently created events (had to create a createdAt field on the model to do this)