const title = "SMART PRICING";
const subTitle = "Choose your suitable edition";

const versions = [
  {
    name: "Standard",
    price: 99,
    intro: "CRAFTED FOR A GREAT WEBSTORE START",
    features: ["One Campaign", "Pay Per Sale"]
  },
  {
    name: "Ultimate",
    price: 299,
    intro: "GREAT FOR ENTERPRISE SOLUTION",
    features: [
      "Includes all Professional features, plus ...",
      "Advanced reports",
      "Reports",
      "Import & Export",
      "API",
      "Priority support"
    ]
  },
  {
    name: "Professional",
    price: 199,
    intro: "THE MOST POPULAR",
    features: [
      "Includes all Standard features, plus ...",
      "Affiliate banners",
      "Multiple affiliate campaigns",
      "Multiple affiliate levels"
    ]
  }
];

const textColors = {
  standard: "text-primary",
  ultimate: "text-warning",
  professional: "text-success "
};

const versionHTML = versions
  .map((version) => {
    const { name, price, intro, features } = version;
    const btnId =
      "add-to-cart-suite-" + name.toLowerCase().replace("professional", "pro");
    const textColor = textColors[name.toLowerCase()];
    return `
        <div class="js-slide">
            <!-- Pricing -->
            <div class="card transition-3d-hover">
                <!-- Header -->
                <header class="card-header text-center p-5">
                    <h4 class="h6 mb-3 text-uppercase ${textColor}">${name}</h4>
                    <span class="d-block">
                        <span class="display-4 text-dark font-weight-normal">
                            <span class="align-top font-size-2">$</span>${price}
                        </span>
                        <span class="d-block text-secondary font-size-1">${intro}</span>
                    </span>
                </header>
                <!-- End Header -->
                <!-- Content -->
                <div class="card-body p-5">
                    <ul class="list-group list-group-flush list-group-borderless mb-4">
                        ${features
                          .map((feature) => {
                            return `
                                <li class="list-group-item">
                                    ${feature}
                                </li>
                            `;
                          })
                          .join("")}
                        <li class="list-group-item">60 days refund - no question asked</li>
                        <li class="list-group-item cursor-pointer text-primary" data-modal-target="#compare-packages">Compare features</li>
                    </ul>
                    <button type="button" id="${btnId}" aria-controls="sidebarContent" aria-haspopup="true" aria-expanded="false" data-unfold-event="click" data-unfold-hide-on-scroll="false" data-unfold-target="#${btnId}" data-unfold-type="css-animation" data-unfold-animation-in="fadeInRight" data-unfold-animation-out="fadeOutRight" data-unfold-duration="500" class="btn btn-sm btn-block btn-primary transition-3d-hover">Buy Now</button>
                </div>
                <!-- End Content -->
            </div>
            <!-- End Pricing -->
        </div>
    `;
  })
  .join("");

export default {
  id: "pricing-section",
  label: "Pricing",
  content: `<!-- Pricing Section -->
<div class="container">
    <div class="w-65 w-lg-50 mx-auto mt-5">
        <hr class="mt-0 mb-9" id="pricing-section">
    </div>
    <h2 class="text-primary mb-3 center">
        ${title}
        <br>
        <span class="text-black-50" style="font-size: 1.1rem">${subTitle}</span>
    </h2>
    <!-- Pricing Carousel -->
    <div class="js-slick-carousel u-slick u-slick--gutters-2 mb-4" data-adaptive-height="true" data-slides-show="4" data-slides-scroll="1" data-pagi-classes="d-lg-none text-center u-slick__pagination mt-7 mb-0" data-responsive='[{
    "breakpoint": 1200,
    "settings": {
    "slidesToShow": 3
    }
    }, {
    "breakpoint": 992,
    "settings": {
    "slidesToShow": 2
    }
    }, {
    "breakpoint": 768,
    "settings": {
    "slidesToShow": 1
    }
    }, {
    "breakpoint": 554,
    "settings": {
    "slidesToShow": 1
    }
    }]'>
        ${versionHTML}
    </div>
    <!-- End Pricing Carousel -->
</div>
<!-- End Pricing Section -->
`
};
