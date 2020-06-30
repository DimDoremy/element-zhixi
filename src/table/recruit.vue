<template>
	<div>
		<el-table :data="info" border style="width: 100%" v-if="formData == null">
			<el-table-column prop="mission" label="任务编号" align="center" sortable>
			</el-table-column>
			<el-table-column prop="title" label="任务标题" width="auto" align="center" sortable>
			</el-table-column>
			<el-table-column prop="description" label="任务描述" width="auto" align="center" sortable>
			</el-table-column>
			<el-table-column prop="isopen" label="是否开启" width="auto" align="center" sortable>
			</el-table-column>
			<el-table-column prop="isspecial" label="是否特殊" width="auto" align="center" sortable>
			</el-table-column>
			<el-table-column prop="rank" label="任务难度" width="auto" align="center" sortable>
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
	import Form from '../forms/recruitform.vue'
	export default {
		data() {
			return {
				info: null,
				formData: null
			};
		},
		methods: {
			change(value) {
				this.formData = value;
			},
			receive: function(value) {
				this.formData = value;
				this.$axios.get('all_rp')
					.then(resp => (this.info = resp.data))
					.catch(function(error) {
						console.log(error);
					});
			}
		},
		components: {
			Form
		},
		mounted() {
			this.$axios.get('all_rp')
				.then(resp => (this.info = resp.data))
				.catch(function(error) {
					console.log(error);
				});
		}
	}
</script>

<style>
</style>
