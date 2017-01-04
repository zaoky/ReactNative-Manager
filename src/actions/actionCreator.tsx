export type Action<TPayload> = {
    type: string;
    payload: TPayload;
}

interface IActionCreator<P> {
    type: string;
    (payload: P): Action<P>;
}

export function actionCreator<P>(type: string): IActionCreator<P> {
    return Object.assign(
        (payload: P) => ({ type, payload }) as any,
        {type}
    );
}

export function isType<P>(action: Action<any>,
    actionCreator: IActionCreator<P>): action is Action<P> {
    return action.type === actionCreator.type;
}