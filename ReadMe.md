## Demo Blog App

### Created with React.js and ASP.NET Core

- To Run the Project you need to <code>git clone</code> this repo
- cd into the 'demoblog' directory and run <pre>dotnet run</pre>

### Requirements

- Dotnet SDK 7.0
- Git
- Node.js 

### How the Project is Built

#### Backend 

- The project is build with ASP.NET Core, which includes Models, Controllers and some Configurations in Program.cs. 
- The Backend Routes are Proxied using the '/api' context, and thus endpoints are respectively '/api/contacts', '/api/articles'
- The Database Used is Entity Framework, and it was configured by adding the appropriate packages and two Context Files for Articles, Contacts. And These Context Files were registered in Program.cs
- The Backend Can be Tested using Postman, Insomnia, Fiddler or any Rest Client
- The Routes for each resource are /api/resources GET, to retrieve all objects, /api/resources/:id GET to retrieve a single object, the same route can also be used to delete an object. /api/resources POST and PUT can be used to create or update objects respectively.

#### Frontend

- The Frontend has a proxy setup file which points to the context, api, and has the appropriate Create React App structure.
- The <code>src</code> directory has all the components and respective pages, which is mainly centered around the App page.
- Axios is the basic means of communication between client and server and is making calls for each part of the appliation journey.
- You can also run the client independently using <code>npm start</code> in the ClientApp directory.
- The Contact Form includes basic validation by means of Regular Expressions, where the phone field only allows numeric values and the email field only allows valid emails.

#### Testing Notes

- To Create additional articles, you can use /api/articles POST with the appropriate body.
- To Retrieve a list of articles in the database, you can use /api/articles GET.
- If you're trying to check whether the contacts are created, you can use /api/contacts GET.
- if you encounter an issue with the node.js build or launch, please ensure rimraf is installed in package.json

Enjoy using the App!
