const Card = (props) => {
  const className = props.className;
  return (
    <div className={`rounded-xl bg-black ${className}`}>{props.children}</div>
  );
};

export default Card;
