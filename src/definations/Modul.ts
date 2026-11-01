export interface IBackendModule {
    controllers?: any[];
    middlewares?: string[] | Function[];
    interceptors?: string[] | Function[];

    init?(context: IBackendContext): Promise<void> | void;
    destroy?(): Promise<void> | void;
}

export interface IBackendContext {
}