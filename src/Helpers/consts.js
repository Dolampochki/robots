const defaultSettings = {
    backgroundColor: 'grey',
    borderColor: 'grey',
    roundedTop: false,
    roundedBottom: false,
    borderRadius: false,
    distribute: 'horizontal'
}

const propsClasses = {
    roundedTop: 'rounded-top',
    roundedBottom: 'rounded-bottom',
    borderRadius: 'border-radius'
}

const colors = ['grey', 'green', 'dark-grey', 'light-grey', 'no-color']
const booleanSelect = [false, true]

const settingsOptions = {
    backgroundColor: colors,
    borderColor: colors,
    roundedTop: booleanSelect,
    roundedBottom: booleanSelect,
    borderRadius: booleanSelect,
    distribute: ['horizontal', 'vertical']
}

const relevantForAll = ['backgroundColor', 'borderColor', 'borderRadius']
const relevantForLarge = ['roundedTop', 'roundedBottom']

const robotParts = ['antennas', 'ear', 'face', 'eye', 'mouth', 'neck', 'hand', 'torso', 'monitor', 'button', 'leg']

const settingsForParts = {}

robotParts.forEach(part => settingsForParts[part] = relevantForAll)

settingsForParts.button = [...settingsForParts.button, 'distribute']
settingsForParts.face = [...settingsForParts.face, ...relevantForLarge]
settingsForParts.torso = [...settingsForParts.torso, ...relevantForLarge]

export { 
    defaultSettings,
    settingsForParts,
    propsClasses,
    settingsOptions
}