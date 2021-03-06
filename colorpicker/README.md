# The Colorpicker

The colorpicker is accessible at [jonaskuske.com/colorpicker](https://jonaskuske.com/colorpicker) and [jonaskuske.de/colorpicker](https://jonaskuske.de/colorpicker), depending on the language you want.  
Once you open the colorpicker, you can scan the unique QR code generated by the main website right in your browser, or manually enter your session ID. After the connection is established, a colorpicker will appear, where you can tap or slide and the colors on the website will update in real time thanks to a connection through **WebSockets**.  

The colorpicker is set up as a **Progressive Web App**, so you can open it while you're offline and install it on your phone. It also gracefully handles connection loss, then once e.g. your phone has service again, it'll prompt you to re-establish the previous connection – without having to scan the QR code another time.

> 💡 Hint: You can also scan the unique code with any QR code scanner of your choice. The link that will appear will open the colorpicker and connect you the the website immediately.

&nbsp;

## Build Instructions

`npm install` – install dependecies  
`npm run serve` – serve site in development mode with HMR on `localhost:8081`  
`npm run build` – build site for production with minification into `dist`  
`npm run lint` – run eslint & prettier to format the code  

&nbsp;  

#### Thanks for checking out my site!
The colorpicker uses many modern browser features (like WebRTC), so browser support is not 100% here.