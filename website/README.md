# The Website

The main website is built as an SPA and rendered client-side using the microframework [hyperapp](https://hyperapp.js.org/).  

The site is available both from https://jonaskuske.com and https://jonaskuske.de, English will automatically be set as default language if accessed through the `.com` domain, while German will be set if accessed through `.de`.  
You can toggle the language on the fly in the menu on the left (new localized assets will be imported when needed courtesy of dynamic imports and webpack's code splitting) or set the default you want by specifying a `lang` **URL parameter**.  

## Select your color

The website uses dynamic background- and theme colors thanks to CSS variables (custom properties) and client-side rendering. You can change the color by hitting **"Random Color"** or - if your browser supports the color picker element `<input type="color">` - you can choose your own color by clicking **"Select color"**.  
Colors can also be set using an **URL parameter** or remotely using your phone.  

## Pair Your Phone

Apart from selecting the color you want by clicking the random button or using the native color picker, you can also use your phone as a remote. Navigate to https://jonaskuske.com/connect (or click the respective button to go there) and a QR code as well as an ID will be shown.  
Then on your phone, navigate to https://jonaskuske.com/colorpicker and either scan the QR code or enter the ID.  
You'll be able to select colors by tapping or swiping on the color picker and the site will **update in real time**, thanks to the two sites communicating through a **Web Socket**. More remote control features are planned.

## Query string parameters

`project`: `...` when visiting the route */detail*, specify the project you want to look at  
`lang`: `de|en` Specify the language you want to see the page in  
`color`: `#xxxxxx` Specify the color (Hex) you want to see the page in initially - *please not that this always has to be the last parameter because of the way hashes in URLs are treated*  

**Example**: `https://jonaskuske.com/detail?project=typro&lang=de&color=#000000` will open the detail page for my project »typro« in German and with black set as theme color.

&nbsp;

## Build Instructions

`npm install` – install dependecies  
`npm run serve` – serve site in development mode with HMR on `localhost:8080`  
`npm run build` – build site for production with minification into `dist`  
`npm run lint` – run eslint & prettier to format the code  

&nbsp;

#### Thanks for checking out my site!  
 The website is tested in Chrome, Firefox, Edge, Opera, Safari and Internet Explorer 11 - if you encounter any issues, please let me know.  
(*known restrictions*: color changes are only permitted once every 1.2s in IE, no colorpicker in Safari and IE because of lacking browser support, no "glass" visuals for the menu in Firefox)  

> ✨ PS: Colors are fun and there might be an easteregg... 🔮