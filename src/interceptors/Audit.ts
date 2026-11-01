import 'reflect-metadata';

export const AUDIT_METADATA_KEY = 'sdk:audit_action';

export function Audit(action: string): MethodDecorator {
    return function (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        Reflect.defineMetadata(AUDIT_METADATA_KEY, { action }, target, propertyKey);
    };
}