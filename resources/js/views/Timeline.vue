<template>
	<v-app>
		<v-container>
			<v-timeline :dense="$vuetify.breakpoint.smAndDown">
				<v-timeline-item v-for="(item, i) in items" :key="i">
					<template v-slot:opposite>
						<span
							class="headline font-weight-bold green--text text--darken-2 text-uppercase"
						>{{ item.oppositeText }}</span>
					</template>

					<v-hover v-slot:default="{ hover }" open-delay="100">
						<v-card :elevation="hover ? 18 : 4">
							<v-card-title class="primary">
								<h2 class="display-1 white--text font-weight-light">{{ item.heading }}</h2>
							</v-card-title>
							<v-container>
								<v-row>
									<v-col cols="12" md="10" v-text="item.text"></v-col>
									<v-col class="hidden-sm-and-down text-right" md="2">
										<v-icon size="52" v-text="item.icon"></v-icon>
									</v-col>
								</v-row>
							</v-container>
						</v-card>
					</v-hover>
				</v-timeline-item>
			</v-timeline>
		</v-container>
	</v-app>
</template>

<script>
export default {
	name: 'TimeLine',

	data: () => ({
		items: [
			{
				oppositeText: 'Srpanj',
				heading: 'Upisi',
				text:
          'Studenti sa svojom dokumentacijom dolaze na prostorije FPMOZ-a i upisuju se u željeni smjer.',
				icon: 'mdi-calendar',
			},
			{
				oppositeText: 'Kolovoz',
				heading: 'Razredbeni ispit',
				text:
          'Studenti dolaze u prostorije fakulteta, gdje rješavaju razredbeni ispit.',
				icon: 'mdi-ab-testing',
			},
			{
				oppositeText: 'Listopad',
				heading: 'Prvi dan',
				text:
          'Studenti dolaze u prostorije FPMOZ-a gdje se upoznaju sa voditeljima studija i razgovaraju o planu i programu koji se provodi na studiju.',
				icon: 'mdi-school',
			},
			{
				oppositeText: 'VELJAČA',
				heading: 'Zimski ispitni rokovi',
				text:
          'Studenti polažu prve ispitne rokove u studijskoj godini.',
				icon: 'mdi-lead-pencil',
			},
			{
				oppositeText: 'TRAVANJ',
				heading: 'Udruga SWITCH natjecanje',
				text:
          'Svi mogu dobrovoljno pristupiti natjecanju iz brojnih aktivnosti koje se uče tijekom studija. Imaju mogućnost i dobiti vrijedne nagrade.',
				icon: 'mdi-xml',
			},
			{
				oppositeText: 'Lipanj',
				heading: 'Ljetni ispitni rokovi',
				text:
          'Studenti polažu završne ispitne rokove.',
				icon: 'mdi-lead-pencil',
			},
		],
	}),
};
// ./node_modules/.bin/vue-cli-service lint --fix
</script>

<style>
  #app .v-card__title {
    word-break: normal;
  }
</style>
