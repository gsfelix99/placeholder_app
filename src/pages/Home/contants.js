export const DATAFORMAT = [
    {name: "PNG", value: "png"},
    {name: "SVG", value: "svg"},
    {name: "JPG", value: "jpg"},
    {name: "JPEG", value: "jpeg"},
    {name: "WebP", value: "webp"}]

export const DATAFONT = [
    {name: "Lato", value: "lato"},
    {name: "Montserrat", value: "montserrat"},
    {name: "Open Sans", value: "open-sans"},
    {name: "PT Sans", value: "pt-Sans"},
    {name: "Playfair Display", value: "playfair-display"},
    {name: "Raleway", value: "raleway"},
    {name: "Source Sans Pro", value: "source-sans-pro"}
]


export const DEFAULTDIMENSION = 600
export const DEFAULTBACKGROUNDCOLOR = '000000'
export const DEFAULTTEXTCOLOR = 'ffffff'
export const DEFAULTFORMAT = 'png'
export const DEFAULTFONT = 'roboto'
export const DEFAULTTEXT = `${DEFAULTDIMENSION}x${DEFAULTDIMENSION}`
export const DEFAULTIMAGESRC = `https://placehold.co/${DEFAULTDIMENSION}/${DEFAULTBACKGROUNDCOLOR}/${DEFAULTTEXTCOLOR}/${DEFAULTFORMAT}?text=${DEFAULTTEXT}&font=${DEFAULTFONT}`;