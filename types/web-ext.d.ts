import { StorageObject } from "./lib/storage";
import { ProxySysObject } from "./lib/proxy";

interface Browser {
    storage: StorageObject;
    proxy: ProxySysObject;
}

declare var browser: Browser;