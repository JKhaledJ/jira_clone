const Contributors = (props) => {
  let imgs = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/photos/termination-policy-guide-on-the-wooden-surface-picture-id1326062521?s=612x612",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/photos/termination-policy-guide-on-the-wooden-surface-picture-id1326062521?s=612x612",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/photos/termination-policy-guide-on-the-wooden-surface-picture-id1326062521?s=612x612",
    },
    {
      id: 4,
      image:
        "https://media.istockphoto.com/photos/termination-policy-guide-on-the-wooden-surface-picture-id1326062521?s=612x612",
    },
  ];
  let allImgs =
    imgs.length > 3
      ? [
          imgs[0],
          imgs[1],
          {
            extra: (
              <span
                key={imgs[2].id}
                className={`w-9 h-9 rounded-full ${
                  props.hover && "hover:-translate-y-2"
                } bg-gray-200 flex items-center justify-center transition-all duration-150 border-2 cursor-pointer border-white -ml-1 ${
                  props.className
                }`}
              >
                +{imgs.length - 2}
              </span>
            ),
          },
        ]
      : imgs;
  return (
    <div className="flex justify-start">
      {allImgs.map((img) =>
        img.image ? (
          <img
            alt="image"
            key={img.id}
            src={img.image}
            className={`w-9 h-9 rounded-full ${
              props.hover && "hover:-translate-y-2"
            } transition-all duration-150 border-2 cursor-pointer border-white -ml-1 ${
              props.className
            }`}
          />
        ) : (
          img.extra
        )
      )}
    </div>
  );
};

export default Contributors;
