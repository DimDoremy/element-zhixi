<template>
	<div>
		<el-table :data="info" border style="width: 100%" v-if="formData == null">
			<el-table-column prop="openid" label="Openid" align="center" sortable>
			</el-table-column>
			<el-table-column prop="monster1" label="怪物1" align="center" sortable>
			</el-table-column>
			<el-table-column prop="monster2" label="怪物2" align="center" sortable>
			</el-table-column>
			<el-table-column prop="monster3" label="怪物3" align="center" sortable>
			</el-table-column>
			<el-table-column prop="monster4" label="怪物4" align="center" sortable>
			</el-table-column>
			<el-table-column prop="monster5" label="怪物5" align="center" sortable>
			</el-table-column>
			<el-table-column prop="monster6" label="怪物6" align="center" sortable>
			</el-table-column>
			<el-table-column prop="monster7" label="怪物7" align="center" sortable>
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
	import Form from '../forms/bookform.vue'
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
				this.$axios.get('allhandbook')
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
			this.$axios.get('allhandbook')
				.then(resp => (this.info = resp.data))
				.catch(function(error) {
					console.log(error);
				});
		}
	}
</script>

<style>
</style>
