import { TextContainer } from './text-container/index';
import { TypeBar } from './type-bar/index';

const wordlist = ["world", "print", "from"]

export default function TypeSection() {
  return (
    <div>
        <TextContainer wordlist={wordlist}/>
        <TypeBar />
    </div>
  );
}
