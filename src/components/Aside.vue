<template>
	<el-col>
		<el-menu default-active="1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
		 active-text-color="#ffd04b">
			<el-menu-item class="header-bar">只夕 Vue-Admin</el-menu-item>
			<el-menu-item index="1" v-on:click='setRouter(0)'>
				<i class="el-icon-house"></i>
				<span slot="title">主页</span>
			</el-menu-item>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-menu"></i>
					<span>数据管理</span>
				</template>
				<el-menu-item index="2-1" v-on:click='setRouter(1)'>用户信息</el-menu-item>
				<el-menu-item index="2-2" v-on:click='setRouter(2)'>背包内容</el-menu-item>
				<el-menu-item index="2-3" v-on:click='setRouter(3)'>图鉴解锁</el-menu-item>
				<el-menu-item index="2-4" v-on:click='setRouter(4)'>招募列表</el-menu-item>
			</el-submenu>
			<el-menu-item index="3" v-on:click='setRouter(5)'>
				<i class="el-icon-setting"></i>
				<span slot="title">设置</span>
			</el-menu-item>
		</el-menu>
	</el-col>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			setRouter: function(value) {
				console.log(value);
				this.$emit('get-data', value);
			}
		}
	}
</script>

<style>
	.header-bar {
		text-align: center;
		font-size: large;
	}

	.el-aside {
		height: 100vh;
	}
</style>
