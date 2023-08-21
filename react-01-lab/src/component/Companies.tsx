import Services from "./Services";
interface compInfo{
    compname:string;
    employee:number;
    year:number;
    tyservices:string;
    prices:number;
}

function Companies(props:compInfo) {
  return (
    <div>
       <h1>compname:{props.compname}</h1> 
       <h2>employee:{props.employee}</h2>
       <p>year:{props.year}</p>
       <Services
          tyservices={props.tyservices}
          prices={props.prices}
        ></Services>
    </div>
  )
}

export default Companies