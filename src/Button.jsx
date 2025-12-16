function handleClick(event) {
  console.log("hhello");
  console.log(event);
}
function handleMouseOver() {
  console.log("bye");
}
function handleDblClick() {
  console.log("doubled click me");
}
export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>click me</button>
      <p onMouseOver={handleMouseOver}>
        THIS PARA Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
        similique recusandae repellat reiciendis cum vitae nesciunt voluptate
        fugiat, tempore dicta quidem quam! Sint blanditiis rerum provident
        inventore possimus quos ex. IS FOR EVENT DEMO!!
      </p>
      <button onDoubleClick={handleDblClick}>double click me</button>
    </div>
  );
}
