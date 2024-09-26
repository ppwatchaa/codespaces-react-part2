export default function MouseEvent(){
    return(<h1
        onClick={e=>alert("onClick")}
        onMouseEnter={e=>alert("OnMouseEnter")}
        onMouseOver={e=>alert("onMouseOver")}
        onMouseDown={e=>("onMouseDown")}
        onMouseUp={e=>("onMouseUp")}
        onMouseLeave={e=>("onMouseLeave")}
    >Click Me</h1>);
}