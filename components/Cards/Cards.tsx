import { cards } from "./cardData.ts";

export default function Cards() {
  return (
    <div class="flex justify-between">
      {cards.map((el) => {
        return (
          <div class="w-96 flex-col bg-green-600 p-4 text-white rounded-md">
            <h1 class="text-2xl font-bold mb-3">{el.title}</h1>
            <p class="mb-4">{el.text}</p>
            <button class="text-black w-28 rounded-xl bg-gradient-to-b from-green-500 to-green-800">More</button>
          </div>
        );
      })}
    </div>
  );
}
