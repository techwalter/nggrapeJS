export default (editor) => {
  editor.DomComponents.addType("slickslider-type", {
    // Make the editor understand when to bind `my-input-type`
    isComponent: (el) => {
      return el.classList && el.classList.contains("js-slick-carousel");
    },

    // Model definition
    model: {
      // Default properties
      defaults: {
        script() {
          $.HSCore.components.HSSlickCarousel.init(
            ".js-slick-carousel:not(.slick-initialized)"
          );
        }
      }
    }
  });
};
