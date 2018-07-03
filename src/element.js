class Element {
    constructor(name) {
        this.name = name;
        this.attributes = {};
        this.children = [];
    }

    setAttribute(name, value) {
        this.attributes[name] = value;
    }

    append(child) {
        this.children.push(child);
    }

    toString() {
        let attrs = Object.keys(this.attributes)
            .map(name => `${name}="${this.attributes[name]}"`)
            .join(' ');

        if (attrs) {
            attrs = ` ${attrs}`;
        }

        let content = this.children.map(child => `  ${child.toString()}`).join("\n");

        if (content) {
            content = `\n${content}\n`;
        }

        return `<${this.name}${attrs}>${content}</${this.name}>`;
    }
}

module.exports = Element;