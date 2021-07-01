# React template

I use this template to bootstrap my react js application. A template for teams, If you want to use it just clone and start playing. I will explain how to use it step by step. [use this template to create your new repository, follow the steps here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template)

## Technologies used in this template

1. ReduxToolkit : This is to help with state management.
2. Redux Persist : This helps us persist our state in a local storage.
3. TypeScript : Helps write predicable, clean and testable code.
4. React router dom : To handel navigation.
5. React-helmet : For handling our website Search Engine Optimization.

### Files for setting up redux toolkit

All files in the app folder are used to setup redux toolkit and redux persist. The hooks file expose custom hooks created by aliasing the useDispatch and useSelector with typescript.

### File for typeScript

The types.d.ts file is a types declaration file used to define the common types used in the project. All the types declared here are available globally to all files. You don't have to import it in any file.

### File with redux persist configurations

Inside the **app/store.ts** file, we import all the redux persist from line 8 to 17. Then we defined the redux persist option on line 23. on line 28 we define the persistedReducer and pass it to the reduce in the configureStore as an option.

### Files with React-helmet

in the **features/counter/counterPage** we import the react helmet library and we define the the title in the helmet tags line 12 to 16.

### Files with React-helmet

in the **features/counter/counterPage** we import the react helmet library and we define the the title in the helmet tags line 12 to 16.

## Folder structure

1. **./features** place where to add the different features of the application
2. **./app** the location to add all the redux logic including the store and the hooks
3. **./components** all the common/reusable components bits of the application

## Learn More

This template is managed by [Hakim Katende](https://ghkatende.com)
