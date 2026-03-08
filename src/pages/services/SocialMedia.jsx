import { useEffect } from "react";
import CountUp from "react-countup";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function SocialMedia() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <section className="py-32 text-center px-6">
        <h1 className="text-5xl font-bold">
          Social Media Marketing
          <span className="text-blue-500"> That Builds Brands</span>
        </h1>

        <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg">
          Data-driven social campaigns designed to grow your audience,
          boost engagement, and convert followers into loyal customers.
        </p>

        <button className="mt-10 px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-lg transition">
          Start Your Campaign
        </button>
      </section>


      {/* Services */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Social Media Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">
              Content Strategy
            </h3>
            <p className="text-gray-400">
              We build content strategies that align with your brand voice
              and engage your audience consistently.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">
              Paid Social Ads
            </h3>
            <p className="text-gray-400">
              Optimized ad campaigns designed to generate leads
              and maximize your ROI.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">
              Community Management
            </h3>
            <p className="text-gray-400">
              We engage with your audience and build relationships
              that strengthen brand loyalty.
            </p>
          </div>

        </div>
      </section>


      {/* Platforms */}
      <section className="py-24 px-6 bg-gray-950">
        <h2 className="text-4xl font-bold text-center mb-16">
          Platforms We Manage
        </h2>

        <div className="flex flex-wrap justify-center gap-8 text-lg">

          <div className="bg-gray-900 px-8 py-4 rounded-lg">
            Facebook Marketing
          </div>

          <div className="bg-gray-900 px-8 py-4 rounded-lg">
            Instagram Growth
          </div>

          <div className="bg-gray-900 px-8 py-4 rounded-lg">
            LinkedIn Marketing
          </div>

          <div className="bg-gray-900 px-8 py-4 rounded-lg">
            TikTok Campaigns
          </div>

          <div className="bg-gray-900 px-8 py-4 rounded-lg">
            YouTube Promotion
          </div>

        </div>
      </section>


      {/* Benefits */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose Our Social Media Marketing
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-gray-400 text-lg">

          <div>✔ Increase brand visibility</div>
          <div>✔ Drive high-quality website traffic</div>
          <div>✔ Generate qualified leads</div>
          <div>✔ Build strong audience trust</div>
          <div>✔ Data-driven campaign strategies</div>
          <div>✔ Consistent audience engagement</div>

        </div>
      </section>


      {/* Animated Stats */}
      <section className="py-24 bg-gray-950 text-center px-6">

        <h2 className="text-4xl font-bold mb-16">
          Our Social Media Impact
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={500} duration={3}/>+
            </h3>
            <p className="text-gray-400 mt-4">
              Campaigns Managed
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={120} duration={3}/>%
            </h3>
            <p className="text-gray-400 mt-4">
              Average ROI
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={1} duration={3}/>M+
            </h3>
            <p className="text-gray-400 mt-4">
              Audience Reached
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={98} duration={3}/>%
            </h3>
            <p className="text-gray-400 mt-4">
              Client Satisfaction
            </p>
          </div>

        </div>

      </section>


      {/* Testimonials */}
      <section className="py-28 px-6 max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >

          <SwiperSlide>
            <div className="bg-gray-900 p-8 rounded-xl">
              <p className="text-gray-400">
                Our social engagement increased by 300% after working with
                this team. Highly recommended!
              </p>
              <h4 className="mt-6 font-semibold text-blue-500">
                Sarah Johnson
              </h4>
              <span className="text-sm text-gray-500">
                Marketing Director
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-gray-900 p-8 rounded-xl">
              <p className="text-gray-400">
                Powerful campaigns that generated high-quality leads
                every month.
              </p>
              <h4 className="mt-6 font-semibold text-blue-500">
                David Miller
              </h4>
              <span className="text-sm text-gray-500">
                Startup Founder
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-gray-900 p-8 rounded-xl">
              <p className="text-gray-400">
                Professional team with great communication and amazing
                results.
              </p>
              <h4 className="mt-6 font-semibold text-blue-500">
                Emily Clark
              </h4>
              <span className="text-sm text-gray-500">
                Brand Manager
              </span>
            </div>
          </SwiperSlide>

        </Swiper>

      </section>


      {/* Client Logos */}
      <section className="py-24 bg-gray-950 text-center px-6">

        <h2 className="text-3xl font-bold mb-14">
          Trusted By Growing Brands
        </h2>

        <div className="flex flex-wrap justify-center gap-12 opacity-70">

          <div className="text-xl font-semibold">Google</div>
          <div className="text-xl font-semibold">Shopify</div>
          <div className="text-xl font-semibold">HubSpot</div>
          <div className="text-xl font-semibold">Slack</div>
          <div className="text-xl font-semibold">Stripe</div>

        </div>

      </section>


      {/* CTA */}
      <section className="py-28 text-center bg-blue-600">

        <h2 className="text-4xl font-bold">
          Ready to Grow Your Social Media Presence?
        </h2>

        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Let our team create a powerful strategy that increases
          engagement, followers and conversions.
        </p>

        <button className="mt-10 px-12 py-4 bg-black hover:bg-gray-900 rounded-xl font-semibold text-lg transition">
          Get Free Consultation
        </button>

      </section>

    </div>
  );
}