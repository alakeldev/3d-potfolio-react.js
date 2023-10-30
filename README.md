3D Dev Portfolio: Through the project of my Portfolio 

Learn:
- 3JS (React Three Fiber With three JS in React)
- Tailwindcss Popular utility-first css styling framework
- Framer Motion for animation in React

- Load, Create and Customize (3D Models and Geometries) with Various lights

- understanding 3D world with Camera and Positioning of an object in the space


HOSTINGER to host the websites 




To initiate the app in the beginning we will use vite
npm create vite@latest ./ -- -- template react   /*This is going to create new empty react application */


npm install -D tailwindcss   /*This command is going to download the tailwindcss */
npx tailwindcss 		/*This command after the previous one will initialize the tailwindcss on my project */

additional packages on this project
npm install --legacy-peer-deps @react-three/fiber (react based three js library)  @react-three/drei maath(for the geometries) react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom


/*only for this project there are a ready files to use for portfolio*/

for this project inside the components there are the empty structure and each section of this project


please be note the file inside the src => constants => index.js to change the text of the websites and edit it 

- To make your logo use website: logo.com   (online application)


tailwindcss not working with vite ?

you must add and run a commands

npm install --legacy-peer-deps postcss autoprefixer
npm tailwindcss init -p 


you must donwload package call three:
npm install --legacy-peer-deps three  /*Original three js package*/


website to donwload 3D models for free: https://sketchfab.com/search?q=earth&type=models
