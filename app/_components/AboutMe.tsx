
import { Button } from '@/components/ui/button';
import profil from '@/public/profil.jpg';
import { Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';



export default function Aboutme() {
    return (

        <div>
            <div className="mt-8 mx-auto grid md:grid-cols-2 gap-10 mb-10 p-10 rounded-3xl border border-slate-100 bg-white/50 backdrop-blur-lg drop-shadow-lg relative z-20">
                <div>
                    <h2 className="mb-6 text-2xl font-bold">A propos</h2>
                    <p className="text-lg text-justify font-medium">Je suis développeuse full-stack. J&#39;aime l&#39;aspect créatif du métier, le fait de construire un projet brique par brique et collaborer avec une équipe pluridisciplinaire.
                        Je suis lyonnaise et j&#39;aime travailler en autonomie mais aussi en équipe.
                    </p>
                    <div className='py-10'>
                        <Button
                            className="gap-2"
                            asChild>
                            <Link
                                href="/CV.pdf"
                                target="_blank">
                                <Download size="16" />
                                Télécharger mon c.v
                            </Link>
                        </Button>
                    </div>

                </div>
                <div>
                    <Image src={profil} alt="portrait" className='rounded-lg' />
                </div>
            </div>
        </div>


    )
}