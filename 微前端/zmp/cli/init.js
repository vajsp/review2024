const axios = require('axios');

class Init {
    templates = {};

    async checkTemplate(url) {
        const { data } = await axios.get(url);
        return data;
    }

    async selectTemplate(templates) {
        console.log(templates);
    }

    async setup(options) {
        if (typeof options.template === 'string') {
            const templates = await this.checkTemplate;
            if (templates) {
                this.templates = templates;
            }
        }

        await this.selectTemplate(this.templates);
    }
}

module.exports = new Init();
