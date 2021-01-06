const texts = [
  "Send the referral URL to friends",
  "Send emails invitations to friends",
  "Share on social media with 250+ social buttons",
  "Embed snippet on affiliate websites",
  "Insert a banner with a referral link (from Pro Edition)"
];
const image = "http://www.mageplaza.com/assets/svg/components/checked-icon.svg";

const contentBlock = texts
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
  id: "ListVertical",
  label: "ListVertical",
  content: `
  <!-- List veritcal section -->
  <div class="mb-2 mt-2">
              ${contentBlock}
            </div>
            <!-- End List veritcal section -->
`
};
