const title = "FEATURED TESTIMONIALS";
const subTitle = "Ready to be a part of us?";
const testimonialText =
  "What Mageplaza customers say about Mageplaza Affiliate extension.";

const testimonialCollections = [
  {
    firstLine: "Thanks a lot!",
    secLine: '"Solved my problem basically in one go."',
    author: "ATIS IT",
    date: "30 December 2019"
  },
  {
    firstLine: "The Ultimate package is the way to go",
    secLine:
      '"Extremely good extension with all the options you can think of, but needed the reports. They are extremely important and worth the 100$ upcharge!"',
    author: "Gorjan",
    date: "11 October 2019"
  },
  {
    firstLine: "Great Service",
    secLine:
      '"Great customer service from the Mageplaza team. I was able to fix all my issues and customize according to our needs thanks to the superb customer service team. Thank you!"',
    author: "Eric",
    date: "30 August 2019"
  },
  {
    firstLine: "Great module i love this",
    secLine:
      '"Thank you Mageplaza to providing this valuable module, we used this in my our store and this will be very much helpful to increase our sale, and very nice support they provide to us thank you again."',
    author: "Valley",
    avatar: "https://www.mageplaza.com/assets/img/100x100/img3.jpg",
    date: "27 July 2019"
  }
];

const testimonialContent = testimonialCollections
  .map((testimonial) => {
    let avatarHTML = "";
    const { firstLine, secLine, author, avatar, date } = testimonial;

    if (avatar) {
      avatarHTML = `
            <div class="u-avatar mr-3">
                <img class="img-fluid rounded-circle" src="${avatar}" alt="${author} avatar" />
            </div>
        `;
    }
    return `
        <div class="js-slide my-4">
            <!-- Testimonial -->
            <div class="card border-0 shadow-sm mb-4">
                <div class="card-body p-6">
                    <h4>${firstLine}</h4>
                    <p>${secLine}</p>
                </div>
            </div>
            <div class="media ml-6">
                ${avatarHTML}
                <div class="media-body">
                    <span class="text-black-50" style="font-size: 1.1rem">${author}</span>
                    <p class="small">${date}</p>
                </div>
            </div>
            <!-- End Testimonial -->
        </div>
    `;
  })
  .join("");

export default {
  id: "FeatureTestimonial",
  label: "FeatureTestimonial",
  content: `
  <!-- Feature Testimonial -->
  
<h2 class="text-primary mb-3 center">
    ${title}
    <br>
    <span class="text-black-50" style="font-size: 1.1rem">${subTitle}</span>
</h2>
<div id="SVGdoubleEllipseTopRight" class="position-relative bg-light">
    <div class="container space-2 position-relative z-index-2">
        <div class="row">
            <div class="col-lg-4 mb-7 mb-lg-0">
                <div class="pr-lg-4">
                    <!-- SVG Quote -->
                    <figure class="mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 8 8" style="enable-background:new 0 0 8 8;" xml:space="preserve">
                            <path class="fill-gray-300" d="M3,1.3C2,1.7,1.2,2.7,1.2,3.6c0,0.2,0,0.4,0.1,0.5c0.2-0.2,0.5-0.3,0.9-0.3c0.8,0,1.5,0.6,1.5,1.5c0,0.9-0.7,1.5-1.5,1.5
                            C1.4,6.9,1,6.6,0.7,6.1C0.4,5.6,0.3,4.9,0.3,4.5c0-1.6,0.8-2.9,2.5-3.7L3,1.3z M7.1,1.3c-1,0.4-1.8,1.4-1.8,2.3
                            c0,0.2,0,0.4,0.1,0.5c0.2-0.2,0.5-0.3,0.9-0.3c0.8,0,1.5,0.6,1.5,1.5c0,0.9-0.7,1.5-1.5,1.5c-0.7,0-1.1-0.3-1.4-0.8
                            C4.4,5.6,4.4,4.9,4.4,4.5c0-1.6,0.8-2.9,2.5-3.7L7.1,1.3z" />
                        </svg>
                    </figure>
                    <!-- End SVG Quote -->
                    <h3 class="font-weight-normal mb-4">${testimonialText}</h3>
                    <!-- Review -->
                    <div class="d-flex align-items-center">
                        <ul class="list-inline mr-3 mb-0">
                            <li class="list-inline-item text-warning">
                                <span class="fas fa-star"></span>
                                <span class="fas fa-star"></span>
                                <span class="fas fa-star"></span>
                                <span class="fas fa-star"></span>
                                <span class="fas fa-star"></span>
                            </li>
                        </ul>
                        <span class="text-secondary">Review</span>
                    </div>
                    <!-- End Review -->
                </div>
            </div>
            <div class="col-lg-8">
                <div class="js-slick-carousel u-slick u-slick--gutters-3" data-slides-show="2" data-autoplay="true" data-speed="5000" data-infinite="true" data-center-mode="true" data-responsive='[{
                "breakpoint": 992,
                "settings": {
                "slidesToShow": 2
                }
                }, {
                "breakpoint": 768,
                "settings": {
                "slidesToShow": 1
                }
                }]'>
                    ${testimonialContent}
            </div>
        </div>
    </div>
    <!-- SVG Bottom Right Shapes -->
    <div class="position-absolute top-0 right-0 w-75 w-md-60 w-lg-35">
        <figure class="ie-double-ellipse-top-right">
            <img class="js-svg-injector" src="https://www.mageplaza.com/assets/svg/components/double-ellipse-top-right.svg" alt="background-yellow" data-parent="#SVGdoubleEllipseTopRight" />
        </figure>
    </div>
    <!-- End SVG Bottom Right Shapes -->
</div>
<!-- End Feature Testimonial -->
  `
};
