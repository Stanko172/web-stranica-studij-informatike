import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify)

const opts = {
  theme: {
		themes: {
			light: {
				primary: colors.indigo.darken2, // #E53935
				secondary: colors.green.darken1, // #FFCDD2
				accent: colors.indigo.base,
			},
		},
	},
}

export default new Vuetify(opts);
