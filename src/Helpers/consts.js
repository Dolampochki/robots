const defaultSettings = {
    backgroundColor: 'default',
    borderColor: 'default',
    roundedTop: false,
    roundedBottom: false,
    borderRadius: false,
    distribute: 'horizontal'
}

const relevantForAll = ['backgroundColor', 'borderColor', 'borderRadius']
const relevantForLarge = ['roundedTop', 'roundedBottom']

const robotParts = ['antennas', 'ears', 'face', 'eyes', 'mouth', 'neck', 'hands', 'torso', 'monitor', 'buttons', 'legs']

const settingsForParts = {}

robotParts.forEach(part => settingsForParts[part] = relevantForAll)

settingsForParts.buttons = [...settingsForParts.buttons, 'distribute']
settingsForParts.face = [...settingsForParts.face, ...relevantForLarge]
settingsForParts.torso = [...settingsForParts.torso, ...relevantForLarge]
export { 
    defaultSettings,
    settingsForParts
}