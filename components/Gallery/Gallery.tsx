import { GalleryData } from "./galleryData.ts";

export default function Gallery() {
  return (
    <div class="flex flex-wrap justify-center">
      {GalleryData.map((el) => {
        return (
          <div class="w-1/4 relative mr-10 mb-10">
            <img src={el.img} alt="" class="w-full" />
            <p class="absolute left-0 top-32 w-20 bg-black text-white">{el.text}</p>
          </div>
        );
      })}
    </div>
  );
}
