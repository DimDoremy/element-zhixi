<template>
	<div>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>管理面板信息</span>
			</div>
			<el-collapse v-model="activeNames">
				<el-collapse-item title="面板版本" name="0">
					<div>1.0.0-beta</div>
				</el-collapse-item>
				<el-collapse-item title="面板开发环境" name="1">
					<div>前端：Vue + Element</div>
					<div>后端：Golang + MySQL + Nginx</div>
				</el-collapse-item>
				<el-collapse-item title="开发者Blog" name="2">
					<el-link href='https://dimdoremy.github.io/'>DimDoremy的Blog</el-link>
				</el-collapse-item>
				<el-collapse-item title="开源协议" name="4">
					<el-link href='https://opensource.org/licenses/mit/'>The MIT license</el-link>
				</el-collapse-item>
				<el-collapse-item title="项目地址" name="5">
					<el-link href='https://opensource.org/licenses/mit/'>Github</el-link>
				</el-collapse-item>
			</el-collapse>
		</el-card>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeNames: []
			};
		},
		methods: {}
	}
</script>

<style>
	.text {
		font-size: 14px;
	}

	.item {
		margin-bottom: 18px;
	}

	.el-card__header {
		text-align: center;
		font-weight: 700;
		font-size: 18px;
		padding: 18px 20px;
		border-bottom: 1px solid #000000;
		border-width: medium;
		box-sizing: border-box;
	}

	.clearfix:before,
	.clearfix:after {
		border-color: #000000;
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}

	.box-card {
		border-color: #000000;
		border-width: medium;
	}
</style>
