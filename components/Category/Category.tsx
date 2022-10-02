import ButtonMore from "../ButtonMore/ButtonMore.tsx";
import { update } from "../Updates/updateData.ts";

export default function Category() {
  return (
    <div class="ml-10 w-1/3">
      <h2 class="text-2xl ">Categories</h2>
      <ul
        role="list"
        class="text-green-600 mt-4 list-disc marker:text-blue-400 ml-4"
      >
        <li class="mb-2">
          <a href="#">
            Lorem ipsum, dolor sit amet elit.
          </a>
        </li>
        <li class="mb-2">
          <a href="#">
            Lorem ipsum, dolor sit amet elit.
          </a>
        </li>
        <li class="mb-2">
          <a href="#">
            Lorem ipsum, dolor sit amet elit.
          </a>
        </li>
        <li class="mb-2">
          <a href="#">
            Lorem ipsum, dolor sit amet elit.
          </a>
        </li>
        <li class="mb-2">
          <a href="#">
            Lorem ipsum, dolor sit amet elit.
          </a>
        </li>
        <li class="mb-2">
          <a href="#">
            Lorem ipsum, dolor sit amet elit.
          </a>
        </li>
        <li class="mb-2">
          <a href="#">
            Lorem ipsum, dolor sit amet elit.
          </a>
        </li>
        <li class="mb-2">
          <a href="#">
            Lorem ipsum, dolor sit amet elit.
          </a>
        </li>
      </ul>
      <div class="flex-col w-5/6 mt-4">
        <h2 class="text-2xl">Our News</h2>
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
      <div class="flex justify-end mr-10">
        <ButtonMore />
      </div>
      <h2 class="text-2xl">Testimonials</h2>
      <p class="my-6">
        <i>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
          quisquam ipsam explicabo? Alias magni nam quidem eum. Molestias quod
          ut in, ea ipsa praesentium aliquid ipsum, exercitationem reprehenderit
          atque reiciendis!
        </i>
      </p>
      <p class="text-green-600 font-bold">
        <i>Steven Web Designer</i>
      </p>
    </div>
  );
}
