function Card(props) {
    function classes() {
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
        return 'card mb-3 ' + bg + txt;
    }

    return (
        <div className='myDiv' style={{maxWidth: "23rem"}}>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<h5 className="card-text">{props.text}</h5>)}
                {props.body}
                {props.status && (<div id="createStatus">{props.body}</div>)}
            </div>
        </div>
    );
    
}