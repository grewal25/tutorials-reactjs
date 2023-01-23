import Movies from "./Movies"

export const movies = [
    {id:1,name:'The GodFather'},
    {id:2,name:'Inception'},
    {id:3,name:'Avataar'}
]

export default function ListMovie(){
    return<>
        {movies.map((movie) => 
        <Movies key={movie.id} name={movie.name} />)}
    </>
}
