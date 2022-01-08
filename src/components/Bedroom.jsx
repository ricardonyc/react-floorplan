function Bedroom(prop) {
  return (
    <div className={`bedroom${prop.bedNum}`}>
      <h1>Bedroom {prop.bedNum}</h1>
    </div>
  );
}

export default Bedroom;
