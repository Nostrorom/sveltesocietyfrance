<script lang="ts">
	import { t } from '$i18n/index';

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

	// 	class Point {
	//   x: number;
	//   y: number;
	// }

	// const pt = new Point(0,0);
	// pt.x = 0;
	// pt.y = 0;
</script>

<h1>{$t('about.title')}</h1>
<p>{@html $t('about.text')}</p>
