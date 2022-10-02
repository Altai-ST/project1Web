import { update } from "./updateData.ts";

export default function Updates() {
  return (
    <div class="flex-col w-full mt-4">
      {update.map((el) => {
        return (
          <div class="flex mb-16 text-sm">
            <div class="flex-col w-1/3">
              <img src={el.img} alt="" />
              <span class="bg-gray-500 px-1">{el.date}</span>
            </div>
            <div class="text-black w-2/3 ml-2">
              <p>
                <span class="text-green-600">
                  {el.title}
                </span>
                 {el.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
