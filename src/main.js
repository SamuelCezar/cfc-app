import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import InputNumber from 'primevue/inputnumber';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css'

const app = createApp(App);

app.use(PrimeVue);
// eslint-disable-next-line
app.component("Button", Button);
app.component("InputText", InputText);
app.component("InputNumber", InputNumber);


app.mount('#app');
