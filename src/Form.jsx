function handleFormSubmit(event) {
  event.preventDefault();
  console.log("form submitted");
}

export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <input placeholder="write" />
      <button onClick={handleFormSubmit}>Submit</button>
    </form>
  );
}
