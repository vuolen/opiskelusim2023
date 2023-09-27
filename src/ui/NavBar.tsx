import { useTranslation } from "react-i18next";

const NavBar = () => {

    const {t, i18n} = useTranslation()

    return (
        <div className="w-full h-fit flex justify-between p-4 bg-neutral-600 text-white text-lg">
            <h1 className="font-bold">{t('title')}</h1>
            <div className="hidden sm:flex space-x-3">
                {i18n.language !== 'fi' && <p onClick={() => i18n.changeLanguage('fi')}>SUOMI</p>}
                {i18n.language !== 'sv' && <p onClick={() => i18n.changeLanguage('sv')}>SVENSKA</p>}
                {i18n.language !== 'en' && <p onClick={() => i18n.changeLanguage('en')}>ENGLISH</p>}
            </div>
            <div className="flex sm:hidden space-x-3">
                {i18n.language === 'fi' && <p onClick={() => i18n.changeLanguage('sv')}>FI</p>}
                {i18n.language === 'sv' && <p onClick={() => i18n.changeLanguage('en')}>SV</p>}
                {i18n.language === 'en' && <p onClick={() => i18n.changeLanguage('fi')}>EN</p>}
            </div>
        </div>
    );
};

export default NavBar;
