import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./home/page";

export default function Home() {
  // return (
  // <>
  //   <div className='container mx-auto px-4'>
  //     <h1>Hello word</h1>
  //     <p>This is a content to make our page longer</p>
  //     <div className='w-full h-screen bg-green-300'></div>
  //     <p>Lorem Ipsum is simply dummy text ...</p>
  //   </div>
  // </>

  return (
    <>
      <HomePage />
    </>
  );
}
