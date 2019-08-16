# SimpleBB

> Fitness tracker and more

A MERN stack application for tracking fitness goals and more. General architecture from [Udemy](https://www.udemy.com/mern-stack-front-to-back/?couponCode=TRAVERSYMEDIA).

Scroll to the bottom for a todo list.

## Quick Start

```
# create default.json inside of config/

# file path will look like simplebb/config/default.json

# add the following code and fill it out accordingly

{
  "mongoURI": "",

  "jwtSecret": "",
}
 
```

```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install

# Run both Express & React from root
npm run dev

# Build for production
cd client
npm run build
```

## App Info

### Author

Reid Hansell with inspiration from Brad Traversy's MERN stack tutorial and FitList.

### Version

1.0.0

### License

This project is licensed under the MIT License

### To do lists; in order of importance

Main list:
-Aesthetics and navigation [see below for a relevant list]
-About page (the goal)
-Help page (how to use)
-Create, add, and delete workouts
-Edit all things that can be created (if and only if necessary)
-Optimization [see below for a relevant list]
-Stricter input rules for signup
-Increase security or add a warning/disclaimer about the current state of security
-Add diet tracking

Optimization list:
-Change state on click instead of waiting for loadUser. loadUser will correct the state regardless of any errors that occured on the backend. This will give the appreance of instant loading.
-General fixes. Fix repeated, inconsistent, and unnecessary code.

Aesthetics and navigation list:
-Implement color pallette
-Implement logo
-Implement icon
-Hide delete buttons for sets unless the exercise's edit toggle is activated.
-Mobile optimization
-General design improvements


