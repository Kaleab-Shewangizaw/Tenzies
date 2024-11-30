export default function Dice(props) {
  return (
    <button 
      className={props.isHeld ? "held" : undefined} 
      onClick={props.hold}
      >
      {props.value}
    </button>
  );
}
