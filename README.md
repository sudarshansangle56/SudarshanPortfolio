import React, { useState } from "react";

function Right({
  itemValues,
  imageSize,
  rotation,
  turnLeft,
  marginZ,
  marginX,
  marginY,
}) {
  const [selectedImages, setSelectedImages] = useState([]); // State to store the selected images
  const [isActive, setIsActive] = useState(false);
  const [spacing, setSpacing] = useState(80);
  const [imgStyle, setImgStyle] = useState({});

  const handlePlay = () => {
    setImgStyle({
      transform: `rotate(${rotateRight || rotation}deg) rotate(-${rotateLeft || turnLeft}deg)`,
      transition: "transform 0.5s ease",
      marginLeft: `${marginX * 4}px`,
      marginRight: `-${moveSteps * 4}px`,
      marginBottom: `${goToY || marginY * 4}px`,
    });
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImages([...selectedImages, imageSrc]);
  };

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  const handleall = () => {
    handleClick();

    setTimeout(() => {
      handleClick1();
    }, 1500); // 1500 milliseconds = 1.5 seconds
  };

  const handleClick1 = () => {
    setSpacing(-80);

    setTimeout(() => {
      setSpacing(80);
    }, 1000);
  };

  const handleReset = () => {
    setSelectedImages([]);
  };

  const handleDelete = (index) => {
    const updatedImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(updatedImages);
  };

  const { "Move Steps or X": moveSteps, "Go to Y": goToY, "Rotate Right": rotateRight, "Rotate Left": rotateLeft } = itemValues;

  return (
    <div
      style={{
        backgroundColor: "skyblue",
        height: "100vh",
        width: "100%",
        padding: "10px",
      }}
    >
      <div
        className="whitebox"
        style={{
          height: "350px",
          border: "2px solid black",
          display: "flex",
          flexWrap: "wrap",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1px",
        }}
      >
        {isActive && (
          <div>
            <img
              src="cat1.png"
              alt="Cat"
              style={{
                cursor: "pointer",
                width: "100px",
                transform: `rotate(${rotation}deg) rotate(-${turnLeft}deg)`,
                marginLeft: `${marginX || marginZ}px`,
                marginBottom: `${marginY}px`,
                height: "100px",
                marginRight: `${spacing}px`,
                transition: "margin-right 2s ease-in-out",
              }}
            />
            <img
              src="/reversebg.png"
              alt="Reverse"
              style={{
                cursor: "pointer",
                transform: `rotate(${rotation}deg) rotate(-${turnLeft}deg)`,
                marginBottom: `${marginY}px`,
                width: "100px",
                height: "100px",
                marginLeft: `${spacing}px`,
                transition: "margin-left 2s ease-in-out",
              }}
            />
          </div>
        )}

        {selectedImages.map((imageSrc, index) => (
          <div style={{ ...imgStyle }} key={index}>
            <img
              src={imageSrc}
              alt=""
              style={{
                cursor: "pointer",
                width: "100px",
                height: `${imageSize}px`,
              }}
            />
            <img
              src="deletebox.png"
              onClick={() => handleDelete(index)}
              style={{
                height: "20px",
                width: "22px",
                cursor: "pointer",
                marginBottom: "80px",
              }}
              alt=""
            />
          </div>
        ))}
      </div>

      <div
        className="box2"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          className="inputbox"
          style={{
            width: "700px",
            height: "110px",
            borderRadius: "7px",
            backgroundColor: "white",
            margin: "5px",
          }}
        >
          <div
            className="sizebox"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>Sprit</p>
            <input type="text" />
            <p>x</p>
            <input type="text" />
            <p>y</p>
            <input type="text" />
          </div>

          <div
            className="show"
            style={{
              display: "flex",
              padding: "2px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>Show</p>
            <input type="text" />
            <p>Size</p>
            <input type="text" />
            <p>Direction</p>
            <input type="text" />
          </div>

          <div className="image" style={{ display: "flex" }}>
            <div
              className="square"
              onClick={() => handleImageClick("banana.png")}
              style={{ cursor: "pointer" }}
            >
              <img
                src="banana.png"
                alt="Banana"
                style={{ height: "100px", width: "100px" }}
              />
            </div>
            <div
              className="square"
              onClick={() => handleImageClick("cat1.png")}
              style={{ cursor: "pointer" }}
            >
              <img
                src="cat1.png"
                alt="Cat"
                style={{ height: "100px", width: "100px" }}
              />
            </div>
            <div
              className="square"
              onClick={() => handleImageClick("ball.png")}
              style={{ cursor: "pointer" }}
            >
              <img
                src="ball.png"
                alt="Ball"
                style={{ height: "100px", width: "100px" }}
              />
            </div>
            <div
              className="square"
              onClick={() => handleImageClick("reversebg.png")}
            >
              <img
                src="/reversebg.png"
                style={{ height: "100px", width: "100px" }}
                alt="Right Arrow"
              />
            </div>
            <div
              className="square"
              onClick={() => handleImageClick("rightarrow.png")}
              style={{ cursor: "pointer" }}
            >
              <img
                src="rightarrow.png"
                alt="Right Arrow"
                style={{ height: "100px", width: "100px" }}
              />
            </div>
          </div>

          <div className="block2">
            <button onClick={handleall}>Hero Feature</button>
            <button onClick={handleReset} style={{ marginLeft: "10px" }}>
              Reset
            </button>
            <button onClick={handlePlay}>Play</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;