import Image from "next/image";

export function Footer() {
  return (
    <footer className=" bg-white py-4 bottom-0 fixed w-full opacity-40">
      <div className="container mx-auto flex justify-center items-center">
        <div className=" items-center">
          <Image
            src="/Assurant.png"
            alt="Logo assurant"
            width={100}
            height={50}
          />
        </div>
      </div>
    </footer>
  );
}