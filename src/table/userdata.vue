<template>
	<div>
		<el-table :data="info" border style="width: 100%" v-if="formData == null">
			<el-table-column prop="openid" label="Openid" align="center" sortable>
			</el-table-column>
			<el-table-column prop="nickname" label="用户昵称" align="center" sortable>
			</el-table-column>
			<el-table-column prop="avatarurl" label="用户头像" align="center">
				<template scope="scope">
					<el-avatar :src="scope.row.avatarurl"></el-avatar>
				</template>
			</el-table-column>
			<el-table-column prop="time" label="使用时间" align="center" sortable>
			</el-table-column>
			<el-table-column prop="soul" label="金币总数" align="center" sortable>
			</el-table-column>
			<el-table-column prop="lifepoint" label="剩余生命" align="center" sortable>
			</el-table-column>
			<el-table-column prop="experience" label="现有经验" align="center" sortable>
			</el-table-column>
			<el-table-column align="center">
				<template scope="scope">
					<el-button v-on:click="change(scope.row)" type="primary">修改</el-button>
				</template>
			</el-table-column>
		</el-table>
		<Form @get-data="receive" :formData=formData v-if="formData != null" />
	</div>
</template>

<script>
	import Form from '../forms/userform.vue'
	export default {
		data() {
			return {
				info: null,
				formData: null
			};
		},
		components: {
			Form
		},
		methods: {
			change(value) {
				this.formData = value;
			},
			receive: function(value) {
				this.formData = value;
				this.$axios.get('alluserdata')
					.then(resp => (this.info = resp.data))
					.catch(function(error) {
						console.log(error);
					});
			}
		},
		mounted() {
			this.$axios.get('alluserdata')
				.then(resp => (this.info = resp.data))
				.catch(function(error) {
					console.log(error);
				});
		}
	}
</script>

<style>
</style>
