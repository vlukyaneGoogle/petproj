export interface ICookieOptions {
    [name: string]: any
    // {    ???
    //     path: string,
    //     expires?: Date | string;
    // }
}

export interface ITodo {
    _id: number,
    content: string,
    isCompleted: boolean,
    isEditing: boolean
}