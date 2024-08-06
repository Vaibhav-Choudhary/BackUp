import Card from './Card'

function Tours({tours,fn}){
    return(
        <div className='flex my-0 items-center justify-evenly flex-wrap max-w-[1200px]'>
            {
               tours.map((tour)=>{
                return <Card key={tour.id} {...tour} removeTour={fn} ></Card>
               })
            }
        </div>
    );
}

export default Tours;