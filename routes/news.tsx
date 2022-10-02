import Navigation from "../components/Navigation/Navigation.tsx";
import { PageProps } from "$fresh/server.ts";
import { tw } from "twind";
import ButtonMore from "../components/ButtonMore/ButtonMore.tsx";
import { update } from "../components/Updates/updateData.ts";
import Category from "../components/Category/Category.tsx";

export default function News(props: PageProps) {
  return (
    <div class="max-w-screen-2xl bg-gray-400">
      <div class="p-4 mx-auto max-w-screen-xl">
        <Navigation route={props.route} />
        <div class="flex mt-14">
          <div class="w-3/4">
            <div class="border-black border-t-2 ">
              <p>
                Posted in{" "}
                <a class="text-green-600 underline" href="#">Web Templaces,</a>
                <a
                  class="underline border-black border-r-2 pr-1 text-green-600"
                  href="#"
                >
                  CSS
                </a>{" "}
                Date: June 28, 2037
              </p>
            </div>
            <h2 class="text-xl mt-4 pb-3 border-black border-b-1 mb-3">
              Lorem ipsum dolor sit amet elit.
            </h2>
            <img src="/lustra.png" alt="" class="w-full" />
            <p class="mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
              assumenda cumque! Sunt dolorem placeat facilis tempore
              voluptatibus, amet veniam eligendi accusantium adipisci impedit
              dicta mollitia nobis, distinctio fugit voluptatem excepturi. Lorem
              ipsum, dolor sit amet elit. Excepturi, soluta consequatur
            </p>
            <div class="flex justify-end mb-10 border-black border-b-1 pb-8">
              <ButtonMore />
            </div>
            <p class="border-black border-t-2 pt-2">
              Posted in{" "}
              <a class="text-green-600 underline" href="#">Web Templaces,</a>
              <a
                class="underline border-black border-r-2 pr-1 text-green-600"
                href="#"
              >
                CSS
              </a>{" "}
              Date: June 28, 2037
            </p>
            <h2 class="text-xl mt-4 pb-3 border-black border-b-1 mb-3">
              Lorem ipsum dolor sit amet elit.
            </h2>
            <img src="/apple.png" alt="" class="w-full" />
            <p class="mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
              assumenda cumque! Sunt dolorem placeat facilis tempore
              voluptatibus, amet veniam eligendi accusantium adipisci impedit
              dicta mollitia nobis, distinctio fugit voluptatem excepturi. Lorem
              ipsum, dolor sit amet elit. Excepturi, soluta consequatur
            </p>
            <div class="flex justify-end mb-10 border-black border-b-1 pb-8">
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
