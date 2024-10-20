const CarouselItem = ({item}) => {
    return (
        <div className="carousel-card">
            <img 
                src={item.image} 
                alt="CarouselItem"
            />
            <p>{item.description}</p>
        </div>
    )
}

export default CarouselItem