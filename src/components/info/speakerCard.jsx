import react from 'react'

const SpeakerCard = ({speakerImage, Name, title }) => {
    return (
        <div className="flex flex-col items-center justify-center ">
            <img src={speakerImage} alt="speaker" className="h-[300px] md:h-[400px] mb-4 hover:shadow-2xl hover:shadow-[#001641]" />
            <h1 className="text-lg font-bold text-center text-[#001641] font-primary">{Name}</h1>
            <p className="text-[#181818] text-center">{title}</p>
        </div>
    )
}

export default SpeakerCard