import TypeChar from "./TypeChar";

export default function TypeWord(props) {
  return (
    <span>
      {props.word.split("").map((character) => (
        <TypeChar character={character} />
      ))}
    </span>
  );
}
