# Comp4537 Assignment 1 Bronze
Instead of a quiz, your project provides a RESTful bank of quotes from famous people.

Note:

Front-end (Client) Requirements:

Page (1) index.html

 There should be two buttons for the user to click on to access either the Admin page or Reader page

Page (2) admin.html  -Admin/Quote Creation Page

 - This page should fetch and show all the existing quotes from the DB that the admin has already created with the option of editing/deleting each quote and a button at the bottom to add a new quote ( something similar to this image below)


Each quote needs two fields, the body ( the quote itself) and the source ( the famous person etc). After entering the necessary fields, the admin can save the "new" quote and make a POST request to save it in the database. Also, the admin should be able to edit existing quotes (the admin page sends a PUT request to the server for that individual quote )

The admin should also be able to delete any of the existing quotes ( the admin page sends a DELETE request for that individual quote to the server)

Note that deleting a quote, as well as removing it from the DB, it also has to remove its contents from the admin page too ( this way the user can visually see the quote has been removed)

If working with PUT/DELETE is challenging for you, after the admin is done with editing/ admin. Removing  you can use POST to send all quotes in the admin page to replace the existing copy in DB. If you choose this approach you need to provide a button, "save all '' at the bottom of the page.

In the case of using POST to delete or edit, the admin can edit or remove quotes then by pressing "save all" all the quotes in the admin page will replace the existing quotes in the DB

 Page (3) -reader.html reader Page -

The page should show the quotes that are stored in the database by giving the option to the user to choose to see the most recently entered quote ( which sends a GET request to get the individual quote such as GET API/v1/quotes/1)  or the entire quotes in the DB by making a GET request to get all GET API/v1/quotes).