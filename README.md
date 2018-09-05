This app renders a users list table which is retrieved from a simple api endpoint created using json-server. Here user.json contains the json data and it is hosted at localhost:3001/users and a script is added to run json-server inside package.json.

In Users.js, an action getUsers is dispatched, which makes a call to getUserSaga where the actual get request is made using axios. And once the call is success response.data is assigned to the users state. And inside Users.js using map() on users state, all the users details are rendered as table data.

Every user row has delete button as one of the columns. And onClick of delete button, deleteUser action is dispatched which inturn calls a deleteUserSaga. But here instead of deleting, we are changing the status value of that particular user to "deleted" from "exists" using axios.patch() request. And after patch, getUsers action is again dispatched to get the modified users data.

A comparison is made on status of the users data in Users.js, to check the status is not "deleted". If the status is "deleted", then that row will be returned as null.



