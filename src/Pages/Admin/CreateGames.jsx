import React, { useState } from "react";

function AdminForm() {
  const [gameName, setGameName] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [characterImages, setCharacterImages] = useState([]);
  const [youtubeLink, setYoutubeLink] = useState("");
  const [description, setDescription] = useState("");

  const handleMainImageChange = (event) => {
    const file = event.target.files[0];
    setMainImage(file);
  };

  const handleCharacterImagesChange = (event) => {
    const files = Array.from(event.target.files);
    setCharacterImages(files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log({
      gameName,
      mainImage,
      characterImages,
      youtubeLink,
      description,
    });
    // Reset form fields
    setGameName("");
    setMainImage(null);
    setCharacterImages([]);
    setYoutubeLink("");
    setDescription("");
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Upload Game Information</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-8"
      >
        <div className="mb-4">
          <label htmlFor="gameName" className="block mb-2 font-semibold">
            Game Name
          </label>
          <input
            type="text"
            id="gameName"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
            className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mainImage" className="block mb-2 font-semibold">
            Main Image
          </label>
          {mainImage ? (
            <img
              src={URL.createObjectURL(mainImage)}
              alt="Main Image Preview"
              className="mt-2 rounded-md border border-gray-300"
            />
          ) : (
            <label
              htmlFor="mainImage"
              className="w-full border-dashed border-gray-300 rounded-md px-3 py-16 cursor-pointer flex flex-col items-center justify-center text-gray-400 transition duration-300 hover:border-blue-500 hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-10 h-10 mb-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Upload Main Image
              <input
                type="file"
                id="mainImage"
                onChange={handleMainImageChange}
                className="hidden"
                accept="image/*"
                required
              />
            </label>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="characterImages" className="block mb-2 font-semibold">
            Character Images
          </label>
          <input
            type="file"
            id="characterImages"
            onChange={handleCharacterImagesChange}
            className="hidden"
            multiple
            accept="image/*"
            required
          />
          <label
            htmlFor="characterImages"
            className="w-full border-gray-300 rounded px-3 py-2 cursor-pointer bg-blue-500 text-white text-center block transition duration-300 hover:bg-blue-600"
          >
            Upload Character Images
          </label>
          <div className="mt-2 flex flex-wrap gap-4">
            {characterImages.map((image, index) => (
              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt={`Character Image ${index + 1}`}
                className="rounded-md border border-gray-300"
                style={{ maxWidth: "150px" }}
              />
            ))}
          </div>
        </div>
        <div className="mb-4 md:col-span-2">
          <label htmlFor="youtubeLink" className="block mb-2 font-semibold">
            YouTube Link
          </label>
          <input
            type="text"
            id="youtubeLink"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
            className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4 md:col-span-2">
          <label htmlFor="description" className="block mb-2 font-semibold">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full col-span-2 bg-blue-500 text-white py-2 rounded-md transition duration-300 hover:bg-blue-600"
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default AdminForm;
