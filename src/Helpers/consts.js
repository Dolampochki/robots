

const colors = ['grey', 'green', 'orange', 'dark-grey', 'light-grey', 'no-color']
const booleans = [false, true]

const settingsOptions = {
    backgroundColor: colors.map(c => `background-${c}`),
    borderColor: colors.map(c => `border-${c}`),
    roundedTop: booleans,
    roundedBottom: booleans,
    borderRadius: booleans,
    distribute: ['horizontal', 'vertical']
}

const defaultSettings = {
    backgroundColor: 'background-grey',
    borderColor: 'border-no-color',
    roundedTop: false,
    roundedBottom: false,
    borderRadius: false,
    distribute: 'horizontal'
}

const backgroundColorLight = { backgroundColor: 'background-light-grey' }
const borderRadius = { borderRadius: true }

const allPartsProps = ['backgroundColor', 'borderColor', 'borderRadius']
const largePartsProps = ['roundedTop', 'roundedBottom']

const parts = ['antenna', 'ear', 'face', 'eye', 'mouth', 'neck', 'hand', 'torso', 'monitor', 'buttons', 'leg']

const largeParts = ['face', 'torso', 'monitor']
const distributeParts = ['buttons']
const borderRadiusParts = ['antenna', 'eye', 'buttons']
const backgroundColorLightParts = ['eye', 'mouth', 'monitor', 'buttons']

const partsSettings = {}

parts.forEach(part => {
    let props = allPartsProps
    if (largeParts.includes(part)) props = [...props, ...largePartsProps]
    if (distributeParts.includes(part)) props = [...props, 'distribute']

    let settings = { ...defaultSettings }
    if (borderRadiusParts.includes(part)) settings = { ...settings, ...borderRadius }
    if (backgroundColorLightParts.includes(part)) settings = { ...settings, ...backgroundColorLight }

    partsSettings[part] = {}
    props.forEach(prop => partsSettings[part][prop] = settings[prop])
})

const propsClasses = {
    backgroundColor: 'background-color',
    borderColor: 'border-color',
    roundedTop: 'rounded-top',
    roundedBottom: 'rounded-bottom',
    borderRadius: 'border-radius',
    distribute: 'distribute'
}

const parentParts = ['hand', 'leg', 'buttons']

export {
    partsSettings,
    propsClasses,
    settingsOptions,
    colors,
    parentParts
}