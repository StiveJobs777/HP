export interface Herione{
    imageSrc?: string,
    imageAlt: string,
    name: string,
    actor: string,
    gender: string,
    house: string,
    wandeCore: string,
    alive: string
}

export default function Card({
    imageSrc,
    imageAlt,
    name,
    actor,
    gender,
    house,
    wandeCore,
    alive
} : Herione){
    return(
        <div className="card">
            <div className="card-img">
                {imageSrc ? (
                    <img src={imageSrc} alt={imageAlt} />
                ) : (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M4 20c0-3.5 3.5-6 8-6s8 2.5 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                )}
            </div>
            <div className="card-body">
                <h3>{name}</h3>
                <p>Actor: {actor}</p>
                <p>Gender: {gender}</p>
                <p>House: {house}</p>
                <p>Wand core: {wandeCore}</p>
                <p>Alive: {alive}</p>
            </div>
        </div>
    )
}
