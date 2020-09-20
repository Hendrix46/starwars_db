
export default class SwapiService {
    _apiBase = 'https://swapi.dev/api';
    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok){
            throw new Error(`Could not fetch ${url} , received ${res.status}`);
        }
        const body = await res.json();
        return body;
    }
    getAllPeople=async ()=>{
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPeople);
    }
    getPerson=async (id)=>{
        const people = await this.getResource(`/people/${id}/`);
        return this._transformPeople(people)
    }

    getAllPlanet=async ()=>{
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }
    getPlanet=async (id)=>{
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet)
    }

    getAllStarShips= async () =>{
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformstarShips);
    }
    getStarShip= async (id)=>{
        const starship= await this.getResource(`/starships/${id}/`);
        return this._transformstarShips(starship)
    }

    _extractId= (item) =>{
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet=(planet)=>{
        return{
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter :planet.diameter
        }
    };
    _transformstarShips=(starship)=>{
        return{
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    };
    _transformPeople=(people)=>{
        return{
            id: this._extractId(people),
            name: people.name,
            gender: people.gender,
            birthYear: people.birth_year,
            eyeColor: people.eye_color
        }
    }
}

// const swapi = new SwapiService();
//
// swapi.getAllPeople().then((people)=>{
//     people.forEach((item)=>{
//         console.log(item.name)
//     });
// });


