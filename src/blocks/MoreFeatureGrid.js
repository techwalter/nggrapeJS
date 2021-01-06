const features = [
  {
    img:
      "https://cdn3.mageplaza.com/media/general/affiliate/iii_more_features_1.-affiliate-url-styles.svg",
    alt: "Magento 2 Affiliate Url Styles",
    heading: "AFFILIATE URL STYLE",
    headingId: "affiliate-url-style",
    paragraph: "Hash or Parameter style for Affiliate URL."
  },
  {
    img:
      "https://cdn3.mageplaza.com/media/general/affiliate/iii_more_features_2.-two-commission-types.svg",
    alt: "Magento 2 Affiliate commission types",
    heading: "TWO COMMISSION TYPES",
    headingId: "two-commision-type",
    paragraph:
      "The commission is based on the percentage of grand total and Fixed amount."
  },
  {
    img:
      "https://cdn3.mageplaza.com/media/general/affiliate/iii_more_features_3.-commission-for-tax-shipping-fee.svg",
    alt: "Magento 2 Affiliate commission fee",
    heading: "COMMISSION FOR TAX/SHIPPING FEE",
    headingId: "commision-tax-shipping-fee",
    paragraph: "Enable earning commission from tax or shipping fee."
  },
  {
    img:
      "https://cdn3.mageplaza.com/media/general/affiliate/iii_more_features_4.-receiving-commission-conditions.svg",
    alt: "Magento 2 Affiliate commission conditions",
    heading: "RECEIVING COMMISSION CONDITIONS",
    headingId: "commision-condition",
    paragraph: "Allow earning commissions when the invoice is created."
  },
  {
    img:
      "https://cdn3.mageplaza.com/media/general/affiliate/iii_more_features_5.-deduct-commission.svg",
    alt: "Magento 2 Affiliate deduct commission",
    heading: "DEDUCT COMMISSION",
    headingId: "deduct-commision",
    paragraph:
      "Deduct commission from Affiliate' s balance when an order is refunded/canceled"
  },
  {
    img:
      "https://cdn3.mageplaza.com/media/general/affiliate/iii_more_features_6.-withdraw-request.svg",
    alt: "Magento 2 Affiliate withdraw request",
    heading: "WITHDRAW REQUEST",
    headingId: "withdraw-request",
    paragraph: "Allow/Disallow the request to withdraw commission"
  },
  {
    img:
      "https://cdn3.mageplaza.com/media/general/affiliate/iii_more_features_7.-affiliate-groups.svg",
    alt: "Magento 2 Affiliate groups",
    heading: "AFFILIATE GROUPS",
    headingId: "affiliate-groups",
    paragraph:
      "Divide affiliate accounts in specific groups for better management."
  },
  {
    img:
      "https://cdn3.mageplaza.com/media/general/affiliate/iii_more_features_8.-withdraw-limitation.svg",
    alt: "Magento 2 Affiliate withdraw limitation",
    heading: "WITHDRAW LIMITATION",
    headingId: "withdraw-limitation",
    paragraph: "Set the minimum and maximum of withdraw amount"
  },
  {
    img:
      "https://cdn3.mageplaza.com/media/general/affiliate/iii_more_features_9.-email-notification.svg",
    alt: "Magento 2 Affiliate email notification",
    heading: "EMAIL NOTIFICATION",
    headingId: "email-notification",
    paragraph:
      "Sending emails when there are any updates on commission balance, transaction."
  }
];

const title = "Magento 2 Affiliate's More Features";
const subTitle = "See more details of Mageplaza Affiliate";

const featureContent = features
  .map((feature) => {
    const { img, alt, heading, headingId, paragraph } = feature;
    return `
		<div class="col-sm-6 col-lg-4 mb-7 mb-sm-9">
		    <div class="pr-lg-4">
		        <figure class="ie-height-56 max-width-9 mb-3">
		            <img src="${img}" alt="${alt}">
		        </figure>
		        <h3 id="${headingId}" class="h6 text-primary font-weight-semi-bold mb-3">${heading}</h3>
		        <p>${paragraph}</p>
		    </div>
		</div>
	`;
  })
  .join("");

export default {
  id: "MoreFeatureGrid",
  label: "MoreFeatureGrid",
  content: `
  <!-- More Feature Grid section -->
  <div class="container space-1">
              <h2 class="text-primary mb-3 center">
                  ${title}
                  <br>
                  <span class="text-black-50" style="font-size: 1.1rem">${subTitle}</span>
              </h2>
              <div class="row">
                ${featureContent}
              </div>
            </div>
            <!-- End More Feature Grid section -->
`
};
