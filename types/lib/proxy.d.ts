import { HttpHeaders, ResourceType, RequestFilter } from "./webRequest"


export interface Proxy {

}

type SupportProxyTypes = "direct" | "http" | "https" | "socks" | "socks4"

/**
 * Values of this type are objects. They contain the following properties:
 */
export interface ProxyInfo {
    /**
     * This describes whether to proxy at all, and if so, what kind of proxy to use. It may take one of the following values:
     */
    type: SupportProxyTypes

    /**
     * The hostname of the proxy server. Mandatory unless type is "direct".
     */
    host: string

    /**
     * The port number of the proxy server. Mandatory unless type is "direct".
     */
    port: string

    /**
     * Username for the proxy service. This is usable with "socks". For HTTP proxy authorizations, use webRequest.onAuthRequired.
     */
    username: string

    /**
     * Password for the proxy service. This is usable with "socks". For HTTP proxy authorizations, use webRequest.onAuthRequired.
     */
    password: string

    /**
     *  If true, the proxy server is used to resolve certain DNS queries (only usable with "socks4" and "socks"). Defaults to false.
     */
    proxyDNS: boolean

    /**
     * Failover timeout in seconds. If the connection fails to connect the proxy server after this number of seconds, the next proxy server in the array returned from the proxy.onRequest listener will be used.
     */
    failoverTimeout: number
}

export interface RequestDetails {
    documentUrl: string
    frameId: number
    fromCache: boolean
    ip: any
    method: string
    originUrl: string
    parentFrameId: number
    requestId: string
    requestHeadersOptional?: HttpHeaders
    tabId: number
    timeStamp: number
    type: ResourceType
    url: string
}

interface ProxyListener {
    apply(requestDetails: RequestDetails): ProxyInfo | Array<ProxyInfo> | Promise<ProxyInfo> | Promise<Array<ProxyInfo>>;
}

interface ProxyOnRequest {
    addListener(listener: ProxyListener, filter: RequestFilter, extraInfoSpec: Array<string>): any;
    removeListener(listener: ProxyListener): void;
    hasListener(listener: ProxyListener): boolean;
}

export interface ProxySysObject {
    onRequest: ProxyOnRequest
}