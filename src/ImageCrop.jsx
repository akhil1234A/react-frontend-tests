// import React, { useState, useRef } from 'react';

// const ImageCrop = () => {
//   const [image, setImage] = useState('');
//   const [cropArea, setCropArea] = useState({ width: 200, height: 200, top: 50, left: 50 });
//   const cropRef = useRef();
//   const [isDragging, setIsDragging] = useState(false);
//   const [isResizing, setIsResizing] = useState(false);

//   const handleImageLoad = (e) => {
//     const img = e.target;
//     cropRef.current = { width: img.width, height: img.height };
//   };

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     cropRef.current = {
//       ...cropRef.current,
//       startX: e.clientX,
//       startY: e.clientY,
//       startTop: cropArea.top,
//       startLeft: cropArea.left,
//     };
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging) {
//       const newTop = cropRef.current.startTop + (e.clientY - cropRef.current.startY);
//       const newLeft = cropRef.current.startLeft + (e.clientX - cropRef.current.startX);
//       setCropArea((prev) => ({ ...prev, top: newTop, left: newLeft }));
//     } else if (isResizing) {
//       const newWidth = cropArea.width + (e.clientX - cropRef.current.startX);
//       const newHeight = cropArea.height + (e.clientY - cropRef.current.startY);
//       setCropArea((prev) => ({
//         ...prev,
//         width: Math.max(50, newWidth),
//         height: Math.max(50, newHeight),
//       }));
//       cropRef.current.startX = e.clientX;
//       cropRef.current.startY = e.clientY;
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     setIsResizing(false);
//   };

//   const startResizing = (e) => {
//     e.stopPropagation();
//     setIsResizing(true);
//     cropRef.current.startX = e.clientX;
//     cropRef.current.startY = e.clientY;
//   };

//   const cropImage = () => {
//     const canvas = document.createElement('canvas');
//     const img = document.createElement('img');
//     img.src = image;
//     img.onload = () => {
//       const scaleX = img.naturalWidth / cropRef.current.width;
//       const scaleY = img.naturalHeight / cropRef.current.height;

//       canvas.width = cropArea.width * scaleX;
//       canvas.height = cropArea.height * scaleY;

//       const ctx = canvas.getContext('2d');
//       ctx.drawImage(
//         img,
//         cropArea.left * scaleX,
//         cropArea.top * scaleY,
//         cropArea.width * scaleX,
//         cropArea.height * scaleY,
//         0,
//         0,
//         canvas.width,
//         canvas.height
//       );

//       const croppedImageUrl = canvas.toDataURL('image/png');
//       const downloadLink = document.createElement('a');
//       downloadLink.href = croppedImageUrl;
//       downloadLink.download = 'cropped-image.png';
//       downloadLink.click();
//     };
//   };

//   return (
//     <div onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} style={{ userSelect: 'none' }}>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => {
//           const file = e.target.files[0];
//           const reader = new FileReader();
//           reader.onloadend = () => setImage(reader.result);
//           reader.readAsDataURL(file);
//         }}
//       />

//       {image && (
//         <div
//           style={{
//             position: 'relative',
//             width: '500px',
//             height: '500px',
//             backgroundImage: `url(${image})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             overflow: 'hidden',
//             border: '1px solid #ddd',
//           }}
//         >
//           <img
//             src={image}
//             onLoad={handleImageLoad}
//             alt="Source"
//             style={{ visibility: 'hidden', position: 'absolute' }}
//           />

//           {/* Crop Area Box */}
//           <div
//             style={{
//               position: 'absolute',
//               width: `${cropArea.width}px`,
//               height: `${cropArea.height}px`,
//               top: `${cropArea.top}px`,
//               left: `${cropArea.left}px`,
//               border: '2px dashed #fff',
//               backgroundColor: 'rgba(255, 255, 255, 0.3)',
//               cursor: isDragging ? 'grabbing' : 'move',
//             }}
//             onMouseDown={handleMouseDown}
//           >
//             {/* Resizable Handle */}
//             <div
//               style={{
//                 position: 'absolute',
//                 width: '10px',
//                 height: '10px',
//                 bottom: 0,
//                 right: 0,
//                 backgroundColor: '#fff',
//                 cursor: 'se-resize',
//               }}
//               onMouseDown={startResizing}
//             />
//           </div>
//         </div>
//       )}

//       <button onClick={cropImage} style={{ marginTop: '10px' }}>
//         Crop Image
//       </button>
//     </div>
//   );
// };

// export default ImageCrop;

import React, { useRef, useState } from 'react';
import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const ImageCropper = () => {
  const cropperRef = useRef(null);
  const [image, setImage] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const cropImage = () => {
    const cropper = cropperRef.current.cropper;
    const croppedCanvas = cropper.getCroppedCanvas();

    if (croppedCanvas) {
      const croppedImageURL = croppedCanvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = croppedImageURL;
      link.download = 'cropped-image.png';
      link.click();
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <input type="file" accept="image/*" onChange={handleImageChange} />

      {image && (
        <Cropper
          src={image}
          style={{ height: 500, width: '100%' }}
          initialAspectRatio={1}
          guides={true}
          cropBoxMovable={true}
          cropBoxResizable={true}
          autoCropArea={1}
          ref={cropperRef}
          zoomable={true}
          viewMode={1}
        />
      )}

      <button onClick={cropImage} style={{ marginTop: '10px' }}>
        Crop Image
      </button>
    </div>
  );
};

export default ImageCropper;
