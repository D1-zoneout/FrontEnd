export default function TurfImageGallery({ images }) {
  return (
    <div className="flex gap-4 overflow-x-auto mb-6">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Turf image ${index + 1}`}
          className="h-52 w-80 object-cover rounded-lg shadow"
        />
      ))}
    </div>
  );
}
