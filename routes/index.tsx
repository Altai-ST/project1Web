import Navigation from "../components/Navigation/Navigation.tsx";
import { PageProps } from "$fresh/server.ts";
import Cards from "../components/Cards/Cards.tsx";
import Updates from "../components/Updates/Updates.tsx";
import WhoBlock from "../components/WhoBlock/WhoBlock.tsx";
import LemonBlock from "../components/LemonBlock/LemonBlock.tsx";
export default function Home(props: PageProps) {
  return (
    <div class="max-w-screen-2xl bg-gray-400">
      <div class="p-4 mx-auto max-w-screen-xl">
        <Navigation route={props.route} />
        <div class="flex justify-between pt-8 pl-9">
          <div class="flex-col w-3/5 ">
            <h1 class="text-3xl pb-5">Welcome to Silver Team</h1>
            <p class="pb-5 w-3/4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              animi earum ducimus vero nihil! Ratione quod rem dolor recusandae
              incidunt officia quaerat illo quam! A cupiditate ullam nesciunt
              corrupti reprehenderit. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vero facere quis rerum aperiam atque rem
              tempora. Magni similique enim asperiores libero vitae, error
              inventore corrupti. Necessitatibus ipsum rerum officia quod!
            </p>
            <button class="border rounded bg-gradient-to-b from-gray-200 to-gray-400 w-40 py-1 text-blue-400 font-bold text-xl shadow-xl">
              Learn more
            </button>
          </div>
          <div class="w-2/5 flex justify-center">
            <img class="w-4/5 h-full" src="/bag.png" alt="bag" />
          </div>
        </div>
        <Cards />
        <div class="flex mt-14">
          <div class="w-1/4 mr-16">
            <h2 class="text-2xl">Lastest Updates</h2>
            <Updates />
          </div>
          <WhoBlock />
          <LemonBlock/>
        </div>
      </div>
      <footer class="py-3 text-center bg-gray-600">Copyright 2022 <span class="underline">Your Company Name</span> </footer>
    </div>
  );
}
