import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What is included in with Gold benefits?",
        value: "What is included in with Gold benefits?"
    },
    { text: "How many pets can a person fly with?", value: "How many pets can a person fly with?" },
    { text: "Does your content include any Hipster Ipsum?", value: "Does your content include any Hipster Ipsum?" },
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
