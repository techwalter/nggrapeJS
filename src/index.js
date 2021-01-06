import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";
// import "./styles.css";

import {
  IconBlock,
  HLTextLeft,
  HLTextRight,
  TextSection,
  StoreOverview,
  ListHorizontal,
  ListVertical,
  FeatureTestimonial,
  MoreFeatureGrid,
  FAQ,
  PricingSection
} from "./blocks";

import { FAQPlugin, SlickSlider, AddMoreCommand } from "./components/index";

// import TestPlugin from "./components/Test";
const editor = grapesjs.init({
  canvas: {
    styles: [
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.5.0/css/all.min.css",
      "https://htmlstream.com/preview/front-v2.1/assets/css/theme.css",
      "https://www.mageplaza.com/skin/frontend/mageplaza/v2/css/combine.css"
    ],
    scripts: [
      "https://htmlstream.com/preview/front-v2.1/assets/vendor/jquery/dist/jquery.min.js",
      "https://htmlstream.com/preview/front-v2.1/assets/vendor/jquery-migrate/dist/jquery-migrate.min.js",
      "https://htmlstream.com/preview/front-v2.1/assets/vendor/popper.js/dist/umd/popper.min.js",
      "https://htmlstream.com/preview/front-v2.1/assets/vendor/bootstrap/bootstrap.min.js",

      "https://htmlstream.com/preview/front-v2.1/assets/js/hs.core.js",
      "https://htmlstream.com/preview/front-v2.1/assets/vendor/slick-carousel/slick/slick.js",

      "https://htmlstream.com/preview/front-v2.1/assets/js/components/hs.slick-carousel.js"
    ]
  },
  // Indicate where to init the editor. You can also pass an HTMLElement
  container: "#gjs",
  plugins: [FAQPlugin, SlickSlider, AddMoreCommand],
  // Get the content for the canvas directly from the element
  // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
  // fromElement: true,
  // Size of the editor
  height: "100vh",
  width: "auto",
  // Return JS of components inside HTML from 'editor.getHtml()'
  jsInHtml: false,
  // Disable the storage manager for the moment
  //false,
  showDevices: false,
  storageManager: {
    id: "gjs-", // Prefix identifier that will be used inside storing and loading
    type: "local", // Type of the storage
    autosave: true, // Store data automatically
    autoload: true, // Autoload stored data on init
    stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
    storeComponents: true, // Enable/Disable storing of components in JSON format
    storeStyles: true, // Enable/Disable storing of rules in JSON format
    storeHtml: true, // Enable/Disable storing of components as HTML string
    storeCss: true // Enable/Disable storing of rules as CSS string
  },
  blockManager: {
    appendTo: "#blocks",
    blocks: [
      TextSection,
      StoreOverview,
      HLTextLeft,
      HLTextRight,
      ListHorizontal,
      ListVertical,
      FeatureTestimonial,
      MoreFeatureGrid,
      FAQ,
      PricingSection,
      {
        id: "section", // id is mandatory
        label: "<b>Section</b>", // You can use HTML/SVG inside labels
        attributes: { class: "gjs-block-section" },
        content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`
      },
      IconBlock
    ]
  },
  traitManager: false,
  styleManager: false
});

const pn = editor.Panels;

editor.on("load", function () {
  pn.getButton("views", "open-blocks").set("active", 1);
});
