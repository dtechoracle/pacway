import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Layout() {
  console.log(import.meta.env.VITE_notion_database_id);
  const videoRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    }
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20%",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10%",
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-next`}
        style={{
          ...style,
          display: "block",
          backgroundColor: "black",
          padding: 2,
          right: "10px",
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-prev`}
        style={{
          ...style,
          display: "block",
          backgroundColor: "black",
          padding: 2,
          left: "10px",
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
  }

  const images = [
    {
      src: "img/game1.png",
      alt: "Image 1",
      description: "Description for Image 1",
    },
    {
      src: "img/game2.png",
      alt: "Image 2",
      description: "Description for Image 2",
    },
    {
      src: "img/game3.png",
      alt: "Image 3",
      description: "Description for Image 3",
    },
  ];

  const testimonials = [
    {
      text: "We couldn't be happier with the game developed by [GameDevCo]! Their team captured our vision perfectly and delivered a product that exceeded our expectations. The graphics are stunning, the gameplay is smooth, and the user experience is top-notch. We highly recommend them for any game development needs!",
      author: "Alex T., Creative Director at FunTime Games",
    },
    {
      text: "Working with [GameDevCo] was an absolute pleasure. They were professional, communicative, and incredibly talented. Our project was completed on time and within budget, and the final product has received rave reviews from our users. Thank you for bringing our ideas to life!",
      author: "Jamie L., CEO of PixelDream Studios",
    },
    {
      text: "[GameDevCo] transformed our concept into a fully functional, engaging game that has become a hit in the market. Their expertise in game mechanics, design, and user engagement is unparalleled. We look forward to collaborating with them on future projects.",
      author: "Sam K., Product Manager at Virtual Adventures Inc.",
    },
    {
      text: "The team at [GameDevCo] is phenomenal. They took our rough ideas and turned them into a polished, fun, and addictive game. Their attention to detail and commitment to quality are evident in every aspect of the game. We are thrilled with the results and our users are too!",
      author: "Morgan R., Lead Developer at Interactive Creations",
    },
    {
      text: "I highly recommend [GameDevCo] for any game development project. Their creative team is innovative and their technical skills are superb. The game they developed for us has been a great success, attracting thousands of players within the first month of launch. Excellent work!",
      author: "Chris P., Marketing Manager at DreamQuest Games",
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="relative w-full h-screen">
          <div className="absolute inset-0 bg-black bg-opacity-[0.6] "></div>
          <video
            ref={videoRef}
            src="/img/hero-video2.mp4"
            className="w-full h-full object-cover"
            muted
            autoPlay
            loop
            playsInline
          />
          {/* <video
            ref={videoRef}
            src="/img/hero-video3.mp4"
            className="w-full h-full object-cover"
            muted
            autoPlay
            loop
            playsInline
          /> */}
          <div className="absolute inset-1 flex justify-center items-center h-full">
            <div className="p-4 text-white text-center md:max-w-full">
              <h1 className="md:text-[60px] text-[35px] md:px-24 pb-4 kanit-black">
                We make your dreams come true with the power of play
              </h1>
              <p className="text-[18px] md:text-[30px] kanit-regular">
                We are innovation partners, purveyors of a new development
                services model for creative industries.
              </p>
              <button className="mt-4 text-white kanit-black border-4 w-full md:w-[400px] border-[#C6FF22] font-black p-4">
                View our Portfolio
              </button>
            </div>
          </div>
        </div>
        <div className="bg-black flex flex-col md:flex-row md:p-24 gap-4 ">
          <div className="md:w-1/2 w-full p-4">
            <h1 className="kanit-bold text-[36px] md:text-[60px] text-white">
              About Us
            </h1>
            <p className="text-white kanit-regular text-[16px] leading-8 md:leading-10">
              We are a team of artists, programmers, designers, and producers
              that has been working together since 2013. We got our start
              building games for others while dreaming of creating our own.
            </p>
          </div>
          <div className="md:w-1/2 w-full p-4">
            <video
              src="/img/hero-video2.mp4"
              className="w-full h-full rounded object-cover"
              muted
              autoPlay
              loop
              playsInline
            />
          </div>
        </div>
        <div className="pt-8 pb-8 bg-black">
          <h1 className="kanit-black text-white text-[36px] md:text-[48px] text-center pb-8 md:mt-0 mt-6">
            NoLand Pacway
          </h1>
          <Slider {...carouselSettings} className="flex">
            {images.map((image) => (
              <div key={image.src} onClick={() => openModal(image)}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto cursor-pointer"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex justify-center h-[130vh] md:h-[100%] bg-gray-200">
          <div className="flex flex-col md:flex-row w-full max-w-[1200px]">
            <div className="flex-1 md:border-r border-black text-center p-4">
              <div className="kanit-bold md:text-[48px] text-[50px] border rounded-full mb-4">
                70+
              </div>
              <p className="text-[#2E54F1] kanit-bold text-2xl">
                Game Dev Professionals
              </p>
              <p className="kanit-regular">
                With a veteran product leadership, we offer award-winning
                complete dev services.
              </p>
            </div>
            <div className="flex-1 md:border-r border-black text-center p-4">
              <div className="kanit-bold md:text-[48px] text-[50px] border rounded-full mb-4">
                2+
              </div>
              <p className="text-[#2E54F1] kanit-bold text-2xl">
                Production Locations
              </p>
              <p className="kanit-regular">
                Our multi-disciplinary network of locations covers 4 different
                continents and insures around the clock global coverage.
              </p>
            </div>
            <div className="flex-1 md:border-r border-black text-center p-4">
              <div className="kanit-bold md:text-[48px] text-[50px] border rounded-full mb-4">
                12+
              </div>
              <p className="text-[#2E54F1] kanit-bold text-2xl">
                Nationalities
              </p>
              <p className="kanit-regular">
                End to end game development solutions, from Full Game
                Development, Co-Development, Level Design, Art Production,
                Development Support, Live Ops, QA, Player Support, Localization,
                and Marketing.
              </p>
            </div>
            <div className="flex-1 text-center p-4">
              <div className="kanit-bold md:text-[48px] text-[50px] border rounded-full">
                3
              </div>
              <p className="text-[#2E54F1] kanit-bold text-2xl">Games</p>
            </div>
          </div>
        </div>

        <div className="mt-8 mb-8">
          <h1 className="font-extrabold text-[36px] md:text-[48px] text-center pb-8">
            Testimonials
          </h1>
          <Slider
            {...carouselSettings}
            className="flex justify-center md:px-20"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 text-center rounded-lg">
                <p className="text-black text-lg md:text-xl italic mb-4 kanit-regular">
                  "{testimonial.text}"
                </p>
                <p className="text-black text-base md:text-lg kanit-bold">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </Slider>
        </div>
        <div className="new bg-[#C6FF22] md:h-[600px] h-[800px] text-center md:text-left flex flex-col md:flex-row">
          <div className="md:w-1/2 flex flex-col justify-center p-6 md:p-12">
            <div className="md:mt-[100px]">
              <h1 className="kanit-black text-[36px] md:text-[48px] text-center md:text-left">
                What's New
              </h1>
              <p className="text-center md:text-left kanit-regular leading-8 md:leading-10">
                We are a team of artists, programmers, designers, and producers
                that has been working together since 2013. We got our start
                building games for others while dreaming of creating our own.
              </p>
              <button className="bg-[#000000] p-4 text-white kanit-regular shadow font-bold mt-6 mx-auto md:mx-0">
                News Archive
              </button>
            </div>
          </div>
          <div className="w-full">
            {/* <img src="/img/job-image.png" className="w-full" /> */}
          </div>
        </div>
        <div className="relative w-full h-screen">
          <div className="absolute inset-0 bg-black bg-opacity-[0.6] "></div>
          <video
            ref={videoRef}
            src="/img/another.mp4"
            className="w-full h-full object-cover"
            muted
            autoPlay
            loop
            playsInline
          />
          {/* <video
            ref={videoRef}
            src="/img/hero-video3.mp4"
            className="w-full h-full object-cover"
            muted
            autoPlay
            loop
            playsInline
          /> */}
          <div className="absolute inset-1 flex justify-center items-center h-full">
            <div className="p-4 text-white text-center md:max-w-full">
              <h1 className="md:text-[60px] text-[35px] md:px-24 pb-4 kanit-black">
                We make your dreams come true with the power of play
              </h1>
              <p className="text-[18px] md:text-[30px] kanit-regular">
                We are innovation partners, purveyors of a new development
                services model for creative industries.
              </p>
              <button className="mt-4 text-white kanit-black border-4 w-full md:w-[400px] border-[#C6FF22] font-black p-4">
                View our Portfolio
              </button>
            </div>
          </div>
        </div>
        <div className="bg-blue-800 md:h-[600px] h-[800px] md:flex md:text-right">
          <div className="md:w-1/2 relative">
            <img
              src="/img/job-image.png"
              className="absolute md:bottom-[-100px] bottom-[-365px] left-0 right-0 md:w-[650px]"
            />
          </div>

          <div className="md:w-1/2 p-6 pt-12 md:mt-[150px] md:pr-24 text-center md:text-justify">
            <h1 className="font-bold text-[36px] md:text-[48px] text-white">
              Want a Job?
            </h1>
            <p className="font-semibold text-white leading-8 md:leading-10">
              We are a team of artists, programmers, designers, and producers
              that has been working together since 2013. We got our start
              building games for others while dreaming of creating our own.
            </p>
            <button className="bg-white text-black p-4 font-bold mt-6 rounded">
              See Careers
            </button>
          </div>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-75 text-white text-center">
                <p>{selectedImage.description}</p>
              </div>
              <button
                className="absolute top-2 right-2 text-white text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
