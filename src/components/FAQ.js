export default (editor) => {
  editor.DomComponents.addType("faq-type", {
    // Make the editor understand when to bind `my-input-type`
    isComponent: (el) => {
      return el.id === "faq-section";
    },

    // Model definition
    model: {
      // Default properties
      defaults: {
        script() {
          let preSelect = this.querySelector(".collapse.show");
          this.addEventListener("click", function (e) {
            let target = e.target;
            if (target.tagName === "STRONG") {
              target = target.parentElement;
            }
            if (target.tagName !== "BUTTON") {
              return;
            }
            preSelect.classList.remove("show");
            const answerId = target.getAttribute("data-target");
            let answerEl = this.querySelector(answerId);
            answerEl.classList.add("show");
            preSelect = answerEl;
          });
        }
      }
    }
  });
};
