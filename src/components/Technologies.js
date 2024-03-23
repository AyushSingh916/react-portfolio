const Technologies = ({ technologies }) => {
    return (
        <>
            <div className="text-xs sm:text-[10px] text-primaryRed dark:text-primaryDarkOrange">
                {console.log(technologies)}
                {technologies.map((techno, index) => (
                    <p key={index}>{techno}</p>
                ))}
            </div>
        </>
    );
};

export default Technologies;