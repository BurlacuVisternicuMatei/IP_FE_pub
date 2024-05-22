import './Icon.css';

function Icon(props){
    return <div className="Icon"><img src={props.source} style={{float: 'inline-end', WebkitFilter: 'invert(100%)', filter: 'invert(100%)'}} width={25} height={25} alt={props.alt} /></div>
}

export default Icon;