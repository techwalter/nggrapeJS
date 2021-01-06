const title = "Multiple Commission Tiers";
const text = [
  "From Pro Edition, for each campaign, store owners can add unlimited tiers and set the different levels of commission according to each tier of <b>Affiliate network.</b>",
  "For example, besides getting 10% value of an order that <b>Tier 1</b> creates, store owners also allow their Affiliates receive 5% value of the order from <b>Tier 2</b>, even <b>Tier 3</b> or <b>Tier 4</b> depending on your strategy at this time. The larger Affiliate network, the more commission Affiliate can earn."
];
const img =
  "https://cdn3.mageplaza.com/media/general/affiliate/ii_highlight_features_2.-multiple-commission-tiers.svg";
const alt = "magento 2 affiliate multi-level";

export default {
  id: "HFTextRight",
  label: "HFTextRight",
  content: `
  <!-- Highlight right -->
 <div class="container">
     <div class="row align-items-lg-center mb-10">
         <div class="col-lg-5 order-lg-1">
             <div class="card border-0 text-indigo text-center overflow-hidden mx-lg-auto">
                 <img class="img-fluid rounded-lg" src="${img}" alt="${alt}">
             </div>
         </div>
         <div class="col-lg-7 order-lg-2 mb-7 mb-lg-0">
             <div class="mb-5">
                 <h2 class="font-weight-medium">${title}</h2>
                 ${text
                   .map((t) => {
                     return `<p>${t}</p>`;
                   })
                   .join("")}
             </div>
         </div>
     </div>
 </div>
  <!-- End Highlight right -->
  `
};
