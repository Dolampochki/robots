import { partsSettings, propsClasses, parentParts } from './consts'

const capitalizeWord = (word) => {
    if (!word || !['string', 'number'].includes(typeof word)) return ''
    word = `${word}`
    if (!word.length ) return ''
    return word[0].toUpperCase() + word.slice(1)
}

function isSameObject(object1, object2) {

    if (typeof object1 !== typeof object2) return false
    if (!object1 && !object2) return true

    // one is array and second not
    if (Array.isArray(object1) && !Array.isArray(object2) || Array.isArray(object2) && !Array.isArray(object1)) return false

    // number/string comparison
    if (typeof object1 === 'number' && typeof object2 === 'number' || typeof object1 === 'string' && typeof object2 === 'string') return object1 === object2

    // array comparison
    if (Array.isArray(object1) && Array.isArray(object2)) {
        return JSON.stringify(object1.sort()) === JSON.stringify(object2.sort())
    }

    // objects deep comparison
    const keys1 = object1 ? Object.keys(object1) : []
    const keys2 = object2 ? Object.keys(object2) : []
    if (keys1.length !== keys2.length) {
        return false
    }

    for (const key of keys1) {
        const val1 = object1[key]
        const val2 = object2[key]
        const areObjects = isObject(val1) && isObject(val2)
        if (
            areObjects && !isSameObject(val1, val2) ||
            !areObjects && val1 !== val2
        ) {
            return false
        }
    }
    return true
}

function isObject(object) {
    return object != null && typeof object === 'object' && !Array.isArray(object)
}

const generateClasses = (part, settings, side) => {
    let classes = `${part} ${side ? side : ''} ${parentParts.includes(part) ? 'parent' : ''}`
    Object.keys(partsSettings[part]).forEach(prop => {
        if (prop in settings) {
            if (typeof settings[prop] === 'string') classes += ` ${settings[prop]}`
            if (typeof settings[prop] === 'boolean' && settings[prop]) classes += ` ${propsClasses[prop]}`
        }
    })
    return classes
}

export {
    capitalizeWord,
    isSameObject,
    generateClasses
}