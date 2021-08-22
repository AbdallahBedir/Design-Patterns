class Settings {
    constructor() {
        if(Settings.instance instanceof Settings){
            return Settings.instance;
        }

        this.settingsObject = {
            'background': '#ff0000',
            'version': '1'
        }

        Object.freeze(this.settingsObject);
        Object.freeze(this);
        Settings.instance = this; 
    }

    get(key){
        return this.settingsObject[key]
    }
}

const s1 = new Settings();
const s2 = new Settings();

console.log(`s1 background`,s1.get('background'))
console.log(`s2 background`,s2.get('background'))

console.log(`s1 === s2`,s1 === s2);