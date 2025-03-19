export default function HeroGradientOverlay() {
    return (
        <div
            className="absolute inset-0 z-10"
            style={{
                backgroundImage:
                    'linear-gradient(180deg, rgba(11,11,11) 0%, rgba(11,11,11,0.2) 30%, rgba(255,255,255,0.1) 100%)',
            }}
        />
    );
}
