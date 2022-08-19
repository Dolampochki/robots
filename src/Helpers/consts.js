const defaultSettings = {
    backgroundColor: 'background-grey',
    borderColor: 'border-no-color',
    roundedTop: false,
    roundedBottom: false,
    borderRadius: false,
    distribute: 'horizontal'
}

const propsClasses = {
    backgroundColor: 'background-color',
    borderColor: 'border-color',
    roundedTop: 'rounded-top',
    roundedBottom: 'rounded-bottom',
    borderRadius: 'border-radius',
    distribute: 'distribute'
}

const colors = ['grey', 'green', 'dark-grey', 'light-grey', 'no-color']
const booleanSelect = [false, true]

const settingsOptions = {
    backgroundColor: colors.map(c => `background-${c}`),
    borderColor: colors.map(c => `border-${c}`),
    roundedTop: booleanSelect,
    roundedBottom: booleanSelect,
    borderRadius: booleanSelect,
    distribute: ['horizontal', 'vertical']
}

const relevantForAll = ['backgroundColor', 'borderColor', 'borderRadius']
const relevantForLarge = ['roundedTop', 'roundedBottom']

const robotParts = ['antenna', 'ear', 'face', 'eye', 'mouth', 'neck', 'hand', 'torso', 'monitor', 'button', 'leg']

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