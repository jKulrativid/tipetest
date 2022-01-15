import TextHilight from "./TextHilight";
import TypeWord from "./TypeWord";

export default function TextContainer(props) {
  return (
    <div>
      <TextHilight />
      {props.wordlist.map((word) => (
        <TypeWord word={word} />
      ))}
    </div>
  );
}
