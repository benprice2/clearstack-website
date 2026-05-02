'use client';

import PageLayout from '@/components/PageLayout';

export default function About() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">About ClearStack</h1>
          <p className="mt-6 text-xl text-white/80 max-w-3xl">
            We create beautiful websites and powerful web applications that help businesses succeed.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-3xl font-bold text-white bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Our Story</h2>
            <p className="mt-4 text-lg text-white/70">
              ClearStack was founded with a simple mission: to help businesses succeed in the digital world through 
              exceptional web development and design. We believe that a great website is more than just 
              aesthetics—it&apos;s about creating meaningful connections between businesses and their customers.
            </p>
            <p className="mt-4 text-lg text-white/70">
              Our team of passionate developers, designers, and digital strategists work together to deliver 
              solutions that not only look beautiful but also drive results. We pride ourselves on our 
              technical expertise, creative thinking, and commitment to client success.
            </p>
          </div>
          <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-3xl font-bold text-white bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Our Values</h2>
            <dl className="mt-6 space-y-6">
              <div className="backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10">
                <dt className="text-lg font-medium text-blue-300">Innovation</dt>
                <dd className="mt-2 text-base text-white/70">
                  We stay at the forefront of web technology to deliver cutting-edge solutions.
                </dd>
              </div>
              <div className="backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10">
                <dt className="text-lg font-medium text-purple-300">Quality</dt>
                <dd className="mt-2 text-base text-white/70">
                  We never compromise on quality, ensuring every pixel and line of code is perfect.
                </dd>
              </div>
              <div className="backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10">
                <dt className="text-lg font-medium text-cyan-300">Collaboration</dt>
                <dd className="mt-2 text-base text-white/70">
                  We work closely with our clients, treating their goals as our own.
                </dd>
              </div>
              <div className="backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10">
                <dt className="text-lg font-medium text-pink-300">Integrity</dt>
                <dd className="mt-2 text-base text-white/70">
                  We build relationships based on trust, transparency, and honest communication.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-6">Our Team</h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-white/70 mb-12">
            Meet the talented individuals who make the magic happen.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="backdrop-blur-md bg-white/5 rounded-2xl overflow-hidden border border-white/10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-r from-blue-500/30 to-purple-500/30 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <span className="text-3xl text-white/70">TM</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-white">Team Member {i}</h3>
                  <p className="text-sm text-blue-300">Position</p>
                  <p className="mt-3 text-base text-white/70">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
