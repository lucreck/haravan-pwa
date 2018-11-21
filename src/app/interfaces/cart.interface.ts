export interface ICart {
    attributes?:        {};
    token?:             string;
    item_count?:        number;
    items?:             IItem[];
    total_price?:       number;
    total_weight?:      number;
    note?:              string;
    location_id?:       string;
    requires_shipping?: boolean;
}

export interface IAttributes {
}

export interface IItem {
    id?:                  number;
    title?:               string;
    price?:               number;
    line_price?:          number;
    price_original?:      number;
    line_price_orginal?:  number;
    quantity?:            number;
    sku?:                 string;
    grams?:               number;
    vendor?:              string;
    properties?:          {};
    variant_id?:          number;
    product_id?:          number;
    gift_card?:           boolean;
    url?:                 string;
    image?:               string;
    handle?:              string;
    requires_shipping?:   boolean;
    not_allow_promotion?: boolean;
    product_title?:       string;
    barcode?:             string;
    product_description?: string;
    variant_title?:       string;
    variant_options?:     string[];
    promotionref?:        string;
    promotionby?:         any[];
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export module Convert {
    export function toICart(json: string): ICart {
        return cast(JSON.parse(json), o("ICart"));
    }

    export function iCartToJson(value: ICart): string {
        return JSON.stringify(value, null, 2);
    }
    
    function cast<T>(obj: any, typ: any): T {
        if (!isValid(typ, obj)) {
            throw `Invalid value`;
        }
        return obj;
    }

    function isValid(typ: any, val: any): boolean {
        if (typ === undefined) return true;
        if (typ === null) return val === null;
        return typ.isUnion  ? isValidUnion(typ.typs, val)
                : typ.isArray  ? isValidArray(typ.typ, val)
                : typ.isMap    ? isValidMap(typ.typ, val)
                : typ.isEnum   ? isValidEnum(typ.name, val)
                : typ.isObject ? isValidObject(typ.cls, val)
                :                isValidPrimitive(typ, val);
    }

    function isValidPrimitive(typ: string, val: any) {
        return typeof typ === typeof val;
    }

    function isValidUnion(typs: any[], val: any): boolean {
        // val must validate against one typ in typs
        return typs.some(typ => isValid(typ, val));
    }

    function isValidEnum(enumName: string, val: any): boolean {
        const cases = typeMap[enumName];
        return cases.indexOf(val) !== -1;
    }

    function isValidArray(typ: any, val: any): boolean {
        // val must be an array with no invalid elements
        return Array.isArray(val) && val.every(element => {
            return isValid(typ, element);
        });
    }

    function isValidMap(typ: any, val: any): boolean {
        if (val === null || typeof val !== "object" || Array.isArray(val)) return false;
        // all values in the map must be typ
        return Object.keys(val).every(prop => {
            if (!Object.prototype.hasOwnProperty.call(val, prop)) return true;
            return isValid(typ, val[prop]);
        });
    }

    function isValidObject(className: string, val: any): boolean {
        if (val === null || typeof val !== "object" || Array.isArray(val)) return false;
        let typeRep = typeMap[className];
        return Object.keys(typeRep).every(prop => {
            if (!Object.prototype.hasOwnProperty.call(typeRep, prop)) return true;
            return isValid(typeRep[prop], val[prop]);
        });
    }

    function a(typ: any) {
        return { typ, isArray: true };
    }

    function e(name: string) {
        return { name, isEnum: true };
    }

    function u(...typs: any[]) {
        return { typs, isUnion: true };
    }

    function m(typ: any) {
        return { typ, isMap: true };
    }

    function o(className: string) {
        return { cls: className, isObject: true };
    }

    const typeMap: any = {
        "ICart": {
            attributes: o("Attributes"),
            token: "",
            item_count: 0,
            items: a(o("Item")),
            total_price: 0,
            total_weight: 0,
            note: null,
            location_id: null,
            requires_shipping: false,
        },
        "Attributes": {
        },
        "Item": {
            id: 0,
            title: "",
            price: 0,
            line_price: 0,
            price_original: 0,
            line_price_orginal: 0,
            quantity: 0,
            sku: null,
            grams: 0,
            vendor: "",
            properties: o("Attributes"),
            variant_id: 0,
            product_id: 0,
            gift_card: false,
            url: "",
            image: "",
            handle: "",
            requires_shipping: false,
            not_allow_promotion: false,
            product_title: "",
            barcode: null,
            product_description: "",
            variant_title: "",
            variant_options: a(""),
            promotionref: null,
            promotionby: a(undefined),
        },
    };
}