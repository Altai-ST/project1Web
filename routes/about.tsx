import Navigation from "../components/Navigation/Navigation.tsx";
import { PageProps } from "$fresh/server.ts";
import ButtonMore from "../components/ButtonMore/ButtonMore.tsx";
import Category from "../components/Category/Category.tsx";
export default function About(props: PageProps) {
  return (
    <div class="max-w-screen-2xl bg-gray-400">
      <div class="p-4 mx-auto max-w-screen-xl">
        <Navigation route={props.route} />
        <div class="mt-10 flex">
          <div class="w-4/6">
            <h1 class="text-2xl">Who We Are</h1>
            <div class="flex">
              <img src="/kreslo.png" class="w-full" alt="" />
              <p class="ml-8">
                <i class="text-green-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Culpa, libero fugiat. Recusandae repellendus veritatis
                  pariatur expedita, rem quo dolorum, cupiditate sunt quod sequi
                </i>{" "}
                necessitatibus placeat deserunt distinctio sit dignissimos
                consequuntur! Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Commodi, explicabo quae! Ducimus voluptatem
                consequuntur, eveniet qui incidunt iste, voluptates sint, soluta
                quia ex optio modi aut? Aperiam, corrupti. Corrupti, eligendi.
              </p>
            </div>
            <h2 class="text-2xl mt-10 mb-4">Our Service</h2>
            <p class="mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              sequi nostrum sit? Excepturi laborum fugiat magnam distinctio id
              maxime reiciendis expedita blanditiis deleniti perspiciatis
              pariatur unde, voluptas quas quasi itaque! Amet ut incidunt autem
              minus, tenetur explicabo dolores architecto quasi, inventore nihil
              eius mollitia repellendus beatae asperiores rem odit voluptas
              tempore quaerat, corrupti repellat suscipit numquam ipsam. Iusto,
              voluptatum quos! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quibusdam dolores obcaecati eligendi repudiandae
              aliquam quae cum sint ad, sed modi incidunt quis rerum qui, saepe
              illo similique rem ullam illum?
            </p>
            <div class="flex justify-between">
              <ul
                role="list"
                class="text-green-600 mt-4 list-disc marker:text-blue-400 ml-4"
              >
                <li class="mb-2">
                  <a href="#">
                    Lorem ipsum, dolor sit amet elit. dolor sit amet elit
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#">
                    Lorem ipsum, dolor sit amet elit. dolor sit amet elit
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#">
                    Lorem ipsum, dolor sit amet elit. dolor sit amet elit
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#">
                    Lorem ipsum, dolor sit amet elit. dolor sit amet elit
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#">
                    Lorem ipsum, dolor sit amet elit. dolor sit amet elit
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#">
                    Lorem ipsum, dolor sit amet elit. dolor sit amet elit
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#">
                    Lorem ipsum, dolor sit amet elit. dolor sit amet elit
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#">
                    Lorem ipsum, dolor sit amet elit. dolor sit amet elit
                  </a>
                </li>
              </ul>
              <ul
                role="list"
                class="text-green-600 mt-4 list-disc marker:text-blue-400 ml-4"
              >
                <li class="mb-2">
                  <a href="#">
                    Lorem ipsum, dolor sit amet elit. dolor sit amet elit
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#">
                    Lorem ipsum, dolor sit amet elit. dolor sit amet elit
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#">
                    Lorem ipsum, dolor sit amet elit. dolor sit amet elit
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#">
                    Lorem ipsum, dolor sit amet elit. dolor sit amet elit
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#">
                    Lorem ipsum, dolor sit amet elit. dolor sit amet elit
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#">
                    Lorem ipsum, dolor sit amet elit. dolor sit amet elit
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#">
                    Lorem ipsum, dolor sit amet elit. dolor sit amet elit
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#">
                    Lorem ipsum, dolor sit amet elit. dolor sit amet elit
                  </a>
                </li>
              </ul>
            </div>
            <div class="flex justify-end mt-4">
              <ButtonMore />
            </div>
          </div>
          <Category/>
        </div>
      </div>
      <footer class="py-3 text-center bg-gray-600">Copyright 2022 <span class="underline">Your Company Name</span> </footer>
    </div>
  );
}
