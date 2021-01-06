const leftTexts = ["Paypal", "Bank Transfer"];
const rightTexts = ["Offline payment", "Skrill (coming soon)"];
const image = "http://www.mageplaza.com/assets/svg/components/checked-icon.svg";

const leftBlock = leftTexts
  .map((text) => {
    return `
  <div class="media align-items-center text-secondary mb-3">
    <img class="mr-2" src="${image}" alt="Icon" width="16" height="16">
    <div class="media-body">
      ${text}
    </div>
  </div>
  `;
  })
  .join("");

const rightBlock = rightTexts
  .map((text) => {
    return `
  <div class="media align-items-center text-secondary mb-3">
    <img class="mr-2" src="${image}" alt="Icon" width="16" height="16">
    <div class="media-body">
      ${text}
    </div>
  </div>
  `;
  })
  .join("");

export default {
  id: "ListHorizontal",
  label: "ListHorizontal",
  content: `
  <!-- List horizon section -->
            <div class="container">
              <div class="row mb-2">
                <div class="col-6">
                  ${leftBlock}
                </div>
                <div class="col-6">
                  ${rightBlock}
                </div>
              </div>
            </div>
 <!-- End List horizon section -->
`
};
