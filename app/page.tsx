import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row justify-center gap-20 items-center h-full px-20">
      <div className="w-1/4 flex justify-end">
        <div className="border-10 w-50 h-50 border-white rounded-full overflow-hidden">
          <Image
            src="/images/Mingyu1.jpg"
            alt="Gambar Mingyu"
            width={500}
            height={500}
            className="rounded-full w-50 h-50"
          />
        </div>
      </div>
      <div className="w-3/4 text-white">
        <h1>Kim Min-gyu </h1>
        <p> (Korean: 김민규; born April 6, 1997), known mononymously as Mingyu (민규), is a South Korean rapper and singer. Managed by Pledis Entertainment,
           he is a member of the South Korean boy band Seventeen and its hip hop team, and in 2025, debuted in a sub-unit with S.Coups as CxM.</p>
      </div>
    </div>
  );
}