<script>
	import { t } from 'i18n';

	const yo = {
		name: 'bib',
		log() {
			console.log(this.name, this.hasOwnProperty('name'));
			this.name = this.name + 'A';
		}
	};

	yo.log();
	yo.log();
	yo.log();
</script>

<h1>{$t('about.title')}</h1>
<p>{@html $t('about.text')}</p>
