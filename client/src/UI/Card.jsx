const Card = (props) => {
  const className = "rounded-xl " + props.className;
  return <div className={className}>{props.children}</div>;
};

export default Card;
