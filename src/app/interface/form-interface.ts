export interface PersonForm {
    firstname: Props;
    surname: Props;
    age: Props;
    twitter: Props;
}

export interface Props {
    label: string;
    value: string;
    type: number;
}

