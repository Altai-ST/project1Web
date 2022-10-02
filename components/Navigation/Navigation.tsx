import { useState } from "preact/hooks";

interface Routing{
  route: string
}

export default function Navigation(props: Routing) {
  const [isActive, setIsActive] = useState({
    home: true,
    news: false,
    port: false,
    about: false,
    contact: false
  });

  switch (props.route) {
    case "/":
      setIsActive({
        ...isActive,
        home: true,
        about: false,
        port: false,
        news: false,
        contact: false
      });
      break;
    case "/about":
      setIsActive({
        ...isActive,
        home: false,
        about: true,
        port: false,
        news: false,
        contact: false
      });
      break;
    case "/portfolio":
      setIsActive({
        ...isActive,
        home: false,
        about: false,
        port: true,
        news: false,
        contact: false
      });
      break;
    case "/news":
      setIsActive({
        ...isActive,
        home: false,
        about: false,
        port: false,
        news: true,
        contact: false
      });
      break;
    case "/contact":
      setIsActive({
        ...isActive,
        home: false,
        about: false,
        port: false,
        news: false,
        contact: true
      });
      break;
    default:
      break;
  }
  return (
    <div>
      <div class="flex justify-between">
        <h1 class="text-3xl font-bold">Light Gray</h1>
        <input type="text" placeholder="Search" class="w-56 border border-black h-7 pl-1 mt-2" />
      </div>
      <div class="flex mt-9 bg-gray-300 font-bold text-blue-400 shadow-lg">
        <div class={isActive.home
                ? `w-1/6 text-gray-600 text-center py-2`
                : `w-1/6 text-center hover:text-gray-600 py-2`}> <a href="/">Home</a> </div>
        <div class={isActive.news
                ? `w-1/6 border-l border-gray-600 text-gray-600 text-center py-2`
                : `w-1/6 border-l border-gray-600 text-center hover:text-gray-600 py-2`}> <a href="/news">Lastest News</a> </div>
        <div class={isActive.port
                ? `w-1/6 border-l border-gray-600 text-gray-600 text-center py-2`
                : `w-1/6 border-l border-gray-600 text-center hover:text-gray-600 py-2`}> <a href="/portfolio">Portfolio</a> </div>
        <div class={isActive.about
                ? `w-1/6 border-l border-gray-600 text-gray-600 text-center py-2`
                : `w-1/6 border-l border-gray-600 text-center hover:text-gray-600 py-2`}> <a href="/about">About Us</a></div>
        <div class={isActive.contact
                ? `w-1/6 border-l border-gray-600 text-gray-600 text-center py-2`
                : `w-1/6 border-l border-gray-600 text-center hover:text-gray-600 py-2`}> <a href="/contact">Contact</a> </div>
      </div>
    </div>
  )
}
