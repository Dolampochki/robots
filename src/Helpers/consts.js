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

const robotParts = ['antenna', 'ear', 'face', 'eye', 'mouth', 'neck', 'hand', 'torso', 'monitor', 'buttons', 'leg']

const settingsForParts = {}

robotParts.forEach(part => settingsForParts[part] = relevantForAll)

settingsForParts.buttons = [...settingsForParts.buttons, 'distribute']
settingsForParts.face = [...settingsForParts.face, ...relevantForLarge]
settingsForParts.torso = [...settingsForParts.torso, ...relevantForLarge]
settingsForParts.monitor = [...settingsForParts.monitor, ...relevantForLarge]

export { 
    defaultSettings,
    settingsForParts,
    propsClasses,
    settingsOptions
}