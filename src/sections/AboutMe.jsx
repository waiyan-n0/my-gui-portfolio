import {useTranslation, Trans} from "react-i18next";
import Reveal from "../components/Reveal";

const AboutMe = () => {
    const {t} = useTranslation();
    return (
        <Reveal >
            <div className='md:max-w-2xl max-w-lg'>
                <h1 className='text-xl font-semibold border-b-2 border-amber-400 w-fit mb-2'>
                    {t('aboutMe.title')}
                </h1>
                <div className="flex flex-col md:text-lg gap-2 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <p>
                        <Trans i18nKey="aboutMe.description1">
                            I am a <span className="text-amber-500 font-semibold">Computer Science student</span> passionate
                            about web development and creative design. Enjoy building projects that blend technology,
                            and art.
                        </Trans>
                    </p>
                    <p>{t('aboutMe.description2')}</p>
                    <p className="italic text-slate-500">
                        "{t('aboutMe.quote')}"
                    </p>
                </div>
                <span className='flex flex-row pt-4 gap-4'>
                <a href="/myResume.pdf" target='_blank' rel="noopener noreferrer" download="WaiYanNaing_CV.pdf"
                   className='py-2 px-6 bg-amber-400 rounded-xl font-semibold hover:bg-amber-500 w-32 text-xs md:text-lg md:w-auto text-black'>
                    {t('aboutMe.btnDownload')}
                </a>
                <a href='https://t.me/waiyandev' target={'_blank'}
                   className='flex items-center py-2 px-6 bg-transparent border-2 border-amber-500 rounded-xl font-semibold hover:bg-amber-500 text-xs md:text-lg md:w-auto'>
                    {t('aboutMe.btnContact')}
                </a>
            </span>
            </div>
        </Reveal>
    );
}
export default AboutMe;