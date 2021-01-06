const title = "Short Overview";
const img = "https://i.imgur.com/bry3pky.png";
const alt = "magento 2 affiliate extension";

const intro = [
  "<b>Magento 2 Affiliate extension</b> is one of the most effective marketing solutions for online stores. Magento 2 Affiliate helps create successful affiliate programs, introduce your products all over the internet, across multiple sales channels. Boost sales, increase traffic, bring back quality leads and better SEO rankings. Unlimited affiliate campaigns generated with <b>smart referral links</b> are perfect for <b>multi-level marketing.</b>",
  "<b>Here are some highlight features of Magento 2 Affiliate extension:</b>"
];

const features = [
  {
    iconColor: "btn-soft-danger",
    icon: "fas fa-project-diagram",
    content:
      '\n<a href="https://www.mageplaza.com/magento-2-affiliate-extension/#multiple-affiliate-programs">Multiple affiliate programs</a>\n'
  },
  {
    iconColor: "btn-soft-primary",
    icon: "fas fa-network-wired",
    content:
      '\n<a href="https://www.mageplaza.com/magento-2-affiliate-extension/#multiple-commission-tiers">Multiple commission tiers</a>\n'
  },
  {
    iconColor: "btn-soft-success",
    icon: "fas fa-money-check",
    content:
      '\n<a href="https://www.mageplaza.com/magento-2-affiliate-extension/#various-commission-payment-methods">Various commission payment methods</a>\n'
  },
  {
    iconColor: "btn-soft-danger",
    icon: "fas fa-user-friends",
    content:
      '\n<a href="https://www.mageplaza.com/magento-2-affiliate-extension/#refer-a-friend">Refer a Friend</a>\n'
  },
  {
    iconColor: "btn-soft-primary",
    icon: "fas fa-link",
    content:
      '\n<a href="https://www.mageplaza.com/magento-2-affiliate-extension/#affiliate-banners-with-links">Affiliate banners with links</a>\n'
  },
  {
    iconColor: "btn-soft-success",
    icon: "far fa-check-circle",
    content:
      '\nWell compatible with <a href="https://www.mageplaza.com/magento-2-reward-points-extension/">Rewards Points Module</a>, <a href="https://www.mageplaza.com/magento-2-one-step-checkout-extension/">Fast Checkout</a>, <a href="https://www.mageplaza.com/magento-2-layered-navigation-extension/">Layered Navigation</a>\n'
  },
  {
    iconColor: "btn-soft-danger",
    icon: "fas fa-file-contract",
    content:
      '\n<a href="https://www.mageplaza.com/magento-2-affiliate-extension/#afiliate-report-with-details">Affiliate Reports with details</a>\n'
  },
  {
    iconColor: "btn-soft-primary",
    icon: "fas fa-file-import",
    content:
      '\n<a href="https://www.mageplaza.com/magento-2-affiliate-extension/#import-export-affiliate-data">Import/ Export affiliate data</a>\n'
  },
  {
    iconColor: "btn-soft-success",
    icon: "fab fa-slideshare",
    content:
      '\n<a href="https://www.mageplaza.com/magento-2-affiliate-extension/#api-supported">API supported</a>\n'
  },
  {
    iconColor: "btn-soft-danger",
    icon: "fas fa-italic",
    content:
      '\n<a href="https://www.mageplaza.com/magento-2-affiliate-extension/#affiliate-url-style">Affiliate URL Styles</a>\n'
  },
  {
    iconColor: "btn-soft-success",
    icon: "fas fa-layer-group",
    content:
      '\n<a href="https://www.mageplaza.com/magento-2-affiliate-extension/#affiliate-groups">Affiliate Groups</a>\n'
  }
];

const totalFeature = features.length;

const featureLeftNumber = Math.ceil(totalFeature / 2);

const featureLeft = features.slice(0, featureLeftNumber);
const featureRight = features.slice(featureLeftNumber);

const featureLeftHTML = featureLeft
  .map((feature) => {
    const { iconColor, icon, content } = feature;
    return `
        <li class="py-2">
            <div class="media">
                <span class="btn btn-sm btn-icon ${iconColor} rounded-circle mr-3">
                    <span class="${icon} btn-icon__inner"></span>
                </span>
                <div class="media-body">
                    ${content}
                </div>
            </div>
        </li>
    `;
  })
  .join("");

const featureRightHTML = featureRight
  .map((feature) => {
    const { iconColor, icon, content } = feature;
    return `
        <li class="py-2">
            <div class="media">
                <span class="btn btn-sm btn-icon ${iconColor} rounded-circle mr-3">
                    <span class="${icon} btn-icon__inner"></span>
                </span>
                <div class="media-body">
                    ${content}
                </div>
            </div>
        </li>
    `;
  })
  .join("");

export default {
  id: "StoreOverview",
  label: "StoreOverview",
  content: `
  <!-- Store Overview section -->
  <div class="container my-4">
    <div class="row align-items-center">
        <div class="col-lg-7 mb-9 mb-lg-0">
            <div class="pr-lg-4 mb-7">
                <h2 class="font-weight-semi-bold">${title}</h2>
                ${intro
                  .map((t) => {
                    return `<p>${t}</p>`;
                  })
                  .join("")}
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <ul class="list-unstyled mb-0">
                        ${featureLeftHTML}
                    </ul>
                </div>
                <div class="col-sm-6">
                    <ul class="list-unstyled mb-0">
                        ${featureRightHTML}
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-lg-5 position-relative pl-7">
            <img src="${img}" alt="${alt}">
        </div>
    </div>
</div>
  <!-- End Store Overview section -->
  `
};
