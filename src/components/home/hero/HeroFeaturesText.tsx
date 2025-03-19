import HeroBubble from './HeroBubble';

export default function HeroFeaturesText() {
    return (
        <HeroBubble className="hidden md:flex md:absolute md:h-full md:-right-1/2 md:-translate-x-[47%] md:w-auto md:p-10 text-end">
            <p className="w-75 mr-auto">
                Проект объединяет тысячи автомоек по всей России, позволяя
                пользователям находить ближайшие точки обслуживания, сравнивать
                цены, читать отзывы и записываться на услуги в пару кликов.
            </p>
        </HeroBubble>
    );
}
