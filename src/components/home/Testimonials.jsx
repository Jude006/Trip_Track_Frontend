import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import CountUp from 'react-countup';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "TripTrack saved our group trip from financial chaos! No more 'I forgot my share' excuses.",
      name: "Sarah K.",
      role: "Lagos Beach Weekend",
      stats: "Saved 12+ hours of calculations"
    },
    {
      quote: "The AI budget planner helped us stretch our ₦500k further than we imagined. Game-changer!",
      name: "Emeka O.",
      role: "Abuja Business Retreat",
      stats: "20% more activities within budget"
    },
    {
      quote: "Finally settled debts in minutes instead of weeks. My friends actually pay me back now!",
      name: "Amina B.",
      role: "Zanzibar Girls Trip",
      stats: "100% repayment rate"
    },
    {
        quote: "TripTrack made splitting expenses seamless. No awkward money convos anymore — just vibes.",
        name: "Tolu F.",
        role: "Accra Birthday Getaway",
        stats: "Zero money drama 🔥"
      },
      {
        quote: "We used to argue over receipts. Now, everyone sees what they spent. Transparency = peace.",
        name: "Jide M.",
        role: "Cape Town Bros Trip",
        stats: "100% expense clarity"
      },
      {
        quote: "I love how TripTrack handles multi-currency. Planning from UK to Kenya was so smooth!",
        name: "Chioma D.",
        role: "Naija-Kenya Wedding Crew",
        stats: "₦ + KSh managed flawlessly"
      }      
  ];

  const statsData = [
    { value: 5000, label: "Trips Planned", suffix: "+" },
    { value: 95, label: "Less Arguments", suffix: "%" },
    { value: 4.9, label: "App Rating", suffix: "/5", decimals: 1 },
    { value: 10000, label: "Happy Users", suffix: "+" }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold font-heading mb-4 text-text-primary dark:text-dark-text-primary">
            Loved by <span className="text-primary dark:text-dark-primary">Travelers</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join 5,000+ groups who plan stress-free trips
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center border border-gray-100 dark:border-gray-700"
            >
              <p className="text-3xl font-bold text-primary dark:text-dark-primary mb-1">
                <CountUp 
                  end={stat.value} 
                  duration={2} 
                  suffix={stat.suffix || ''} 
                  decimals={stat.decimals || 0}
                />
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              768: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 3
              }
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="h-full bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <div className="text-primary dark:text-dark-primary text-5xl font-serif mb-4">"</div>
                      <p className="text-gray-700 dark:text-gray-300 mb-6">
                        {testimonial.quote}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary dark:text-dark-text-primary">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {testimonial.role}
                      </p>
                      <div className="text-xs px-3 py-1 bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary rounded-full inline-block">
                        {testimonial.stats}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination bullets (hidden on mobile) */}
          <div className="swiper-pagination !hidden md:!block !bottom-0" />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
