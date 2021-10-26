import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-24 bg-black">
      <div className="container mx-auto grid md:grid-cols-3 py-10">
        <div className="space-y-5">
          <img
            src="/Dakshya Shop.png"
            className="w-32"
            alt="dakshya_logo white"
          />
          <div className="flex space-x-5">
            <a href="https://facebook.com/dakshyanepal" target="_blank">
              <img
                src="/logos/fb.svg"
                alt="fb_logo"
                className="cursor-pointer"
              />
            </a>
            <a href="https://instagram.com/dakshyanepal" target="_blank">
              <img
                src="/logos/instagram.svg"
                alt="instagram logo"
                className="cursor-pointer"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/dakshya-nepal/mycompany/"
              target="_blank"
            >
              <img
                src="/logos/Linkedin.svg"
                alt="linkedIn logo"
                className="cursor-pointer text-white"
              />
            </a>
            <a href="https://twitter.com/dakshyanepal" target="_blank">
              <img
                src="/logos/twitter.svg"
                alt="twitter logo"
                className="cursor-pointer"
              />
            </a>
          </div>
          <p className="font-normal text-sm text-white">#सक्षमनेपाल</p>
          <p
            className="font-primary font-normal text-sm text-white cursor-pointer hover:text-primary transition-all ease-in-out duration-300"
            onClick={() => router.push("/privacypolicy")}
          >
            Privacy & Policy
          </p>
          <p className="font-primary font-normal text-sm text-white">
            All right reserved Dakshya Nepal
          </p>
        </div>
        <div className="flex space-x-20 mt-5 md:mt-0">
          <div className="space-y-5">
            <p className="font-primary text-xl font-normal capitalize text-white">
              Products
            </p>
            <div className="space-y-3">
              <Link href="https://dakshyanepal.com/products/smart-school">
                <p className="text-white font-primary font-normal text-sm cursor-pointer">
                  Smart School
                </p>
              </Link>
              <Link href="https://dakshyanepal.com/products/guidance-counseling">
                <p className="text-white font-primary font-normal text-sm cursor-pointer">
                  Guidance Counseling
                </p>
              </Link>
              <Link href="https://dakshyanepal.com/products/dakshya-cms">
                <p className="text-white font-primary font-normal text-sm cursor-pointer">
                  Dakshya CMS
                </p>
              </Link>
              <Link href="https://dakshyanepal.com/products/qbex">
                <p className="text-white font-primary font-normal text-sm cursor-pointer">
                  Qbex
                </p>
              </Link>
            </div>
          </div>
          <div className="space-y-5 block md:hidden xl:block">
            <p className="font-primary text-xl font-normal capitalize text-white">
              Company
            </p>
            <div className="space-y-3">
              <Link href="https://dakshyanepal.com/blogs ">
                <p className="text-white font-primary font-normal text-sm cursor-pointer">
                  Blogs
                </p>
              </Link>
              <Link href="https://dakshyanepal.com/about">
                <p className="text-white font-primary font-normal text-sm cursor-pointer">
                  About
                </p>
              </Link>
              <Link href="https://dakshyanepal.com/careers">
                <p className="text-white font-primary font-normal text-sm cursor-pointer">
                  Careers
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-5 mt-5 md:mt-0">
          <p className="font-primary text-xl font-normal capitalize text-white">
            Contact
          </p>
          <div className="iframe-rwd">
            <iframe
              title="map"
              width="100%"
              height="125"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              className="rounded shadow transform transition-all ease-in-out duration-300 hover:-translate-y-2 -translate-x-5 md:-translate-x-0 lg:-translate-x-0 hover:shadow-lg"
              src="https://maps.google.com/maps?q=dakshyaNepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
            <br />
            <small>
              <a
                href="https://goo.gl/maps/o9y7nwqMoFWoyris9"
                className="text-gray-600 hover:text-gray-900 font-primary"
              >
                View Larger Map
              </a>
            </small>
          </div>
          <div className="flex space-x-5 items-center">
            <div className="font-primary text-sm text-white grid grid-cols-2 gap-3">
              <a href="tel:9802302100">9802302100</a>
              <a href="tel:9802302101">9802302101</a>
              <a href="tel:9802302105">9802302105</a>
              <a href="tel:9802302107">9802302107</a>
            </div>
          </div>
          <div className="flex space-x-5 items-center">
            <a
              href="mailto:info@dakshyanepal.com"
              className="font-primary text-sm text-white"
            >
              info@dakshyanepal.com
            </a>
          </div>
          <div className="flex space-x-5 items-center">
            <p className="font-primary text-sm text-white">
              TG Complex, Koteshwor, Kathmandu, Nepal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
