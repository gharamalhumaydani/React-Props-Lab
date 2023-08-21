interface ServInfo{
    tyservices:string;
    prices:number;  
}
function Services(props:ServInfo) {
  return (
    <div>
        <h3>Services{props.tyservices}</h3>
        <h3>employee:{props.prices}</h3>
    </div>
  )
}

export default Services