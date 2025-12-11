import React from 'react';
import { Award, Briefcase, Star, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Main Card - Job Success */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[32px] p-8 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            {/* Background decoration */}
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-apple-blue rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium border border-white/10 mb-6">
                <Award size={16} className="text-yellow-400" />
                <span className="text-gray-200">Upwork Top Rated</span>
              </div>
              <h3 className="text-3xl font-semibold mb-2">Excellence in Delivery</h3>
              <p className="text-gray-400 text-sm max-w-sm">Consistently exceeding client expectations with high-quality, scalable code.</p>
            </div>
            
            <div className="mt-8 flex items-end gap-4 relative z-10">
              <div className="text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                {personalInfo.stats.success_rate}%
              </div>
              <div className="pb-4 text-gray-400 font-medium text-lg">Job Success Score</div>
            </div>
          </div>

          {/* Jobs Card */}
          <div className="bg-apple-gray rounded-[32px] p-8 flex flex-col justify-between hover:bg-gray-100 transition-colors duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-apple-blue mb-4">
              <Briefcase size={24} />
            </div>
            <div>
              <div className="text-4xl font-bold text-apple-text mb-1">{personalInfo.stats.projects}+</div>
              <div className="text-gray-500 font-medium">Completed Jobs</div>
            </div>
          </div>

          {/* Rating Card */}
          <div className="bg-apple-gray rounded-[32px] p-8 flex flex-col justify-between hover:bg-gray-100 transition-colors duration-300">
            <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 mb-4">
              <Star size={24} fill="currentColor" />
            </div>
            <div>
              <div className="text-4xl font-bold text-apple-text mb-1">{personalInfo.stats.rating}</div>
              <div className="text-gray-500 font-medium">Average Rating</div>
            </div>
          </div>

          {/* Rate Card */}
          <div className="col-span-1 md:col-span-2 bg-white border border-gray-100 rounded-[32px] p-8 shadow-lg flex items-center justify-between">
             <div className="flex flex-col">
                <span className="text-gray-500 font-medium mb-1">Hourly Rate</span>
                <span className="text-4xl font-bold text-apple-text">${personalInfo.stats.rate}<span className="text-xl text-gray-400">/hr</span></span>
             </div>
             <div className="h-16 w-px bg-gray-200 mx-4 hidden md:block"></div>
             <div className="flex items-center gap-4">
                <div className="p-3 bg-green-50 rounded-full text-green-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                   <div className="font-bold text-apple-text">Available Now</div>
                   <div className="text-sm text-gray-500">For new projects</div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
