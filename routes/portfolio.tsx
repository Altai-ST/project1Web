import Navigation from "../components/Navigation/Navigation.tsx";
import { PageProps } from "$fresh/server.ts";
import Gallery from "../components/Gallery/Gallery.tsx";
export default function Portfolio(props: PageProps) {
  return (
    <div class="max-w-screen-2xl bg-gray-400">
      <div class="p-4 mx-auto max-w-screen-xl">
        <Navigation route={props.route} />
        <h1 class="text-2xl mt-14 mb-4">Our Gallery</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          mollitia veniam est, officiis quod sint quas? Iure deserunt harum
          eligendi illum exercitationem blanditiis excepturi impedit architecto
          adipisci accusamus, voluptatem eveniet! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Quo asperiores eos autem corrupti sunt
          atque voluptatibus vero quas. Eaque nesciunt sit voluptate adipisci
          dolore recusandae tenetur odio velit iure tempora!
        </p>
      </div>
      <div class="max-w-screen-xl mx-auto">
        <Gallery/>
      </div>
      <footer class="py-3 text-center bg-gray-600">
        Copyright 2022 <span class="underline">Your Company Name</span> 
      </footer>
    </div>
  );
}
