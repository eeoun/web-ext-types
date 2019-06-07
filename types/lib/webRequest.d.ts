export interface WebRequest {

}

/**
 * An array of objects. Each object has the following properties:
 */
interface HttpHeadersElement {
    /**
     * Name of the HTTP header.
     */
    name: string

    /**
     * Value of the HTTP header if it can be represented by UTF-8. Either this property or binaryValue must be present.
     */
    value?: string

    /**
     * Value of the HTTP header if it cannot be represented by UTF-8, represented as bytes (0..255). Either this property or value must be present.
     */
    binaryValue?: Array<any> | number
}

export type HttpHeaders = Array<HttpHeadersElement>

export type ResourceType =
    /**
     *     Requests sent through the Beacon API.
     */
    "beacon"
    /**
     * Requests sent to the report-uri given in the Content-Security-Policy header, when an attempt to violate the policy is detected.
     */
    | "csp_report"
    | "font"
    | "image"
    | "imageset"
    | "main_frame"
    | "media"
    | "object"
    | "object_subrequest"
    | "ping"
    | "script"
    | "speculative"
    | "sub_frame"
    | "web_manifest"
    | "websocket"
    | "xbl"
    | "xml_dtd"
    | "web_maxmlhttprequestnifest"
    | "xslt"
    | "other"
    ;

/**
 * An object describing filters to apply to webRequest events.
 */
export interface RequestFilter {
    /**
     * An array of match patterns. The listener will only be called for requests whose targets match any of the given patterns. Only requests made using HTTP or HTTPS will trigger events, even though match patterns can match some other protocols.
     */
    urls: Array<string>

    /**
     * A list of resource types (for example, stylesheets, images, scripts). The listener will only be called for requests for resources which are one of the given types.
     */
    types?: Array<ResourceType>

    /**
     * The listener will only be called for requests from the tab identified by this ID.
     */
    tabId: number

    /**
     * The listener will only be called for requests from the window identified by this ID.
     */
    windowId: number
}