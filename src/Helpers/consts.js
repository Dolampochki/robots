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
    partsSettings[part] = { props: allPartsProps, defaultSettings: { ...defaultSettings } }
    if (largeParts.includes(part)) partsSettings[part].props = [...partsSettings[part].props, ...largePartsProps]
    if (distributeParts.includes(part)) partsSettings[part].props = [...partsSettings[part].props, 'distribute']
    if (borderRadiusParts.includes(part)) partsSettings[part].defaultSettings = { ...partsSettings[part].defaultSettings, ...borderRadius }
    if (backgroundColorLightParts.includes(part)) partsSettings[part].defaultSettings = { ...partsSettings[part].defaultSettings, ...backgroundColorLight }
})

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

const propsClasses = {
    backgroundColor: 'background-color',
    borderColor: 'border-color',
    roundedTop: 'rounded-top',
    roundedBottom: 'rounded-bottom',
    borderRadius: 'border-radius',
    distribute: 'distribute'
}

export {
    partsSettings,
    propsClasses,
    settingsOptions,
    colors
}