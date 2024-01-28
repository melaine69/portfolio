import Image from 'next/image';
import profil from '@/public/profil.jpg';

export default function Aboutme() {
    return (
        <div className="grid grid-cols-12 grid-rows-6" id="aboutme">
            <div className="col-start-1 col-span-8 row-start-1 row-span-6 pt-10">
                <h3 className="text-5xl font-bold mb-14">A propos de moi</h3>
                <div className="p-8  border border-slate-100 bg-white/50 backdrop-blur-lg drop-shadow-lg rounded-2xl relative z-20">
                    <h2 className="text-2xl font-semibold mb-6">Qui-suis-je ?</h2>
                    <p className="text-base m-8">
                    Je suis développeuse full-stack. J&apos;aime l&apo;saspect créatif du métier, le fait de construire un projet brique par brique et collaborer avec une équipe pluridisciplinaire.
                        Je suis lyonnaise et j&apos;aime travailler en autonomie mais aussi en équipe.
                    </p>
                </div>

            </div>
            <div className="col-start-8 col-span-4 row-start-1 row-span-5">
                <div className="w-fit h-fit rounded-2xl drop-shadow-lg">
                <Image
                    className="rounded-2xl relative z-10"
                    width={500}
                    height={500}
                    src={profil}
                    alt="profil"
                />
                </div>
             
            </div>

        </div>
    )
}