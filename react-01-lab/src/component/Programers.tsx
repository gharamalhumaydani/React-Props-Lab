interface progInfo{
name:string;
Programminglanguage:string;
Year:number;
companies:string;
}

function Programers(props:progInfo) {
  return (
    <div>
        <h1>{props.name}</h1>
        <h2>{props.Programminglanguage}</h2>
        <p>{props.Year}</p>
        <p>{props.companies}</p>

    </div>
  )
}

export default Programers