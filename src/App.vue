<template>
	<div id="app">
		<appbar></appbar>
		<mu-tabs :value="activeTab" @change="handleTabChange">
			<mu-tab value="tab1" title="时下流行" />
			<mu-tab value="tab2" title="歌单" />
			<mu-tab value="tab3" title="排行榜" />
			<mu-tab value="tab3" @active="handleActive" title="热门歌手" />
		</mu-tabs>
	</div>
</template>
<script>
	import appbar from './components/appbar.vue'
	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		components: {
			appbar
		}

	}
</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	
	.mu-tabs {
		background: white;
		color: black;
	}
</style>