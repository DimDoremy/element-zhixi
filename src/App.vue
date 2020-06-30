<template>
	<div>
		<Index v-if="admin != null" :admin=admin />
		<Login v-if="admin == null" @get-data="receive" />
	</div>
</template>

<script>
	import Index from './components/Index.vue'
	import Login from './components/login.vue'
	export default {
		name: "app",
		data() {
			return {
				admin: null
			};
		},
		components: {
			Index,
			Login
		},
		methods: {
			receive: function(value) {
				this.admin = value.data;
				console.log(value.data);
			}
		},
		mounted() {
			this.$axios.get('alluserpiece')
				.then(resp => (this.info = resp.data))
				.catch(function(error) {
					console.log(error);
				});
		},
	}
</script>

<style>
	html,
	body,
	#app,
	.el-container {
		/*设置内部填充为0，几个布局元素之间没有间距*/
		padding: 0px;
		/*外部间距也是如此设置*/
		margin: 0px;
		/*统一设置高度为100%*/
		height: 100%;
	}
	.el-table th {
		background: #B3C0D1;
	}

	.el-table tr {
		background: #c5deef;
	}

	.el-table--striped .el-table__body tr.el-table__row--striped td {
		background: #1f2;
	}

	.el-table td,
	.building-top .el-table th.is-leaf {
		border-bottom: 1px solid #88f2ff;
	}

	.el-table::before {
		border-bottom: 1px solid #f00;
		height: 2px
	}

	.el-table thead {
		color: #000000;
		font-weight: 16rpx;
	}

	.el-table {
		color: #000000;
		font-size: 14rpx;
	}

	.el-table__empty-block {
		background: #16203C;
	}

	.el-table__empty-text {
		color: #ccc
	}

	.el-table--enable-row-hover .el-table__body tr:hover>td {
		background-color: #96ff68;
	}
</style>
