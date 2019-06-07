

type StoreDataValueTypePrimitive = string | number | boolean
type StoreDataValueType = StoreDataValueTypePrimitive | Array<StoreDataValueTypePrimitive>
type StoreDataType = object

interface StorageArea {
    get(keys: string | Array<string>): Promise<any>
    set(keys: any): void
}

type StorageAreaName = "sync" | "local" | "managed"

interface StorageAreaonChangedCallback {
    apply(changes: any, areaName: StorageAreaName): void;
}

interface StorageAreaonChanged {
    addListener(callback: StorageAreaonChangedCallback): void
    removeListener(listener: StorageAreaonChangedCallback): void
    hasListener(listener: StorageAreaonChangedCallback): void
}


export interface StorageObject {
    sync: StorageArea
    local: StorageArea
    managed: StorageArea
    onChanged: StorageAreaonChanged
}