import React from 'react'
import Navbar from '../components/Navbar';
import Footer  from '../components/Footer';

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="items-center p-24">
        <div className="w-full max-w-5xl items-center mx-auto text-center">
          <h1 className="font-mono text-5xl">Not Your Grandma&apos;s Resource Center</h1>
          <p className="mt-4">If you&apos;ve found your way here, you&apos;re likely in the midst of considering a change in your career or thinking about going back to school. This is your go-to community for
          all things related to exploring new career paths and educational opportunities.</p>
        </div>

        <section className="mx-auto mt-20" id="learn">
          <div className="mb-4">
            <h2 className="font-mono text-3xl">Learn Something New</h2>
            <p>Mix things up. A curated list of resources to take your career to the next level.</p>
          </div>

          <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
            <a
              href="https://www.codecademy.com/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-blue-500 text-white text-xs inline-block mb-2">Coding</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Code Academy{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p>Cost: Free</p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Learn to code for free.
              </p>
            </a>

            <a
              href="https://www.appacademy.io/course/app-academy-open"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-blue-500 text-white text-xs inline-block mb-2">Coding</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                App Academy Open {' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p>Cost: Free</p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Get access to App Academy&apos;s entire online full-stack curriculum for free.</p>
            </a>

            <a
              href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-blue-500 text-white text-xs inline-block mb-2">Coding</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                The Complete 2023 Web Development Bootcamp{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p>Cost: $20</p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Become a Full-Stack Web Developer with just ONE course.</p>
            </a>

            <a
              href="https://www.youtube.com/watch?v=5qlbbpvp2Y4&ab_channel=AlvintheProgrammer"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-blue-500 text-white text-xs inline-block mb-2">Coding</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                JavaScript For Beginners{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p>Cost: Free</p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>A free JavaScript course by Alvin the Programmer for beginners</p>
            </a>

            <a
              href="https://zerotodiamond.com/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-purple-500 text-white text-xs inline-block mb-2">Real Estate</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Zero to Diamond{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p>Cost: Free</p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>A social media platform and free coaching program for real estate agents.</p>
            </a>

            <a
              href="https://www.productmanagementexercises.com/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-yellow-500 text-white text-xs inline-block mb-2">Product</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Product Management Exercises{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p>Cost: Free</p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>The ultimate resources to help you prepare for your PM interviews.</p>
            </a>

            <a
              href="https://gabygoldberg.notion.site/f7050e62461143d49345e7b46eb5576b?v=c02511c4230c44ce9a1a03c9757da524"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-orange-500 text-white text-xs inline-block mb-2">Crypto</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Gaby&apos;s Web3 Reading List{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p>Cost: Free</p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>A list of interesting articles about web3.</p>
            </a>

            <a
              href="https://a16zcrypto.com/crypto-startup-school/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-orange-500 text-white text-xs inline-block mb-2">Crypto</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                a16z Crypto Startup School{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p>Cost: Free</p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>A 12-week accelerator program designed around the specific needs of web3 startups.</p>
            </a>

            <a
              href="https://curiousaddys.notion.site/2935b6c3a1e249fd876ce3f318355d92?v=b46dd3524e8a4ea9873f364800a0db38"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-orange-500 text-white text-xs inline-block mb-2">Crypto</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Curious Addys{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p>Cost: Free</p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Your community portal to a world of web3 knowledge.</p>
            </a>

            <a
              href="https://stephmui.notion.site/stephmui/How-to-fundraise-from-VCs-c1589c6a9cbb454eb2ebafcce5104a6f"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-gray-500 text-white text-xs inline-block mb-2">Crypto</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                How to Fundraise From VCs{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p>Cost: Free</p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>How to fundraise from VCs.</p>
            </a>

            <a
              href="https://www.holloway.com/g/equity-compensation"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-red-500 text-white text-xs inline-block mb-2">Compensation</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                The Holloway Guide to Equity Compensation{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p>Cost: Free</p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Stock options, RSUs, job offers, and taxes—a detailed reference, explained from the ground up.</p>
            </a>

            <a
              href="https://www.ted.com/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-pink-500 text-white text-xs inline-block mb-2">General</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Ted{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p>Cost: Free</p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Nonpartisan nonprofit devoted to spreading ideas.</p>
            </a>

            <a
              href="https://learning.linkedin.com/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-pink-500 text-white text-xs inline-block mb-2">General</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                LinkedIn Learning{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p>Cost: Free and Paid Options</p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Learn business, creative, and technology skills to achieve your personal and professional goals. </p>
            </a>

            <a
              href="https://www.duolingo.com/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-indigo-500 text-white text-xs inline-block mb-2">Language</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Duolingo{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p>Cost: Free to $7/mo</p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>A free app for learning new languages through quick, bite-sized lessons.</p>
            </a>

            <a
              href="https://www.coursera.org/courses?query=free"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-green-500 text-white text-xs inline-block mb-2">Open Courses</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Coursera{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p>Cost: Free</p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>2,800+ free online courses, from finance to psychology to game theory.</p>
            </a>

            <a
              href="https://online.stanford.edu/free-courses"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-green-500 text-white text-xs inline-block mb-2">Open Courses</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Stanford Online{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p>Cost: Free</p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Free online courses by Stanford</p>
            </a>

            <a
              href="https://ocw.mit.edu/course-lists/open-learning-library/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-green-500 text-white text-xs inline-block mb-2">Open Courses</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                MIT Open Learning Library{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p>Cost: Free</p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Select introductory educational content from MIT.</p>
            </a>

            <a
              href="https://oyc.yale.edu/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-green-500 text-white text-xs inline-block mb-2">Open Courses</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Open Yale Courses{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p>Cost: Free</p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Select introductory educational content from Yale.</p>
            </a>

            <a
              href="https://www.edx.org/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-green-500 text-white text-xs inline-block mb-2">Open Courses</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                edX{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p>Cost: Free</p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Access to higher education from 160+ of the world&apos;s leading educational institutions.</p>
            </a>
          </div>
        </section>

        <section className="mx-auto mt-20" id="opportunities">
          <div className="mb-4">
            <h2 className="font-mono text-3xl">Finding Your Next Role</h2>
            <p>Make every day a dream. Find jobs you never knew existed.</p>
          </div>

          <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
                href="https://web3.career/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-orange-500 text-white text-xs inline-block mb-2">Crypto</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Web3 Jobs{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Browse 32K+ blockchain jobs in web3 at 5,800+ projects.</p>
              </a>

              <a
                href="https://companies.hello-we3.com/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-orange-500 text-white text-xs inline-block mb-2">Crypto</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  We3 Talent Match{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Talent matching with top Web3 companies.</p>
              </a>

              <a
                href="https://www.metaintro.com/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-orange-500 text-white text-xs inline-block mb-2">Crypto</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  metaintro{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Instantly explore, vet and find the next web3 opportunity right for your career.</p>
              </a>

              <a
                href="https://cryptojobslist.com/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-orange-500 text-white text-xs inline-block mb-2">Crypto</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  CryptoJobsList{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>The biggest list of crypto, blockchain, and web3 jobs.</p>
              </a>

              <a
                href="https://sidehustlestack.co/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-yellow-500 text-white text-xs inline-block mb-2">Side Hustles</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Side Hustle Stack{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>New and improved ultimate database of earning opportunities.</p>
              </a>

              <a
                href="https://talent.hubstaff.com/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-yellow-500 text-white text-xs inline-block mb-2">Side Hustles</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Hubstaff Talent{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Thousands of clients looking for quality, remote agencies and freelancers.</p>
              </a>

              <a
                href="https://builtin.com/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-red-500 text-white text-xs inline-block mb-2">Tech</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  BuiltIn{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>The online community for National startups and tech companies.</p>
              </a>

              <a
                href="https://elpha.com/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-red-500 text-white text-xs inline-block mb-2">Tech</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Elpha{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>The professional network dedicated to helping high-achieving women in tech succeed at work.</p>
              </a>

              <a
                href="https://www.lennysjobs.com/talent/welcome"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-red-500 text-white text-xs inline-block mb-2">Tech</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Lenny&apos;s Talent Collective{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Find product-building roles at world-class companies.</p>
              </a>

              <a
                href="https://weworkremotely.com/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-red-500 text-white text-xs inline-block mb-2">Tech</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  We Work Remotely{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>The largest remote work community in the world.</p>
              </a>

              <a
                href="https://wellfound.com/jobs"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-red-500 text-white text-xs inline-block mb-2">Tech</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Wellfound (formerly AngelList Talent){' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Browse over 130K jobs from top companies to fast-growing startups.</p>
              </a>

              <a
                href="https://pangian.com/job-travel-remote/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-red-500 text-white text-xs inline-block mb-2">Tech</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Pangian{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>The fastest-growing remote work network, matching top professionals with global companies working remotely.</p>
              </a>

              <a
                href="https://workew.com/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-red-500 text-white text-xs inline-block mb-2">Tech</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Workew{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Connecting talented people who seek remote careers with innovative companies that offer these positions.</p>
              </a>

              <a
                href="https://www.findasync.com/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-red-500 text-white text-xs inline-block mb-2">Tech</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  FindAsync{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>An online niche job platform to connect jobseekers and asynchronous remote companies.</p>
              </a>

              <a
                href="https://stillhiring.today/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-red-500 text-white text-xs inline-block mb-2">Tech</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  StillHiring{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>A list of tech companies that are still actively hiring. Community-sourced and vetted.</p>
              </a>

              <a
                href="https://techjobsforgood.com/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-red-500 text-white text-xs inline-block mb-2">Tech</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Tech Jobs For Good{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>A job platform for mission-driven organizations to hire technical roles.</p>
              </a>

              <a
                href="https://jobspresso.co/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-red-500 text-white text-xs inline-block mb-2">Tech</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Jobspresso{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>The easiest way to find high-quality remote jobs in tech, marketing, customer support and more.</p>
              </a>

              <a
                href="Crossover"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-red-500 text-white text-xs inline-block mb-2">Tech</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Crossover{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Matching the world&apos;s most talented professionals with 100% remote careers.</p>
              </a>

              <a
                href="https://lensa.com/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-pink-500 text-white text-xs inline-block mb-2">General</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Lensa{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Find work and career opportunities that move you forward.</p>
              </a>

              <a
                href="https://www.talent.com/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-pink-500 text-white text-xs inline-block mb-2">General</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Talent{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Search from over 40 million jobs, save the ones you love, and apply in seconds.</p>
              </a>

              <a
                href="https://www.flexjobs.com/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-pink-500 text-white text-xs inline-block mb-2">General</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  FlexJobs{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>A trusted, more effective, friendly, and overall better way to find professional remote and flexible jobs.</p>
              </a>

              <a
                href="https://remote.co/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-pink-500 text-white text-xs inline-block mb-2">General</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Remote.co{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Expert insight, best practices, and valuable support for organizations exploring or already embracing remote work.</p>
              </a>

              <a
                href="https://dynamitejobs.com/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-pink-500 text-white text-xs inline-block mb-2">General</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Dynamite Jobs{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Find your next remote job today.</p>
              </a>

              <a
                href="https://justremote.co/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-pink-500 text-white text-xs inline-block mb-2">General</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  JustRemote{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Building a better platform for remote workers.</p>
              </a>

              <a
                href="https://www.growmotely.com/job-board/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-pink-500 text-white text-xs inline-block mb-2">General</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Growmotely{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>All-in-one platform for growing your remote-first company.</p>
              </a>

              <a
                href="https://www.workingnomads.com/jobs"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-pink-500 text-white text-xs inline-block mb-2">General</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Working Nomads{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Remote jobs for digital working nomads.</p>
              </a>

              <a
                href="https://remotive.com/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-pink-500 text-white text-xs inline-block mb-2">General</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Remotive{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>An award-winning remote job board and community sharing remote jobs and news.</p>
              </a>

              <a
                href="https://www.skipthedrive.com/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-pink-500 text-white text-xs inline-block mb-2">General</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Skip The Drive{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Search for flexible, remote and hybrid jobs from thousands of opportunities.</p>
              </a>

              <a
                href="https://flexa.careers/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-pink-500 text-white text-xs inline-block mb-2">General</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Flexa{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Find a company where you belong.</p>
              </a>

              <a
                href="https://www.remotehub.com/jobs"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-pink-500 text-white text-xs inline-block mb-2">General</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  RemoteHub{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>The job marketplace and community that connects and matches companies with remote professionals.</p>
              </a>

              <a
                href="https://www.remotetribe.life/remotejobs/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-pink-500 text-white text-xs inline-block mb-2">General</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Remote Tribe{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Work and live anywhere in the world.</p>
              </a>

              <a
                href="https://nocommute.substack.com/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-pink-500 text-white text-xs inline-block mb-2">General</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  NoCommute{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Get real remote jobs from real companies delivered to your inbox daily.</p>
              </a>

              <a
                href="https://jobs.remoteworkjunkie.com/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-pink-500 text-white text-xs inline-block mb-2">General</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Remote Work Junkie{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>The place for remote job seekers and employers looking for top remote talent.</p>
              </a>

              <a
                href="https://powertofly.com/jobs/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-pink-500 text-white text-xs inline-block mb-2">General</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Powert to Fly{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Connecting talent to companies that are committed to creating inclusive environments where diverse professionals can thrive.</p>
              </a>

              <a
                href="https://www.themuse.com/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-pink-500 text-white text-xs inline-block mb-2">General</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  The Muse{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Make a career match where the people, perks and values align with your needs.</p>
              </a>

              <a
                href="https://remoteok.com/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-pink-500 text-white text-xs inline-block mb-2">General</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Remote Ok{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Find a remote job. Work from anywhere.</p>
              </a>

              <a
                href="https://www.virtualvocations.com/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-pink-500 text-white text-xs inline-block mb-2">General</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  VirtualVocations{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>A job service that provides job seekers with hand-screened remote job leads that offer real pay for real work.</p>
              </a>

              <a
                href="outsourcely.com"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-pink-500 text-white text-xs inline-block mb-2">General</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Outsourcely{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Thousands of amazing startups are seeking to fill long-term remote positions.</p>
              </a>

              <a
                href="https://climatebase.org/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-full px-2 py-1 bg-green-500 text-white text-xs inline-block mb-2">Climate</div>
                <h3 className={`mb-3 text-xl font-semibold`}>
                  Climatebase{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h3>
                <p>Cost: Free</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Helping people discover climate jobs and transition into the space.</p>
              </a>
          </div>
        </section>

        <section className="mx-auto mt-20" id="advice">
          <div className="mb-4">
            <h2 className="font-mono text-3xl">Tips to Keep You Afloat</h2>
            <p>Articles, stories, and videos for advice and next steps.</p>
          </div>

          <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
            <a
              href="https://rediscoveryofme.com/how-to-get-out-rut-at-work/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-blue-500 text-white text-xs inline-block mb-2">Career Advancement</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Stuck In a Rut? How To Get Out of a Workplace Rut{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Ways to get out of a rut at work</p>
            </a>

            <a
              href="https://hbr.org/2023/01/how-successful-women-sustain-career-momentum"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-blue-500 text-white text-xs inline-block mb-2">Career Advancement</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                How Successful Women Sustain Career Momentum{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Understanding how to maintain career momentum despite challenges in the workplace</p>
            </a>

            <a
              href="https://www.themuse.com/advice/45-pieces-of-career-advice-that-will-get-you-to-the-top"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-blue-500 text-white text-xs inline-block mb-2">Career Advancement</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                45 Pieces of Career Advice That Will Get You to the Top{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Solid advice to help you navigate your career.</p>
            </a>

            <a
              href="https://docs.google.com/document/d/1D5X7NWOrfdg86AEzgCm80jQB1b43xv1fGp-T-dsv-1U/edit"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-blue-500 text-white text-xs inline-block mb-2">Career Advancement</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Career Development Guide Template{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Career development conversation by Chloe Shih.</p>
            </a>

            <a
              href="https://www.youtube.com/watch?v=u9BoG1n1948&ab_channel=mayuko"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-blue-500 text-white text-xs inline-block mb-2">Career Advancement</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Tips for negotiating your salary{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>How to negotiate your tech salary.</p>
            </a>

            <a
              href="https://www.ideo.com/blog/an-ideo-recruiters-5-tips-for-writing-a-better-cover-letter"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-blue-500 text-white text-xs inline-block mb-2">Career Advancement</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                An IDEO Recruiter&apos;s 5 Tips for Writing a Better Cover Letter{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>How to write a good cover letter.</p>
            </a>

            <a
              href="https://www.youtube.com/watch?v=sJ5Shzq68Ac&ab_channel=ChloeShih"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
            <div className="rounded-full px-2 py-1 bg-blue-500 text-white text-xs inline-block mb-2">Career Advancement</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Everything I Learned to Negotiate Your Salary{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Tips on salary negotiation</p>
            </a>

            <a
              href="https://medium.com/@maimai816/why-women-should-always-do-what-we-think-we-are-not-good-at-e228e306ae08"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
            <div className="rounded-full px-2 py-1 bg-blue-500 text-white text-xs inline-block mb-2">Career Advancement</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Why women should always do what we think we are not good at{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Cofounder of Curious Addys, Mai Akiyoshi, shares her insights on her career journey.</p>
            </a>

            <a
              href="https://elpha.com/posts/l066q8oc/full-circle-from-software-engineer-to-manager-and-back-again"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-green-500 text-white text-xs inline-block mb-2">Career Pivot</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Full Circle: From Software Engineer to Manager and Back Again{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>How to be in tune with yourself and what you are looking for in your career.</p>
            </a>

            <a
              href="https://randsinrepose.com/archives/shields-down/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-green-500 text-white text-xs inline-block mb-2">Career Pivot</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Shields Down{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Knowing when to walk away from your job.</p>
            </a>

            <a
              href="https://www.forbes.com/sites/jackkelly/2023/01/17/consider-downshifting-your-career-instead-of-quiet-quitting/?sh=60ca4b6414a7"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-green-500 text-white text-xs inline-block mb-2">Career Pivot</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Consider Downshifting Your Career Instead Of Quiet Quitting{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Being honest with yourself and what you want at work</p>
            </a>

            <a
              href="https://www.gsb.stanford.edu/insights/five-strategies-making-career-pivot"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-green-500 text-white text-xs inline-block mb-2">Career Pivot</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Five Strategies for Making a Career Pivot {' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>How to build your knowledge and leverage your skills to make a career pivot</p>
            </a>

            <a
              href="https://www.forbes.com/sites/josephliu/2019/04/02/successfully-change-careers/?sh=79dfcfbf525c"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-green-500 text-white text-xs inline-block mb-2">Career Pivot</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                How To Change Careers, According To 50 People Who Made A Pivot{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>10 lessons learned from people who pivoted careers</p>
            </a>

            <a
              href="https://elpha.com/posts/8gssnxg6/how-i-recreated-my-life-3x-from-dancer-to-corporate-to-entrepreneur?u=39bc2t5f"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-green-500 text-white text-xs inline-block mb-2">Career Pivot</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                How I Recreated My Life 3x: From Dancer to Corporate to Entrepreneur{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Navigating career transitions.</p>
            </a>

            <a
              href="https://www.themuse.com/advice/9-career-change-stories-thatll-inspire-you-to-take-the-leap"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-green-500 text-white text-xs inline-block mb-2">Career Pivot</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                9 Career Change Stories That'll Inspire You to Take the Leap{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Personal stories of people who made career pivots.</p>
            </a>

            <a
              href="https://www.themuse.com/advice/embrace-your-paths-why-having-multiple-jobs-is-a-good-thing"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-green-500 text-white text-xs inline-block mb-2">Career Pivot</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Embrace Your Paths: Why Having Multiple Jobs is a Good Thing{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>The benefits of having a non-linear career path.</p>
            </a>

            <a
              href="https://www.ted.com/talks/emilie_wapnick_why_some_of_us_don_t_have_one_true_calling"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-green-500 text-white text-xs inline-block mb-2">Career Pivot</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Why some of us don't have one true calling{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Ted Talk on the benefits of being a generalist.</p>
            </a>

            <a
              href="https://www.vox.com/the-highlight/22977663/gen-z-antiwork-capitalism"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-red-500 text-white text-xs inline-block mb-2">Future of Work</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Gen Z does not dream of labor{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>The Great Resignation from the perspective of Gen Zers.</p>
            </a>

            <a
              href="https://hbr.org/2018/01/why-people-really-quit-their-jobs?tpcc=orgsocial_edit"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-red-500 text-white text-xs inline-block mb-2">Future of Work</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Why People Really Quit Their Jobs{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Understanding why people quit their jobs and what keeps them motivated at work.</p>
            </a>

            <a
              href="https://www.linkedin.com/posts/blue-flores_genz-corporate-workplaceculture-activity-6983465277925511169-uEju/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-red-500 text-white text-xs inline-block mb-2">Future of Work</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                10 things your Gen Z colleagues want you to know{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>How Gen Z approaches work.</p>
            </a>

            <a
              href="https://hbr.org/2019/07/why-you-should-stop-trying-to-be-happy-at-work"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-red-500 text-white text-xs inline-block mb-2">Future of Work</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Why You Should Stop Trying to Be Happy at Work{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Learning to find meaning and purpose in your work.</p>
            </a>

            <a
              href="https://www.forbes.com/sites/lizryan/2016/10/19/ten-unmistakable-signs-of-a-toxic-culture/?sh=16be47bf115f"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-purple-500 text-white text-xs inline-block mb-2">Work Culture</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Ten Unmistakable Signs Of A Toxic Culture{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Spotting the signs of a toxic work culture.</p>
            </a>

            <a
              href="https://lg.substack.com/p/the-looking-glass-a-user-guide-to?s=r"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-purple-500 text-white text-xs inline-block mb-2">Work Culture</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                A User Guide to Working With You{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>A template for your peers to understand how you work.</p>
            </a>

            <a
              href="https://www.forbes.com/sites/lizelting/2023/01/14/how-to-find-the-right-mentor-for-you/?sh=1f006a0133ee"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-purple-500 text-white text-xs inline-block mb-2">Work Culture</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                How To Find The Right Mentor For You{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>How to find a mentor and build a relationship with them</p>
            </a>

            <a
              href="https://elpha.com/posts/33x38r2j/the-connection-request-that-changed-my-life?u=39bc2t5f"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-purple-500 text-white text-xs inline-block mb-2">Work Culture</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                The connection request that changed my life{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Steps to take to network and build relationships</p>
            </a>

            <a
              href="https://www.businessnewsdaily.com/1404-characteristics-good-boss.html"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-purple-500 text-white text-xs inline-block mb-2">Work Culture</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Are You a True Leader or Just a Boss?{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Understanding the differences between being a boss vs. a leader.</p>
            </a>

            <a
              href="https://www.linkedin.com/posts/annepao_prioritization-bigrocks-liveyourlife-activity-6973334817065103360-uuW4/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-orange-500 text-white text-xs inline-block mb-2">Work-Life Balance</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                How you spend your time dictates what you value{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Learning how to prioritize and say no.</p>
            </a>

            <a
              href="https://www.coursera.org/articles/work-life-balance"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-orange-500 text-white text-xs inline-block mb-2">Work-Life Balance</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Work-Life Balance: What It Is and 5 Ways to Improve It{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>How to find work-life balance.</p>
            </a>

            <a
              href="https://hbr.org/2021/01/work-life-balance-is-a-cycle-not-an-achievement"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-orange-500 text-white text-xs inline-block mb-2">Work-Life Balance</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Work Life Balance is a Cycle Not an Achievement{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Understanding how to find work life balance.</p>
            </a>

            <a
              href="https://www.huffpost.com/entry/burnout-weekend-job-solutions_l_5d8b96cbe4b0c6d0cef53b26"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-orange-500 text-white text-xs inline-block mb-2">Work-Life Balance</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                When Living For The Weekend Becomes A Sign of Job Burnout {' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Recognizing the signs of burnout.</p>
            </a>

            <a
              href="https://www.huffpost.com/entry/why-people-quit-jobs_l_5cc71110e4b08e4e348584f0"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-orange-500 text-white text-xs inline-block mb-2">Work-Life Balance</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                12 People Share Why They Quit Their Jobs{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Toxic bosses, pay gaps, power-hungry co-workers, and open-plan offices drove these resignations.</p>
            </a>

            <a
              href="https://www.huffpost.com/entry/jacinda-ardern-burnout-work_l_63c98c61e4b07c0c7dfada1d"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full px-2 py-1 bg-orange-500 text-white text-xs inline-block mb-2">Work-Life Balance</div>
              <h3 className={`mb-3 text-xl font-semibold`}>
                Jacinda Ardern&apos;s Resignation Is A Lesson For Anyone Who Has Burnout At Work{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Signs you are burnt out and how to better cope with it.</p>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
