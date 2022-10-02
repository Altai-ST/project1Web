import Navigation from "../components/Navigation/Navigation.tsx";
import { PageProps } from "$fresh/server.ts";
export default function Contact(props: PageProps) {
  return (
    <div class="max-w-screen-2xl bg-gray-400">
      <div class="p-4 mx-auto max-w-screen-xl">
        <Navigation route={props.route} />
        <div class="flex mt-10">
          <div class="w-1/2">
            <h2 class="text-2xl mb-4">Contact Information</h2>
            <p class="mb-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              minima perspiciatis libero aliquam debitis odio aliquid nemo
              praesentium rerum, corrupti blanditiis. Cumque neque ipsam, iusto
              eaque voluptatum odit dolores iste! Praesentium inventore
              aspernatur fugit at culpa ex, voluptatem molestiae, aut,
              accusantium debitis expedita vel? Voluptatum amet quis nesciunt
            </p>
            <h2 class="text-2xl mb-4">Where We Are</h2>
            <img src="/map.png" alt="" class="mb-10" />
            <h2 class="text-2xl mb-4">Our Company</h2>
            <h3 class="text-xl mb-2">Mailing Address</h3>
            <p class="w-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              corrupti voluptate nesciunt hic blanditiis maxime, autem earum
            </p>
            <p class="mt-8">Tel: 010-010-102</p>
            <p>Fax: 010-010-102</p>
          </div>
          <div class="mt-10 ml-10">
            <h2 class="mb-4 text-2xl">Quick Contact Form</h2>
            <p class="mb-1">Name:</p>
            <input type="text" class="w-96 mb-2" />
            <p class="mb-1">Email:</p>
            <input type="text" class="w-96 mb-2" />
            <p class="mb-1">Subject:</p>
            <input type="text" class="w-96 mb-2" />
            <p class="mb-1">Message:</p>
            <textarea class="w-96 h-64" />
            <div class="flex justify-between mt-4">
              <button class="bg-white w-20 rounded">Send</button>{" "}
              <button class="bg-white w-20 rounded">Reset</button>
            </div>
          </div>
        </div>
      </div>
      <footer class="py-3 text-center bg-gray-600 ">
        Copyright 2022 <span class="underline">Your Company Name</span> 
      </footer>
    </div>
  );
}
