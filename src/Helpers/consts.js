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

const propsClasses = {
    backgroundColor: 'background-color',
    borderColor: 'border-color',
    roundedTop: 'rounded-top',
    roundedBottom: 'rounded-bottom',
    borderRadius: 'border-radius',
    distribute: 'distribute'
}

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

const allPartsProps = ['backgroundColor', 'borderColor', 'borderRadius']
const largePartsProps = ['roundedTop', 'roundedBottom']

const parts = ['antenna', 'ear', 'face', 'eye', 'mouth', 'neck', 'hand', 'torso', 'monitor', 'buttons', 'leg']

const partsSettings = {}

parts.forEach(part => partsSettings[part] = { props: allPartsProps, defaultSettings: { ...defaultSettings } })

const allLargePartsProps = [...allPartsProps, ...largePartsProps]
partsSettings.face.props = allLargePartsProps
partsSettings.torso.props = allLargePartsProps
partsSettings.monitor.props = allLargePartsProps
partsSettings.buttons.props = [...allPartsProps, 'distribute']

const lightSettings = { ...defaultSettings, ...backgroundColorLight }
const lightRoundedSettings = { ...lightSettings, ...borderRadius }
partsSettings.buttons.defaultSettings = lightRoundedSettings
partsSettings.eye.defaultSettings = lightRoundedSettings
partsSettings.monitor.defaultSettings = lightSettings
partsSettings.mouth.defaultSettings = lightSettings
partsSettings.antenna.defaultSettings = { ...defaultSettings, ...borderRadius }

export {
    partsSettings,
    propsClasses,
    settingsOptions,
    colors
}