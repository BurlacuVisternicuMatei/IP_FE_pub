import React, { useState, useRef } from 'react';
import { IoIosTrash } from "react-icons/io";

const PhotoUploader = () => {
  const [photos, setPhotos] = useState([]);
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const newPhotos = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setPhotos([...photos, ...newPhotos]);
  };

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };
  const handleRemovePhoto = (indexToRemove) => {
    setPhotos(photos.filter((_, index) => index !== indexToRemove));
  };
  return (
    <div
      className="flex flex-col border border-gray-300 border-dotted rounded-[15px] p-20 w-full"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
        <div className="w-full flex flex-col">

            <input
                type="file"
                accept="image/*"
                onChange={handleFileInputChange}
                multiple
                style={{ display: 'none' }}
                ref={fileInputRef}
            />
                <p className="flex justify-center mb-10">Drag and drop files here or</p>
            
              <button
                  className="bg-[#2b2b3e] focus:outline-none rounded-[10px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => fileInputRef.current.click()}
              >
                  Choose File
              </button>

        </div>
        <div className="flex flex-wrap mt-4 relative">
                {photos.map((photo, index) => (
                <div key={index} className="w-1/4 relative">
                    <img src={photo.preview} alt={`Uploaded ${index}`} className="max-w-20 h-auto" />
                    <button
              className="absolute bg-[grey] top-0 right-0 p-1"
              
              onClick={() => handleRemovePhoto(index)}
            >
              <IoIosTrash />
            </button>
                </div>
                ))}
        </div>
    </div>
  );
};

export default PhotoUploader;
// import React, { useState, useRef } from 'react';
// import { IoIosTrash } from 'react-icons/io';

// const PhotoUploader = () => {
//   const [photos, setPhotos] = useState([]);
//   const fileInputRef = useRef(null);

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const files = Array.from(e.dataTransfer.files);
//     handleFiles(files);
//   };

//   const handleFiles = (files) => {
//     const newPhotos = files.map((file) => ({
//       id: Date.now(), 
//       file,
//       preview: URL.createObjectURL(file),
//       visible: true, 
//     }));
//     setPhotos([...photos, ...newPhotos]);
//   };

//   const handleFileInputChange = (e) => {
//     const files = Array.from(e.target.files);
//     handleFiles(files);
//   };

//   const handleTogglePhotoVisibility = (id) => {
//     setPhotos(
//       photos.map((photo) =>
//         photo.id === id ? { ...photo, visible: !photo.visible } : photo
//       )
//     );
//   };

//   return (
//     <div
//       className="flex flex-col border border-gray-300 border-dotted rounded-[15px] p-20 w-full"
//       onDrop={handleDrop}
//       onDragOver={(e) => e.preventDefault()}
//     >
//       <div className="w-full flex flex-col">
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileInputChange}
//           multiple
//           style={{ display: 'none' }}
//           ref={fileInputRef}
//         />
//         <p className="flex justify-center">Drag and drop files here or</p>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={() => fileInputRef.current.click()}
//         >
//           Choose File
//         </button>
//       </div>
//       <div className="flex flex-wrap mt-4 relative">
//         {photos.map((photo) => (
//           <div key={photo.id} className={`w-1/4 relative ${photo.visible ? '' : 'hidden'}`}>
//             <img src={photo.preview} alt={`Uploaded ${photo.id}`} className="max-w-20 h-auto" />
//             <button
//               className="absolute top-0 right-0 mt-1 mr-1 text-red-500 bg-transparent"
//               style={{ border: 'none', cursor: 'pointer' }}
//               onClick={() => handleTogglePhotoVisibility(photo.id)}
//             >
//               <IoIosTrash />
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PhotoUploader;
