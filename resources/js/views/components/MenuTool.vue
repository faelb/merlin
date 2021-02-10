<template>
    <v-container>
        <v-row>
            <v-col :cols="12">
                <v-card
                    class="mx-auto"
                    max-width="800">
                    <v-img
                        class="white--text align-end"
                        height="200px"
                        src='https://wallpaperaccess.com/full/1549288.jpg'
                    >
                        <v-card-title>The Tool</v-card-title>
                    </v-img>
                    <v-container>
                        <v-row>
                            <v-col cols="6" sm="6" class="d-flex">
                                <v-select
                                    color="orange"
                                    :items="businessCases"
                                    label="Business Case"
                                    @change="selectComponent"
                                    v-model="selectedBC"></v-select>
                            </v-col>
                            <v-col cols="6" v-if="selectedBC !== 'productchange'"></v-col>

                            <v-col v-if="selectedBC === 'productchange'" cols="6" sm="6" class="d-flex">
                                <v-select
                                    color="orange"
                                    :items="businessCaseDetailes"
                                    label="Detailed"
                                    v-model="selectedDet"></v-select>
                            </v-col>

                            <v-col cols="3" v-if="selectedDet === 'Downgrade, gebunden non Twinni im Halteversuchfall'">
                                <v-form>
                                    <v-text-field
                                        label="irgend"
                                        outlined/>
                                </v-form>
                            </v-col>

                                <v-col cols="3"
                                       v-if="selectedDet === 'Downgrade, gebunden non Twinni im Halteversuchfall'">
                                    <v-form>
                                        <v-text-field
                                            label="eine"
                                            outlined
                                        />
                                    </v-form>
                                </v-col>

                                <v-col cols="3"
                                       v-if="selectedDet === 'Downgrade, gebunden non Twinni im Halteversuchfall'">
                                    <v-form>
                                        <v-text-field
                                            label="option"
                                            outlined
                                        />
                                    </v-form>
                                </v-col>

                            <v-col cols="3" v-if="selectedDet === 'Downgrade, gebunden non Twinni im Halteversuchfall'"></v-col>


                            <v-col cols="3" v-if="selectedDet === 'Optionswechsel einer gebundenen Option auf andere Option in selber Wechselkategorie'">
                                <v-form>
                                    <v-text-field
                                        label="irgend"
                                        outlined/>
                                </v-form>
                            </v-col>

                            <v-col cols="3"
                                   v-if="selectedDet === 'Optionswechsel einer gebundenen Option auf andere Option in selber Wechselkategorie'">

                                    <v-checkbox
                                        label="Option X"
                                        color="pink lighten-2"
                                    ></v-checkbox>

                            </v-col>

                            <v-col cols="3"
                                   v-if="selectedDet === 'Optionswechsel einer gebundenen Option auf andere Option in selber Wechselkategorie'">

                                    <v-checkbox
                                        label="Option Y"
                                        color="pink lighten-2"
                                    ></v-checkbox>
                            </v-col>
                            <v-col cols="12"
                                   v-if="selectedDet === 'Optionswechsel einer gebundenen Option auf andere Option in selber Wechselkategorie'">

                                <v-form>
                                    <v-text-field
                                        label="Stringvariable"
                                        outlined/>
                                </v-form>
                            </v-col>






                                <v-col cols="3">
                                    <v-form>
                                        <v-text-field
                                            label="Anzahl"
                                            outlined
                                        />
                                    </v-form>
                                </v-col>

                                <v-col cols="3">
                                    <v-checkbox
                                        label="Recurring"
                                        color="pink lighten-2"
                                    >
                                    </v-checkbox>
                                </v-col>
                        </v-row>
                    </v-container>
                    <v-card-actions>
                        <v-btn color="pink lighten-2"
                               text>Request
                        </v-btn>
                        <v-btn color="pink lighten-2"
                               text
                        @click="selectedDet=''; selectedBC=''">Reset
                        </v-btn>
                        <v-btn color="orange"
                               text>Cancel
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "MenuTool",
    data: () => ({
        businessCases: ['productchange', 'prepaid', 'contract extension'],
        selectedBC: "",
        selectedDet: "",
        businessCaseDetailes: ['Downgrade, gebunden non Twinni im Halteversuchfall', 'Optionswechsel einer gebundenen Option auf andere Option in selber Wechselkategorie', 'Optionsabmeldung einer gebundenen Option im Korrekturfall mit Wegklicken der Gebühr']
    }),
    methods: {
        selectComponent() {

        }
    }
}
</script>

<style scoped>
.v-input--selection-controls {
    margin-bottom: 20px
}
</style>
