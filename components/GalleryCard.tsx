// components/GalleryCard.tsx
type Props = {
  name: string;
  business: string;
  imageUrl: string;
};

export default function GalleryCard({ name, business, imageUrl }: Props) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 bg-white">
      <img src={imageUrl} alt={name} className="w-full h-60 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-600">{business}</p>
      </div>
    </div>
  );
}
