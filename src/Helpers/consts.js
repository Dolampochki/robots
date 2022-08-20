const defaultSettings = {
    backgroundColor: 'background-grey',
    borderColor: 'border-no-color',
    roundedTop: false,
    roundedBottom: false,
    borderRadius: false,
    distribute: 'horizontal'
}

const settingsLighter = { backgroundColor: 'background-light-grey' }
const settingsBorderRadius = { borderRadius: true }

const propsClasses = {
    backgroundColor: 'background-color',
    borderColor: 'border-color',
    roundedTop: 'rounded-top',
    roundedBottom: 'rounded-bottom',
    borderRadius: 'border-radius',
    distribute: 'distribute'
}

const colors = ['grey', 'green', 'orange', 'dark-grey', 'light-grey', 'no-color']
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

robotParts.forEach(part => settingsForParts[part] = { props: relevantForAll, defaultSettings: { ...defaultSettings } })

settingsForParts.buttons.props = [...relevantForAll, 'distribute']
settingsForParts.face.props = [...relevantForAll, ...relevantForLarge]
settingsForParts.torso.props = [...relevantForAll, ...relevantForLarge]
settingsForParts.monitor.props = [...relevantForAll, ...relevantForLarge]

settingsForParts.buttons.defaultSettings = { ...defaultSettings, ...settingsLighter, ...settingsBorderRadius }
settingsForParts.eye.defaultSettings = { ...defaultSettings, ...settingsLighter, ...settingsBorderRadius }
settingsForParts.monitor.defaultSettings = { ...defaultSettings, ...settingsLighter }
settingsForParts.mouth.defaultSettings = { ...defaultSettings, ...settingsLighter }
settingsForParts.antenna.defaultSettings = { ...defaultSettings, ...settingsBorderRadius }

export {
    settingsForParts,
    propsClasses,
    settingsOptions,
    colors
}