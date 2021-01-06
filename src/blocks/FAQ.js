const faqs = [
  {
    quest: "Q. What is Magento 2 Affiliate extension?",
    answer:
      "Affiliate extension for Magento 2 is a network connecting your website with the other ones. You will put your product/service links on those websites and get traffic from them when someone clicks on the links to visit your store."
  },
  {
    quest: "Q. How to enable Affiliate Program in Magento 2?",
    answer:
      "To enable Affiliate Program in Magento 2: Log in to Admin Panel > Store > Configuration > Mageplaza Extensions > Affiliate > General configuration and turn the Enable to Yes. Follow our guide to set up everything for your affiliate program."
  },
  {
    quest: "Q. How many programs can I create at the same time?",
    answer:
      "There is no limitation to the number of programs (campaigns) you can set up in the backend."
  },
  {
    quest: "Q. How many Tiers can I create for a campaign?",
    answer:
      "In Standard edition, the number is one. In the Affiliate Pro and Affiliate Ultimate editions, you can create multiple tiers as you want."
  },
  {
    quest: "Q. In which ways can the commission be counted?",
    answer:
      "The commission can be calculated based on the percentage of grand total or the fixed amount."
  },
  {
    quest:
      "Q. How many payment methods can an affiliate use to receive the commission?",
    answer:
      "There are 3 main payment methods including Paypal, Bank Transfer, and Offline Payment."
  },
  {
    quest: "Q. How to create an affiliate program in Magento 2?",
    answer:
      "To create an affiliate program in Magento 2: Log in to Admin Panel > Marketing > Campaigns > Edit Default campaign (standard version) or Create new campaign. Here, you can start to create terms for your campaign. To complete the settings, follow our guide."
  },
  {
    quest: "Q. How to configure Affiliate Program in Magento 2?",
    answer:
      "To configure Affiliate Program in Magento 2: Log in to Admin Panel > Store > Configuration > Mageplaza Extensions > Affiliate. Here you can start to set up terms for your affiliate system on your website. To find details about settings, follow our guide."
  },
  {
    quest: "Q. In which step of purchase can the commission be eligible?",
    answer:
      "From the admin backend, store owners can set the commission as eligible when the invoice is created."
  },
  {
    quest: "Q. In which way can an affiliate send the referral link to others?",
    answer:
      "They can copy-paste the URL links to any destination, send emails, share on social channels, embed snippet on affiliate websites or insert a banner with this link (supported in Pro and Ultimate editions)."
  }
];

const totalFAQ = faqs.length;
const colLeft = Math.ceil(totalFAQ / 2);
const leftFAQ = faqs.slice(0, colLeft);
const rightFAQ = faqs.slice(colLeft);

const title = "FREQUENTLY ASKED QUESTIONS";
const subTitle =
  "We have answered a wide range of questions for your convenience";

const leftContent = leftFAQ
  .map((faq, key) => {
    const { quest, answer } = faq;
    const isShow = key === 0 ? "show" : "";
    const headingId = "cardHeading" + key;
    const bodyId = "cardBody" + key;
    return `
       <div class="card mb-3">
           <div class="card-header card-collapse" id="${headingId}">
               <h4 class="mb-0">
                   <button type="button" class="btn btn-link btn-block d-flex justify-content-between card-btn p-3 collapsed" data-toggle="collapse" data-target="#${bodyId}" aria-expanded="false" aria-controls="${bodyId}">
                       <strong>${quest}</strong>
                       <span class="card-btn-arrow">
                           <span class="fas fa-arrow-down small"></span>
                       </span>
                   </button>
               </h4>
           </div>
           <div id="${bodyId}" class="collapse ${isShow}" aria-labelledby="${bodyId}" data-parent="#faq-section">
               <div class="card-body">
                   ${answer}
               </div>
           </div>
       </div>
    `;
  })
  .join("");

const rightContent = rightFAQ
  .map((faq, key) => {
    const { quest, answer } = faq;
    const headingId = "cardHeading" + (key + leftFAQ.length + 1);
    const bodyId = "cardBody" + (key + leftFAQ.length + 1);
    return `
       <div class="card mb-3">
           <div class="card-header card-collapse" id="${headingId}">
               <h4 class="mb-0">
                   <button type="button" class="btn btn-link btn-block d-flex justify-content-between card-btn p-3 collapsed" data-toggle="collapse" data-target="#${bodyId}" aria-expanded="false" aria-controls="${bodyId}">
                       <strong>${quest}</strong>
                       <span class="card-btn-arrow">
                           <span class="fas fa-arrow-down small"></span>
                       </span>
                   </button>
               </h4>
           </div>
           <div id="${bodyId}" class="collapse" aria-labelledby="${bodyId}" data-parent="#faq-section">
               <div class="card-body">
                   ${answer}
               </div>
           </div>
       </div>
    `;
  })
  .join("");

export default {
  id: "FAQ",
  label: "FAQ",
  content: `
  <!-- FAQ Section -->
  <div class="container space-1">
  <div id="faq-section" class="mt-0 mb-0 mr-auto ml-auto">
      <h2 class="text-primary mb-3 center">
          ${title}
          <br>
          <span class="text-black-50" style="font-size: 1.1rem">
              ${subTitle}
          </span>
      </h2>
      <div class="row">
          <div class="col-sm-6">
              ${leftContent}
          </div>
          <div class="col-sm-6">
              ${rightContent}
          </div>
      </div>
  </div>
</div>
<!-- End FAQ Section -->
`
};
