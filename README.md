# ab-testing-testimonial

Instruction to create a new country content

1. add country object in src/components/testimonials/TestimonialList.js

example:- nepal: { \_uid: 103, name: 'Nepal', value: 'nepal', component: 'nepal' }

2. create a folder with country name under src/components/testimonials/testimonial-content folder.
   example:- nepal -> Nepal.jsx and nepal.css
   put new content in above 2 files.

3. go to src/componemts/component.js
   import and add new country object in Components object.

   example:-
   `import Nepal from './testimonials/testimonial-content/nepal/Nepal'; const Components = { india: India, us: US, nepal: Nepal, }`

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
