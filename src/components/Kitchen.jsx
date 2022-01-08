import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen() {
  return (
    <div className="kitchen">
        <Oven />
        <Sink />
      <h1 className="kitchen-text">Kitchen</h1>
    </div>
  );
}

export default Kitchen;
