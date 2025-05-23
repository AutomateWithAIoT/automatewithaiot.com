import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";
// About us page with 2 sections with descriptions of the company and the team there should be 2 images for those sections
export const About = component$(() => {
  return (
    <>
      <section class="flex flex-col items-center justify-center bg-emerald-100 p-4 pt-64 pb-48">
        <h1 class="mb-4 text-4xl font-bold">About Us</h1>
        <p class="mt-4 text-lg text-center max-w-4/5">
        We Define Next Gen Automation Solutions That Upgrade Energy Efficiency, Security and Excellence.Through smart, connected ideas suited to modern lifestyles, our modern technology enables homeowners to effortlessly handle and optimize their living areas.
Our specialty is AI-driven smart home automation systems that change contemporary living. Our modern innovations provide consumers intelligent control, improved security, and energy-efficient operations by blending in seamlessly with common devices.
        </p>
        <div class="mt-8 flex space-x-4 items-center justify-center">
          <Link href="https://www.f6s.com/automate-aiot">
            <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 64 64" version="1.1" class="h-16 w-16  hover:scale-110 transition-all duration-100 ease-in-out">
              <title>F6S-logo</title>
              <g style="fill: none; fill-rule: evenodd; stroke: none; stroke-width: 1" transform="scale(0.08)">
                <g>
                  <path
                    d="M 400,0 C 179.086,0 0,179.086 0,400 0,620.914 179.086,800 400,800 620.914,800 800,620.914 800,400 800,179.086 620.914,0 400,0 Z"
                    style="fill: #f06a4d"></path>
                  <polygon
                    points="156.901,180.139 289.76,180.139 293.734,180.139 293.734,184.113 293.734,233.935 293.734,237.909 289.76,237.909 210.697,237.909 210.697,362.821 256.545,362.821 260.519,362.821 260.519,366.795 260.519,416.617 260.519,420.591 256.545,420.591 210.697,420.591 210.697,615.905 210.697,619.879 206.723,619.879 156.901,619.879 152.927,619.879 152.927,615.905 152.927,184.113 152.927,180.139 "
                    style="fill: #ffffff"></polygon>
                  <path
                    d="m 372.428,237.909 v 124.912 h 68.517 c 16.582,0 31.127,14.476 31.127,30.977 v 194.721 c 0,16.705 -14.545,31.359 -31.127,31.359 h -95.027 c -16.59,0 -31.143,-14.289 -31.143,-30.578 V 212.296 c 0,-16.829 14.448,-32.156 30.313,-32.156 h 95.858 c 16.582,0 31.127,14.468 31.127,30.961 v 72.657 3.974 h -3.974 -49.822 -3.974 v -3.974 -45.849 z m 0.016,182.68 v 141.519 h 41.875 V 420.589 Z"
                    style="fill: #ffffff"></path>
                  <path
                    d="m 647.073,283.74 v 3.974 h -3.974 -49.822 -3.974 v -3.974 -45.849 h -41.875 v 124.913 l 69.116,0.016 c 16.441,0 30.529,19.672 30.529,35.777 v 189.705 c 0,16.812 -14.266,31.558 -30.529,31.558 h -92.918 c -16.254,0 -30.512,-14.367 -30.512,-30.744 v -106.004 -3.966 l 3.966,-0.007 46.368,-0.083 3.981,-0.007 v 3.981 79.063 h 41.875 V 420.574 l -65.706,0.016 c -16.239,0 -30.484,-14.553 -30.484,-31.143 V 211.282 c 0,-16.599 14.258,-31.16 30.512,-31.16 h 92.918 c 16.263,0 30.529,14.561 30.529,31.16 z"
                    style="fill: #ffffff"></path>
                </g>
              </g>
            </svg>
          </Link>
          <div class=" bg-emerald-950 h-20 w-[2px]"></div>
          <Link href="https://www.crunchbase.com/organization/automate-aiot">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 64 64" width="250" height="250" style="fill: #ffffff" class="h-16 w-16  hover:scale-110 transition-all duration-100 ease-in-out">
              <title>logo_crunchbase</title>
              <path style="
                      clip-rule: evenodd;
                      fill: #4b6df8;
                      fill-opacity: 1;
                      fill-rule: evenodd;
                      stroke-width: 0.10474632;
                      stroke-linejoin: round;
                      stroke-miterlimit: 1.41400003;
                    "
                d="m 64.000001,8.0000025 c 0,-4.41736 -3.58264,-8 -8,-8 H 7.9999985 c -4.41736,0 -8,3.58264 -8,8 V 55.999997 c 0,4.41736 3.58264,8 8,8 H 56.000001 c 4.41736,0 8,-3.58264 8,-8 z">
              </path>
              <g transform="matrix(2.3849106,0,0,2.3849106,-9.5449499,-43.547318)" style="fill: #ffffff">
                <path style="fill: #ffffff; fill-opacity: 1; stroke-width: 0.57408553"
                  d="m 13.939838,33.65836 a 2.9622812,2.9622812 0 1 1 0.03444,-2.439863 h 2.296342 a 5.1667696,5.1667696 0 1 0 0,2.439863 h -2.296342 z">
                </path>
                <path style="fill: #ffffff; fill-opacity: 1; stroke-width: 0.57408553"
                  d="m 23.510509,27.257306 h -0.378897 a 5.0978793,5.0978793 0 0 0 -2.525976,0.889833 v -5.752337 h -2.095412 v 14.794184 h 2.106894 v -0.539641 a 5.1667696,5.1667696 0 1 0 2.893391,-9.392039 z m 2.962281,5.534185 v 0.09185 a 2.9393178,2.9393178 0 0 1 -0.08037,0.361674 v 0 a 2.933577,2.933577 0 0 1 -0.143521,0.373156 v 0.04593 a 2.9795038,2.9795038 0 0 1 -2.072449,1.624662 v 0 l -0.281302,0.04593 h -0.06315 a 2.9163544,2.9163544 0 0 1 -0.321488,0 v 0 a 2.9622812,2.9622812 0 0 1 -0.40186,-0.02871 H 23.0168 a 2.933577,2.933577 0 0 1 -0.752052,-0.229634 h -0.05741 a 2.9737629,2.9737629 0 0 1 -0.66594,-0.447787 v 0 a 2.9909855,2.9909855 0 0 1 -0.522417,-0.625753 v 0 a 2.9622812,2.9622812 0 0 1 -0.189449,-0.367414 v 0 a 2.9450587,2.9450587 0 0 1 0.03445,-2.439864 v 0 a 2.9680221,2.9680221 0 0 1 2.376714,-1.68207 2.933577,2.933577 0 0 1 0.304265,0 v 0 a 2.9680221,2.9680221 0 0 1 2.927836,2.881909 v 0 a 2.9565404,2.9565404 0 0 1 0,0.396119 z">
                </path>
              </g>
            </svg>
          </Link>
        </div>
        
      </section>
      <section class="flex min-h-screen flex-col sm:flex-row items-center justify-around space-y-10 sm:space-x-10 bg-emerald-50 p-4 md:flex-row">
        <img
          src="/About.webp"
          alt="Team Image"
          width={10}
          height={10}
          class="mb-4 h-full w-full sm:w-1/2 rounded-full"
        />
        <p class="mt-4 h-8/12 sm:w-1/2 px-12 text-justify text-lg font-light">
        Our goal is to provide automated, customized interactions that adjust to each user's routines and preferences. Our modern technology redefines comfort and convenience in everything from lighting and climate control to surveillance and appliance management. We want to be at the forefront of smart living in the future, driven by a commitment to innovation, reliability, and client satisfaction.
        </p>
      </section>
    </>
  );
});
export default About;
export const head: DocumentHead = {
  title: "About Us",
  meta: [
    {
      name: "description",
      content: "Learn more about our AutomatewithAIoT.",
    },
  ],
};
