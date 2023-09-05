import Image from "next/image";

export default function Gallery() {
  return (
    <section className="text-gray-900 bg-gray-100 ">
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <figure className="flex flex-col my-2 cursor-pointer">
          <Image
            src="https://dialsecret.fr/assets/img/grosseins.jpg"
            alt="Gros Seins"
            className="w-full h-full col-span-2 row-span-2 bg-gray-500 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 aspect-square"
            width={302}
            height={302}
          />
          <figcaption className="flex items-center justify-center h-10 ">
            #Gros Seins
          </figcaption>
        </figure>
        <figure className="flex flex-col my-2 cursor-pointer">
          <Image
            alt="Blondes"
            className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square"
            src="https://dialsecret.fr/assets/img/blondes.jpg"
            width={200}
            height={200}
          />
          <figcaption className="flex items-center justify-center h-10 ">
            #Blondes
          </figcaption>
        </figure>
        <figure className="flex flex-col my-2 cursor-pointer">
          <Image
            alt="Brunes"
            className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square"
            src="https://dialsecret.fr/assets/img/brunes.jpg"
            width={200}
            height={200}
          />
          <figcaption className="flex items-center justify-center h-10 ">
            #Brunes
          </figcaption>
        </figure>
        <figure className="flex flex-col my-2 cursor-pointer">
          <Image
            alt="Blacks"
            className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square"
            src="https://dialsecret.fr/assets/img/blacks.jpg"
            width={200}
            height={200}
          />
          <figcaption className="flex items-center justify-center h-10 ">
            #Blacks
          </figcaption>
        </figure>
        <figure className="flex flex-col my-2 cursor-pointer">
          <Image
            alt="Asiatiques"
            className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square"
            src="https://dialsecret.fr/assets/img/asiats.jpg"
            width={200}
            height={200}
          />
          <figcaption className="flex items-center justify-center h-10 ">
            #Asiatiques
          </figcaption>
        </figure>
        <figure className="flex flex-col my-2 cursor-pointer">
          <Image
            alt=""
            className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square"
            src="https://source.unsplash.com/random/200x200/?4"
            width={200}
            height={200}
          />
          <figcaption className="flex items-center justify-center h-10 ">
            #Gros Seins
          </figcaption>
        </figure>
        <figure className="flex flex-col my-2 cursor-pointer">
          <Image
            alt=""
            className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square"
            src="https://source.unsplash.com/random/200x200/?5"
            width={200}
            height={200}
          />
          <figcaption className="flex items-center justify-center h-10 ">
            #Gros Seins
          </figcaption>
        </figure>
        <figure className="flex flex-col my-2 cursor-pointer">
          <Image
            alt=""
            className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square"
            src="https://source.unsplash.com/random/200x200/?6"
            width={200}
            height={200}
          />
          <figcaption className="flex items-center justify-center h-10 ">
            #Gros Seins
          </figcaption>
        </figure>
        <figure className="flex flex-col my-2 cursor-pointer">
          <Image
            alt=""
            className="w-full h-full bg-gray-500 rounded shadow-sm min-h-48 aspect-square"
            src="https://source.unsplash.com/random/200x200/?7"
            width={200}
            height={200}
          />
          <figcaption className="flex items-center justify-center h-10 ">
            #Gros Seins
          </figcaption>
        </figure>
        <figure className="flex flex-col my-2 cursor-pointer">
          <Image
            src="https://source.unsplash.com/random/302x302/"
            alt=""
            className="w-full h-full col-span-2 row-span-2 bg-gray-500 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 aspect-square"
            width={302}
            height={302}
          />
          <figcaption className="flex items-center justify-center h-10 ">
            #Gros Seins
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
