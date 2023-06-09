const Card = (props) => {
  const className = props.className;
  console.log(props.className);
  return <div className={className}>{props.children}</div>;
};

export default Card;
