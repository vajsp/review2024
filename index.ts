type mReadonly<T> = {
    readonly [P in keyof T]: T[P];
};

type mPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

type mRecord<K extends keyof any, T> = {
    [P in K]: T;
};

interface IDog {
    name: string;
    age: number;
    height: number;
    weight: number;
    sex: string;
}

type mOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
